import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { eq, and, ilike, sql, desc, asc } from 'drizzle-orm'
import { pgTable, serial, varchar, text, integer, decimal, boolean, timestamp } from 'drizzle-orm/pg-core'
import { createCoffeeProductFilter, createCoffeeSearchFilter } from '../src/shared/coffee-filters.js'

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

const db = drizzle(pool)

// Schema definitions
const roasters = pgTable('roasters', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull().unique(),
  websiteUrl: varchar('website_url', { length: 500 }),
  productsJsonUrl: varchar('products_json_url', { length: 500 }).notNull(),
  location: varchar('location', { length: 255 }),
  description: text('description'),
  logoUrl: varchar('logo_url', { length: 500 }),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  shippingCostStandard: decimal('shipping_cost_standard', { precision: 10, scale: 2 }),
  freeShippingThreshold: decimal('free_shipping_threshold', { precision: 10, scale: 2 }),
  subscriptionDiscount: decimal('subscription_discount', { precision: 5, scale: 2 }),
  signupDiscount: decimal('signup_discount', { precision: 5, scale: 2 })
})

const coffees = pgTable('coffees', {
  id: serial('id').primaryKey(),
  roasterId: integer('roaster_id').references(() => roasters.id, { onDelete: 'cascade' }).notNull(),
  externalId: varchar('external_id', { length: 255 }),
  handle: varchar('handle', { length: 255 }),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  origin: varchar('origin', { length: 255 }),
  region: varchar('region', { length: 255 }),
  variety: varchar('variety', { length: 255 }),
  processingMethod: varchar('processing_method', { length: 255 }),
  roastLevel: varchar('roast_level', { length: 100 }),
  roastType: varchar('roast_type', { length: 100 }),
  productType: varchar('product_type', { length: 100 }),
  tastingNotes: text('tasting_notes').array(),
  altitude: integer('altitude'),
  price250g: decimal('price_250g', { precision: 10, scale: 2 }),
  price500g: decimal('price_500g', { precision: 10, scale: 2 }),
  price1kg: decimal('price_1kg', { precision: 10, scale: 2 }),
  imageUrl: varchar('image_url', { length: 500 }),
  productUrl: varchar('product_url', { length: 500 }),
  inStock: boolean('in_stock').default(true),
  featured: boolean('featured').default(false),
  harvestYear: integer('harvest_year'),
  cuppingScore: decimal('cupping_score', { precision: 4, scale: 2 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
})

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { origin, roastType, search, minPrice, maxPrice, roasterId, sortField = 'created_at', sortDirection = 'desc' } = req.query

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
          location: roasters.location,
          description: roasters.description,
          logoUrl: roasters.logoUrl,
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
        eq(coffees.inStock, true),
        createCoffeeProductFilter(coffees.productType),
        origin ? eq(coffees.origin, origin) : undefined,
        roastType ? eq(coffees.roastType, roastType) : undefined,
        roasterId ? eq(coffees.roasterId, parseInt(roasterId)) : undefined,
        createCoffeeSearchFilter(search, coffees.name, coffees.description, coffees.tastingNotes)
      ))

    // Apply sorting
    if (sortField === 'price') {
      const priceColumn = sql`COALESCE(${coffees.price250g} / 2.5, ${coffees.price500g} / 5.0, ${coffees.price1kg} / 10.0)`
      query = sortDirection === 'asc' ? query.orderBy(asc(priceColumn)) : query.orderBy(desc(priceColumn))
    } else if (sortField === 'name') {
      query = sortDirection === 'asc' ? query.orderBy(asc(coffees.name)) : query.orderBy(desc(coffees.name))
    } else if (sortField === 'roaster') {
      query = sortDirection === 'asc' ? query.orderBy(asc(roasters.name)) : query.orderBy(desc(roasters.name))
    } else {
      query = sortDirection === 'asc' ? query.orderBy(asc(coffees.createdAt)) : query.orderBy(desc(coffees.createdAt))
    }

    const results = await query

    res.status(200).json(results)
  } catch (error) {
    console.error('Error fetching coffees:', error)
    res.status(500).json({ error: 'Failed to fetch coffees' })
  }
}