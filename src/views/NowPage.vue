<template>
  <div class="now-page">
    <SEOHead 
      title="What I'm Doing Now - Florian Strauf"
      description="An overview of my current projects and focus areas, including building Expense Sorted and my weekly writing."
      url="/now"
    />
    
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-4xl font-light text-gray-900 mb-8">
            What I'm Up To
          </h1>
          
          <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Building <a href="https://expensesorted.com" target="_blank" class="text-blue-600 hover:underline">Expense Sorted</a>, an AI-powered expense tracking tool to simplify finances for freelancers and small businesses.
            </p>
            <p>
              Writing weekly about technology, AI, and business at <router-link to="/blog" class="text-blue-600 hover:underline">blog.learnedlate.com</router-link>.
            </p>
            <p>
              Open for fractional CTO &amp; AI consulting engagements. I help companies with strategic technical leadership and practical AI implementation.
            </p>
          </div>

          <div class="mt-12 pt-8 border-t border-gray-200">
            <p class="text-lg text-gray-800">
              Interested in working together? 
              <a href="https://calendar.notion.so/meet/florianstrauf/chat" target="_blank" class="font-semibold text-blue-600 hover:underline">Book a call →</a>
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