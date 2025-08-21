import { db, coffees, roasters, type CoffeeListing } from '../db'
import { eq, and, ilike, sql, desc, asc } from 'drizzle-orm'
import { createCoffeeProductFilter, createCoffeeSearchFilter } from '../shared/coffee-filters.js'

export interface CoffeeFilters {
  origin?: string
  roastType?: string
  roaster?: string
  search?: string
  minPrice?: number
  maxPrice?: number
  roasterId?: number
  inStock?: boolean
}

export interface CoffeeSortOptions {
  field: 'price' | 'name' | 'roaster' | 'created_at'
  direction: 'asc' | 'desc'
}

export class CoffeeAPI {
  static async getAllCoffees(
    filters: CoffeeFilters = {},
    sort: CoffeeSortOptions = { field: 'created_at', direction: 'desc' }
  ): Promise<CoffeeListing[]> {
    try {
      let query = db
        .select({
          id: coffees.id,
          roasterId: coffees.roasterId,
          externalId: coffees.externalId,
          handle: coffees.handle,
          name: coffees.name,
          description: coffees.description,
          origin: coffees.origin,
          region: coffees.region,
          variety: coffees.variety,
          processingMethod: coffees.processingMethod,
          roastLevel: coffees.roastLevel,
          roastType: coffees.roastType,
          productType: coffees.productType,
          tastingNotes: coffees.tastingNotes,
          altitude: coffees.altitude,
          price250g: coffees.price250g,
          price500g: coffees.price500g,
          price1kg: coffees.price1kg,
          imageUrl: coffees.imageUrl,
          productUrl: coffees.productUrl,
          inStock: coffees.inStock,
          featured: coffees.featured,
          harvestYear: coffees.harvestYear,
          cuppingScore: coffees.cuppingScore,
          createdAt: coffees.createdAt,
          updatedAt: coffees.updatedAt,
          roaster: {
            id: roasters.id,
            name: roasters.name,
            websiteUrl: roasters.websiteUrl,
            productsJsonUrl: roasters.productsJsonUrl,
            location: roasters.location,
            description: roasters.description,
            logoUrl: roasters.logoUrl,
            isActive: roasters.isActive,
            createdAt: roasters.createdAt,
            updatedAt: roasters.updatedAt,
            shippingCostStandard: roasters.shippingCostStandard,
            freeShippingThreshold: roasters.freeShippingThreshold,
            subscriptionDiscount: roasters.subscriptionDiscount,
            signupDiscount: roasters.signupDiscount
          }
        })
        .from(coffees)
        .innerJoin(roasters, eq(coffees.roasterId, roasters.id))
        .where(and(
          eq(roasters.isActive, true),
          filters.inStock !== false ? eq(coffees.inStock, true) : undefined,
          // Filter to only include coffee products (exclude accessories, machines, etc.)
          createCoffeeProductFilter(coffees.productType),
          filters.origin ? ilike(coffees.origin, `%${filters.origin}%`) : undefined,
          filters.roastType ? eq(coffees.roastType, filters.roastType) : undefined,
          filters.roaster ? eq(roasters.name, filters.roaster) : undefined,
          filters.roasterId ? eq(coffees.roasterId, filters.roasterId) : undefined,
          createCoffeeSearchFilter(filters.search, coffees.name, coffees.description, coffees.tastingNotes)
        ))

      // Apply sorting
      let orderByClause
      if (sort.field === 'price') {
        const priceColumn = sql`COALESCE(${coffees.price250g} / 2.5, ${coffees.price500g} / 5.0, ${coffees.price1kg} / 10.0)`
        orderByClause = sort.direction === 'asc' ? asc(priceColumn) : desc(priceColumn)
      } else if (sort.field === 'name') {
        orderByClause = sort.direction === 'asc' ? asc(coffees.name) : desc(coffees.name)
      } else if (sort.field === 'roaster') {
        orderByClause = sort.direction === 'asc' ? asc(roasters.name) : desc(roasters.name)
      } else {
        orderByClause = sort.direction === 'asc' ? asc(coffees.createdAt) : desc(coffees.createdAt)
      }

      const results = await query.orderBy(orderByClause)

      return results.map(row => ({
        ...row,
        // Calculate price per 100g for display
        pricePerGram: this.calculatePricePer100g(row.price250g, row.price500g, row.price1kg)
      }))

    } catch (error) {
      console.error('Error fetching coffees:', error)
      throw new Error('Failed to fetch coffees')
    }
  }

  static async getAllRoasters() {
    try {
      return await db
        .select()
        .from(roasters)
        .where(eq(roasters.isActive, true))
        .orderBy(asc(roasters.name))
    } catch (error) {
      console.error('Error fetching roasters:', error)
      throw new Error('Failed to fetch roasters')
    }
  }

  static async getCoffeeById(id: number): Promise<CoffeeListing | null> {
    try {
      const result = await db
        .select({
          id: coffees.id,
          roasterId: coffees.roasterId,
          externalId: coffees.externalId,
          handle: coffees.handle,
          name: coffees.name,
          description: coffees.description,
          origin: coffees.origin,
          region: coffees.region,
          variety: coffees.variety,
          processingMethod: coffees.processingMethod,
          roastLevel: coffees.roastLevel,
          roastType: coffees.roastType,
          productType: coffees.productType,
          tastingNotes: coffees.tastingNotes,
          altitude: coffees.altitude,
          price250g: coffees.price250g,
          price500g: coffees.price500g,
          price1kg: coffees.price1kg,
          imageUrl: coffees.imageUrl,
          productUrl: coffees.productUrl,
          inStock: coffees.inStock,
          featured: coffees.featured,
          harvestYear: coffees.harvestYear,
          cuppingScore: coffees.cuppingScore,
          createdAt: coffees.createdAt,
          updatedAt: coffees.updatedAt,
          roaster: {
            id: roasters.id,
            name: roasters.name,
            websiteUrl: roasters.websiteUrl,
            productsJsonUrl: roasters.productsJsonUrl,
            location: roasters.location,
            description: roasters.description,
            logoUrl: roasters.logoUrl,
            isActive: roasters.isActive,
            createdAt: roasters.createdAt,
            updatedAt: roasters.updatedAt,
            shippingCostStandard: roasters.shippingCostStandard,
            freeShippingThreshold: roasters.freeShippingThreshold,
            subscriptionDiscount: roasters.subscriptionDiscount,
            signupDiscount: roasters.signupDiscount
          }
        })
        .from(coffees)
        .innerJoin(roasters, eq(coffees.roasterId, roasters.id))
        .where(eq(coffees.id, id))
        .limit(1)

      return result.length > 0 ? result[0] as CoffeeListing : null
    } catch (error) {
      console.error('Error fetching coffee by ID:', error)
      throw new Error('Failed to fetch coffee')
    }
  }

  static async getUniqueOrigins(): Promise<string[]> {
    try {
      const results = await db
        .selectDistinct({ origin: coffees.origin })
        .from(coffees)
        .innerJoin(roasters, eq(coffees.roasterId, roasters.id))
        .where(and(
          eq(roasters.isActive, true),
          eq(coffees.inStock, true),
          // Filter to only include coffee products
          createCoffeeProductFilter(coffees.productType),
          sql`${coffees.origin} IS NOT NULL AND ${coffees.origin} != ''`
        ))
        .orderBy(asc(coffees.origin))

      return results.map(r => r.origin).filter(Boolean) as string[]
    } catch (error) {
      console.error('Error fetching origins:', error)
      return []
    }
  }

  static async getUniqueRoastTypes(): Promise<string[]> {
    try {
      const results = await db
        .selectDistinct({ roastType: coffees.roastType })
        .from(coffees)
        .innerJoin(roasters, eq(coffees.roasterId, roasters.id))
        .where(and(
          eq(roasters.isActive, true),
          eq(coffees.inStock, true),
          // Filter to only include coffee products
          createCoffeeProductFilter(coffees.productType),
          sql`${coffees.roastType} IS NOT NULL AND ${coffees.roastType} != ''`
        ))
        .orderBy(asc(coffees.roastType))

      return results.map(r => r.roastType).filter(Boolean) as string[]
    } catch (error) {
      console.error('Error fetching roast types:', error)
      return []
    }
  }

  private static calculatePricePer100g(price250g: string | null, price500g: string | null, price1kg: string | null): number | null {
    if (price250g) return parseFloat(price250g) / 2.5
    if (price500g) return parseFloat(price500g) / 5.0
    if (price1kg) return parseFloat(price1kg) / 10.0
    return null
  }
}