<template>
  <div class="mb-12 sm:mb-16">
    <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
      Frequently Asked Questions
    </h2>
    <div class="space-y-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="border border-gray-200 rounded-lg p-4 sm:p-6 bg-white"
      >
        <h3 class="text-lg font-semibold text-gray-900 mb-2">
          {{ item.question }}
        </h3>
        <p class="text-gray-700 leading-relaxed">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FAQItem } from '../blog/types'

defineProps<{
  items: FAQItem[]
}>()
</script>
