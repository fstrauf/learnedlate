import 'dotenv/config'
import { db, roasters, coffees, coffeeChanges, type NewCoffee, type NewCoffeeChange } from '../db'
import { eq } from 'drizzle-orm'

interface ShopifyProduct {
  id: number
  title: string
  handle: string
  body_html?: string
  vendor?: string
  product_type?: string
  created_at: string
  updated_at: string
  published_at?: string
  template_suffix?: string
  status: string
  published_scope?: string
  tags?: string
  variants: ShopifyVariant[]
  options?: ShopifyOption[]
  images?: ShopifyImage[]
  image?: ShopifyImage
}

interface ShopifyVariant {
  id: number
  product_id: number
  title: string
  price: string
  sku?: string
  position: number
  inventory_policy: string
  compare_at_price?: string
  fulfillment_service: string
  inventory_management?: string
  option1?: string
  option2?: string
  option3?: string
  created_at: string
  updated_at: string
  taxable: boolean
  barcode?: string
  grams: number
  image_id?: number
  weight: number
  weight_unit: string
  inventory_item_id?: number
  inventory_quantity: number
  old_inventory_quantity: number
  available: boolean
  requires_shipping: boolean
}

interface ShopifyOption {
  id: number
  product_id: number
  name: string
  position: number
  values: string[]
}

interface ShopifyImage {
  id: number
  product_id: number
  position: number
  created_at: string
  updated_at: string
  alt?: string
  width: number
  height: number
  src: string
  variant_ids: number[]
}

interface ShopifyProductsResponse {
  products: ShopifyProduct[]
}

export class CoffeeScraper {
  private static async fetchWithRetry(url: string, maxRetries = 3): Promise<any> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`Attempting to fetch ${url} (attempt ${attempt}/${maxRetries})`)
        
        const response = await fetch(url, {
          headers: {
            'User-Agent': 'NZ Coffee Hub Bot/1.0'
          }
        })

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        return await response.json()
      } catch (error) {
        console.error(`Attempt ${attempt} failed for ${url}:`, error)
        
        if (attempt === maxRetries) {
          throw error
        }
        
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
      }
    }
  }

  static async scrapeRoaster(roasterId: number): Promise<number> {
    try {
      // Get roaster details
      const roaster = await db
        .select()
        .from(roasters)
        .where(eq(roasters.id, roasterId))
        .limit(1)

      if (roaster.length === 0) {
        throw new Error(`Roaster with ID ${roasterId} not found`)
      }

      const roasterData = roaster[0]
      console.log(`Scraping products for ${roasterData.name}...`)

      // Fetch products from Shopify API
      const data: ShopifyProductsResponse = await this.fetchWithRetry(roasterData.productsJsonUrl)
      
      if (!data.products || !Array.isArray(data.products)) {
        console.log(`No products found for ${roasterData.name}`)
        return 0
      }

      // Get existing coffees for this roaster to compare changes
      const existingCoffees = await db
        .select()
        .from(coffees)
        .where(eq(coffees.roasterId, roasterId))

      const existingCoffeesMap = new Map(
        existingCoffees.map(coffee => [coffee.externalId, coffee])
      )

      let addedCount = 0
      let updatedCount = 0
      const processedExternalIds = new Set<string>()

      for (const product of data.products) {
        // Skip non-coffee products
        if (!this.isCoffeeProduct(product)) {
          continue
        }

        try {
          const coffeeData = await this.parseShopifyProduct(product, roasterId)
          
          if (coffeeData && coffeeData.externalId) {
            processedExternalIds.add(coffeeData.externalId)
            const existingCoffee = existingCoffeesMap.get(coffeeData.externalId)

            if (existingCoffee) {
              // Check for changes and update
              const changes = await this.detectAndTrackChanges(existingCoffee, coffeeData, roasterId)
              if (changes.length > 0) {
                await db.update(coffees)
                  .set(coffeeData)
                  .where(eq(coffees.id, existingCoffee.id))
                updatedCount++
                console.log(`Updated coffee: ${coffeeData.name} (${changes.length} changes)`)
              }
            } else {
              // New coffee - insert and track creation
              const [insertedCoffee] = await db.insert(coffees).values(coffeeData).returning()
              await this.trackCoffeeCreation(insertedCoffee, roasterId)
              addedCount++
              console.log(`Added coffee: ${coffeeData.name}`)
            }
          }
        } catch (error) {
          console.error(`Error processing product ${product.title}:`, error)
        }
      }

      // Track deletions (coffees that existed but weren't in the scraped data)
      const deletedCoffees = existingCoffees.filter(
        coffee => coffee.externalId && !processedExternalIds.has(coffee.externalId)
      )

      for (const deletedCoffee of deletedCoffees) {
        await this.trackCoffeeDeletion(deletedCoffee, roasterId)
        await db.delete(coffees).where(eq(coffees.id, deletedCoffee.id))
        console.log(`Deleted coffee: ${deletedCoffee.name}`)
      }

      console.log(`Successfully processed ${addedCount} new, ${updatedCount} updated, ${deletedCoffees.length} deleted coffees for ${roasterData.name}`)
      return addedCount

    } catch (error) {
      console.error(`Error scraping roaster ${roasterId}:`, error)
      throw error
    }
  }

  static async scrapeAllRoasters(): Promise<void> {
    try {
      console.log('Starting coffee scraping for all roasters...')
      
      const activeRoasters = await db
        .select()
        .from(roasters)
        .where(eq(roasters.isActive, true))

      let totalCoffees = 0

      for (const roaster of activeRoasters) {
        try {
          const count = await this.scrapeRoaster(roaster.id)
          totalCoffees += count
          
          // Small delay between roasters to be polite
          await new Promise(resolve => setTimeout(resolve, 1000))
        } catch (error) {
          console.error(`Failed to scrape ${roaster.name}:`, error)
        }
      }

      console.log(`\nScraping complete! Added ${totalCoffees} total coffees.`)
    } catch (error) {
      console.error('Error in scrapeAllRoasters:', error)
      throw error
    }
  }

  private static isCoffeeProduct(product: ShopifyProduct): boolean {
    const title = product.title.toLowerCase()
    // Handle tags as either string or array
    const tags = Array.isArray(product.tags) 
      ? product.tags.join(' ').toLowerCase() 
      : (product.tags || '').toLowerCase()
    const productType = product.product_type?.toLowerCase() || ''
    
    // Keywords that indicate it's a coffee product
    const coffeeKeywords = ['coffee', 'bean', 'roast', 'blend', 'single origin', 'espresso']
    
    // Keywords that indicate it's NOT a coffee product
    const excludeKeywords = ['equipment', 'grinder', 'cup', 'mug', 'merchandise', 'subscription', 'gift card', 'office-product']
    
    const hasExcludeKeyword = excludeKeywords.some(keyword => 
      title.includes(keyword) || tags.includes(keyword) || productType.includes(keyword)
    )
    
    if (hasExcludeKeyword) {
      return false
    }
    
    const hasCoffeeKeyword = coffeeKeywords.some(keyword => 
      title.includes(keyword) || tags.includes(keyword) || productType.includes(keyword)
    )
    
    return hasCoffeeKeyword
  }

  private static async parseShopifyProduct(product: ShopifyProduct, roasterId: number): Promise<NewCoffee | null> {
    try {
      // Extract coffee information from title and description
      const name = this.cleanProductName(product.title)
      const description = this.stripHtml(product.body_html || '')
      
      // Extract tasting notes from description and tags
      const tagsString = Array.isArray(product.tags) 
        ? product.tags.join(' ') 
        : (product.tags || '')
      const tastingNotes = this.extractTastingNotes(description, tagsString)
      
      // Extract origin information
      const origin = this.extractOrigin(name, description, tagsString)
      
      // Extract roast information
      const roastType = this.extractRoastType(name, description, tagsString)
      const roastLevel = this.extractRoastLevel(name, description, tagsString)
      
      // Extract processing method
      const processingMethod = this.extractProcessingMethod(description, tagsString)
      
      // Get prices from variants
      const prices = this.extractPrices(product.variants)
      
      // Get main image
      const imageUrl = product.image?.src || product.images?.[0]?.src

      // Get roaster details to construct proper product URL
      const roaster = await db
        .select()
        .from(roasters)
        .where(eq(roasters.id, roasterId))
        .limit(1)
      
      const roasterData = roaster[0]
      const productUrl = roasterData ? `${roasterData.websiteUrl}/products/${product.handle}` : null

      const coffeeData: NewCoffee = {
        roasterId,
        externalId: product.id.toString(),
        handle: product.handle,
        name,
        description: description.substring(0, 1000), // Limit description length
        origin,
        roastLevel,
        roastType,
        processingMethod,
        productType: product.product_type || null,
        tastingNotes,
        price250g: prices.price250g,
        price500g: prices.price500g,
        price1kg: prices.price1kg,
        imageUrl,
        productUrl,
        inStock: product.variants.some(v => v.available),
        createdAt: new Date(product.created_at),
        updatedAt: new Date(product.updated_at)
      }

      return coffeeData
    } catch (error) {
      console.error('Error parsing Shopify product:', error)
      return null
    }
  }

  private static cleanProductName(title: string): string {
    // Remove common suffixes and prefixes
    return title
      .replace(/\s*-\s*Coffee\s*$/i, '')
      .replace(/^\s*Coffee\s*-\s*/i, '')
      .trim()
  }

  private static stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim()
  }

  private static extractTastingNotes(description: string, tags: string): string[] {
    const notes: string[] = []
    const text = `${description} ${tags}`.toLowerCase()
    
    const tastingKeywords = [
      'chocolate', 'vanilla', 'caramel', 'nutty', 'fruity', 'floral', 'citrus',
      'berry', 'wine', 'honey', 'spicy', 'earthy', 'woody', 'smoky', 'sweet',
      'acidic', 'bright', 'clean', 'smooth', 'bold', 'rich', 'complex'
    ]
    
    tastingKeywords.forEach(keyword => {
      if (text.includes(keyword)) {
        notes.push(keyword)
      }
    })
    
    return [...new Set(notes)] // Remove duplicates
  }

  private static extractOrigin(name: string, description: string, tags: string): string | null {
    const text = `${name} ${description} ${tags}`.toLowerCase()
    
    const origins = [
      'ethiopia', 'colombia', 'brazil', 'guatemala', 'costa rica', 'kenya',
      'yemen', 'jamaica', 'hawaii', 'peru', 'bolivia', 'ecuador', 'panama',
      'nicaragua', 'honduras', 'el salvador', 'mexico', 'rwanda', 'burundi',
      'tanzania', 'uganda', 'malawi', 'zimbabwe', 'india', 'indonesia',
      'vietnam', 'papua new guinea', 'east timor'
    ]
    
    for (const origin of origins) {
      if (text.includes(origin)) {
        return origin.charAt(0).toUpperCase() + origin.slice(1)
      }
    }
    
    return null
  }

  private static extractRoastType(name: string, description: string, tags: string): string | null {
    const text = `${name} ${description} ${tags}`.toLowerCase()
    
    if (text.includes('espresso')) return 'Espresso'
    if (text.includes('filter')) return 'Filter'
    if (text.includes('omni')) return 'Omni'
    
    return null
  }

  private static extractRoastLevel(name: string, description: string, tags: string): string | null {
    const text = `${name} ${description} ${tags}`.toLowerCase()
    
    if (text.includes('light')) return 'Light'
    if (text.includes('medium')) return 'Medium'
    if (text.includes('dark')) return 'Dark'
    
    return null
  }

  private static extractProcessingMethod(description: string, tags: string): string | null {
    const text = `${description} ${tags}`.toLowerCase()
    
    if (text.includes('washed')) return 'Washed'
    if (text.includes('natural')) return 'Natural'
    if (text.includes('honey')) return 'Honey'
    if (text.includes('semi-washed')) return 'Semi-washed'
    
    return null
  }

  private static extractPrices(variants: ShopifyVariant[]): { price250g: string | null, price500g: string | null, price1kg: string | null } {
    const prices = {
      price250g: null as string | null,
      price500g: null as string | null,
      price1kg: null as string | null
    }
    
    // Weight keywords for extraction - prioritized over grams field
    const weightKeywords = {
      '250g': ['250g', '250 g', '250'],
      '500g': ['500g', '500 g', '500'],
      '1kg': ['1kg', '1 kg', '1000g', '1000 g', '1000']
    }
    
    variants.forEach(variant => {
      const title = variant.title.toLowerCase()
      const option1 = variant.option1?.toLowerCase() || ''
      const option2 = variant.option2?.toLowerCase() || ''
      const option3 = variant.option3?.toLowerCase() || ''
      const weight = variant.grams
      
      // Only extract prices from coffee bean variants (not ground coffee or other options)
      const beanKeywords = ['whole bean', 'whole beans', 'bean', 'beans','whole']
      const hasBeanKeyword = beanKeywords.some(keyword => 
        title.includes(keyword) || option2.includes(keyword)
      )
      
      if (!hasBeanKeyword) {
        return
      }
      
      // PRIORITY 1: Check all option fields and title for weight keywords first
      const allText = `${title} ${option1} ${option2} ${option3}`.toLowerCase()
      let weightFromKeywords: string | null = null
      
      // Check for weight keywords
      if (weightKeywords['250g'].some(keyword => allText.includes(keyword))) {
        weightFromKeywords = '250g'
        prices.price250g = variant.price
      } else if (weightKeywords['500g'].some(keyword => allText.includes(keyword))) {
        weightFromKeywords = '500g'
        prices.price500g = variant.price
      } else if (weightKeywords['1kg'].some(keyword => allText.includes(keyword))) {
        weightFromKeywords = '1kg'
        prices.price1kg = variant.price
      }
      
      // PRIORITY 2: Fallback to grams field only if no keywords found
      if (!weightFromKeywords) {
        if (weight >= 240 && weight <= 260) {
          prices.price250g = variant.price
        } else if (weight >= 480 && weight <= 520) {
          prices.price500g = variant.price
        } else if (weight >= 980 && weight <= 1020) {
          prices.price1kg = variant.price
        }
      }
      
      // Log discrepancies for debugging
      if (weightFromKeywords) {
        const expectedGrams = weightFromKeywords === '250g' ? 250 : 
                             weightFromKeywords === '500g' ? 500 : 1000
        if (weight > 0 && Math.abs(weight - expectedGrams) > 50) {
          console.log(`Weight mismatch for "${variant.title}": keywords suggest ${weightFromKeywords} but grams=${weight}`)
        }
      }
    })
    
    return prices
  }

  private static async detectAndTrackChanges(
    existingCoffee: any, 
    newCoffeeData: NewCoffee, 
    roasterId: number
  ): Promise<NewCoffeeChange[]> {
    const changes: NewCoffeeChange[] = []
    
    // Fields to monitor for changes (excluding timestamps and id)
    const fieldsToCheck = [
      'name', 'description', 'origin', 'roastLevel', 'roastType', 'processingMethod',
      'price250g', 'price500g', 'price1kg', 'inStock', 'imageUrl', 'productUrl'
    ]

    for (const field of fieldsToCheck) {
      const oldValue = existingCoffee[field]
      const newValue = newCoffeeData[field as keyof NewCoffee]
      
      // Convert to string for comparison (handles null/undefined)
      const oldStr = oldValue?.toString() || ''
      const newStr = newValue?.toString() || ''
      
      if (oldStr !== newStr) {
        const change: NewCoffeeChange = {
          coffeeId: existingCoffee.id,
          roasterId,
          externalId: existingCoffee.externalId,
          fieldName: field,
          oldValue: oldStr,
          newValue: newStr,
          changeType: 'updated'
        }
        changes.push(change)
      }
    }

    // Insert all changes at once
    if (changes.length > 0) {
      await db.insert(coffeeChanges).values(changes)
    }

    return changes
  }

  private static async trackCoffeeCreation(coffee: any, roasterId: number): Promise<void> {
    const change: NewCoffeeChange = {
      coffeeId: coffee.id,
      roasterId,
      externalId: coffee.externalId,
      fieldName: 'created',
      oldValue: null,
      newValue: coffee.name,
      changeType: 'created'
    }
    
    await db.insert(coffeeChanges).values(change)
  }

  private static async trackCoffeeDeletion(coffee: any, roasterId: number): Promise<void> {
    const change: NewCoffeeChange = {
      coffeeId: coffee.id,
      roasterId,
      externalId: coffee.externalId,
      fieldName: 'deleted',
      oldValue: coffee.name,
      newValue: null,
      changeType: 'deleted'
    }
    
    await db.insert(coffeeChanges).values(change)
  }
}

// CLI execution
const args = process.argv.slice(2)

if (args.length === 0) {
  CoffeeScraper.scrapeAllRoasters()
    .then(() => {
      console.log('Scraping completed successfully!')
      process.exit(0)
    })
    .catch(error => {
      console.error('Scraping failed:', error)
      process.exit(1)
    })
} else {
  const roasterId = parseInt(args[0])
  if (isNaN(roasterId)) {
    console.error('Please provide a valid roaster ID')
    process.exit(1)
  }
  
  CoffeeScraper.scrapeRoaster(roasterId)
    .then((count) => {
      console.log(`Successfully scraped ${count} coffees!`)
      process.exit(0)
    })
    .catch(error => {
      console.error('Scraping failed:', error)
      process.exit(1)
    })
}