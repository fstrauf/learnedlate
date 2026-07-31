<template>
  <div
    class="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-2xl p-8 sm:p-10 mb-12 sm:mb-16 border border-gray-200 shadow-sm"
  >
    <h2 class="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
      Ready for practical AI help?
    </h2>
    <p class="text-gray-700 leading-relaxed mb-6 text-lg max-w-2xl">
      Figure out where AI matters in your business, fix slow manual work, and build systems your team will actually use.
    </p>
    <div class="flex flex-wrap items-center gap-4">
      <router-link
        to="/contact"
        class="inline-flex items-center text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group"
        data-track='{"event":"cta_click","cta_text":"Get Started","location":"blog_post_end_cta","destination":"/contact"}'
      >
        Get Started
        <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </router-link>
      <router-link
        to="/ai-readiness-checklist"
        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 px-6 py-3 rounded-lg border border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
        data-track='{"event":"cta_click","cta_text":"Free AI Readiness Checklist","location":"blog_post_end_cta","destination":"/ai-readiness-checklist"}'
      >
        Free AI Readiness Checklist
      </router-link>
      <router-link
        to="/services/strategy"
        class="inline-flex items-center text-sm font-medium text-amber-800 hover:text-amber-900 underline underline-offset-2 decoration-amber-300 hover:decoration-amber-500"
        data-track='{"event":"cta_click","cta_text":"Strategy","location":"blog_post_end_cta","destination":"/services/strategy"}'
      >
        Strategy
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// End-of-post product CTA aligned to AI Strategy / Implementation / Engineering ladder.
</script>
