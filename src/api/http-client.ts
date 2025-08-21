// HTTP API client for frontend
import type { CoffeeListing } from '../db/schema'

const API_BASE_URL = import.meta.env.DEV 
  ? 'http://localhost:3001/api' 
  : '/api'

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

export class HttpCoffeeAPI {
  static async getAllCoffees(
    filters: CoffeeFilters = {},
    sort: CoffeeSortOptions = { field: 'created_at', direction: 'desc' }
  ): Promise<CoffeeListing[]> {
    try {
      const params = new URLSearchParams()
      
      if (filters.origin) params.append('origin', filters.origin)
      if (filters.roastType) params.append('roastType', filters.roastType)
      if (filters.roaster) params.append('roaster', filters.roaster)
      if (filters.search) params.append('search', filters.search)
      if (filters.minPrice !== undefined) params.append('minPrice', filters.minPrice.toString())
      if (filters.maxPrice !== undefined) params.append('maxPrice', filters.maxPrice.toString())
      if (filters.roasterId) params.append('roasterId', filters.roasterId.toString())
      
      params.append('sortField', sort.field)
      params.append('sortDirection', sort.direction)

      const response = await fetch(`${API_BASE_URL}/coffees?${params}`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      
      // Add calculated price per 100g for each coffee
      return data.map((coffee: any) => ({
        ...coffee,
        pricePerGram: this.calculatePricePer100g(coffee.price250g, coffee.price500g, coffee.price1kg)
      }))
    } catch (error) {
      console.error('Error fetching coffees from API:', error)
      // Fallback to empty array if API is down
      return []
    }
  }

  static async getAllRoasters() {
    try {
      const response = await fetch(`${API_BASE_URL}/roasters`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching roasters from API:', error)
      return []
    }
  }

  static async getCoffeeById(id: number): Promise<CoffeeListing | null> {
    try {
      const coffees = await this.getAllCoffees()
      return coffees.find(coffee => coffee.id === id) || null
    } catch (error) {
      console.error('Error fetching coffee by ID:', error)
      return null
    }
  }

  static async getUniqueOrigins(): Promise<string[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/origins`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching origins from API:', error)
      return []
    }
  }

  static async getUniqueRoastTypes(): Promise<string[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/roast-types`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error fetching roast types from API:', error)
      return []
    }
  }

  private static calculatePricePer100g(price250g: string | null, price500g: string | null, price1kg: string | null): string | null {
    if (price250g) return (parseFloat(price250g) / 2.5).toFixed(2)
    if (price500g) return (parseFloat(price500g) / 5.0).toFixed(2)
    if (price1kg) return (parseFloat(price1kg) / 10.0).toFixed(2)
    return null
  }
}