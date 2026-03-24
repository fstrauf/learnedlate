<template>
  <!-- HowTo Schema Markup - invisible component that injects structured data -->
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed } from 'vue'

export interface HowToStep {
  name: string
  text: string
  url?: string
  image?: string
}

export interface HowToSupply {
  name: string
}

export interface HowToTool {
  name: string
}

const props = defineProps<{
  name: string
  description: string
  steps: HowToStep[]
  image?: string
  estimatedCost?: string
  totalTime?: string
  supply?: HowToSupply[]
  tool?: HowToTool[]
}>()

const howToSchema = computed(() => {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: props.name,
    description: props.description,
    step: props.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && { image: step.image })
    }))
  }

  if (props.image) {
    schema.image = props.image
  }

  if (props.estimatedCost) {
    schema.estimatedCost = {
      '@type': 'MonetaryAmount',
      currency: 'NZD',
      value: props.estimatedCost
    }
  }

  if (props.totalTime) {
    schema.totalTime = props.totalTime
  }

  if (props.supply && props.supply.length > 0) {
    schema.supply = props.supply.map(s => ({
      '@type': 'HowToSupply',
      name: s.name
    }))
  }

  if (props.tool && props.tool.length > 0) {
    schema.tool = props.tool.map(t => ({
      '@type': 'HowToTool',
      name: t.name
    }))
  }

  return schema
})

// Inject HowTo schema into page head
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify(howToSchema.value),
      key: 'howto-schema'
    }
  ]
})
</script>
