<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl flex flex-col">
    <router-link v-if="project.imageUrl" :to="project.internalUrl || { name: 'ProjectDetail', params: { slug: project.slug } }" class="block hover:opacity-90">
      <div class="aspect-[1200/630] w-full overflow-hidden">
        <img :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover">
      </div>
    </router-link>
    <!-- Placeholder with gray background and dynamic text color -->
    <div v-else 
      class="aspect-[1200/630] w-full flex items-center justify-center bg-gray-100 p-4"
    >
       <span class="text-center font-semibold text-4xl" :class="placeholderTextColor">{{ project.title }}</span>
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects';
import { computed } from 'vue';

const props = defineProps<{ 
  project: Project;
  cardIndex: number;
}>();

// Define text colors to cycle through
const placeholderTextColors = ['text-blue-600', 'text-orange-500'];

const placeholderTextColor = computed(() => {
  // Cycle through text colors based on cardIndex for visual alternation
  return placeholderTextColors[props.cardIndex % placeholderTextColors.length];
});

</script>

<style scoped>
/* Scoped styles if needed */
</style> 