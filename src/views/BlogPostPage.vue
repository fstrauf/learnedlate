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
      <div class="prose prose-lg prose-gray max-w-none mb-16 
                  prose-headings:font-light prose-headings:text-gray-900
                  prose-h1:text-4xl prose-h1:mb-8
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-4
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-ul:my-6 prose-li:my-2
                  prose-ol:my-6 prose-ol:list-decimal
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:italic
                  prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto
                  prose-table:my-8 prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2
                  prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
        <div v-html="renderedContent"></div>
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import SEOHead from '../components/SEOHead.vue'
import { getBlogPostBySlug, getBlogPostsByCategory, allBlogPosts, type BlogPost } from '../blog'

const route = useRoute()
const loading = ref(true)
const error = ref<string | null>(null)
const post = ref<BlogPost | null>(null)
const allPosts = ref<BlogPost[]>([])

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true
})

// Computed property to render markdown content
const renderedContent = computed(() => {
  if (!post.value?.content) return ''
  return marked(post.value.content)
})

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
    
    if (postData) {
      post.value = postData
      allPosts.value = allBlogPosts
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

<style scoped>
/* Enhanced typography styles for blog content */
.prose {
  line-height: 1.75;
}

.prose h2 {
  position: relative;
}

.prose h2::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
}

.prose blockquote {
  font-style: italic;
  position: relative;
}

.prose blockquote::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 3rem;
  color: #3b82f6;
  font-family: serif;
}

.prose code {
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace;
}

.prose pre code {
  background: transparent;
  padding: 0;
}

.prose table {
  border-collapse: collapse;
  width: 100%;
}

.prose th {
  background-color: #f9fafb;
  font-weight: 600;
  text-align: left;
}

.prose tr:nth-child(even) {
  background-color: #f9fafb;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .prose {
    font-size: 1rem;
  }
  
  .prose h1 {
    font-size: 2rem;
  }
  
  .prose h2 {
    font-size: 1.75rem;
  }
  
  .prose h3 {
    font-size: 1.5rem;
  }
}
</style> 