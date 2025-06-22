<template>
  <div class="blog-page">
    <SEOHead 
      title="Technology Leadership Blog - Insights & Best Practices"
      description="Expert insights on fractional CTO services, MVP development, technical due diligence, and technology leadership from an experienced consultant serving New Zealand businesses."
      url="/blog"
      type="website"
      :schema="blogSchema"
    />
    
    <div class="min-h-screen bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Header Section -->
          <div class="text-center mb-16">
            <h1 class="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Technology Leadership Insights
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Expert insights on fractional CTO services, MVP development, technical strategy, and 
              business growth from an experienced technology consultant.
            </p>
          </div>

          <!-- Category Filter -->
          <div class="flex justify-center mb-12">
            <div class="flex space-x-2 bg-white rounded-lg p-2 shadow-sm border border-gray-200">
              <button
                @click="selectedCategory = ''"
                :class="[
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  selectedCategory === '' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                ]"
              >
                All Posts
              </button>
              <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="[
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  selectedCategory === category 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                ]"
              >
                {{ category }}
              </button>
            </div>
          </div>

          <!-- Blog Posts Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              v-for="post in filteredPosts"
              :key="post.slug"
              class="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div class="p-8">
                <!-- Meta Info -->
                <div class="flex items-center space-x-3 mb-4">
                  <span class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                    {{ post.category }}
                  </span>
                  <span class="text-gray-500 text-sm">
                    {{ formatDate(post.publishDate) }}
                  </span>
                </div>

                <!-- Title and Excerpt -->
                <h2 class="text-xl font-medium text-gray-900 mb-3 leading-tight">
                  <router-link 
                    :to="`/blog/${post.slug}`" 
                    class="hover:text-gray-700 transition-colors"
                  >
                    {{ post.title }}
                  </router-link>
                </h2>
                
                <p class="text-gray-600 mb-6 line-clamp-3 leading-relaxed font-light">
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
            <button
              @click="selectedCategory = ''"
              class="inline-block bg-gray-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Posts
            </button>
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
    "@id": "https://learnedlate.com/blog#blog",
    "url": "https://learnedlate.com/blog",
    "name": "Technology Leadership Blog",
    "description": "Expert insights on fractional CTO services, MVP development, technical due diligence, and technology leadership",
    "publisher": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    },
    "inLanguage": "en-NZ",
    "blogPost": posts.value.map(post => ({
      "@type": "BlogPosting",
      "@id": `https://learnedlate.com/blog/${post.slug}#article`,
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://learnedlate.com/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "author": {
        "@type": "Person",
        "@id": "https://learnedlate.com/#person"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://learnedlate.com/#organization"
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://learnedlate.com/blog#webpage",
    "url": "https://learnedlate.com/blog",
    "name": "Technology Leadership Blog",
    "description": "Expert insights on fractional CTO services, MVP development, technical due diligence, and technology leadership",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://learnedlate.com/#website"
    },
    "about": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
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