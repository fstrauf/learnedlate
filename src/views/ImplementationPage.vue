<template>
  <div class="implementation-page">
    <SEOHead 
      title="Implementation – Automate Real Workflows | LearnedLate"
      description="If a workflow is slow, repetitive, and spread across too many tools, we help make it faster and easier to run."
      url="/services/implementation"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <!-- Ambient gradient orbs -->
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      
      <!-- Background implementation image -->
      <div class="pointer-events-none absolute inset-0 opacity-[0.15]">
        <img 
          src="/implementation.webp" 
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-gray-900" />
      
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-200">
            <span class="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Implementation
          </div>
          <h1 class="mb-6 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Your team should not be doing this <span class="text-amber-200">by hand</span>.
          </h1>
          <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            If a workflow is slow, repetitive, and spread across too many tools, we fix it. We connect the right systems, automate the busywork, and make the process run better.
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

    <!-- What We Do -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-5xl">
          <div class="mb-12 text-center">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">What changes</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              What we <span class="text-amber-200">do</span>.
            </h2>
          </div>
          
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Workflow class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Workflow automation</h3>
              <p class="text-sm text-gray-300">We take a slow process and turn it into something faster, cleaner, and easier to run.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Plug class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">System integration</h3>
              <p class="text-sm text-gray-300">We connect the tools and systems your team already uses so the workflow works end to end.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Users class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Bigger rollouts</h3>
              <p class="text-sm text-gray-300">If the work touches several teams or systems, we stay involved until it is rolled out properly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-4xl">
          <div class="mb-12 text-center">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">Flow</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              How it <span class="text-amber-200">works</span>.
            </h2>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">1</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">We map the process</h3>
                <p class="text-sm text-gray-300">We look at what is slow, what is manual, and where work gets stuck.</p>
                <p class="mt-2 text-xs text-gray-500">Week 1</p>
              </div>
            </div>
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">2</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">We build the workflow</h3>
                <p class="text-sm text-gray-300">We automate the work, connect the systems, and test it in a real setting.</p>
                <p class="mt-2 text-xs text-gray-500">Usually 2 to 3 weeks</p>
              </div>
            </div>
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">3</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">We roll it out</h3>
                <p class="text-sm text-gray-300">If it works, we help put it into day-to-day use and expand it where it makes sense.</p>
                <p class="mt-2 text-xs text-gray-500">Based on what the first workflow proves</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What Changes -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-5xl">
          <div class="mb-12 text-center">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">After the fix</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              What changes after <span class="text-amber-200">rollout</span>.
            </h2>
          </div>
          
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-white/15 border-l-4 border-l-amber-500 bg-white/5 p-6 backdrop-blur">
              <h3 class="mb-2 text-base font-medium text-white">Less manual work</h3>
              <p class="text-sm text-gray-300">Routine actions run automatically. People step in only when judgment is needed.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 class="mb-2 text-base font-medium text-white">Faster turnaround</h3>
              <p class="text-sm text-gray-300">Requests move through the workflow faster. Routing and standard decisions no longer wait on people.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <h3 class="mb-2 text-base font-medium text-white">Better visibility</h3>
              <p class="text-sm text-gray-300">Steps, exceptions, and outcomes become visible instead of hidden in manual work.</p>
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
              <p class="text-sm text-gray-300">Teams with a clear bottleneck, too much manual work, or too many steps spread across tools.</p>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Businesses that know what needs fixing and want it built properly.</p>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Workflows that touch several systems or teams and need someone to join it all up.</p>
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
            Have a workflow that should run <span class="text-amber-200">better</span>?
          </h2>
          <p class="mb-8 text-lg text-gray-300">
            Tell us where the friction is. We'll respond within 24 hours.
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
  Workflow,
  Plug,
  Users,
  Check,
} from 'lucide-vue-next'
</script>
