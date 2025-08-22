
// Example: Tea scraper configuration
export const TeaScraperConfig = {
  productKeywords: [
    'tea', 'chai', 'matcha', 'oolong', 'sencha', 'green-tea', 'black-tea',
    'white-tea', 'pu-erh', 'earl-grey', 'jasmine', 'chamomile', 'rooibos'
  ],
  excludeKeywords: [
    'teapot', 'strainer', 'infuser', 'cup', 'mug', 'kettle', 'accessories'
  ],
  collectionPathPatterns: [
    '/teas/', '/tea/', '/loose-leaf/', '/tea-bags/', '/herbal/'
  ]
}

// Example: Specialty wine scraper configuration  
export const WineScraperConfig = {
  productKeywords: [
    'wine', 'red-wine', 'white-wine', 'rosé', 'champagne', 'sparkling',
    'pinot-noir', 'chardonnay', 'sauvignon-blanc', 'merlot', 'cabernet'
  ],
  excludeKeywords: [
    'glass', 'opener', 'decanter', 'accessory', 'gift-card'
  ]
}

// Example: Regional NZ coffee customization
export const NZCoffeeConfig = {
  productKeywords: [
    'flat-white', 'long-black', 'kiwi-coffee', 'aotearoa',
    'new-zealand-roasted', 'nz-origin'
  ],
  collectionPathPatterns: [
    '/coffee-nz/', '/kiwi-roasts/', '/aotearoa/'
  ]
}

// Example: Custom e-commerce platform
export const CustomPlatformConfig = {
  apiEndpointPatterns: [{
    name: 'my-custom-platform',
    urlPattern: '/my-products/',
    pathCheck: (url: string) => url.includes('mycustomstore.com'),
    buildApiUrl: (baseUrl: string, _collectionUrl: string) => [
      `${baseUrl}/api/v2/products.json`,
      `${baseUrl}/rest/products`
    ]
  }]
}

// Usage examples:
// CoffeeScraper.setConfig(TeaScraperConfig)
// CoffeeScraper.setConfig(WineScraperConfig) 
// CoffeeScraper.setConfig(NZCoffeeConfig)
// CoffeeScraper.setConfig(CustomPlatformConfig)