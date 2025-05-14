<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4">
      <router-link to="/projects" class="text-blue-600 hover:text-blue-800 hover:underline mb-6 inline-block">&larr; Back to Projects</router-link>

      <div v-if="project" class="bg-white rounded-lg shadow-md overflow-hidden">
        <img v-if="project.imageUrl && project.internalUrl !== '/concentric-circles'" :src="project.imageUrl" :alt="project.title" class="w-full h-64 object-cover">
        
        <!-- Specific component for Concentric Circles / Bubble Biases -->
        <ConcentricCirclesWrapper v-if="project.internalUrl === '/concentric-circles'" class="p-0 shadow-none" />

        <div class="p-6 md:p-8">
          <h1 class="text-3xl font-bold mb-4">{{ project.title }}</h1>
          <p class="text-gray-700 mb-6">{{ project.description }}</p>

          <!-- Placeholder for more detailed content - shown if not the concentric circles project -->
          <div v-if="project.internalUrl !== '/concentric-circles'" class="prose lg:prose-xl max-w-none mb-6">
            <p>More detailed information about {{ project.title }} will go here. This could include:</p>
            <ul>
              <li>Challenges faced</li>
              <li>Technologies used</li>
              <li>Key features and functionalities</li>
              <li>Screenshots or videos</li>
            </ul>
            <p>This content could eventually be loaded from a dedicated Markdown file associated with the project.</p>
          </div>

          <div class="flex justify-start space-x-3 mt-6">
            <a v-if="project.projectUrl" :href="project.projectUrl" target="_blank" rel="noopener noreferrer"
               class="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded transition duration-300">
              View Project
            </a>
            <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener noreferrer"
               class="text-sm bg-gray-600 hover:bg-gray-800 text-white py-1 px-3 rounded transition duration-300">
              View Code
            </a>
            <!-- Link to the interactive component if it's an internal one, but not the concentric circles page itself -->
            <router-link v-if="project.internalUrl && project.internalUrl !== '/concentric-circles'" :to="project.internalUrl"
              class="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded transition duration-300">
              Open Interactive
            </router-link>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-10">
        <p class="text-xl text-gray-500">Project not found.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ConcentricCirclesWrapper from '../components/concentric-circles/ConcentricCirclesWrapper.vue';

const route = useRoute();
const projectSlug = ref(route.params.slug as string);

const project = computed<Project | undefined>(() => {
  return projects.find(p => p.slug === projectSlug.value);
});

// Optional: Watch for route param changes if needed, though usually not necessary 
// for simple detail pages unless navigating between them directly.
// watch(
//   () => route.params.slug,
//   (newSlug) => {
//     projectSlug.value = newSlug as string;
//   }
// );

</script>

<style scoped>
/* Add specific styles if needed */
</style> 