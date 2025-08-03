<template>
  <component :is="cardWrapper.type" v-bind="cardWrapper.props" 
    class="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-xl flex flex-col"
    :class="{ 'cursor-pointer': cardWrapper.type !== 'div', 'hover:shadow-2xl': cardWrapper.type !== 'div' }"
  >
    <div v-if="project.imageUrl" class="aspect-[1200/630] w-full overflow-hidden">
      <img :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover">
    </div>
    <!-- Placeholder with gray background and dynamic text color -->
    <div v-else 
      class="aspect-[1200/630] w-full flex items-center justify-center bg-gray-100 p-4"
    >
       <span class="text-center font-semibold text-2xl sm:text-3xl lg:text-4xl" :class="placeholderTextColor">{{ project.title }}</span>
    </div>
    
    <div class="p-4 sm:p-6 flex flex-col flex-grow">
      <h3 class="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{{ project.title }}</h3>
      <p class="text-gray-600 text-sm sm:text-base mb-4 flex-grow leading-relaxed">{{ project.description }}</p>
      <!-- "View Project" button section is removed -->
    </div>
  </component>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects';
import { computed } from 'vue';
import { RouterLink } from 'vue-router'; // Import RouterLink for explicit use with <component :is>

const props = defineProps<{ 
  project: Project;
  cardIndex: number;
}>();

const cardWrapper = computed(() => {
  if (props.project.internalUrl) {
    return { 
      type: RouterLink, // Use the imported RouterLink component
      props: { 
        to: props.project.internalUrl 
      } 
    };
  } else if (props.project.projectUrl) {
    return { 
      type: 'a', 
      props: { 
        href: props.project.projectUrl, 
        target: '_blank', 
        rel: 'noopener noreferrer' 
      } 
    };
  }
  return { type: 'div', props: {} }; // Fallback to a non-interactive div
});

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