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
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
          </div>

          <!-- Origin Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Origin
            </label>
            <select
              v-model="filters.origin"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
              class="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
            <span class="text-gray-500">to</span>
            <input
              v-model.number="filters.maxPrice"
              type="number"
              placeholder="Max"
              min="0"
              step="0.50"
              class="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
        <p class="mt-2 text-gray-600">Loading coffee data...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">{{ error }}</p>
        <button
          @click="loadData"
          class="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
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

            <div class="mb-3">
              <p class="text-base font-medium text-gray-900 mb-2">{{ coffee.roaster.name }}</p>
              <button 
                @click="openProductDrawer(coffee)"
                class="text-sm text-gray-700 hover:text-gray-900 hover:underline transition-all duration-200 text-left bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-md border border-gray-200 hover:border-gray-300 w-full flex items-center justify-between group"
              >
                <span>Product Details</span>
                <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
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
                  class="block w-full bg-gray-700 text-white text-center py-2 px-4 rounded-md hover:bg-gray-500 transition-colors text-sm"
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
          class="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
        >
          Clear Filters
        </button>
      </div>
    </div>

    <!-- Product Details Drawer -->
    <div v-if="showProductDrawer" class="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      <!-- Drawer -->
      <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform pointer-events-auto">
        <div class="flex flex-col h-full">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b">
            <div>
              <h2 class="text-lg font-semibold text-gray-900">{{ selectedCoffee?.name }}</h2>
              <p class="text-sm text-gray-600">Product Details</p>
            </div>
            <button
              @click="closeProductDrawer"
              class="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="flex-1 overflow-y-auto p-6 space-y-6">
            <!-- Coffee Image -->
            <div v-if="selectedCoffee?.imageUrl" class="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
              <img
                :src="selectedCoffee.imageUrl"
                :alt="selectedCoffee.name"
                class="w-full h-full object-cover object-center"
              >
            </div>

            <!-- Coffee Description -->
            <div v-if="selectedCoffee?.description" class="space-y-2">
              <h3 class="font-medium text-gray-900">Description</h3>
              <p class="text-gray-600">{{ selectedCoffee.description }}</p>
            </div>

            <!-- Coffee Details -->
            <div class="space-y-4">
              <h3 class="font-medium text-gray-900">Coffee Details</h3>
              
              <div class="bg-gray-50 rounded-lg p-4 space-y-3">
                <div v-if="selectedCoffee?.origin" class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Origin</span>
                  <span class="font-medium">{{ selectedCoffee.origin }}</span>
                </div>

                <div v-if="selectedCoffee?.roastType" class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Roast Type</span>
                  <span class="font-medium">{{ selectedCoffee.roastType }}</span>
                </div>

                <div v-if="selectedCoffee?.tastingNotes && selectedCoffee.tastingNotes.length > 0" class="">
                  <span class="text-sm text-gray-600 block mb-1">Tasting Notes</span>
                  <div class="flex flex-wrap gap-1">
                    <span v-for="note in selectedCoffee.tastingNotes" :key="note" class="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {{ note }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Brewing Guides -->
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h3 class="font-medium text-gray-900">Brewing Guide</h3>
                <button
                  v-if="!isAdminAuthenticated"
                  @click="requestAdminAccess"
                  class="text-xs bg-amber-600 text-white px-3 py-1 rounded-full hover:bg-amber-700 transition-colors"
                >
                  Add Guide
                </button>
                <button
                  v-else
                  @click="showBrewingGuideForm = !showBrewingGuideForm"
                  class="text-xs bg-amber-600 text-white px-3 py-1 rounded-full hover:bg-amber-700 transition-colors"
                >
                  {{ showBrewingGuideForm ? 'Cancel' : 'Add Guide' }}
                </button>
              </div>

              <!-- Admin Password Prompt -->
              <div v-if="showPasswordPrompt" class="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <div class="space-y-3">
                  <p class="text-sm font-medium text-yellow-800">Admin Access Required</p>
                  <form @submit.prevent="checkAdminPassword" class="flex space-x-3">
                    <input
                      v-model="adminPassword"
                      type="password"
                      placeholder="Enter admin password"
                      class="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      autofocus
                    >
                    <button
                      type="submit"
                      class="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition-colors"
                    >
                      Verify
                    </button>
                    <button
                      type="button"
                      @click="showPasswordPrompt = false; adminPassword = ''"
                      class="bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>

              <!-- Existing Brewing Guides -->
              <div v-if="brewingGuides.length > 0" class="space-y-4">
                <div v-for="guide in brewingGuides" :key="guide.id" class="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <div class="space-y-3">
                    <div v-if="guide.water" class="flex items-start space-x-3">
                      <span class="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white text-xs font-medium rounded-full flex-shrink-0">1</span>
                      <div>
                        <span class="text-sm font-medium text-gray-900">Water:</span>
                        <span class="text-sm text-gray-700 ml-1">{{ guide.water }}</span>
                      </div>
                    </div>

                    <div v-if="guide.grindSize" class="flex items-start space-x-3">
                      <span class="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white text-xs font-medium rounded-full flex-shrink-0">2</span>
                      <div>
                        <span class="text-sm font-medium text-gray-900">Grind Size:</span>
                        <span class="text-sm text-gray-700 ml-1">{{ guide.grindSize }}</span>
                      </div>
                    </div>

                    <div v-if="guide.ratio" class="flex items-start space-x-3">
                      <span class="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white text-xs font-medium rounded-full flex-shrink-0">3</span>
                      <div>
                        <span class="text-sm font-medium text-gray-900">Ratio:</span>
                        <span class="text-sm text-gray-700 ml-1">{{ guide.ratio }}</span>
                      </div>
                    </div>

                    <div v-if="guide.bloomTime && guide.bloomWater" class="flex items-start space-x-3">
                      <span class="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white text-xs font-medium rounded-full flex-shrink-0">4</span>
                      <div>
                        <span class="text-sm font-medium text-gray-900">Bloom:</span>
                        <span class="text-sm text-gray-700 ml-1">{{ guide.bloomTime }} with {{ guide.bloomWater }}</span>
                      </div>
                    </div>

                    <div v-if="guide.pourInstructions" class="flex items-start space-x-3">
                      <span class="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white text-xs font-medium rounded-full flex-shrink-0">5</span>
                      <div>
                        <span class="text-sm font-medium text-gray-900">Pour:</span>
                        <span class="text-sm text-gray-700 ml-1">{{ guide.pourInstructions }}</span>
                      </div>
                    </div>

                    <div v-if="guide.totalTime" class="flex items-start space-x-3">
                      <span class="inline-flex items-center justify-center w-6 h-6 bg-amber-600 text-white text-xs font-medium rounded-full flex-shrink-0">6</span>
                      <div>
                        <span class="text-sm font-medium text-gray-900">Total Time:</span>
                        <span class="text-sm text-gray-700 ml-1">{{ guide.totalTime }}</span>
                      </div>
                    </div>

                    <div v-if="guide.additionalNotes" class="mt-3 p-3 bg-white rounded-md border border-amber-100">
                      <span class="text-sm font-medium text-gray-900">Additional Notes:</span>
                      <p class="text-sm text-gray-700 mt-1">{{ guide.additionalNotes }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- No guides message -->
              <div v-else-if="!showBrewingGuideForm && !showPasswordPrompt" class="text-sm text-gray-500 bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
                No brewing guides available for this coffee yet.
              </div>

              <!-- Add Brewing Guide Form -->
              <div v-if="showBrewingGuideForm && isAdminAuthenticated" class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <form @submit.prevent="submitBrewingGuide" class="space-y-4" :class="{ 'opacity-75': isSavingGuide }">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-medium text-gray-700 mb-1">Water</label>
                      <input
                        v-model="brewingGuideForm.water"
                        type="text"
                        placeholder="e.g., off boil"
                        :disabled="isSavingGuide"
                        class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100 disabled:text-gray-500"
                      >
                    </div>
                    
                    <div>
                      <label class="block text-xs font-medium text-gray-700 mb-1">Grind Size</label>
                      <input
                        v-model="brewingGuideForm.grindSize"
                        type="text"
                        placeholder="e.g., 28 clicks on 1zpressoj (medium-fine)"
                        :disabled="isSavingGuide"
                        class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100 disabled:text-gray-500"
                      >
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Ratio</label>
                    <input
                      v-model="brewingGuideForm.ratio"
                      type="text"
                      placeholder="e.g., 1:16 i.e. 15g of coffee, 240g water"
                      :disabled="isSavingGuide"
                      class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100 disabled:text-gray-500"
                    >
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-medium text-gray-700 mb-1">Bloom Time</label>
                      <input
                        v-model="brewingGuideForm.bloomTime"
                        type="text"
                        placeholder="e.g., 30s"
                        :disabled="isSavingGuide"
                        class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100 disabled:text-gray-500"
                      >
                    </div>
                    
                    <div>
                      <label class="block text-xs font-medium text-gray-700 mb-1">Bloom Water</label>
                      <input
                        v-model="brewingGuideForm.bloomWater"
                        type="text"
                        placeholder="e.g., 60g of water"
                        :disabled="isSavingGuide"
                        class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100 disabled:text-gray-500"
                      >
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Pour Instructions</label>
                    <textarea
                      v-model="brewingGuideForm.pourInstructions"
                      placeholder="e.g., close switch pour remaining water to 60s mark. immerse until 1:45min, open switch"
                      rows="2"
                      :disabled="isSavingGuide"
                      class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100 disabled:text-gray-500"
                    ></textarea>
                  </div>

                  <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Total Time</label>
                    <input
                      v-model="brewingGuideForm.totalTime"
                      type="text"
                      placeholder="e.g., 1:45min"
                      :disabled="isSavingGuide"
                      class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100 disabled:text-gray-500"
                    >
                  </div>

                  <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea
                      v-model="brewingGuideForm.additionalNotes"
                      placeholder="Any extra tips or notes..."
                      rows="2"
                      :disabled="isSavingGuide"
                      class="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100 disabled:text-gray-500"
                    ></textarea>
                  </div>

                  <div class="flex space-x-3">
                    <button
                      type="submit"
                      :disabled="isSavingGuide"
                      :class="[
                        'px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2',
                        isSavingGuide 
                          ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                          : 'bg-amber-600 text-white hover:bg-amber-700'
                      ]"
                    >
                      <svg v-if="isSavingGuide" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>{{ isSavingGuide ? 'Saving...' : 'Save Brewing Guide' }}</span>
                    </button>
                    <button
                      type="button"
                      @click="showBrewingGuideForm = false; resetBrewingGuideForm()"
                      :disabled="isSavingGuide"
                      :class="[
                        'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                        isSavingGuide 
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                          : 'bg-gray-500 text-white hover:bg-gray-600'
                      ]"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- Roaster Information -->
            <div class="space-y-4">
              <h3 class="font-medium text-gray-900">Roaster: {{ selectedCoffee?.roaster.name }}</h3>
              
              <!-- Website Link -->
              <div v-if="selectedCoffee?.roaster?.websiteUrl">
                <a 
                  :href="selectedCoffee.roaster.websiteUrl" 
                  target="_blank"
                  class="inline-flex items-center space-x-2 text-gray-900 hover:text-gray-700 transition-colors"
                >
                  <span>Visit Website</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>

              <!-- Location -->
              <div v-if="selectedCoffee?.roaster?.location" class="space-y-2">
                <h4 class="text-sm font-medium text-gray-900">Location</h4>
                <p class="text-sm text-gray-600">{{ selectedCoffee.roaster.location }}</p>
              </div>

              <!-- Roaster Description -->
              <div v-if="selectedCoffee?.roaster?.description" class="space-y-2">
                <h4 class="text-sm font-medium text-gray-900">About the Roaster</h4>
                <p class="text-sm text-gray-600">{{ selectedCoffee.roaster.description }}</p>
              </div>
            </div>

            <!-- Shipping Information -->
            <div class="space-y-4">
              <h3 class="font-medium text-gray-900">Shipping & Pricing</h3>
              
              <div class="bg-gray-50 rounded-lg p-4 space-y-3">
                <div v-if="selectedCoffee?.roaster?.shippingCostStandard" class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Standard Shipping</span>
                  <span class="font-medium">${{ selectedCoffee.roaster.shippingCostStandard }}</span>
                </div>

                <div v-if="selectedCoffee?.roaster?.freeShippingThreshold" class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">Free Shipping Over</span>
                  <span class="font-medium text-green-600">${{ selectedCoffee.roaster.freeShippingThreshold }}</span>
                </div>

                <div v-if="!selectedCoffee?.roaster?.shippingCostStandard && !selectedCoffee?.roaster?.freeShippingThreshold" class="text-sm text-gray-500 text-center py-2">
                  Shipping information not available
                </div>
              </div>
            </div>

            <!-- Discounts -->
            <div v-if="selectedCoffee?.roaster?.subscriptionDiscount || selectedCoffee?.roaster?.signupDiscount" class="space-y-4">
              <h3 class="font-medium text-gray-900">Available Discounts</h3>
              
              <div class="space-y-3">
                <div v-if="selectedCoffee?.roaster?.signupDiscount" class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                    </svg>
                    <div>
                      <p class="font-medium text-blue-900">New Customer Discount</p>
                      <p class="text-sm text-blue-700">{{ selectedCoffee.roaster.signupDiscount }}% off your first order</p>
                    </div>
                  </div>
                </div>

                <div v-if="selectedCoffee?.roaster?.subscriptionDiscount" class="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    <div>
                      <p class="font-medium text-green-900">Subscription Discount</p>
                      <p class="text-sm text-green-700">{{ selectedCoffee.roaster.subscriptionDiscount }}% off recurring orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product Link -->
            <div v-if="selectedCoffee && getProductUrl(selectedCoffee)" class="pt-4 border-t">
              <a
                :href="getProductUrl(selectedCoffee)"
                target="_blank"
                class="block w-full bg-gray-700 text-white text-center py-3 px-4 rounded-md hover:bg-gray-500 transition-colors font-medium"
              >
                View Product Page
              </a>
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
import type { CoffeeListing, BrewingGuide } from '../db/schema'

// Reactive data
const allCoffees = ref<CoffeeListing[]>([])
const uniqueOrigins = ref<string[]>([])
const uniqueRoastTypes = ref<string[]>([])
const uniqueRoasters = ref<string[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

// Product details drawer state
const showProductDrawer = ref(false)
const selectedCoffee = ref<CoffeeListing | null>(null)
const brewingGuides = ref<BrewingGuide[]>([])

// Brewing guide admin form state
const showBrewingGuideForm = ref(false)
const showPasswordPrompt = ref(false)
const adminPassword = ref('')
const isAdminAuthenticated = ref(false)
const isSavingGuide = ref(false)
const brewingGuideForm = ref({
  water: '',
  grindSize: '',
  ratio: '',
  bloomTime: '',
  bloomWater: '',
  pourInstructions: '',
  totalTime: '',
  additionalNotes: ''
})

// No more frontend password storage needed

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

const openProductDrawer = async (coffee: CoffeeListing) => {
  selectedCoffee.value = coffee
  showProductDrawer.value = true
  
  // Load brewing guides for this coffee
  try {
    brewingGuides.value = await CoffeeAPI.getBrewingGuidesByCoffeeId(coffee.id)
  } catch (err) {
    console.error('Failed to load brewing guides:', err)
    brewingGuides.value = []
  }
}

const closeProductDrawer = () => {
  showProductDrawer.value = false
  selectedCoffee.value = null
  brewingGuides.value = []
  showBrewingGuideForm.value = false
  showPasswordPrompt.value = false
  isAdminAuthenticated.value = false
  adminPassword.value = ''
  isSavingGuide.value = false
  resetBrewingGuideForm()
}

const checkAdminPassword = async () => {
  try {
    const isValid = await CoffeeAPI.validateAdminPassword(adminPassword.value)
    
    if (isValid) {
      isAdminAuthenticated.value = true
      showPasswordPrompt.value = false
      showBrewingGuideForm.value = true
      adminPassword.value = ''
    } else {
      alert('Incorrect password')
      adminPassword.value = ''
    }
  } catch (error) {
    console.error('Error validating password:', error)
    alert('Error validating password. Please try again.')
    adminPassword.value = ''
  }
}

const requestAdminAccess = () => {
  showPasswordPrompt.value = true
}

const resetBrewingGuideForm = () => {
  brewingGuideForm.value = {
    water: '',
    grindSize: '',
    ratio: '',
    bloomTime: '',
    bloomWater: '',
    pourInstructions: '',
    totalTime: '',
    additionalNotes: ''
  }
}

const submitBrewingGuide = async () => {
  if (!selectedCoffee.value || isSavingGuide.value) return
  
  try {
    isSavingGuide.value = true
    
    const newGuide = await CoffeeAPI.createBrewingGuide({
      coffeeId: selectedCoffee.value.id,
      ...brewingGuideForm.value
    })
    
    if (newGuide) {
      brewingGuides.value.push(newGuide)
      resetBrewingGuideForm()
      showBrewingGuideForm.value = false
    } else {
      alert('Failed to save brewing guide. Please try again.')
    }
  } catch (err) {
    console.error('Failed to create brewing guide:', err)
    alert('Error saving brewing guide. Please try again.')
  } finally {
    isSavingGuide.value = false
  }
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