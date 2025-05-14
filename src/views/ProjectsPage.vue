<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4">    

      <h1 class="text-3xl font-bold text-center mb-8">My Projects</h1>

      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :cardIndex="index"
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