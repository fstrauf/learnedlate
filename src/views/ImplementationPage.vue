<template>
  <div class="implementation-page">
    <SEOHead 
      title="Implementation – Automate Real Workflows | LearnedLate"
      description="We automate real workflows, connect your existing systems, and pilot in production. Strategy without execution is expensive shelf-ware."
      url="/services/implementation"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="mb-6 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Implementation
          </h1>
          <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Strategy without execution is expensive shelf-ware. We automate the work your team shouldn't be doing by hand — connected to your systems, piloted in production.
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
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              What we do.
            </h2>
          </div>
          
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Workflow class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Workflow automation</h3>
              <p class="text-sm text-gray-300">Map a process, build the automation, connect your systems, and pilot it live.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Plug class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">System integration</h3>
              <p class="text-sm text-gray-300">Works with your existing stack — databases, APIs, documents, email, Slack, whatever your team depends on.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Users class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Scaled delivery</h3>
              <p class="text-sm text-gray-300">When the project spans multiple teams or systems, we coordinate end-to-end — one team across planning, build, and rollout.</p>
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
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              How it works.
            </h2>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">1</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">Map the workflow</h3>
                <p class="text-sm text-gray-300">We define what's manual, what's slow, what breaks — the inputs, decisions, handoffs, and systems involved.</p>
                <p class="mt-2 text-xs text-gray-500">Week 1</p>
              </div>
            </div>
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">2</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">Build and pilot</h3>
                <p class="text-sm text-gray-300">We build the automation, connect the systems, and pilot it in a controlled operational setting.</p>
                <p class="mt-2 text-xs text-gray-500">2–3 weeks to prototype, then pilot</p>
              </div>
            </div>
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">3</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">Rollout or expand</h3>
                <p class="text-sm text-gray-300">If the pilot works, we roll it out cleanly. If the work is broader, the same team stays involved through multi-team delivery.</p>
                <p class="mt-2 text-xs text-gray-500">Based on pilot results</p>
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
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              What changes after rollout.
            </h2>
          </div>
          
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
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
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              Who this is for.
            </h2>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Teams with a specific bottleneck worth fixing — manual repetition, slow handoffs, scattered information.</p>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Organisations that have done the strategy work and need execution.</p>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Multi-system environments that need coordination across teams and stakeholders.</p>
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
            Have a workflow that should run better?
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
