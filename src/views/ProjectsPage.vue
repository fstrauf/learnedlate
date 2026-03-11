<template>
  <div class="min-h-screen bg-gray-50 py-6 sm:py-8 overflow-x-hidden">
    <SEOHead
      title="Projects - Florian Strauf"
      description="Explore projects by Florian Strauf including SEO automation systems, AI-accelerated MVPs, life calendar visualizations, and technical tools."
    />
    <div class="container mx-auto px-2 sm:px-4 lg:px-6">    

      <h1 class="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">My Projects</h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
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
import SEOHead from '../components/SEOHead.vue';
import { projects } from '../data/projects'; // Import project data

</script>

<style scoped>
/* Add specific styles for the projects page if needed */
</style> 