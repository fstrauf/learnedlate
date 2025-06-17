<template>
  <div class="home-page">
    <SEOHead 
      title="Florian Strauf - Fractional CTO & Technical Consultant"
      description="Expert fractional CTO, technical advisor, and consultant specializing in MVP development, technical due diligence, and strategic technology guidance for New Zealand businesses."
      url="/"
      type="website"
      :schema="homeSchema"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-light mb-6 leading-tight">
            Strategic Technology Leadership for <span class="text-gray-300">Growing Businesses</span>
          </h1>
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Experienced fractional CTO and technical consultant helping New Zealand startups and businesses 
            accelerate their technology initiatives, build winning products, and scale effectively.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/services" 
              class="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Explore Services
            </router-link>
            <a 
              href="mailto:f.strauf@gmail.com" 
              class="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-light text-center text-gray-900 mb-12">
            How I Help Your Business Succeed
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-medium text-gray-900 mb-4">Fractional CTO Services</h3>
              <p class="text-gray-600 leading-relaxed">
                Get strategic technology leadership without the full-time commitment. Perfect for startups needing senior-level guidance.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-medium text-gray-900 mb-4">MVP Development</h3>
              <p class="text-gray-600 leading-relaxed">
                Transform your ideas into market-ready products quickly. Specializing in lean development and rapid prototyping.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-medium text-gray-900 mb-4">Technical Due Diligence</h3>
              <p class="text-gray-600 leading-relaxed">
                Comprehensive technical assessments for investors, acquirers, and businesses evaluating technology assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-light text-gray-900 mb-6">
                Experienced Technology Leader
              </h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                With years of experience leading technology teams and building scalable products, I help businesses 
                navigate complex technical challenges and accelerate their growth through strategic technology decisions.
              </p>
              <p class="text-gray-600 mb-8 leading-relaxed">
                Based in New Zealand, I work with startups and established companies across Auckland, Wellington, 
                Christchurch, and internationally, providing both remote and on-site consultation.
              </p>
              <router-link 
                to="/cv" 
                class="inline-block border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:border-gray-400 transition-colors duration-200"
              >
                View Experience
              </router-link>
            </div>
            <div class="text-center">
              <div class="bg-gray-100 rounded-lg p-8">
                <h3 class="text-lg font-medium text-gray-900 mb-4">🇳🇿 New Zealand Based</h3>
                <p class="text-gray-600 text-sm mb-6">
                  Local expertise with global experience, serving businesses across New Zealand and internationally.
                </p>
                <div class="space-y-2 text-sm text-gray-500">
                  <div>🏙️ Auckland Business Hub</div>
                  <div>🏛️ Wellington Capital</div>
                  <div>🏔️ Christchurch South Island</div>
                  <div>🌐 Remote Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Blog Posts -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between items-center mb-12">
            <h2 class="text-3xl font-light text-gray-900">Latest Insights</h2>
            <router-link 
              to="/blog" 
              class="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              View All Posts →
            </router-link>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div class="p-6">
                <div class="text-sm text-gray-500 mb-2">January 15, 2024</div>
                <h3 class="text-lg font-medium text-gray-900 mb-3">
                  <router-link to="/blog/when-to-hire-fractional-cto" class="hover:text-gray-700">
                    When to Hire a Fractional CTO
                  </router-link>
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Strategic guidance on when startups should consider bringing in fractional CTO expertise...
                </p>
              </div>
            </article>
            <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div class="p-6">
                <div class="text-sm text-gray-500 mb-2">February 1, 2024</div>
                <h3 class="text-lg font-medium text-gray-900 mb-3">
                  <router-link to="/blog/mvp-development-best-practices" class="hover:text-gray-700">
                    MVP Development Best Practices
                  </router-link>
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Essential strategies for building successful minimum viable products that attract users...
                </p>
              </div>
            </article>
            <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div class="p-6">
                <div class="text-sm text-gray-500 mb-2">February 15, 2024</div>
                <h3 class="text-lg font-medium text-gray-900 mb-3">
                  <router-link to="/blog/technical-due-diligence-checklist" class="hover:text-gray-700">
                    Technical Due Diligence Checklist
                  </router-link>
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Comprehensive guide for investors evaluating technology assets during acquisitions...
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-light mb-6">
          Ready to Accelerate Your Technology Strategy?
        </h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether you need strategic guidance, hands-on development, or technical assessment, 
          I'm here to help your business succeed.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/services" 
            class="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Explore Services
          </router-link>
          <a 
            href="mailto:f.strauf@gmail.com" 
            class="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'

// Home page schema markup
const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://learnedlate.com/#webpage",
    "url": "https://learnedlate.com",
    "name": "Florian Strauf - Fractional CTO & Technical Consultant",
    "description": "Expert fractional CTO, technical advisor, and consultant specializing in MVP development, technical due diligence, and strategic technology guidance for New Zealand businesses.",
    "inLanguage": "en-NZ",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://learnedlate.com/#website"
    },
    "about": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    },
    "mainEntity": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://learnedlate.com/#website",
    "url": "https://learnedlate.com",
    "name": "LearnedLate",
    "description": "Professional fractional CTO and technical consulting services",
    "inLanguage": "en-NZ",
    "publisher": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    }
  }
]
</script>

<style scoped>
/* Add specific styles for the homepage if needed */
/* Example: Custom animation */
/* @keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

div > * {
  animation: fadeIn 0.8s ease-out forwards;
} */
</style> 