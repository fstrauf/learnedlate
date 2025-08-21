import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { eq, and, ilike, sql, desc, asc } from 'drizzle-orm'
import { createCoffeeProductFilter, createCoffeeSearchFilter } from './src/shared/coffee-filters.ts'

// Import schema
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

const db = drizzle(pool)

// Define schema inline for server
import { pgTable, serial, varchar, text, integer, decimal, boolean, timestamp } from 'drizzle-orm/pg-core'

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


const app = express()
app.use(cors())
app.use(express.json())

// API endpoints
app.get('/api/coffees', async (req, res) => {
  try {
    const { origin, roastType, search, minPrice, maxPrice, roasterId, sortField = 'created_at', sortDirection = 'desc' } = req.query

    let query = db
      .select({
        id: coffees.id,
        roasterId: coffees.roasterId,
        externalId: coffees.externalId,
        name: coffees.name,
        description: coffees.description,
        origin: coffees.origin,
        region: coffees.region,
        variety: coffees.variety,
        processingMethod: coffees.processingMethod,
        roastLevel: coffees.roastLevel,
        roastType: coffees.roastType,
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
        // Filter to only include coffee products (exclude accessories, machines, etc.)
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

    res.json(results)
  } catch (error) {
    console.error('Error fetching coffees:', error)
    res.status(500).json({ error: 'Failed to fetch coffees' })
  }
})

app.get('/api/roasters', async (req, res) => {
  try {
    const results = await db
      .select()
      .from(roasters)
      .where(eq(roasters.isActive, true))
      .orderBy(asc(roasters.name))

    res.json(results)
  } catch (error) {
    console.error('Error fetching roasters:', error)
    res.status(500).json({ error: 'Failed to fetch roasters' })
  }
})

app.get('/api/origins', async (req, res) => {
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

    res.json(results.map(r => r.origin).filter(Boolean))
  } catch (error) {
    console.error('Error fetching origins:', error)
    res.status(500).json({ error: 'Failed to fetch origins' })
  }
})

app.get('/api/roast-types', async (req, res) => {
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

    res.json(results.map(r => r.roastType).filter(Boolean))
  } catch (error) {
    console.error('Error fetching roast types:', error)
    res.status(500).json({ error: 'Failed to fetch roast types' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Coffee API server running on port ${PORT}`)
})