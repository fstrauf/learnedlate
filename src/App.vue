<template>
  <div id="app">
    <header class="bg-gray-800 text-white p-4 shadow-md">
      <nav class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="flex items-center space-x-2 group">
          <img src="/learndlate.png" alt="LearnedLate Logo" class="h-8 w-auto group-hover:opacity-80 transition-opacity">
          <span class="text-xl font-semibold group-hover:text-gray-300 transition-colors">
            LearnedLate
          </span>
        </router-link>
        <div class="space-x-4">
          <router-link to="/projects" class="hover:text-gray-300 transition-colors">Projects</router-link>
          <router-link to="/services" class="hover:text-gray-300 transition-colors">Services</router-link>
          <router-link to="/cv" class="hover:text-gray-300 transition-colors">CV</router-link>
        </div>
      </nav>
    </header>
    <main class="p-4">
      <router-view />
    </main>
    <footer class="bg-gray-200 text-gray-700 p-6 text-center mt-auto">
      <div class="container mx-auto">
        <nav class="space-x-4">
          <router-link to="/projects" class="hover:text-gray-900 hover:underline">Projects</router-link>
          <router-link to="/services" class="hover:text-gray-900 hover:underline">Services</router-link>
          <router-link to="/cv" class="hover:text-gray-900 hover:underline">CV</router-link>
          <a href="mailto:f.strauf@gmail.com" class="hover:text-gray-900 hover:underline">Contact Me</a>
        </nav>
        <p class="text-sm mt-4">&copy; {{ new Date().getFullYear() }} Florian Strauf. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// No script needed here, routing handles content
</script>

<style>
/* Global styles can go here or in style.css */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
