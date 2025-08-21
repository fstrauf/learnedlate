import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { eq, asc } from 'drizzle-orm'
import { pgTable, serial, varchar, text, integer, timestamp } from 'drizzle-orm/pg-core'

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

const db = drizzle(pool)

// Schema definitions
const coffees = pgTable('coffees', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull()
})

const brewingGuides = pgTable('brewing_guides', {
  id: serial('id').primaryKey(),
  coffeeId: integer('coffee_id').references(() => coffees.id, { onDelete: 'cascade' }).notNull(),
  water: text('water'),
  grindSize: text('grind_size'),
  ratio: text('ratio'),
  bloomTime: text('bloom_time'),
  bloomWater: text('bloom_water'),
  pourInstructions: text('pour_instructions'),
  totalTime: text('total_time'),
  additionalNotes: text('additional_notes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
})

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { coffeeId } = req.query
    
    if (!coffeeId) {
      return res.status(400).json({ error: 'Coffee ID is required' })
    }
    
    const results = await db
      .select()
      .from(brewingGuides)
      .where(eq(brewingGuides.coffeeId, parseInt(coffeeId)))
      .orderBy(asc(brewingGuides.createdAt))

    res.status(200).json(results)
  } catch (error) {
    console.error('Error fetching brewing guides:', error)
    res.status(500).json({ error: 'Failed to fetch brewing guides' })
  }
}