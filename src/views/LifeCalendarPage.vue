<template>
  <div class="min-h-screen bg-gray-100 py-6 sm:py-8 overflow-x-hidden">
    <div class="container mx-auto px-2 sm:px-4 lg:px-6">
        <router-link to="/projects" class="text-blue-600 hover:text-blue-800 hover:underline mb-4 sm:mb-6 inline-block text-sm sm:text-base">&larr; Back to Projects</router-link>
        <LifeCalendarWrapper />
    </div>
  </div>
</template>

<script setup lang="ts">
import LifeCalendarWrapper from '../components/life-calendar/LifeCalendarWrapper.vue';
</script>

<style scoped>
/* You might want to adjust container padding/margins */
</style> 