<template>
  <div class="blog-page">
    <SEOHead 
      title="AI Strategy & Business Technology Blog | LearnedLate NZ"
      description="Practical guides on AI readiness assessment, workflow automation implementation, and technology strategy for New Zealand and Australian mid-market businesses."
      url="/blog"
      type="website"
      :schema="blogSchema"
    />
    
    <div class="min-h-screen bg-gray-50 py-12 sm:py-16">
      <div class="container mx-auto px-2 sm:px-4 lg:px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Header Section -->
          <div class="text-center mb-12 sm:mb-16">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight px-2">
              AI Strategy & Business Technology Insights
            </h1>
            <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Practical guides and expert insights on AI readiness, workflow automation, and technology 
              strategy for New Zealand and Australian mid-market businesses.
            </p>
          </div>

          <!-- Introduction Section -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
            <div class="prose prose-lg max-w-none text-gray-600 font-light">
              <p class="mb-4">
                Welcome to the LearnedLate blog — your resource for practical AI and technology guidance 
                tailored for mid-market businesses in New Zealand and Australia. Whether you're exploring 
                your first AI workflow, looking to automate repetitive processes, or seeking strategic 
                technology advice, you'll find actionable insights here.
              </p>
              <p class="mb-4">
                Our articles cover three core areas: <router-link to="/services/strategy" class="text-gray-900 font-medium hover:text-gray-700 underline">AI readiness assessment</router-link> 
                to help you identify the right starting point, <router-link to="/services/implementation" class="text-gray-900 font-medium hover:text-gray-700 underline">workflow automation implementation</router-link> 
                to streamline your operations, and <router-link to="/services/engineering" class="text-gray-900 font-medium hover:text-gray-700 underline">custom engineering</router-link> 
                when off-the-shelf solutions fall short.
              </p>
              <p>
                Browse our latest articles below, filter by category, or 
                <router-link to="/contact" class="text-gray-900 font-medium hover:text-gray-700 underline">get in touch</router-link> 
                to discuss your specific business challenges.
              </p>
            </div>
          </div>

          <!-- Category Filter -->
          <div class="flex justify-center mb-12">
            <div class="flex flex-wrap justify-center gap-2 bg-white rounded-lg p-3 sm:p-2 shadow-sm border border-gray-200 max-w-full">
              <Button
                @click="selectedCategory = ''"
                :variant="selectedCategory === '' ? 'default' : 'ghost'"
                size="sm"
                class="whitespace-nowrap"
              >
                All Posts
              </Button>
              <Button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :variant="selectedCategory === category ? 'default' : 'ghost'"
                size="sm"
                class="whitespace-nowrap"
              >
                {{ category }}
              </Button>
            </div>
          </div>

          <!-- Blog Posts Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <article
              v-for="post in filteredPosts"
              :key="post.slug"
              class="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div class="p-6 sm:p-8">
                <!-- Meta Info -->
                <div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                  <span class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    {{ post.category }}
                  </span>
                  <span class="text-gray-500 text-sm">
                    {{ formatDate(post.publishDate) }}
                  </span>
                </div>

                <!-- Title and Excerpt -->
                <h2 class="text-lg sm:text-xl font-medium text-gray-900 mb-3 leading-tight">
                  <router-link 
                    :to="`/blog/${post.slug}`" 
                    class="hover:text-gray-700 transition-colors"
                  >
                    {{ post.title }}
                  </router-link>
                </h2>
                
                <p class="text-gray-600 mb-6 line-clamp-3 leading-relaxed font-light text-sm sm:text-base">
                  {{ post.excerpt }}
                </p>

                <!-- Footer -->
                <div class="flex items-center justify-between text-sm">
                  <div class="flex items-center space-x-2">
                    <span class="text-gray-500">{{ post.readingTime }} min read</span>
                  </div>
                  <router-link 
                    :to="`/blog/${post.slug}`"
                    class="text-gray-900 font-medium hover:text-gray-700 transition-colors"
                  >
                    Read More →
                  </router-link>
                </div>

                <!-- Tags -->
                <div v-if="post.tags.length > 0" class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  <span 
                    v-for="tag in post.tags.slice(0, 3)" 
                    :key="tag" 
                    class="inline-block px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </article>
          </div>

          <!-- Empty State -->
          <div v-if="filteredPosts.length === 0" class="text-center py-16">
            <h3 class="text-2xl font-light text-gray-900 mb-4">No posts found</h3>
            <p class="text-gray-600 mb-8">Try selecting a different category or check back later for new content.</p>
            <Button
              @click="selectedCategory = ''"
              variant="default"
            >
              View All Posts
            </Button>
          </div>

          <!-- Resources & Services Section -->
          <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Free Resources -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 class="text-2xl font-medium text-gray-900 mb-4">Free Resources</h2>
              <p class="text-gray-600 font-light mb-6">
                Download practical tools to accelerate your AI journey. Our free resources are designed 
                specifically for New Zealand and Australian businesses ready to explore AI and automation.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <span class="text-gray-900 mr-2">→</span>
                  <router-link to="/ai-readiness-checklist" class="text-gray-700 hover:text-gray-900 font-medium">
                    AI Readiness Checklist
                  </router-link>
                </li>
                <li class="flex items-start">
                  <span class="text-gray-900 mr-2">→</span>
                  <router-link to="/projects" class="text-gray-700 hover:text-gray-900 font-medium">
                    Explore Our Projects & Tools
                  </router-link>
                </li>
                <li class="flex items-start">
                  <span class="text-gray-900 mr-2">→</span>
                  <router-link to="/case-studies" class="text-gray-700 hover:text-gray-900 font-medium">
                    Read Client Case Studies
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Our Services -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 class="text-2xl font-medium text-gray-900 mb-4">How We Can Help</h2>
              <p class="text-gray-600 font-light mb-6">
                From initial strategy to full implementation, we partner with mid-market businesses 
                across ANZ to deliver measurable AI and automation outcomes.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <span class="text-gray-900 mr-2">→</span>
                  <router-link to="/services/strategy" class="text-gray-700 hover:text-gray-900 font-medium">
                    AI Strategy & Readiness Assessment
                  </router-link>
                </li>
                <li class="flex items-start">
                  <span class="text-gray-900 mr-2">→</span>
                  <router-link to="/services/implementation" class="text-gray-700 hover:text-gray-900 font-medium">
                    Workflow Automation Implementation
                  </router-link>
                </li>
                <li class="flex items-start">
                  <span class="text-gray-900 mr-2">→</span>
                  <router-link to="/services/engineering" class="text-gray-700 hover:text-gray-900 font-medium">
                    Custom AI Development & Engineering
                  </router-link>
                </li>
              </ul>
              <router-link 
                to="/contact" 
                class="inline-block text-gray-900 font-medium hover:text-gray-700 transition-colors"
              >
                Book a Free Consultation →
              </router-link>
            </div>
          </div>

          <!-- About the Author -->
          <div class="mt-12 bg-gray-900 rounded-lg p-8 text-white">
            <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div class="flex-1">
                <h2 class="text-2xl font-medium mb-3">About LearnedLate</h2>
                <p class="text-gray-300 font-light mb-4">
                  We help New Zealand and Australian mid-market businesses cut through the AI hype and 
                  implement practical solutions that deliver real results. With deep expertise in both 
                  enterprise SAP environments and startup agility, we bring a unique perspective to every engagement.
                </p>
                <div class="flex flex-wrap gap-4">
                  <router-link to="/about" class="text-white font-medium hover:text-gray-300 underline">
                    Learn more about us
                  </router-link>
                  <router-link to="/contact" class="text-white font-medium hover:text-gray-300 underline">
                    Get in touch
                  </router-link>
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
import { ref, computed } from 'vue'
import { allBlogPosts, getAllCategories, type BlogPost } from '../blog'
import SEOHead from '../components/SEOHead.vue'
import { Button } from '@/components/ui/button'

const selectedCategory = ref('')
const posts = ref<BlogPost[]>(allBlogPosts)
const categories = ref<string[]>(getAllCategories())

const filteredPosts = computed(() => {
  if (!selectedCategory.value) {
    return posts.value
  }
  return posts.value.filter(post => post.category === selectedCategory.value)
})

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Blog schema markup
const blogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.learnedlate.com/blog#blog",
    "url": "https://www.learnedlate.com/blog",
    "name": "AI Strategy & Business Technology Blog",
    "description": "Practical guides on AI readiness assessment, workflow automation implementation, and technology strategy for New Zealand and Australian mid-market businesses",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.learnedlate.com/#organization"
    },
    "inLanguage": "en-NZ",
    "blogPost": posts.value.map(post => ({
      "@type": "BlogPosting",
      "@id": `https://www.learnedlate.com/blog/${post.slug}#article`,
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://www.learnedlate.com/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "author": {
        "@type": "Person",
        "@id": "https://www.learnedlate.com/#person"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.learnedlate.com/#organization"
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.learnedlate.com/blog#webpage",
    "url": "https://www.learnedlate.com/blog",
    "name": "AI Strategy & Business Technology Blog",
    "description": "Practical guides on AI readiness assessment, workflow automation implementation, and technology strategy for New Zealand and Australian mid-market businesses",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.learnedlate.com/#website"
    },
    "about": {
      "@type": "Organization",
      "@id": "https://www.learnedlate.com/#organization"
    }
  }
]
</script>

<style scoped>
/* Custom styles for line clamping */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 