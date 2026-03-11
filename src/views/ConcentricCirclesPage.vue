<template>
  <div class="min-h-screen bg-gray-100 py-6 sm:py-8 overflow-x-hidden">
    <SEOHead
      title="Bubble Biases - Perspective Visualizer"
      description="An interactive visualization of concentric circles representing how we organize our world - from self to the universe. Explore your biases and perspectives."
    />
    <div class="container mx-auto px-2 sm:px-4 lg:px-6">
      <router-link to="/projects" class="text-blue-600 hover:text-blue-800 hover:underline mb-4 sm:mb-6 inline-block text-sm sm:text-base">&larr; Back to Projects</router-link>
      <ConcentricCirclesWrapper />
    </div>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue';
import ConcentricCirclesWrapper from '../components/concentric-circles/ConcentricCirclesWrapper.vue';
</script>

<style scoped>
/* Add page-specific styles if needed */
</style> 