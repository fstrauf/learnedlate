<template>
  <div class="blog-post-page">
    <SEOHead 
      v-if="post"
      :title="post.title"
      :description="post.excerpt"
      :url="`/blog/${post.slug}`"
      type="article"
      :article="{
        publishedTime: post.publishDate,
        modifiedTime: post.publishDate,
        author: 'Florian Strauf',
        section: post.category,
        tags: post.tags
      }"
      :schema="articleSchema"
    />
    
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-gray-500">Loading...</div>
    </div>
    
    <div v-else-if="error" class="min-h-screen flex items-center justify-center">
      <div class="text-red-500">{{ error }}</div>
    </div>
    
    <article v-else-if="post" class="max-w-4xl mx-auto px-6 py-16">
      <!-- Breadcrumbs -->
      <nav class="mb-8">
        <ol class="flex items-center space-x-2 text-sm text-gray-500">
          <li><router-link to="/" class="hover:text-gray-700">Home</router-link></li>
          <li><span class="mx-2">/</span></li>
          <li><router-link to="/blog" class="hover:text-gray-700">Blog</router-link></li>
          <li><span class="mx-2">/</span></li>
          <li class="text-gray-900">{{ post.title }}</li>
        </ol>
      </nav>

      <!-- Article Header -->
      <header class="mb-12">
        <div class="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <span class="bg-gray-100 px-3 py-1 rounded-full">{{ post.category }}</span>
          <span>•</span>
                     <time :datetime="post.publishDate">{{ formatDate(post.publishDate) }}</time>
          <span>•</span>
          <span>{{ post.readingTime }} min read</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
          {{ post.title }}
        </h1>
        
        <p class="text-xl text-gray-600 leading-relaxed mb-8">
          {{ post.excerpt }}
        </p>

        <!-- Author Info -->
        <div class="flex items-center space-x-4 py-6 border-t border-b border-gray-200">
          <img 
            src="/learndlate.png" 
            alt="Florian Strauf" 
            class="w-12 h-12 rounded-full object-cover"
            loading="lazy"
          >
          <div>
            <div class="font-medium text-gray-900">Florian Strauf</div>
            <div class="text-sm text-gray-500">Fractional CTO & Technical Consultant</div>
          </div>
          <div class="flex-1"></div>
          <div class="flex space-x-3">
            <button 
              @click="shareArticle"
              class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              title="Share article"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <!-- Article Content -->
      <div class="prose prose-lg prose-gray max-w-none mb-16">
        <div v-html="post.content"></div>
      </div>

      <!-- Tags -->
      <div v-if="post.tags.length > 0" class="mb-12">
        <h3 class="text-sm font-medium text-gray-900 mb-4">Tags</h3>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in post.tags" 
            :key="tag" 
            class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Author Bio -->
      <div class="bg-gray-50 rounded-lg p-8 mb-16">
        <div class="flex items-start space-x-6">
          <img 
            src="/learndlate.png" 
            alt="Florian Strauf" 
            class="w-20 h-20 rounded-full object-cover flex-shrink-0"
            loading="lazy"
          >
          <div>
            <h3 class="text-xl font-medium text-gray-900 mb-2">About Florian Strauf</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Experienced fractional CTO and technical consultant helping New Zealand startups and businesses 
              accelerate their technology initiatives. Specializing in MVP development, technical due diligence, 
              and strategic technology guidance.
            </p>
            <div class="flex space-x-4">
              <router-link 
                to="/services" 
                class="text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                View Services →
              </router-link>
              <router-link 
                to="/cv" 
                class="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Experience →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Related Posts -->
    <section v-if="relatedPosts.length > 0" class="bg-gray-50 py-16">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-light text-center text-gray-900 mb-12">
          Related Articles
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="relatedPost in relatedPosts" 
            :key="relatedPost.slug"
            class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div class="p-6">
              <div class="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <span class="bg-gray-100 px-2 py-1 rounded">{{ relatedPost.category }}</span>
                <span>•</span>
                <span>{{ relatedPost.readingTime }} min read</span>
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-3">
                <router-link 
                  :to="`/blog/${relatedPost.slug}`" 
                  class="hover:text-gray-700 transition-colors duration-200"
                >
                  {{ relatedPost.title }}
                </router-link>
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ relatedPost.excerpt }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-light mb-6">
          Stay Updated with Technology Insights
        </h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Get the latest articles on technology leadership, startup strategy, and product development 
          delivered directly to your inbox.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="flex-1 px-4 py-3 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          >
          <button class="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
            Subscribe
          </button>
        </div>
        <p class="text-sm text-gray-400 mt-4">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getBlogPostBySlug, allBlogPosts } from '../blog'
import type { BlogPost } from '../blog'
import SEOHead from '../components/SEOHead.vue'

const route = useRoute()
const post = ref<BlogPost | null>(null)
const allPosts = ref<BlogPost[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const relatedPosts = computed(() => {
  if (!post.value || allPosts.value.length === 0) return []
  
  return allPosts.value
    .filter(p => p.slug !== post.value!.slug && p.category === post.value!.category)
    .slice(0, 3)
})

const articleSchema = computed(() => {
  if (!post.value) return []
  
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `https://learnedlate.com/blog/${post.value.slug}#article`,
      "headline": post.value.title,
      "description": post.value.excerpt,
      "image": "https://learnedlate.com/learndlate.png",
      "author": {
        "@type": "Person",
        "@id": "https://learnedlate.com/#person",
        "name": "Florian Strauf"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://learnedlate.com/#organization"
      },
             "datePublished": post.value.publishDate,
       "dateModified": post.value.publishDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://learnedlate.com/blog/${post.value.slug}`
      },
      "articleSection": post.value.category,
      "keywords": post.value.tags.join(", "),
             "wordCount": Math.ceil((post.value.content || '').replace(/<[^>]*>/g, '').split(' ').length),
      "timeRequired": `PT${post.value.readingTime}M`,
      "inLanguage": "en-NZ",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://learnedlate.com/blog#blog"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://learnedlate.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://learnedlate.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.value.title,
          "item": `https://learnedlate.com/blog/${post.value.slug}`
        }
      ]
    }
  ]
})

onMounted(async () => {
  try {
    const slug = route.params.slug as string
         const postData = getBlogPostBySlug(slug)
     const allPostsData = allBlogPosts
    
    if (postData) {
      post.value = postData
      allPosts.value = allPostsData
    } else {
      error.value = 'Post not found'
    }
  } catch (err) {
    error.value = 'Failed to load post'
    console.error('Error loading post:', err)
  } finally {
    loading.value = false
  }
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const shareArticle = () => {
  if (navigator.share && post.value) {
    navigator.share({
      title: post.value.title,
      text: post.value.excerpt,
      url: window.location.href
    })
  } else if (post.value) {
    // Fallback to copying URL to clipboard
    navigator.clipboard.writeText(window.location.href)
    // You could show a toast notification here
  }
}
</script>

<style>
.prose {
  color: #374151;
  line-height: 1.75;
}

.prose h2 {
  font-size: 1.875rem;
  font-weight: 300;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  margin-bottom: 1.25rem;
}

.prose ul, .prose ol {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose a {
  color: #1f2937;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
}

.prose a:hover {
  text-decoration-thickness: 2px;
}

.prose blockquote {
  border-left: 4px solid #e5e7eb;
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #6b7280;
}

.prose code {
  background-color: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

.prose pre {
  background-color: #1f2937;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}
</style> 