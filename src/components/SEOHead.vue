<template>
  <!-- This component handles all SEO meta tags and schema markup -->
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed } from 'vue'

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
  title: 'Florian Strauf - Fractional CTO & Technical Consultant',
  description: 'Expert fractional CTO, technical advisor, and consultant specializing in MVP development, technical due diligence, and strategic technology guidance for New Zealand businesses.',
  image: '/learndlate.png',
  url: 'https://learnedlate.com',
  type: 'website',
  schema: () => []
})

const fullTitle = computed(() => 
  props.title.includes('Florian Strauf') 
    ? props.title 
    : `${props.title} | Florian Strauf`
)

const canonicalUrl = computed(() => 
  props.url.startsWith('http') ? props.url : `https://learnedlate.com${props.url}`
)

// Base organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://learnedlate.com/#organization",
  "name": "LearnedLate",
  "legalName": "Florian Strauf Consulting",
  "url": "https://learnedlate.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://learnedlate.com/learndlate.png"
  },
  "description": "Expert fractional CTO and technical consulting services for New Zealand businesses",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "@id": "https://learnedlate.com/#person"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NZ",
    "addressRegion": "Auckland"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "New Zealand"
    },
    {
      "@type": "City",
      "name": "Auckland"
    },
    {
      "@type": "City", 
      "name": "Wellington"
    },
    {
      "@type": "City",
      "name": "Christchurch"
    }
  ],
  "serviceType": [
    "Fractional CTO Services",
    "Technical Advisory",
    "MVP Development",
    "Technical Due Diligence"
  ],
  "knowsAbout": [
    "Software Development",
    "Technical Strategy",
    "Startup Advisory",
    "MVP Development",
    "Technical Due Diligence",
    "Web3 Technology",
    "Product Management"
  ],
  "email": "hello@learnedlate.com",
  "sameAs": [
    "https://linkedin.com/in/florianstrauf",
    "https://x.com/learnedlate"
  ]
}

// Person schema for Florian
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://learnedlate.com/#person",
  "name": "Florian Strauf",
  "jobTitle": "Fractional CTO & Technical Consultant",
  "description": "Experienced technology leader specializing in fractional CTO services, technical advisory, and strategic guidance for New Zealand startups and businesses.",
  "url": "https://learnedlate.com",
  "email": "hello@learnedlate.com",
  "image": "https://learnedlate.com/learndlate.png",
  "knowsAbout": [
    "Software Architecture",
    "Technical Leadership", 
    "Startup Strategy",
    "MVP Development",
    "Technical Due Diligence",
    "Product Development",
    "Team Building",
    "Web3 Technology"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Chief Technology Officer",
    "occupationLocation": {
      "@type": "Country",
      "name": "New Zealand"
    }
  },
  "worksFor": {
    "@type": "Organization",
    "@id": "https://learnedlate.com/#organization"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Technical University"
    }
  ],
  "sameAs": [
    "https://linkedin.com/in/florianstrauf",
    "https://x.com/learnedlate"
  ]
}

// Local business schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://learnedlate.com/#localbusiness",
  "name": "LearnedLate - Fractional CTO Services",
  "description": "Professional fractional CTO and technical consulting services in New Zealand",
  "url": "https://learnedlate.com",
  "telephone": "+64-21-XXX-XXXX", // Replace with actual number
  "email": "hello@learnedlate.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NZ",
    "addressRegion": "Auckland",
    "addressLocality": "Auckland"
  },
  "geo": {
    "@type": "GeoCoordinates", 
    "latitude": -36.8485,
    "longitude": 174.7633
  },
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  },
  "priceRange": "$$$",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": [
    "https://linkedin.com/in/florianstrauf",
    "https://x.com/learnedlate"
  ]
}

// Combine all schemas
const allSchemas = computed(() => [
  organizationSchema,
  personSchema, 
  localBusinessSchema,
  ...props.schema
])

// Set up meta tags and schema
useHead({
  title: fullTitle,
  meta: [
    { name: 'description', content: props.description },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Florian Strauf' },
    { name: 'keywords', content: 'fractional CTO, technical consultant, MVP development, technical due diligence, New Zealand, Auckland, startup advisor' },
    
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
      { property: 'article:author', content: props.article.author || 'Florian Strauf' },
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
      innerHTML: JSON.stringify(allSchemas.value)
    }
  ]
})
</script> 