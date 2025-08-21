import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { eq, and, sql, asc } from 'drizzle-orm'
import { pgTable, serial, varchar, text, integer, decimal, boolean, timestamp } from 'drizzle-orm/pg-core'

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
  updatedAt: timestamp('updated_at').defaultNow()
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
    const results = await db
      .selectDistinct({ roastType: coffees.roastType })
      .from(coffees)
      .innerJoin(roasters, eq(coffees.roasterId, roasters.id))
      .where(and(
        eq(roasters.isActive, true),
        eq(coffees.inStock, true),
        sql`${coffees.roastType} IS NOT NULL AND ${coffees.roastType} != ''`
      ))
      .orderBy(asc(coffees.roastType))

    const roastTypes = results.map(r => r.roastType).filter(Boolean)
    res.status(200).json(roastTypes)
  } catch (error) {
    console.error('Error fetching roast types:', error)
    res.status(500).json({ error: 'Failed to fetch roast types' })
  }
}