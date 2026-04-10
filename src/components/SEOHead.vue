<template>
  <!-- This component handles all SEO meta tags and schema markup -->
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    section?: string
    tags?: string[]
  }
  schema?: object[]
}

const props = withDefaults(defineProps<SEOProps>(), {
  title: 'LearnedLate – AI Strategy-to-Execution Consultancy | NZ & Australia',
  description: "Don't Get Left Behind by AI. Turn Strategy into Working Systems. For NZ & Australian mid-market businesses ready to move from AI confusion to measurable results.",
  image: '/learndlate.png',
  url: undefined, // Let it be computed from current route
  type: 'website',
  schema: () => []
})

const route = useRoute()

const fullTitle = computed(() => props.title)

const canonicalUrl = computed(() => {
  // If URL prop is provided, use it
  if (props.url) {
    const url = props.url.startsWith('http') ? props.url : `https://learnedlate.com${props.url}`
    // Remove trailing slash (except for root path)
    return url.replace(/\/$/, '') || 'https://learnedlate.com'
  }
  // Otherwise, use the current route path
  // Remove trailing slash to match router paths (e.g., /projects instead of /projects/)
  const path = route.path.replace(/\/$/, '') || '/'
  return `https://learnedlate.com${path}`
})

// Base organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://learnedlate.com/#organization",
  "name": "LearnedLate",
  "url": "https://learnedlate.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://learnedlate.com/learndlate.png"
  },
  "description": "AI strategy-to-execution consultancy for New Zealand and Australian mid-market businesses",
  "areaServed": [
    {
      "@type": "Country",
      "name": "New Zealand"
    },
    {
      "@type": "Country",
      "name": "Australia"
    }
  ],
  "serviceType": [
    "AI Readiness Assessment",
    "Agentic Workflow Implementation",
    "Custom AI Development",
    "Full-Stack AI Delivery"
  ],
  "email": "hello@learnedlate.com",
  "sameAs": [
    "https://x.com/learnedlate"
  ]
}

// Set up meta tags and schema
useHead({
  title: fullTitle,
  meta: [
    { name: 'description', content: props.description },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'LearnedLate' },
    { name: 'keywords', content: 'AI consulting, AI readiness, agentic workflows, AI implementation, New Zealand, Australia, mid-market business, AI transformation' },
    
    // Open Graph
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: props.image },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: props.type },
    { property: 'og:site_name', content: 'LearnedLate' },
    { property: 'og:locale', content: 'en_NZ' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: props.image },
    
    // Article specific meta tags
    ...(props.type === 'article' && props.article ? [
      { property: 'article:published_time', content: props.article.publishedTime },
      { property: 'article:modified_time', content: props.article.modifiedTime },
      { property: 'article:author', content: props.article.author || 'LearnedLate' },
      { property: 'article:section', content: props.article.section },
      ...(props.article.tags?.map(tag => ({ property: 'article:tag', content: tag })) || [])
    ] : [])
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([organizationSchema, ...props.schema])
    }
  ]
})
</script>
