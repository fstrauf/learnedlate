import { pgTable, serial, varchar, text, integer, decimal, boolean, timestamp, index, uniqueIndex } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// Define the coffee schema
export const roasters = pgTable('roasters', {
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
}, (table) => {
  return {
    nameIdx: index('roasters_name_idx').on(table.name),
    isActiveIdx: index('roasters_is_active_idx').on(table.isActive)
  }
})

export const coffees = pgTable('coffees', {
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
}, (table) => {
  return {
    roasterIdx: index('coffees_roaster_id_idx').on(table.roasterId),
    originIdx: index('coffees_origin_idx').on(table.origin),
    roastTypeIdx: index('coffees_roast_type_idx').on(table.roastType),
    inStockIdx: index('coffees_in_stock_idx').on(table.inStock),
    uniqueRoasterProduct: uniqueIndex('coffees_roaster_external_id_idx').on(table.roasterId, table.externalId)
  }
})

// Define relations
export const roastersRelations = relations(roasters, ({ many }) => ({
  coffees: many(coffees)
}))

export const coffeesRelations = relations(coffees, ({ one, many }) => ({
  roaster: one(roasters, {
    fields: [coffees.roasterId],
    references: [roasters.id]
  }),
  brewingGuides: many(brewingGuides)
}))

// Types for TypeScript
export type Roaster = typeof roasters.$inferSelect
export type NewRoaster = typeof roasters.$inferInsert
export type Coffee = typeof coffees.$inferSelect
export type NewCoffee = typeof coffees.$inferInsert

export const coffeeChanges = pgTable('coffee_changes', {
  id: serial('id').primaryKey(),
  coffeeId: integer('coffee_id').references(() => coffees.id, { onDelete: 'cascade' }),
  roasterId: integer('roaster_id').references(() => roasters.id, { onDelete: 'cascade' }).notNull(),
  externalId: varchar('external_id', { length: 255 }),
  changedAt: timestamp('changed_at').defaultNow(),
  fieldName: varchar('field_name', { length: 100 }),
  oldValue: text('old_value'),
  newValue: text('new_value'),
  changeType: varchar('change_type', { length: 50 }) // 'created', 'updated', 'deleted'
}, (table) => {
  return {
    coffeeIdx: index('coffee_changes_coffee_id_idx').on(table.coffeeId),
    roasterIdx: index('coffee_changes_roaster_id_idx').on(table.roasterId),
    changedAtIdx: index('coffee_changes_changed_at_idx').on(table.changedAt),
    fieldNameIdx: index('coffee_changes_field_name_idx').on(table.fieldName)
  }
})

export const coffeeChangesRelations = relations(coffeeChanges, ({ one }) => ({
  coffee: one(coffees, {
    fields: [coffeeChanges.coffeeId],
    references: [coffees.id]
  }),
  roaster: one(roasters, {
    fields: [coffeeChanges.roasterId],
    references: [roasters.id]
  })
}))

// Helper type for coffee listings with roaster info
export type CoffeeListing = Coffee & {
  roaster: Roaster
}

export type CoffeeChange = typeof coffeeChanges.$inferSelect
export type NewCoffeeChange = typeof coffeeChanges.$inferInsert

export const brewingGuides = pgTable('brewing_guides', {
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
}, (table) => {
  return {
    coffeeIdx: index('brewing_guides_coffee_id_idx').on(table.coffeeId)
  }
})

export const brewingGuidesRelations = relations(brewingGuides, ({ one }) => ({
  coffee: one(coffees, {
    fields: [brewingGuides.coffeeId],
    references: [coffees.id]
  })
}))

export type BrewingGuide = typeof brewingGuides.$inferSelect
export type NewBrewingGuide = typeof brewingGuides.$inferInsert