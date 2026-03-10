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
            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center space-x-6">
              <router-link to="/" class="hover:text-gray-300 transition-colors">Home</router-link>
              <router-link to="/projects" class="hover:text-gray-300 transition-colors">Projects</router-link>
              
              <!-- Services Dropdown -->
              <DropdownMenu>
                <DropdownMenuTrigger class="flex items-center space-x-1 hover:text-gray-300 transition-colors py-2 outline-none focus:outline-none">
                  <span>Services</span>
                  <ChevronDown class="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-64">
                  <DropdownMenuItem as-child>
                    <router-link to="/services" class="cursor-pointer">
                      All Services
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem as-child>
                    <router-link to="/services/seo-automation" class="cursor-pointer">
                      SEO Automation Systems
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuItem as-child>
                    <router-link to="/services#ai-accelerated-mvps" class="cursor-pointer">
                      MVP Development
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuItem as-child>
                    <router-link to="/services#fractional-cto" class="cursor-pointer">
                      Fractional CTO & Architecture
                    </router-link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <router-link to="/blog" class="hover:text-gray-300 transition-colors">Blog</router-link>
              <router-link to="/cv" class="hover:text-gray-300 transition-colors">CV</router-link>
            </div>

            <!-- Tablet Navigation (simplified, no dropdown) -->
            <div class="hidden sm:flex lg:hidden space-x-6">
              <router-link to="/" class="hover:text-gray-300 transition-colors">Home</router-link>
              <router-link to="/projects" class="hover:text-gray-300 transition-colors">Projects</router-link>
              <router-link to="/services" class="hover:text-gray-300 transition-colors">Services</router-link>
              <router-link to="/blog" class="hover:text-gray-300 transition-colors">Blog</router-link>
              <router-link to="/cv" class="hover:text-gray-300 transition-colors">CV</router-link>
            </div>

            <!-- Mobile Menu Button -->
            <div class="sm:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                @click="toggleMobileMenu"
                :aria-expanded="isMobileMenuOpen"
                aria-label="Toggle mobile menu"
                class="text-white hover:bg-gray-700"
              >
                <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
                <X v-else class="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        <!-- Mobile Menu -->
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
            <div class="flex flex-col space-y-2">
              <router-link @click="closeMobileMenu" to="/" class="block px-2 py-2 hover:text-gray-300 hover:bg-gray-700 rounded-md">Home</router-link>
              <router-link @click="closeMobileMenu" to="/projects" class="block px-2 py-2 hover:text-gray-300 hover:bg-gray-700 rounded-md">Projects</router-link>
              <div class="px-2">
                <div class="text-gray-400 text-xs uppercase tracking-wide mb-2 py-2">Services</div>
                <router-link @click="closeMobileMenu" to="/services" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">All Services</router-link>
                <router-link @click="closeMobileMenu" to="/services/seo-automation" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">SEO Automation</router-link>
                <router-link @click="closeMobileMenu" to="/services#ai-accelerated-mvps" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">MVP Development</router-link>
                <router-link @click="closeMobileMenu" to="/services#fractional-cto" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">Fractional CTO</router-link>
              </div>
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
          <router-link to="/" class="hover:text-gray-900 hover:underline transition-colors">Home</router-link>
          <router-link to="/projects" class="hover:text-gray-900 hover:underline transition-colors">Projects</router-link>
          <router-link to="/services" class="hover:text-gray-900 hover:underline transition-colors">Services</router-link>
          <router-link to="/services/seo-automation" class="hover:text-gray-900 hover:underline transition-colors">SEO Automation</router-link>
          <router-link to="/blog" class="hover:text-gray-900 hover:underline transition-colors">Blog</router-link>
          <router-link to="/cv" class="hover:text-gray-900 hover:underline transition-colors">CV</router-link>
         <a href="https://x.com/learnedlate" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 hover:underline transition-colors">Twitter</a>
          <a href="mailto:hello@learnedlate.com" class="hover:text-gray-900 hover:underline transition-colors">Contact Me</a>
        </nav>

        <!-- Mobile Footer Navigation -->
        <nav class="sm:hidden grid grid-cols-2 gap-4 mb-6 text-center">
          <router-link to="/" class="hover:text-gray-900 hover:underline transition-colors">Home</router-link>
          <router-link to="/projects" class="hover:text-gray-900 hover:underline transition-colors">Projects</router-link>
          <router-link to="/services" class="hover:text-gray-900 hover:underline transition-colors">Services</router-link>
          <router-link to="/services/seo-automation" class="hover:text-gray-900 hover:underline transition-colors">SEO Automation</router-link>
          <router-link to="/blog" class="hover:text-gray-900 hover:underline transition-colors">Blog</router-link>
          <router-link to="/cv" class="hover:text-gray-900 hover:underline transition-colors">CV</router-link>
         <a href="https://x.com/learnedlate" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 hover:underline transition-colors">Twitter</a>
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
import { ChevronDown, Menu, X } from 'lucide-vue-next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

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
