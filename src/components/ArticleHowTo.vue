<template>
  <div class="mb-12 sm:mb-16">
    <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
      {{ howTo.name || 'Step-by-Step Guide' }}
    </h2>
    <p v-if="howTo.description" class="text-gray-600 mb-6 text-lg">
      {{ howTo.description }}
    </p>
    <ol class="space-y-6">
      <li
        v-for="(step, index) in howTo.steps"
        :key="index"
        class="flex gap-4 items-start"
      >
        <span
          class="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mt-0.5"
        >
          {{ index + 1 }}
        </span>
        <div>
          <h3 class="font-semibold text-gray-900 text-lg mb-1">
            {{ step.name }}
          </h3>
          <p class="text-gray-700 leading-relaxed">{{ step.text }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import type { HowToData } from '../blog/types'

defineProps<{
  howTo: HowToData
}>()
</script>
