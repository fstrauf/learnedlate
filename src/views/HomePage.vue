<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-center px-4">
    <div class="max-w-2xl">
      <h1 class="text-5xl md:text-7xl font-bold text-gray-800 mb-4 leading-tight">
        Florian Strauf
      </h1>
      <p class="text-lg md:text-xl text-gray-600 mb-10">
        Building things on the web. Exploring technology, finance, and productivity.
      </p>
      <div class="space-y-4 sm:space-y-0 sm:space-x-4">
        <router-link
          to="/projects"
          class="inline-block bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Explore Projects
        </router-link>
        <a 
          href="https://ffstrauf.substack.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Writing
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No specific script logic needed for the homepage yet
</script>

<style scoped>
/* Add specific styles for the homepage if needed */
/* Example: Custom animation */
/* @keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

div > * {
  animation: fadeIn 0.8s ease-out forwards;
} */
</style> 