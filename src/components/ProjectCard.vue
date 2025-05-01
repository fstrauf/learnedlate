<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl flex flex-col">
    <router-link v-if="project.imageUrl" :to="project.internalUrl || { name: 'ProjectDetail', params: { slug: project.slug } }" class="block hover:opacity-90">
      <img :src="project.imageUrl" :alt="project.title" class="w-full h-48 object-cover">
    </router-link>
    <!-- Add placeholder or specific style if no image -->
    <div v-else class="h-48 flex items-center justify-center bg-gray-100 text-gray-400">
       <!-- Optionally add an icon or text -->
       <span>{{ project.title }}</span>
    </div>
    
    <div class="p-4 flex flex-col flex-grow">
      <router-link :to="project.internalUrl || { name: 'ProjectDetail', params: { slug: project.slug } }" class="block hover:text-blue-700">
         <h3 class="text-lg font-semibold mb-2">{{ project.title }}</h3>
      </router-link>
      <p class="text-gray-600 text-sm mb-4 flex-grow">{{ project.description }}</p>
      <div class="flex justify-start space-x-3 mt-auto">
        <!-- Internal Link Button -->
        <router-link v-if="project.internalUrl" :to="project.internalUrl"
           class="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded transition duration-300">
           View Project
        </router-link>
        <!-- External Link Button -->
        <a v-else-if="project.projectUrl" :href="project.projectUrl" target="_blank" rel="noopener noreferrer"
           class="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded transition duration-300">
           View Project
        </a>
        
        <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener noreferrer"
           class="text-sm bg-gray-600 hover:bg-gray-800 text-white py-1 px-3 rounded transition duration-300">
           View Code
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects';

defineProps<{ 
  project: Project;
}>();
</script>

<style scoped>
/* Scoped styles if needed */
</style> 