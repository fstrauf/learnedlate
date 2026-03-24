<template>
  <!-- FAQ Schema Markup - invisible component that injects structured data for SEO -->
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed } from 'vue'

export interface FAQItem {
  question: string
  answer: string
}

const props = defineProps<{
  items: FAQItem[]
}>()

// Filter out invalid items and ensure proper formatting
const validItems = computed(() => {
  return props.items.filter(item => 
    item && 
    typeof item.question === 'string' && 
    typeof item.answer === 'string' &&
    item.question.trim().length > 0 &&
    item.answer.trim().length > 0
  )
})

// Generate FAQPage schema
const faqSchema = computed(() => {
  // Only generate schema if we have valid items
  if (validItems.value.length === 0) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: validItems.value.map(item => ({
      '@type': 'Question',
      name: item.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.trim()
      }
    }))
  }
})

// Inject FAQ schema into page head only if we have valid items
useHead(() => {
  const schema = faqSchema.value
  if (!schema) {
    return {}
  }

  return {
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema),
        key: 'faq-schema'
      }
    ]
  }
})
</script>
