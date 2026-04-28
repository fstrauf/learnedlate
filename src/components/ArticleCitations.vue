<template>
  <div class="mb-12 sm:mb-16">
    <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
      References & Sources
    </h2>
    <ul class="space-y-3">
      <li
        v-for="(citation, index) in citations"
        :key="index"
        class="text-gray-700"
      >
        <span class="font-medium text-gray-900">[{{ index + 1 }}]</span>
        <a
          v-if="citation.url"
          :href="citation.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-amber-700 hover:text-amber-900 underline ml-2"
        >
          {{ citation.source }}
        </a>
        <span v-else class="ml-2">{{ citation.source }}</span>
        <span v-if="citation.date" class="text-gray-500 text-sm ml-2">
          ({{ formatDate(citation.date) }})
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Citation } from '../blog/types'

defineProps<{
  citations: Citation[]
}>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
