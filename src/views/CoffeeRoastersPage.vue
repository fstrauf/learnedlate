<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          New Zealand Coffee Hub
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover and compare specialty coffee beans from New Zealand's finest roasters. 
          Find your perfect cup with real-time pricing and detailed filtering.
        </p>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <!-- Search -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              v-model="filters.search"
              type="text"
              placeholder="Coffee name, tasting notes..."
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
          </div>

          <!-- Origin Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Origin
            </label>
            <select
              v-model="filters.origin"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Origins</option>
              <option v-for="origin in uniqueOrigins" :key="origin" :value="origin">
                {{ origin }}
              </option>
            </select>
          </div>

          <!-- Roast Type Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Roast Type
            </label>
            <select
              v-model="filters.roastType"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Types</option>
              <option v-for="type in uniqueRoastTypes" :key="type" :value="type">
                {{ type }}
              </option>
            </select>
          </div>

          <!-- Roaster Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Roaster
            </label>
            <select
              v-model="filters.roaster"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Roasters</option>
              <option v-for="roaster in uniqueRoasters" :key="roaster" :value="roaster">
                {{ roaster }}
              </option>
            </select>
          </div>

          <!-- Sort Options -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              v-model="sortOption"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="created_at-desc">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="roaster-asc">Roaster: A to Z</option>
            </select>
          </div>
        </div>

        <!-- Price Range -->
        <div class="mt-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Price per 100g (NZD)
          </label>
          <div class="flex items-center space-x-4">
            <input
              v-model.number="filters.minPrice"
              type="number"
              placeholder="Min"
              min="0"
              step="0.50"
              class="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <span class="text-gray-500">to</span>
            <input
              v-model.number="filters.maxPrice"
              type="number"
              placeholder="Max"
              min="0"
              step="0.50"
              class="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
          </div>
        </div>

        <!-- Results Count -->
        <div class="mt-4 text-sm text-gray-600">
          Showing {{ filteredCoffees.length }} of {{ allCoffees.length }} coffees
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p class="mt-2 text-gray-600">Loading coffee data...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">{{ error }}</p>
        <button
          @click="loadData"
          class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>

      <!-- Coffee Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="coffee in filteredCoffees"
          :key="coffee.id"
          class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full"
        >
          <!-- Coffee Image -->
          <div class="w-full h-96 bg-gray-200 rounded-t-lg overflow-hidden flex items-center justify-center">
            <img
              v-if="coffee.imageUrl"
              :src="coffee.imageUrl"
              :alt="coffee.name"
              class="w-full h-full object-cover object-center"
            >
            <div v-else class="w-full h-full bg-gray-200 flex items-center justify-center">
              <span class="text-gray-400">No Image</span>
            </div>
          </div>

          <!-- Coffee Info -->
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-start justify-between mb-2">
              <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">
                {{ coffee.name }}
              </h3>
              <span
                v-if="!coffee.inStock"
                class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full"
              >
                Out of Stock
              </span>
            </div>

            <button 
              @click="openRoasterDrawer(coffee.roaster)"
              class="text-base font-medium text-blue-600 mb-3 hover:text-blue-800 hover:underline transition-all duration-200 text-left bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-md border border-blue-200 hover:border-blue-300 w-full flex items-center justify-between group"
            >
              <span>{{ coffee.roaster.name }}</span>
              <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            <div class="space-y-1 text-sm text-gray-600 mb-4">
              <p v-if="coffee.origin">
                <span class="font-medium">Origin:</span> {{ coffee.origin }}
              </p>
              <p v-if="coffee.roastType">
                <span class="font-medium">Roast:</span> {{ coffee.roastType }}
              </p>
              <p v-if="coffee.tastingNotes && coffee.tastingNotes.length > 0">
                <span class="font-medium">Notes:</span> {{ coffee.tastingNotes.join(', ') }}
              </p>
            </div>

            <!-- Pricing -->
            <div class="border-t pt-4 mt-auto">
              <div class="space-y-2">
                <div v-if="coffee.price250g" :class="['flex justify-between text-sm', getBestValueClass(coffee, '250g')]">
                  <span>250g</span>
                  <span class="font-medium">${{ coffee.price250g }} <span class="text-xs text-gray-500">(${{ getPricePer100g(coffee, '250g') }}/100g)</span></span>
                </div>
                <div v-if="coffee.price500g" :class="['flex justify-between text-sm', getBestValueClass(coffee, '500g')]">
                  <span>500g</span>
                  <span class="font-medium">${{ coffee.price500g }} <span class="text-xs text-gray-500">(${{ getPricePer100g(coffee, '500g') }}/100g)</span></span>
                </div>
                <div v-if="coffee.price1kg" :class="['flex justify-between text-sm', getBestValueClass(coffee, '1kg')]">
                  <span>1kg</span>
                  <span class="font-medium">${{ coffee.price1kg }} <span class="text-xs text-gray-500">(${{ getPricePer100g(coffee, '1kg') }}/100g)</span></span>
                </div>
              </div>

              <div class="mt-4">
                <a
                  v-if="getProductUrl(coffee)"
                  :href="getProductUrl(coffee)"
                  target="_blank"
                  class="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  View Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && !error && filteredCoffees.length === 0" class="text-center py-12">
        <p class="text-gray-600">No coffees found matching your filters.</p>
        <button
          @click="clearFilters"
          class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Clear Filters
        </button>
      </div>
    </div>

    <!-- Roaster Info Drawer -->
    <div v-if="showRoasterDrawer" class="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      <!-- Drawer -->
      <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform pointer-events-auto">
        <div class="flex flex-col h-full">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b">
            <div>
              <h2 class="text-lg font-semibold text-gray-900">{{ selectedRoaster?.name }}</h2>
              <p class="text-sm text-gray-600">Ordering Information</p>
            </div>
            <button
              @click="closeRoasterDrawer"
              class="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="flex-1 overflow-y-auto p-6 space-y-6">
            <!-- Website Link -->
            <div v-if="selectedRoaster?.websiteUrl">
              <a 
                :href="selectedRoaster.websiteUrl" 
                target="_blank"
                class="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Visit Website</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>

            <!-- Location -->
            <div v-if="selectedRoaster?.location" class="space-y-2">
              <h3 class="font-medium text-gray-900">Location</h3>
              <p class="text-gray-600">{{ selectedRoaster.location }}</p>
            </div>

            <!-- Description -->
            <div v-if="selectedRoaster?.description" class="space-y-2">
              <h3 class="font-medium text-gray-900">About</h3>
              <p class="text-gray-600">{{ selectedRoaster.description }}</p>
            </div>

            <!-- Shipping Information -->
            <div class="space-y-4">
              <h3 class="font-medium text-gray-900">Shipping & Pricing</h3>
              
              <div class="bg-gray-50 rounded-lg p-4 space-y-3">
                <div v-if="selectedRoaster?.shippingCostStandard" class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Standard Shipping</span>
                  <span class="font-medium">${{ selectedRoaster.shippingCostStandard }}</span>
                </div>

                <div v-if="selectedRoaster?.freeShippingThreshold" class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Free Shipping Over</span>
                  <span class="font-medium text-green-600">${{ selectedRoaster.freeShippingThreshold }}</span>
                </div>

                <div v-if="!selectedRoaster?.shippingCostStandard && !selectedRoaster?.freeShippingThreshold" class="text-sm text-gray-500 text-center py-2">
                  Shipping information not available
                </div>
              </div>
            </div>

            <!-- Discounts -->
            <div v-if="selectedRoaster?.subscriptionDiscount || selectedRoaster?.signupDiscount" class="space-y-4">
              <h3 class="font-medium text-gray-900">Available Discounts</h3>
              
              <div class="space-y-3">
                <div v-if="selectedRoaster?.signupDiscount" class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                    </svg>
                    <div>
                      <p class="font-medium text-blue-900">New Customer Discount</p>
                      <p class="text-sm text-blue-700">{{ selectedRoaster.signupDiscount }}% off your first order</p>
                    </div>
                  </div>
                </div>

                <div v-if="selectedRoaster?.subscriptionDiscount" class="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    <div>
                      <p class="font-medium text-green-900">Subscription Discount</p>
                      <p class="text-sm text-green-700">{{ selectedRoaster.subscriptionDiscount }}% off recurring orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { HttpCoffeeAPI as CoffeeAPI, type CoffeeFilters, type CoffeeSortOptions } from '../api/http-client'
import type { CoffeeListing } from '../db/schema'

// Reactive data
const allCoffees = ref<CoffeeListing[]>([])
const uniqueOrigins = ref<string[]>([])
const uniqueRoastTypes = ref<string[]>([])
const uniqueRoasters = ref<string[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

// Roaster info drawer state
const showRoasterDrawer = ref(false)
const selectedRoaster = ref<CoffeeListing['roaster'] | null>(null)

// Filters
const filters = ref<CoffeeFilters>({
  search: '',
  origin: '',
  roastType: '',
  roaster: '',
  minPrice: undefined,
  maxPrice: undefined,
  inStock: true
})

const sortOption = ref('created_at-desc')

// Computed properties
const sortOptions = computed((): CoffeeSortOptions => {
  const [field, direction] = sortOption.value.split('-') as [string, 'asc' | 'desc']
  return { field: field as any, direction }
})

const filteredCoffees = computed(() => {
  let result = [...allCoffees.value]

  // Apply filters
  if (filters.value.search) {
    const search = filters.value.search.toLowerCase()
    result = result.filter(coffee => 
      coffee.name.toLowerCase().includes(search) ||
      coffee.description?.toLowerCase().includes(search) ||
      coffee.tastingNotes?.some(note => note.toLowerCase().includes(search)) ||
      coffee.roaster.name.toLowerCase().includes(search)
    )
  }

  if (filters.value.origin) {
    result = result.filter(coffee => coffee.origin === filters.value.origin)
  }

  if (filters.value.roastType) {
    result = result.filter(coffee => coffee.roastType === filters.value.roastType)
  }

  if (filters.value.roaster) {
    result = result.filter(coffee => coffee.roaster.name === filters.value.roaster)
  }

  if (filters.value.minPrice !== undefined || filters.value.maxPrice !== undefined) {
    result = result.filter(coffee => {
      const price = getPricePer100g(coffee)
      if (!price) return false
      
      const priceNum = parseFloat(price)
      if (filters.value.minPrice !== undefined && priceNum < filters.value.minPrice) return false
      if (filters.value.maxPrice !== undefined && priceNum > filters.value.maxPrice) return false
      
      return true
    })
  }

  if (filters.value.inStock) {
    result = result.filter(coffee => coffee.inStock)
  }

  // Apply sorting
  result.sort((a, b) => {
    let aValue: any, bValue: any

    switch (sortOptions.value.field) {
      case 'price':
        aValue = parseFloat(getPricePer100g(a) || '999')
        bValue = parseFloat(getPricePer100g(b) || '999')
        break
      case 'name':
        aValue = a.name.toLowerCase()
        bValue = b.name.toLowerCase()
        break
      case 'roaster':
        aValue = a.roaster.name.toLowerCase()
        bValue = b.roaster.name.toLowerCase()
        break
      default:
        aValue = new Date(a.createdAt || '').getTime()
        bValue = new Date(b.createdAt || '').getTime()
    }

    if (sortOptions.value.direction === 'asc') {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  return result
})

// Methods
const getPricePer100g = (coffee: CoffeeListing, size?: string): string | null => {
  if (size === '250g' && coffee.price250g) {
    return (parseFloat(coffee.price250g) / 2.5).toFixed(2)
  }
  if (size === '500g' && coffee.price500g) {
    return (parseFloat(coffee.price500g) / 5.0).toFixed(2)
  }
  if (size === '1kg' && coffee.price1kg) {
    return (parseFloat(coffee.price1kg) / 10.0).toFixed(2)
  }
  
  // Default behavior for backward compatibility
  if (!size) {
    if (coffee.price250g) {
      return (parseFloat(coffee.price250g) / 2.5).toFixed(2)
    }
    if (coffee.price500g) {
      return (parseFloat(coffee.price500g) / 5.0).toFixed(2)
    }
    if (coffee.price1kg) {
      return (parseFloat(coffee.price1kg) / 10.0).toFixed(2)
    }
  }
  return null
}

const getBestValueClass = (coffee: CoffeeListing, size: string): string => {
  const prices: { size: string; pricePerG: number }[] = []
  
  if (coffee.price250g) {
    prices.push({ size: '250g', pricePerG: parseFloat(coffee.price250g) / 2.5 })
  }
  if (coffee.price500g) {
    prices.push({ size: '500g', pricePerG: parseFloat(coffee.price500g) / 5.0 })
  }
  if (coffee.price1kg) {
    prices.push({ size: '1kg', pricePerG: parseFloat(coffee.price1kg) / 10.0 })
  }
  
  if (prices.length <= 1) return ''
  
  const bestValue = prices.reduce((min, current) => 
    current.pricePerG < min.pricePerG ? current : min
  )
  
  return bestValue.size === size ? 'bg-green-50 border-green-200 border rounded-md px-2 py-1 text-green-800' : ''
}

const getProductUrl = (coffee: CoffeeListing): string | undefined => {
  // If productUrl exists and looks valid, use it
  if (coffee.productUrl && coffee.productUrl.startsWith('http')) {
    return coffee.productUrl
  }
  
  // Fallback: construct URL from roaster website and handle if both exist
  if (coffee.roaster?.websiteUrl && coffee.handle) {
    return `${coffee.roaster.websiteUrl}/products/${coffee.handle}`
  }
  
  // If no valid URL can be constructed, return undefined
  return coffee.productUrl || undefined
}

const clearFilters = () => {
  filters.value = {
    search: '',
    origin: '',
    roastType: '',
    roaster: '',
    minPrice: undefined,
    maxPrice: undefined,
    inStock: true
  }
  sortOption.value = 'created_at-desc'
}

const openRoasterDrawer = (roaster: CoffeeListing['roaster']) => {
  selectedRoaster.value = roaster
  showRoasterDrawer.value = true
}

const closeRoasterDrawer = () => {
  showRoasterDrawer.value = false
  selectedRoaster.value = null
}

const loadData = async () => {
  try {
    loading.value = true
    error.value = null

    // Load all data in parallel
    const [coffees, origins, roastTypes] = await Promise.all([
      CoffeeAPI.getAllCoffees(filters.value, sortOptions.value),
      CoffeeAPI.getUniqueOrigins(),
      CoffeeAPI.getUniqueRoastTypes()
    ])

    allCoffees.value = coffees
    uniqueOrigins.value = origins
    uniqueRoastTypes.value = roastTypes
    
    // Get unique roasters from the loaded coffee data
    const roasterNames = Array.from(new Set(coffees.map(coffee => coffee.roaster.name)))
    uniqueRoasters.value = roasterNames.sort()

  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load coffee data'
  } finally {
    loading.value = false
  }
}

// Lifecycle
onMounted(() => {
  loadData()
})

// Watch for filter changes to reload data if needed
watch(() => filters.value.inStock, () => {
  if (!loading.value) {
    loadData()
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
}
</style>