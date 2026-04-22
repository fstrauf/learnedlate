<template>
  <div class="about-page">
    <SEOHead 
      title="About – LearnedLate | AI Strategy, Implementation & Engineering"
      description="We help teams turn AI from buzzword into business results. Strategy, implementation, and engineering from one team."
      url="/about"
      type="website"
      :schema="aboutSchema"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="mb-6 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            About
          </h1>
          <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            We help teams go from AI interest to working systems — with one partner across strategy, implementation, and engineering.
          </p>
        </div>
      </div>
    </section>

    <!-- What We Believe -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl">
          <div class="mb-10 text-center">
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              What we believe.
            </h2>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-sm font-bold text-amber-300">1</span>
              <p class="text-gray-300">AI changes how businesses operate. That's already happening.</p>
            </div>
            <div class="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-sm font-bold text-amber-300">2</span>
              <p class="text-gray-300">Most companies need help going from interest to implementation.</p>
            </div>
            <div class="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-sm font-bold text-amber-300">3</span>
              <p class="text-gray-300">Strategy without execution is wasted money.</p>
            </div>
            <div class="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <span class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-sm font-bold text-amber-300">4</span>
              <p class="text-gray-300">The best results come from one team that handles planning, building, and rollout.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl">
          <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-8">
            <h2 class="mb-4 text-xl font-medium text-white">Florian Strauf</h2>
            <p class="mb-4 text-gray-300 leading-relaxed">
              Software engineer turned solution architect turned AI consultant. Years building enterprise systems, cloud infrastructure, and integration architecture — now applied to helping teams adopt AI in ways that actually work in production. I speak both business and technical, so nothing gets lost between strategy and delivery.
            </p>
            <div class="flex gap-4">
              <a href="https://x.com/learnedlate" target="_blank" rel="noopener noreferrer" class="text-sm text-amber-300 hover:text-amber-200">Twitter</a>
              <a href="https://blog.learnedlate.com" target="_blank" rel="noopener noreferrer" class="text-sm text-amber-300 hover:text-amber-200">Blog</a>
              <router-link to="/now" class="text-sm text-amber-300 hover:text-amber-200">Now</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-10 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
            Let's figure out where AI fits.
          </h2>
          <p class="mb-8 text-lg text-gray-300">
            Tell us what you're working on. We'll respond within 24 hours.
          </p>
          <Button as-child size="lg" class="bg-amber-600 text-white hover:bg-amber-700">
            <router-link to="/contact">
              Get Started
            </router-link>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'
import { Button } from '@/components/ui/button'

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.learnedlate.com/about/#webpage",
    "url": "https://www.learnedlate.com/about",
    "name": "About – LearnedLate | AI Strategy, Implementation & Engineering",
    "description": "We help teams turn AI from buzzword into business results.",
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.learnedlate.com/#website"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.learnedlate.com/#organization",
    "name": "LearnedLate",
    "url": "https://www.learnedlate.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.learnedlate.com/learndlate.png"
    },
    "description": "AI strategy, implementation, and engineering services",
    "serviceType": [
      "AI Strategy",
      "AI Implementation",
      "AI Engineering"
    ]
  }
]
</script>
