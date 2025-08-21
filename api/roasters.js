import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { eq, asc } from 'drizzle-orm'
import { pgTable, serial, varchar, text, boolean, timestamp } from 'drizzle-orm/pg-core'

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

const db = drizzle(pool)

// Schema definition
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
      .select()
      .from(roasters)
      .where(eq(roasters.isActive, true))
      .orderBy(asc(roasters.name))

    res.status(200).json(results)
  } catch (error) {
    console.error('Error fetching roasters:', error)
    res.status(500).json({ error: 'Failed to fetch roasters' })
  }
}