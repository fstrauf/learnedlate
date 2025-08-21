// Shared coffee filtering logic used across all APIs
import { inArray, sql } from 'drizzle-orm'

// Define coffee-only product types (exclude accessories, machines, etc.)
export const COFFEE_PRODUCT_TYPES = [
  'Decaf',
  'Espresso', 
  'Espresso Blend',
  'coffee',
  'COFFEE',
  'Beans',
  'Te Mata Triple Blend',
  'Coffee Blend',
  'Coffee Bean Blend',
  'Tasting Pack',
  'Single Origin Coffee',
  'Colombian Swiss Water Decaf Blend',
  'Kidnappers Breakfast Blend',
  'Roasted Coffee - 200g/500g',
  'Coffee Beans',
  'Harvest Fairtrade Organic Blend',
  'Coffee'
]

/**
 * Creates a Drizzle filter condition to only include coffee products
 * @param {any} productTypeColumn - The column reference for product_type
 * @returns Drizzle filter condition
 */
export function createCoffeeProductFilter(productTypeColumn) {
  return inArray(productTypeColumn, COFFEE_PRODUCT_TYPES)
}

/**
 * Creates a search filter condition for coffee data
 * @param {string|undefined} searchTerm - The search term
 * @param {any} nameColumn - The name column reference
 * @param {any} descriptionColumn - The description column reference  
 * @param {any} tastingNotesColumn - The tasting notes column reference
 * @returns Drizzle filter condition or undefined if no search term
 */
export function createCoffeeSearchFilter(
  searchTerm,
  nameColumn,
  descriptionColumn,
  tastingNotesColumn
) {
  if (!searchTerm) return undefined
  
  return sql`(${nameColumn} ILIKE ${'%' + searchTerm + '%'} OR 
             ${descriptionColumn} ILIKE ${'%' + searchTerm + '%'} OR
             array_to_string(${tastingNotesColumn}, ',') ILIKE ${'%' + searchTerm + '%'})`
}