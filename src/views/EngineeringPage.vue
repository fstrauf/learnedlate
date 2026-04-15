<template>
  <div class="engineering-page">
    <SEOHead 
      title="AI Engineering – Custom Build When Standard Tools Fall Short | LearnedLate"
      description="Sometimes the tools on the market are not enough. When that happens, we build software that fits the business properly."
      url="/services/engineering"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <!-- Ambient gradient orbs -->
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      
      <!-- Background engineering image -->
      <div class="pointer-events-none absolute inset-0 opacity-[0.15]">
        <img 
          src="/engineering.webp" 
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-gray-900" />
      
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-200">
            <span class="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Engineering
          </div>
          <h1 class="mb-6 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            When the tool you need <span class="text-amber-200">does not exist</span>, we build it.
          </h1>
          <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Sometimes the problem is too specific, the integration is too messy, or the workflow is too important to force into a template. That is when custom software makes sense.
          </p>
          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <Button as-child size="lg" class="bg-amber-600 text-white hover:bg-amber-700">
              <router-link to="/contact">
                Get Started
              </router-link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Believe -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl">
          <div class="mb-10 text-center">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">Principle</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              What we <span class="text-amber-200">believe</span>.
            </h2>
          </div>
          
          <div class="rounded-2xl border border-white/15 border-l-4 border-l-amber-500 bg-white/5 p-6 backdrop-blur sm:p-8">
            <p class="text-gray-300 leading-relaxed">
              If a standard tool solves the problem, use it. We only build custom software when it gives you something off-the-shelf tools cannot.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Build -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-5xl">
          <div class="mb-12 text-center">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">Build scope</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              What we <span class="text-amber-200">build</span>.
            </h2>
          </div>
          
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Code class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Custom AI solutions</h3>
              <p class="text-sm text-gray-300">Software built around your workflow, your data, and your business rules.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Layers class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Full-stack applications</h3>
              <p class="text-sm text-gray-300">The full system, from backend logic to frontend screens to the cloud setup behind it.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Brain class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Business-specific AI behaviour</h3>
              <p class="text-sm text-gray-300">We adapt the system to your terms, your workflow, and the way your business actually makes decisions.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Wrench class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Ongoing engineering support</h3>
              <p class="text-sm text-gray-300">We keep improving, maintaining, and extending the system once it is live.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-4xl">
          <div class="mb-12 text-center">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">Delivery</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              How we <span class="text-amber-200">work</span>.
            </h2>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">1</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">We make sure custom is needed</h3>
                <p class="text-sm text-gray-300">Before writing code, we check that a standard tool really cannot do the job well enough.</p>
              </div>
            </div>
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">2</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">We start small</h3>
                <p class="text-sm text-gray-300">The first version stays narrow so we can prove value before the work gets bigger.</p>
              </div>
            </div>
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">3</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">We build and improve in steps</h3>
                <p class="text-sm text-gray-300">You see regular progress, clear deliverables, and a straightforward path from first version to better versions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who This Is For -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl">
          <div class="mb-10 text-center">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">Best fit</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              Who this is <span class="text-amber-200">for</span>.
            </h2>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Teams whose workflow or product does not fit neatly into the tools already on the market.</p>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Businesses building something where AI is part of the product, not just a side tool.</p>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Teams that need extra engineering capacity without committing to full-time hires right away.</p>
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
            Think you need <span class="text-amber-200">custom AI</span>?
          </h2>
          <p class="mb-8 text-lg text-gray-300">
            We'll tell you directly whether custom development is justified or whether there's a faster path with standard tools.
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
import {
  Code,
  Layers,
  Brain,
  Wrench,
  Check,
} from 'lucide-vue-next'
</script>
