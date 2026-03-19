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
                    <router-link to="/seo-automation" class="cursor-pointer">
                      SEO Automation Package
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuItem as-child>
                    <router-link to="/mvp-development" class="cursor-pointer">
                      MVP Development
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuItem as-child>
                    <router-link to="/fractional-cto" class="cursor-pointer">
                      Fractional CTO
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuItem as-child>
                    <router-link to="/automation" class="cursor-pointer">
                      Automation
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuItem as-child>
                    <router-link to="/ai-implementation" class="cursor-pointer">
                      AI Implementation
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuItem as-child>
                    <router-link to="/sap-solution-architecture" class="cursor-pointer">
                      SAP Solution Architecture
                    </router-link>
                  </DropdownMenuItem>
                  <DropdownMenuItem as-child>
                    <router-link to="/sap-custom-development" class="cursor-pointer">
                      SAP Custom Development
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
                <router-link @click="closeMobileMenu" to="/services/seo-automation" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">SEO Automation Systems</router-link>
                <router-link @click="closeMobileMenu" to="/seo-automation" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">SEO Automation Package</router-link>
                <router-link @click="closeMobileMenu" to="/mvp-development" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">MVP Development</router-link>
                <router-link @click="closeMobileMenu" to="/fractional-cto" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">Fractional CTO</router-link>
                <router-link @click="closeMobileMenu" to="/automation" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">Automation</router-link>
                <router-link @click="closeMobileMenu" to="/ai-implementation" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">AI Implementation</router-link>
                <router-link @click="closeMobileMenu" to="/sap-solution-architecture" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">SAP Architecture</router-link>
                <router-link @click="closeMobileMenu" to="/sap-custom-development" class="block py-2 pl-4 hover:text-gray-300 hover:bg-gray-700 rounded-md">SAP Development</router-link>
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
      <div class="container mx-auto max-w-6xl">
        <!-- Services Section -->
        <div class="mb-6">
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-3">Services</h3>
          <nav class="hidden sm:flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4 text-sm">
            <router-link to="/mvp-development" class="hover:text-gray-900 hover:underline transition-colors">MVP Development</router-link>
            <router-link to="/fractional-cto" class="hover:text-gray-900 hover:underline transition-colors">Fractional CTO</router-link>
            <router-link to="/seo-automation" class="hover:text-gray-900 hover:underline transition-colors">SEO Automation Package</router-link>
            <router-link to="/automation" class="hover:text-gray-900 hover:underline transition-colors">Automation</router-link>
            <router-link to="/ai-implementation" class="hover:text-gray-900 hover:underline transition-colors">AI Implementation</router-link>
          </nav>
          <nav class="sm:hidden grid grid-cols-2 gap-2 mb-4 text-sm text-center">
            <router-link to="/mvp-development" class="hover:text-gray-900 hover:underline transition-colors">MVP Development</router-link>
            <router-link to="/fractional-cto" class="hover:text-gray-900 hover:underline transition-colors">Fractional CTO</router-link>
            <router-link to="/seo-automation" class="hover:text-gray-900 hover:underline transition-colors">SEO Automation</router-link>
            <router-link to="/automation" class="hover:text-gray-900 hover:underline transition-colors">Automation</router-link>
            <router-link to="/ai-implementation" class="hover:text-gray-900 hover:underline transition-colors">AI Implementation</router-link>
          </nav>
        </div>

        <hr class="border-gray-300 my-6">

        <!-- Tools Section -->
        <div class="mb-6">
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-3">Tools</h3>
          <nav class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
            <router-link to="/life-calendar" class="hover:text-gray-900 hover:underline transition-colors">Life Calendar</router-link>
            <router-link to="/life-balance-visualizer" class="hover:text-gray-900 hover:underline transition-colors">Life Balance Visualizer</router-link>
            <router-link to="/concentric-circles" class="hover:text-gray-900 hover:underline transition-colors">Bubble Biases</router-link>
            <router-link to="/now" class="hover:text-gray-900 hover:underline transition-colors">Now</router-link>
          </nav>
        </div>

        <hr class="border-gray-300 my-6">

        <!-- SAP Services Section -->
        <div class="mb-6">
          <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center mb-3">SAP Services</h3>
          <!-- Desktop SAP Links -->
          <nav class="hidden sm:flex flex-wrap justify-center gap-x-4 gap-y-1 mb-4 text-sm">
            <router-link to="/sap-consulting-firms" class="hover:text-gray-900 hover:underline transition-colors">SAP Consulting Firms</router-link>
            <router-link to="/sap-implementation-partner" class="hover:text-gray-900 hover:underline transition-colors">SAP Implementation Partner</router-link>
            <router-link to="/sap-custom-development-services" class="hover:text-gray-900 hover:underline transition-colors">SAP Custom Development</router-link>
            <router-link to="/sap-clean-core-extensions" class="hover:text-gray-900 hover:underline transition-colors">SAP Clean Core Extensions</router-link>
            <router-link to="/sap-btp-consultant" class="hover:text-gray-900 hover:underline transition-colors">SAP BTP Consultant</router-link>
            <router-link to="/sap-btp-consultant-new-zealand" class="hover:text-gray-900 hover:underline transition-colors">SAP BTP Consultant NZ</router-link>
            <router-link to="/sap-joule-custom-skills-development" class="hover:text-gray-900 hover:underline transition-colors">SAP Joule Custom Skills</router-link>
            <router-link to="/accenture-alternative-sap-consulting" class="hover:text-gray-900 hover:underline transition-colors">Accenture Alternative</router-link>
            <router-link to="/sap-solution-architecture" class="hover:text-gray-900 hover:underline transition-colors">SAP Solution Architecture</router-link>
            <router-link to="/sap-custom-development" class="hover:text-gray-900 hover:underline transition-colors">SAP Development</router-link>
          </nav>
          <!-- Mobile SAP Links -->
          <nav class="sm:hidden grid grid-cols-2 gap-2 mb-4 text-sm text-center">
            <router-link to="/sap-consulting-firms" class="hover:text-gray-900 hover:underline transition-colors">SAP Consulting</router-link>
            <router-link to="/sap-implementation-partner" class="hover:text-gray-900 hover:underline transition-colors">Implementation</router-link>
            <router-link to="/sap-custom-development-services" class="hover:text-gray-900 hover:underline transition-colors">Custom Development</router-link>
            <router-link to="/sap-clean-core-extensions" class="hover:text-gray-900 hover:underline transition-colors">Clean Core</router-link>
            <router-link to="/sap-btp-consultant" class="hover:text-gray-900 hover:underline transition-colors">BTP Consultant</router-link>
            <router-link to="/sap-btp-consultant-new-zealand" class="hover:text-gray-900 hover:underline transition-colors">BTP NZ</router-link>
            <router-link to="/sap-joule-custom-skills-development" class="hover:text-gray-900 hover:underline transition-colors">Joule Skills</router-link>
            <router-link to="/accenture-alternative-sap-consulting" class="hover:text-gray-900 hover:underline transition-colors">Accenture Alt</router-link>
          </nav>
        </div>

        <hr class="border-gray-300 my-6">

        <!-- Desktop Footer Navigation -->
        <nav class="hidden sm:flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          <router-link to="/" class="hover:text-gray-900 hover:underline transition-colors">Home</router-link>
          <router-link to="/projects" class="hover:text-gray-900 hover:underline transition-colors">Projects</router-link>
          <router-link to="/services" class="hover:text-gray-900 hover:underline transition-colors">Services</router-link>
          <router-link to="/blog" class="hover:text-gray-900 hover:underline transition-colors">Blog</router-link>
          <router-link to="/cv" class="hover:text-gray-900 hover:underline transition-colors">CV</router-link>
         <a href="https://x.com/learnedlate" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 hover:underline transition-colors">Twitter</a>
          <a :href="contactEmailHref" class="hover:text-gray-900 hover:underline transition-colors">Contact Me</a>
        </nav>

        <!-- Mobile Footer Navigation -->
        <nav class="sm:hidden grid grid-cols-2 gap-4 mb-6 text-center">
          <router-link to="/" class="hover:text-gray-900 hover:underline transition-colors">Home</router-link>
          <router-link to="/projects" class="hover:text-gray-900 hover:underline transition-colors">Projects</router-link>
          <router-link to="/services" class="hover:text-gray-900 hover:underline transition-colors">Services</router-link>
          <router-link to="/blog" class="hover:text-gray-900 hover:underline transition-colors">Blog</router-link>
          <router-link to="/cv" class="hover:text-gray-900 hover:underline transition-colors">CV</router-link>
         <a href="https://x.com/learnedlate" target="_blank" rel="noopener noreferrer" class="hover:text-gray-900 hover:underline transition-colors">Twitter</a>
          <a :href="contactEmailHref" class="hover:text-gray-900 hover:underline transition-colors col-span-2">Contact Me</a>
        </nav>

        <div class="text-center">
          <p class="text-sm">&copy; {{ new Date().getFullYear() }} Florian Strauf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
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

const contactEmailHref = ref<string | undefined>(undefined)
onMounted(() => {
  contactEmailHref.value = 'mailto:hello@learnedlate.com'
})

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
