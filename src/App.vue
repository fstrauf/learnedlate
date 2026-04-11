<template>
  <div id="app">
    <!-- Persistent CTA Bar -->
    <div class="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 text-white backdrop-blur">
      <div class="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 sm:flex-row lg:px-6">
        <p class="text-center text-xs text-gray-200 sm:text-left sm:text-sm">
          AI readiness, workflow automation, and delivery support
          <span class="hidden text-gray-400 sm:inline"> | Start with an AI readiness assessment</span>
        </p>
        <Button as-child size="sm" class="bg-amber-600 text-white hover:bg-amber-700 text-xs sm:text-sm">
          <router-link to="/contact">
            Book an AI Readiness Assessment
          </router-link>
        </Button>
      </div>
    </div>

    <header class="border-b border-gray-800 bg-gray-900 text-white shadow-md">
      <nav class="container mx-auto px-4 py-3 lg:px-6">
        <div class="flex justify-between items-center">
          <router-link to="/" class="logo-link grid grid-cols-[auto_1fr] items-center gap-x-3 group flex-shrink-0 py-1 pr-4">
            <img src="/learndlate.png" alt="LearnedLate Logo" class="logo h-6 sm:h-8 md:h-10 w-auto flex-shrink-0 group-hover:opacity-80 transition-opacity">
            <span class="hidden sm:inline text-lg lg:text-xl font-medium tracking-tight text-gray-100 group-hover:text-amber-200 transition-colors">
              LearnedLate
            </span>
          </router-link>

          <div>
            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center space-x-7 text-sm text-gray-200">
              <router-link to="/" class="hover:text-amber-200 transition-colors">Home</router-link>
              
              <!-- Services Dropdown -->
              <DropdownMenu>
                <DropdownMenuTrigger class="flex items-center space-x-1 hover:text-amber-200 transition-colors py-2 outline-none focus:outline-none">
                  <span>Services</span>
                  <ChevronDown class="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-72">
                  <DropdownMenuItem as-child>
                    <router-link to="/services" class="cursor-pointer">
                      All Services
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem as-child>
                    <router-link to="/services/ai-readiness" class="cursor-pointer">
                      AI Readiness Assessment
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuItem as-child>
                    <router-link to="/services/agentic-workflows" class="cursor-pointer">
                      AI Workflow Automation
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuItem as-child>
                    <router-link to="/services/full-stack-delivery" class="cursor-pointer">
                      Delivery Partnership
                    </router-link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <router-link to="/blog" class="hover:text-amber-200 transition-colors">Blog</router-link>
              <router-link to="/about" class="hover:text-amber-200 transition-colors">About</router-link>
              <router-link to="/contact" class="text-amber-200 hover:text-amber-100 transition-colors">Contact</router-link>
            </div>

            <!-- Tablet Navigation (simplified, no dropdown) -->
            <div class="hidden sm:flex lg:hidden space-x-6 text-sm text-gray-200">
              <router-link to="/" class="hover:text-amber-200 transition-colors">Home</router-link>
              <router-link to="/services" class="hover:text-amber-200 transition-colors">Services</router-link>
              <router-link to="/blog" class="hover:text-amber-200 transition-colors">Blog</router-link>
              <router-link to="/about" class="hover:text-amber-200 transition-colors">About</router-link>
              <router-link to="/contact" class="text-amber-200 hover:text-amber-100 transition-colors">Contact</router-link>
            </div>

            <!-- Mobile Menu Button -->
            <div class="sm:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                @click="toggleMobileMenu"
                :aria-expanded="isMobileMenuOpen"
                aria-label="Toggle mobile menu"
                class="text-white hover:bg-gray-800"
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
            class="sm:hidden mt-3 rounded-xl border border-gray-700 bg-gray-800/80 p-3"
          >
            <div class="flex flex-col space-y-2">
              <router-link @click="closeMobileMenu" to="/" class="block rounded-md px-3 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-amber-200">Home</router-link>
              <div class="px-2">
                <div class="mb-1 py-2 text-xs uppercase tracking-wide text-gray-400">Services</div>
                <router-link @click="closeMobileMenu" to="/services" class="block rounded-md py-2 pl-4 text-sm text-gray-200 hover:bg-gray-700 hover:text-amber-200">All Services</router-link>
                <router-link @click="closeMobileMenu" to="/services/ai-readiness" class="block rounded-md py-2 pl-4 text-sm text-gray-200 hover:bg-gray-700 hover:text-amber-200">AI Readiness Assessment</router-link>
                <router-link @click="closeMobileMenu" to="/services/agentic-workflows" class="block rounded-md py-2 pl-4 text-sm text-gray-200 hover:bg-gray-700 hover:text-amber-200">AI Workflow Automation</router-link>
                <router-link @click="closeMobileMenu" to="/services/full-stack-delivery" class="block rounded-md py-2 pl-4 text-sm text-gray-200 hover:bg-gray-700 hover:text-amber-200">Delivery Partnership</router-link>
              </div>
              <router-link @click="closeMobileMenu" to="/blog" class="block rounded-md px-3 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-amber-200">Blog</router-link>
              <router-link @click="closeMobileMenu" to="/about" class="block rounded-md px-3 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-amber-200">About</router-link>
              <router-link @click="closeMobileMenu" to="/contact" class="block rounded-md px-3 py-2 text-sm text-amber-200 hover:bg-gray-700 hover:text-amber-100">Contact</router-link>
            </div>
          </div>
        </transition>
      </nav>
    </header>
    <main class="flex-grow">
      <router-view />
    </main>
    <footer class="bg-gray-200 text-gray-700 py-6 px-4 mt-auto">
      <div class="container mx-auto max-w-6xl">
        <!-- Main Footer Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          <!-- Services -->
          <div>
            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Services</h3>
            <nav class="flex flex-col gap-1 text-sm">
              <router-link to="/services/ai-readiness" class="hover:text-gray-900 hover:underline transition-colors">AI Readiness</router-link>
              <router-link to="/services/agentic-workflows" class="hover:text-gray-900 hover:underline transition-colors">Workflow Automation</router-link>
              <router-link to="/services/full-stack-delivery" class="hover:text-gray-900 hover:underline transition-colors">Delivery Partnership</router-link>
              <router-link to="/services/custom-ai-development" class="hover:text-gray-900 hover:underline transition-colors">Custom AI</router-link>
            </nav>
          </div>

          <!-- Resources -->
          <div>
            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Resources</h3>
            <nav class="flex flex-col gap-1 text-sm">
              <router-link to="/blog" class="hover:text-gray-900 hover:underline transition-colors">Blog</router-link>
              <router-link to="/case-studies" class="hover:text-gray-900 hover:underline transition-colors">Case Studies</router-link>
              <router-link to="/ai-readiness-checklist" class="hover:text-gray-900 hover:underline transition-colors">Checklist</router-link>
            </nav>
          </div>

          <!-- Company -->
          <div>
            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Company</h3>
            <nav class="flex flex-col gap-1 text-sm">
              <router-link to="/" class="hover:text-gray-900 hover:underline transition-colors">Home</router-link>
              <router-link to="/about" class="hover:text-gray-900 hover:underline transition-colors">About</router-link>
              <router-link to="/contact" class="hover:text-gray-900 hover:underline transition-colors">Contact</router-link>
              <a href="https://x.com/learnedlate" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 hover:underline transition-colors">Twitter</a>
            </nav>
          </div>
        </div>

        <hr class="border-gray-300 my-4">

        <!-- Bottom Row -->
        <div class="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>&copy; {{ new Date().getFullYear() }} LearnedLate. All rights reserved.</p>
          <p>Serving New Zealand & Australia</p>
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
