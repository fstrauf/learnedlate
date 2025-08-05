<template>
  <div id="app">
    <header class="bg-gray-800 text-white shadow-md">
      <nav class="container mx-auto px-2 sm:px-4 py-4">
        <div class="flex justify-between items-center">
          <router-link to="/" class="logo-link grid grid-cols-[auto_1fr] items-center gap-x-3 group flex-shrink-0 p-4">
            <img src="/learndlate.png" alt="LearnedLate Logo" class="logo h-6 sm:h-8 md:h-10 w-auto flex-shrink-0 group-hover:opacity-80 transition-opacity">
            <span class="hidden sm:inline text-xl lg:text-2xl font-semibold group-hover:text-gray-300 transition-colors">
              LearnedLate
            </span>
          </router-link>

          <div>
            <div class="hidden sm:flex space-x-6">
              <router-link to="/projects" class="hover:text-gray-300 transition-colors">Projects</router-link>
              <router-link to="/services" class="hover:text-gray-300 transition-colors">Services</router-link>
              <router-link to="/blog" class="hover:text-gray-300 transition-colors">Blog</router-link>
              <router-link to="/cv" class="hover:text-gray-300 transition-colors">CV</router-link>
            </div>

            <div class="sm:hidden">
              <button 
                @click="toggleMobileMenu"
                class="p-1 hover:bg-gray-700 rounded-md transition-colors"
                :aria-expanded="isMobileMenuOpen"
                aria-label="Toggle mobile menu"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    v-if="!isMobileMenuOpen"
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path 
                    v-else
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div 
            v-if="isMobileMenuOpen" 
            class="sm:hidden mt-4 py-4 border-t border-gray-700"
          >
            <div class="flex flex-col space-y-4">
              <router-link @click="closeMobileMenu" to="/projects" class="block px-2 py-2 hover:text-gray-300 hover:bg-gray-700 rounded-md">Projects</router-link>
              <router-link @click="closeMobileMenu" to="/services" class="block px-2 py-2 hover:text-gray-300 hover:bg-gray-700 rounded-md">Services</router-link>
              <router-link @click="closeMobileMenu" to="/blog" class="block px-2 py-2 hover:text-gray-300 hover:bg-gray-700 rounded-md">Blog</router-link>
              <router-link @click="closeMobileMenu" to="/cv" class="block px-2 py-2 hover:text-gray-300 hover:bg-gray-700 rounded-md">CV</router-link>
            </div>
          </div>
        </transition>
      </nav>
    </header>
    <main class="flex-grow">
      <router-view />
    </main>
    <footer class="bg-gray-200 text-gray-700 py-8 px-4 mt-auto">
      <div class="container mx-auto max-w-4xl">
        <!-- Desktop Footer Navigation -->
        <nav class="hidden sm:flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          <router-link to="/projects" class="hover:text-gray-900 hover:underline transition-colors">Projects</router-link>
          <router-link to="/services" class="hover:text-gray-900 hover:underline transition-colors">Services</router-link>
          <router-link to="/blog" class="hover:text-gray-900 hover:underline transition-colors">Blog</router-link>
          <router-link to="/cv" class="hover:text-gray-900 hover:underline transition-colors">CV</router-link>
          <a href="https://x.com/learnedlate" target="_blank" class="hover:text-gray-900 hover:underline transition-colors">Twitter</a>
          <a href="mailto:hello@learnedlate.com" class="hover:text-gray-900 hover:underline transition-colors">Contact Me</a>
        </nav>

        <!-- Mobile Footer Navigation -->
        <nav class="sm:hidden grid grid-cols-2 gap-4 mb-6 text-center">
          <router-link to="/projects" class="hover:text-gray-900 hover:underline transition-colors">Projects</router-link>
          <router-link to="/services" class="hover:text-gray-900 hover:underline transition-colors">Services</router-link>
          <router-link to="/blog" class="hover:text-gray-900 hover:underline transition-colors">Blog</router-link>
          <router-link to="/cv" class="hover:text-gray-900 hover:underline transition-colors">CV</router-link>
          <a href="https://x.com/learnedlate" target="_blank" class="hover:text-gray-900 hover:underline transition-colors">Twitter</a>
          <a href="mailto:hello@learnedlate.com" class="hover:text-gray-900 hover:underline transition-colors">Contact Me</a>
        </nav>

        <div class="text-center">
          <p class="text-sm">&copy; {{ new Date().getFullYear() }} Florian Strauf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Mobile menu state
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// PostHog analytics is now handled via the plugin in main.ts
</script>

<style>
/* Global styles can go here or in style.css */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}

main {
  flex-grow: 1;
}

/* Prevent horizontal scroll on very small screens */
body {
  overflow-x: hidden;
}
</style>
