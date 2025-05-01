<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4">
      <router-link to="/" class="text-blue-600 hover:text-blue-800 hover:underline mb-6 inline-block">&larr; Back Home</router-link>

      <h1 class="text-3xl font-bold text-center mb-8">My Projects</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import { projects } from '../data/projects'; // Import project data

</script>

<style scoped>
/* Add specific styles for the projects page if needed */
</style> 