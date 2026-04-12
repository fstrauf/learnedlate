<template>
  <div class="home-page">
    <SEOHead 
      title="LearnedLate – AI Strategy, Implementation & Engineering"
      description="AI is changing how businesses work. We help teams find where it matters and make it useful in the business."
      url="/"
      type="website"
      :schema="homeSchema"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <!-- Ambient gradient orbs -->
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      
      <!-- Background hero image -->
      <div class="pointer-events-none absolute inset-0 opacity-[0.15]">
        <img 
          src="/hero.png" 
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-gray-900" />
      
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-200">
            <span class="h-1.5 w-1.5 rounded-full bg-amber-300" />
            AI Strategy, Implementation & Engineering
          </div>
          <h1 class="mb-6 text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Don't get <span class="text-amber-200">left behind</span>.
          </h1>
          <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 lg:text-xl">
            AI is changing how businesses work. The ones that learn to use it well will move faster, operate better, and pull ahead. We help you find where it matters and make it useful in your business.
          </p>
          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <Button 
              as-child 
              size="lg" 
              class="bg-amber-600 text-white hover:bg-amber-700"
              data-track='{"event":"cta_click","cta_text":"Get Started","location":"hero","destination":"/contact"}'
            >
              <router-link to="/contact">
                Get Started
              </router-link>
            </Button>
            <Button 
              as-child 
              size="lg" 
              variant="outline" 
              class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
              data-track='{"event":"cta_click","cta_text":"See how it works","location":"hero","destination":"#services"}'
            >
              <a href="#services">
                See how it works
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Three Pillars Section -->
    <section id="services" class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24">
      <div class="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-6xl">
          <div class="mb-12 text-center">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">Our approach</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl md:text-4xl">
              Three ways we <span class="text-amber-200">help</span>.
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <router-link to="/services/strategy" class="group">
              <div class="h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-amber-500/30 hover:bg-white/10">
                <ClipboardCheck class="mb-4 h-8 w-8 text-amber-500" />
                <h3 class="mb-2 text-xl font-medium text-white">Strategy</h3>
                <p class="mb-4 text-gray-300">
                  Most companies know AI matters but do not know where to start. We find the best places to use it and give you a clear plan.
                </p>
                <p class="text-sm text-amber-300 group-hover:text-amber-200">Learn more &rarr;</p>
              </div>
            </router-link>

            <router-link to="/services/implementation" class="group">
              <div class="h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-amber-500/30 hover:bg-white/10">
                <Workflow class="mb-4 h-8 w-8 text-amber-500" />
                <h3 class="mb-2 text-xl font-medium text-white">Implementation</h3>
                <p class="mb-4 text-gray-300">
                  We turn slow, manual work into faster workflows by connecting the right tools to the systems you already use.
                </p>
                <p class="text-sm text-amber-300 group-hover:text-amber-200">Learn more &rarr;</p>
              </div>
            </router-link>

            <router-link to="/services/engineering" class="group">
              <div class="h-full rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-amber-500/30 hover:bg-white/10">
                <Code class="mb-4 h-8 w-8 text-amber-500" />
                <h3 class="mb-2 text-xl font-medium text-white">Engineering</h3>
                <p class="mb-4 text-gray-300">
                  When the standard tools are not enough, we build custom systems that fit your business and solve the gap.
                </p>
                <p class="text-sm text-amber-300 group-hover:text-amber-200">Learn more &rarr;</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Proof Story Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24">
      <div class="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-4xl">
          <div class="mb-10 text-center">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">We build what we sell</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              From manual process to <span class="text-amber-200">automated system</span>.
            </h2>
          </div>

          <div class="rounded-2xl border border-white/15 border-l-4 border-l-amber-500 bg-white/5 p-6 backdrop-blur sm:p-8">
            <p class="mb-4 text-gray-300 leading-relaxed">
              We took our own slow SEO workflow and automated it from keyword research to content generation to publishing.
            </p>
            <p class="mb-6 text-gray-300 leading-relaxed">
              The result: <span class="font-medium text-amber-200">200k+ search impressions</span> across multiple sites, <span class="font-medium text-amber-200">$0 ad spend</span>, and a repeatable system. That system became <a href="https://www.pageseeds.com/" target="_blank" rel="noopener noreferrer" class="text-amber-300 hover:text-amber-200 hover:underline">PageSeeds</a> — a product used by founders and small businesses to grow their search visibility.
            </p>
            <div class="flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-sm text-gray-400">
                This is the work: find the bottleneck, automate it, make it useful.
              </p>
              <a href="https://blog.learnedlate.com/p/i-dont-think-content-seo-is-dead" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-sm text-amber-300 hover:text-amber-200 whitespace-nowrap">
                Read the full story &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24">
      <div class="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl">
          <h2 class="mb-10 text-center text-2xl font-light text-white sm:text-3xl">
            Frequently asked <span class="text-amber-200">questions</span>.
          </h2>
          
          <div class="space-y-4">
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 class="mb-2 text-base font-medium text-white">How is this different from a consulting engagement that ends with a slide deck?</h3>
              <p class="text-sm text-gray-300">We build and ship. Every engagement includes implementation, not just recommendations. If it doesn't reach production, we haven't done our job.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 class="mb-2 text-base font-medium text-white">What does it cost?</h3>
              <p class="text-sm text-gray-300">It depends on scope. Strategy engagements start in the low thousands. Implementation and engineering are scoped per project. We'll give you a clear number after one conversation.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 class="mb-2 text-base font-medium text-white">How long does a typical engagement take?</h3>
              <p class="text-sm text-gray-300">Strategy: 1–2 weeks. Implementation: 2–6 weeks to a working pilot. Engineering: ongoing, scoped in sprints.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 class="mb-2 text-base font-medium text-white">Do you replace our internal team or work alongside them?</h3>
              <p class="text-sm text-gray-300">Alongside. We plug into your existing tools and processes. The goal is to leave your team more capable, not dependent.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 class="mb-2 text-base font-medium text-white">What kind of companies do you work with?</h3>
              <p class="text-sm text-gray-300">Mostly mid-market teams that know AI matters but need help making it work. We also work with smaller founder-led companies on specific automation projects.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 class="mb-2 text-base font-medium text-white">What if we're not ready for AI yet?</h3>
              <p class="text-sm text-gray-300">That's what the strategy assessment is for. If the answer is "not yet," we'll tell you that — and what to focus on first.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-10 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
            Let's figure out where AI <span class="text-amber-200">fits</span>.
          </h2>
          <p class="mb-8 text-lg text-gray-300">
            Tell us what you're working on. We'll respond within 24 hours.
          </p>
          <Button 
            as-child 
            size="lg" 
            class="bg-amber-600 text-white hover:bg-amber-700"
            data-track='{"event":"cta_click","cta_text":"Get Started","location":"final_cta","destination":"/contact"}'
          >
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
import {
  ClipboardCheck,
  Workflow,
  Code,
} from 'lucide-vue-next'

// Schema markup for homepage
const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://learnedlate.com/#website",
    "url": "https://learnedlate.com",
    "name": "LearnedLate",
    "description": "AI strategy, implementation, and engineering services",
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "@id": "https://learnedlate.com/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://learnedlate.com/#organization",
    "name": "LearnedLate",
    "url": "https://learnedlate.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://learnedlate.com/learndlate.png"
    },
    "description": "AI strategy, implementation, and engineering services",
    "serviceType": [
      "AI Strategy",
      "AI Implementation",
      "AI Engineering"
    ],
    "sameAs": [
      "https://x.com/learnedlate"
    ]
  }
]
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
  width: 100%;
}

section {
  overflow-x: hidden;
}
</style>
