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
    
          <article v-else-if="post" class="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 py-12 sm:py-16">
      <!-- Breadcrumbs -->
      <nav class="mb-6 sm:mb-8">
        <ol class="flex flex-wrap items-center gap-1 sm:gap-2 text-sm text-gray-500">
          <li><router-link to="/" class="hover:text-gray-700">Home</router-link></li>
          <li><span class="mx-1 sm:mx-2">/</span></li>
          <li><router-link to="/blog" class="hover:text-gray-700">Blog</router-link></li>
          <li><span class="mx-1 sm:mx-2">/</span></li>
          <li class="text-gray-900 truncate max-w-[200px] sm:max-w-none">{{ post.title }}</li>
        </ol>
      </nav>

      <!-- Article Header -->
      <header class="mb-12 sm:mb-16">
        <div class="flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-gray-500 mb-6">
          <span class="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full font-medium shadow-sm border border-blue-200">
            {{ post.category }}
          </span>
          <span class="hidden sm:inline text-gray-300">•</span>
          <time :datetime="post.publishDate" class="font-medium">{{ formatDate(post.publishDate) }}</time>
          <span class="hidden sm:inline text-gray-300">•</span>
          <span class="flex items-center space-x-1 font-medium">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>{{ post.readingTime }} min read</span>
          </span>
        </div>
        
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 tracking-tight">
          {{ post.title }}
        </h1>
        
        <p class="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-4xl font-light">
          {{ post.excerpt }}
        </p>

        <!-- Author Info -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 sm:py-8 border-t border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-lg px-2 sm:px-4 lg:px-6">
          <div class="flex items-center space-x-3 sm:space-x-4">
            <img 
              src="/learndlate.png" 
              alt="Florian Strauf" 
              class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 sm:ring-4 ring-white shadow-lg flex-shrink-0"
              loading="lazy"
            >
            <div>
              <div class="font-semibold text-gray-900 text-base sm:text-lg">Florian Strauf</div>
              <div class="text-sm text-gray-600 font-medium">Fractional CTO & Technical Consultant</div>
            </div>
          </div>
          <div class="flex justify-center sm:justify-end">
            <button 
              @click="shareArticle"
              class="bg-white text-gray-600 hover:text-gray-900 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300 group"
              title="Share article"
            >
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <!-- Article Content -->
      <div class="prose prose-lg sm:prose-xl prose-slate max-w-none mb-12 sm:mb-16 
                  prose-headings:font-normal prose-headings:tracking-tight
                  prose-h1:text-3xl sm:prose-h1:text-4xl lg:prose-h1:text-5xl prose-h1:mb-6 sm:prose-h1:mb-8 prose-h1:font-bold prose-h1:text-gray-900 prose-h1:leading-tight
                  prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 sm:prose-h2:mt-16 prose-h2:mb-6 sm:prose-h2:mb-8 prose-h2:font-semibold prose-h2:text-gray-900 prose-h2:border-b-0 prose-h2:pb-0 prose-h2:leading-tight
                  prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 sm:prose-h3:mt-12 prose-h3:mb-4 sm:prose-h3:mb-6 prose-h3:font-semibold prose-h3:text-gray-800 prose-h3:leading-tight
                  prose-h4:text-lg sm:prose-h4:text-xl prose-h4:mt-6 sm:prose-h4:mt-8 prose-h4:mb-3 sm:prose-h4:mb-4 prose-h4:font-medium prose-h4:text-gray-800
                  prose-h5:text-base sm:prose-h5:text-lg prose-h5:mt-4 sm:prose-h5:mt-6 prose-h5:mb-2 sm:prose-h5:mb-3 prose-h5:font-medium prose-h5:text-gray-700
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 sm:prose-p:mb-6 prose-p:text-base sm:prose-p:text-lg
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-em:text-gray-800 prose-em:font-medium
                  prose-ul:my-8 prose-ul:space-y-2 prose-li:my-1 prose-li:text-gray-700 prose-li:leading-relaxed
                  prose-ol:my-8 prose-ol:space-y-2 prose-ol:list-decimal
                  prose-blockquote:border-l-0 prose-blockquote:bg-gradient-to-r prose-blockquote:from-blue-50 prose-blockquote:to-indigo-50 prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:rounded-r-lg prose-blockquote:shadow-sm
                  prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800 prose-code:border prose-code:border-gray-200
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:shadow-lg prose-pre:border prose-pre:border-gray-700
                  prose-table:my-8 prose-table:shadow-sm prose-table:border prose-table:border-gray-200 prose-table:rounded-lg prose-table:overflow-hidden
                  prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:px-6 prose-th:py-4 prose-th:font-semibold prose-th:text-gray-900
                  prose-td:border prose-td:border-gray-200 prose-td:px-6 prose-td:py-4 prose-td:text-gray-700
                  prose-a:text-blue-600 prose-a:no-underline prose-a:font-medium hover:prose-a:text-blue-800 hover:prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2
                  prose-img:rounded-lg prose-img:shadow-md prose-img:my-8">
        <div v-html="renderedContent" class="blog-content"></div>
      </div>

      <!-- Tags -->
      <div v-if="post.tags.length > 0" class="mb-16">
        <h3 class="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          Related Topics
        </h3>
        <div class="flex flex-wrap gap-3">
          <span 
            v-for="tag in post.tags" 
            :key="tag" 
            class="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 transition-all duration-200 cursor-default shadow-sm"
          >
            #{{ tag }}
          </span>
        </div>
      </div>

      <!-- Author Bio -->
      <div class="bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-2xl p-10 mb-16 border border-gray-200 shadow-sm">
        <div class="flex items-start space-x-8">
          <img 
            src="/learndlate.png" 
            alt="Florian Strauf" 
            class="w-24 h-24 rounded-full object-cover flex-shrink-0 ring-4 ring-white shadow-lg"
            loading="lazy"
          >
          <div class="flex-1">
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">About Florian Strauf</h3>
            <p class="text-gray-700 leading-relaxed mb-6 text-lg">
              Experienced fractional CTO and technical consultant helping New Zealand startups and businesses 
              accelerate their technology initiatives. Specializing in MVP development, technical due diligence, 
              and strategic technology guidance.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link 
                to="/services" 
                class="inline-flex items-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                View Services
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </router-link>
              <router-link 
                to="/cv" 
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Experience
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import SEOHead from '../components/SEOHead.vue'
import { getBlogPostBySlug, allBlogPosts, type BlogPost } from '../blog'

const route = useRoute()
const loading = ref(true)
const error = ref<string | null>(null)
const post = ref<BlogPost | null>(null)

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
  if (!post.value) return []
  
  return allBlogPosts
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

// Handle navigation to related articles within the same component instance
watch(
  () => route.params.slug,
  (newSlug) => {
    if (!newSlug || typeof newSlug !== 'string') return
    loading.value = true
    error.value = null
    const postData = getBlogPostBySlug(newSlug)
    if (postData) {
      post.value = postData
      // scroll to top on article change
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      error.value = 'Post not found'
    }
    loading.value = false
  }
)

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
/* Enhanced typography and visual styling for blog content */
.prose {
  line-height: 1.8;
  font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
  text-rendering: optimizeLegibility;
}

/* Advanced heading styles with visual hierarchy */
.prose h2 {
  position: relative;
  padding-top: 1rem;
}

.prose h2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8, #7c3aed);
  border-radius: 2px;
  margin-bottom: 1rem;
}

.prose h3 {
  position: relative;
  padding-left: 1rem;
}

.prose h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: linear-gradient(135deg, #3b82f6, #7c3aed);
  border-radius: 2px;
}

/* Enhanced blockquote styling */
.prose blockquote {
  position: relative;
  border-left: 4px solid transparent;
  background: linear-gradient(135deg, #eff6ff, #e0f2fe);
  border-image: linear-gradient(135deg, #3b82f6, #0ea5e9) 1;
}

.prose blockquote::before {
  content: '"';
  position: absolute;
  top: -8px;
  left: 16px;
  font-size: 4rem;
  color: #3b82f6;
  font-family: 'Georgia', serif;
  font-weight: bold;
  opacity: 0.3;
  line-height: 1;
}

.prose blockquote p {
  font-size: 1.1rem;
  font-style: italic;
  color: #374151;
  margin-top: 1.5rem;
}

/* Enhanced code styling */
.prose code {
  font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace;
  font-weight: 500;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.prose pre {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: relative;
}

.prose pre::before {
  content: '';
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 12px;
  height: 12px;
  background: #ef4444;
  border-radius: 50%;
  box-shadow: 20px 0 0 #f59e0b, 40px 0 0 #22c55e;
}

.prose pre code {
  background: transparent;
  padding: 0;
  border: none;
  box-shadow: none;
  font-size: 0.9rem;
  line-height: 1.6;
  padding-top: 2rem;
}

/* Enhanced list styling */
.prose ul > li {
  position: relative;
  padding-left: 0.5rem;
}

.prose ul > li::before {
  content: '';
  position: absolute;
  left: -1rem;
  top: 0.7rem;
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, #3b82f6, #7c3aed);
  border-radius: 50%;
  transform: translateY(-50%);
}

.prose ol > li {
  position: relative;
  counter-increment: item;
}

.prose ol > li::before {
  content: counter(item);
  position: absolute;
  left: -2rem;
  top: 0.1rem;
  background: linear-gradient(135deg, #3b82f6, #7c3aed);
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Enhanced table styling */
.prose table {
  background: white;
  overflow: hidden;
}

.prose th {
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  position: relative;
}

.prose th::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #7c3aed);
}

.prose tr:hover {
  background-color: #f8fafc;
  transition: background-color 0.2s ease;
}

/* Enhanced link styling */
.prose a {
  position: relative;
  transition: all 0.3s ease;
}

.prose a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #7c3aed);
  transition: width 0.3s ease;
}

.prose a:hover::after {
  width: 100%;
}

/* Image enhancements */
.prose img {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.prose img:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Reading progress indicator (optional) */
.blog-content {
  position: relative;
}

/* Enhanced paragraph styling */
.prose p {
  text-align: justify;
  hyphens: auto;
}

.prose p:first-of-type {
  font-size: 1.2rem;
  color: #4b5563;
  font-weight: 400;
}

/* Enhanced strong and em styling */
.prose strong {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(124, 58, 237, 0.1));
  padding: 2px 4px;
  border-radius: 3px;
  border-left: 3px solid #3b82f6;
}

.prose em {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(59, 130, 246, 0.05));
  padding: 1px 3px;
  border-radius: 2px;
}

/* Responsive enhancements */
@media (max-width: 1024px) {
  .prose {
    font-size: 1rem;
  }
  
  .prose h2::before {
    width: 40px;
    height: 2px;
  }
  
  .prose blockquote::before {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .prose {
    font-size: 0.95rem;
    line-height: 1.7;
  }
  
  .prose h1 {
    font-size: 2.5rem;
  }
  
  .prose h2 {
    font-size: 2rem;
    margin-top: 3rem;
  }
  
  .prose h3 {
    font-size: 1.5rem;
    margin-top: 2rem;
    padding-left: 0.75rem;
  }
  
  .prose h3::before {
    width: 3px;
    height: 20px;
  }
  
  .prose blockquote {
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
  }
  
  .prose blockquote::before {
    font-size: 2.5rem;
    left: 12px;
  }
  
  .prose pre {
    padding: 1rem;
    font-size: 0.85rem;
  }
  
  .prose pre::before {
    top: 0.75rem;
    left: 0.75rem;
    width: 8px;
    height: 8px;
    box-shadow: 15px 0 0 #f59e0b, 30px 0 0 #22c55e;
  }
  
  .prose ul > li,
  .prose ol > li {
    margin: 0.5rem 0;
  }
  
  .prose ol > li::before {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 0.7rem;
    left: -1.75rem;
  }
  
  .prose table {
    font-size: 0.9rem;
  }
  
  .prose th,
  .prose td {
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .prose {
    font-size: 0.9rem;
  }
  
  .prose h1 {
    font-size: 2rem;
  }
  
  .prose h2 {
    font-size: 1.75rem;
  }
  
  .prose h3 {
    font-size: 1.25rem;
  }
  
  .prose p:first-of-type {
    font-size: 1rem;
  }
  
  .prose blockquote {
    padding: 0.75rem 1rem;
  }
  
  .prose pre {
    padding: 0.75rem;
  }
}

/* Print styles */
@media print {
  .prose {
    font-size: 12pt;
    line-height: 1.6;
  }
  
  .prose h2::before,
  .prose h3::before {
    display: none;
  }
  
  .prose blockquote::before {
    display: none;
  }
  
  .prose pre::before {
    display: none;
  }
  
  .prose a::after {
    display: none;
  }
  
  .prose img {
    max-width: 100% !important;
    height: auto !important;
  }
}
</style> 