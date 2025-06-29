<template>
  <div class="home-page">
    <SEOHead 
      title="Florian Strauf - Developer & Tech Consultant"
      description="Personal portfolio of Florian Strauf, featuring development projects, technical insights, and consulting services."
      url="/"
      type="website"
      :schema="homeSchema"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-light mb-6 leading-tight">
            I help businesses implement AI automation that actually works.
          </h1>
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Previously founded and sold a startup, then scaled another as CTO. Now building Expense Sorted and helping others build better, faster.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/services" 
              class="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Work With Me
            </router-link>
            <a 
              href="https://blog.learnedlate.com" 
              target="_blank"
              class="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Read My Writing
            </a>
            <a 
              href="https://calendar.notion.so/meet/florianstrauf/chat" 
              target="_blank"
              class="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Let's Chat →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between items-center mb-12">
            <h2 class="text-3xl font-light text-gray-900">Featured Projects</h2>
            <router-link 
              to="/projects" 
              class="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              View All Projects →
            </router-link>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article v-for="project in featuredProjects" :key="project.id" 
                     class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <div v-if="project.imageUrl" class="aspect-video bg-gray-100 overflow-hidden">
                <img :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover">
              </div>
              <div class="p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-3">
                  {{ project.title }}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-4">
                  {{ truncateDescription(project.description) }}
                </p>
                <div class="flex gap-2">
                  <a v-if="project.projectUrl" 
                     :href="project.projectUrl" 
                     target="_blank"
                     class="text-sm text-gray-600 hover:text-gray-900 border border-gray-300 px-3 py-1 rounded hover:border-gray-400 transition-colors duration-200">
                    Visit →
                  </a>
                  <router-link v-if="project.internalUrl" 
                               :to="project.internalUrl"
                               class="text-sm text-gray-600 hover:text-gray-900 border border-gray-300 px-3 py-1 rounded hover:border-gray-400 transition-colors duration-200">
                    Try It →
                  </router-link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Substack Feature -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-light text-gray-900 mb-6">
            Personal Finance & Life Writing
          </h2>
          <p class="text-gray-600 mb-8 leading-relaxed text-lg">
            I write regularly about personal finance, life lessons, and building wealth on my Substack newsletter.
          </p>
          <div class="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div class="flex items-center justify-center mb-6">
              <div class="bg-orange-100 p-3 rounded-full">
                <svg class="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.539 24V10.812H1.46zM12 15.75l-9.077 4.615V12.77H12v2.98zm9.077-2.98v7.596L12 15.75v-2.98h9.077z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-medium text-gray-900 mb-4">LearnedLate Newsletter</h3>
            <p class="text-gray-600 mb-6">
              Join thousands of readers getting weekly insights on personal finance, investing, and building a better financial future.
            </p>
            <a 
              href="https://blog.learnedlate.com" 
              target="_blank"
              class="inline-block bg-orange-600 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-700 transition-colors duration-200"
              @click="trackSubstackClick"
            >
              Read on Substack →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Blog Posts -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between items-center mb-12">
            <h2 class="text-3xl font-light text-gray-900">Technical Writing</h2>
            <router-link 
              to="/blog" 
              class="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              View Tech Posts →
            </router-link>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

    <!-- About Section -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-light text-gray-900 mb-6">
            About Me
          </h2>
          <p class="text-gray-600 mb-8 leading-relaxed text-lg">
            I'm a developer and technology consultant based in New Zealand. I enjoy building 
            useful tools, exploring new technologies, and sharing what I learn along the way.
          </p>
          <p class="text-gray-600 mb-8 leading-relaxed">
            When I'm not coding, I help businesses navigate technical challenges through 
            consulting and fractional CTO services.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/cv" 
              class="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:border-gray-400 transition-colors duration-200"
            >
              View CV
            </router-link>
            <a 
              href="mailto:f.strauf@gmail.com" 
              class="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'
import { projects } from '../data/projects'

// Show first 3 projects as featured
const featuredProjects = projects.slice(0, 3)

// Utility function to truncate project descriptions
const truncateDescription = (description: string, maxLength: number = 120) => {
  if (description.length <= maxLength) return description
  return description.substring(0, maxLength).trim() + '...'
}

// Track Substack clicks for analytics
const trackSubstackClick = () => {
  // PostHog will automatically track this click via autocapture
}

// Simplified home page schema markup
const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://learnedlate.com/#webpage",
    "url": "https://learnedlate.com",
    "name": "Florian Strauf - Developer & Tech Consultant",
    "description": "Personal portfolio of Florian Strauf, featuring development projects, technical insights, and consulting services.",
    "inLanguage": "en-NZ",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://learnedlate.com/#website"
    },
    "about": {
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
    "description": "Personal portfolio and technical blog of Florian Strauf",
    "inLanguage": "en-NZ",
    "publisher": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    }
  }
]
</script>

<style scoped>
/* Clean, minimal styles for the homepage */
</style> 