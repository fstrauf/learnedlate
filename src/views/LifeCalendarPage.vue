<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="container mx-auto px-4">
        <router-link to="/projects" class="text-blue-600 hover:text-blue-800 hover:underline mb-6 inline-block">&larr; Back to Projects</router-link>
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