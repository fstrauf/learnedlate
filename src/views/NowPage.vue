<template>
  <div class="now-page overflow-x-hidden">
    <SEOHead 
      title="What I'm Doing Now - Florian Strauf"
      description="An overview of my current projects and focus areas, including building Expense Sorted and my weekly writing."
      url="/now"
    />
    
    <section class="py-12 sm:py-16">
      <div class="container mx-auto px-2 sm:px-4 lg:px-6">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-3xl sm:text-4xl font-light text-gray-900 mb-6 sm:mb-8">
            What I'm Up To
          </h1>
          
          <div class="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p>
             Building <a href="https://expensesorted.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Expense Sorted</a>, an AI-powered expense tracking tool to simplify finances for freelancers and small businesses.
            </p>
            <p>
              Writing weekly about technology, AI, and business at <router-link to="/blog" class="text-blue-600 hover:underline">blog.learnedlate.com</router-link>.
            </p>
            <p>
              Open for fractional CTO &amp; AI consulting engagements. I help companies with strategic technical leadership and practical AI implementation.
            </p>
          </div>

          <div class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <p class="text-base sm:text-lg text-gray-800">
              Interested in working together? 
             <a href="https://calendar.notion.so/meet/florianstrauf/chat" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-600 hover:underline">Book a call →</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'
</script>

<style scoped>
.now-page a {
  font-weight: 500;
}
</style> 