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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    if (req.method === 'POST') {
      // Create new brewing guide
      const { coffeeId, water, grindSize, ratio, bloomTime, bloomWater, pourInstructions, totalTime, additionalNotes } = req.body
      
      if (!coffeeId) {
        return res.status(400).json({ error: 'Coffee ID is required' })
      }

      const [result] = await db
        .insert(brewingGuides)
        .values({
          coffeeId: parseInt(coffeeId),
          water,
          grindSize,
          ratio,
          bloomTime,
          bloomWater,
          pourInstructions,
          totalTime,
          additionalNotes
        })
        .returning()

      res.status(201).json(result)
    } else if (req.method === 'PUT') {
      // Update brewing guide - ID should be in query params
      const { id } = req.query
      const { water, grindSize, ratio, bloomTime, bloomWater, pourInstructions, totalTime, additionalNotes } = req.body

      if (!id) {
        return res.status(400).json({ error: 'ID is required' })
      }

      const [result] = await db
        .update(brewingGuides)
        .set({
          water,
          grindSize,
          ratio,
          bloomTime,
          bloomWater,
          pourInstructions,
          totalTime,
          additionalNotes,
          updatedAt: new Date()
        })
        .where(eq(brewingGuides.id, parseInt(id)))
        .returning()

      if (!result) {
        return res.status(404).json({ error: 'Brewing guide not found' })
      }

      res.status(200).json(result)
    } else if (req.method === 'DELETE') {
      // Delete brewing guide - ID should be in query params
      const { id } = req.query

      if (!id) {
        return res.status(400).json({ error: 'ID is required' })
      }

      const [result] = await db
        .delete(brewingGuides)
        .where(eq(brewingGuides.id, parseInt(id)))
        .returning()

      if (!result) {
        return res.status(404).json({ error: 'Brewing guide not found' })
      }

      res.status(200).json({ success: true })
    } else {
      return res.status(405).json({ error: 'Method not allowed' })
    }
  } catch (error) {
    console.error('Error with brewing guide operation:', error)
    res.status(500).json({ error: 'Server error' })
  }
}