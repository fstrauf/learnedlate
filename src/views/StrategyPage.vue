<template>
  <div class="strategy-page">
    <SEOHead 
      title="AI Strategy – Know Where to Start | LearnedLate"
      description="Most teams know AI matters. They do not know where to start. We help you find the best opportunities and decide what to do first."
      url="/services/strategy"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <!-- Ambient gradient orbs -->
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      
      <!-- Background strategy image -->
      <div class="pointer-events-none absolute inset-0 opacity-[0.15]">
        <img 
          src="/strategy.webp" 
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-gray-900" />
      
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-200">
            <span class="h-1.5 w-1.5 rounded-full bg-amber-300" />
            Strategy
          </div>
          <h1 class="mb-6 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Don't waste time on the <span class="text-amber-200">wrong AI project</span>.
          </h1>
          <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Most teams know AI matters. They just do not know where to start. We look at how your business works, find the best opportunities, and give you a clear first move.
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
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">Decision support</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              What you leave <span class="text-amber-200">with</span>.
            </h2>
            <p class="text-lg text-gray-300">
              A clear starting point, not more noise.
            </p>
          </div>
          
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <ClipboardCheck class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Best opportunities</h3>
              <p class="text-sm text-gray-300">A short list of where AI could make the biggest difference first.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Gauge class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">What's ready and what's not</h3>
              <p class="text-sm text-gray-300">A simple view of where you can move now and what would slow you down.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <ShieldAlert class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Key risks</h3>
              <p class="text-sm text-gray-300">The main blockers and risks that could waste time or money.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Route class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Clear next steps</h3>
              <p class="text-sm text-gray-300">What to do first, what can wait, and what is not worth doing yet.</p>
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
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200">Route map</p>
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              How it <span class="text-amber-200">works</span>.
            </h2>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">1</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">We learn how your business works</h3>
                <p class="text-sm text-gray-300">We look at your goals, your bottlenecks, and where time is being lost today.</p>
              </div>
            </div>
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">2</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">We review the best options</h3>
                <p class="text-sm text-gray-300">We work out where AI could help, what is realistic now, and what is not worth chasing. Usually 1 to 2 weeks.</p>
              </div>
            </div>
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">3</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">You get a simple plan</h3>
                <p class="text-sm text-gray-300">You leave with the best first move, the main risks, and a clear view of what to do next.</p>
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
              <p class="text-sm text-gray-300">Teams that know AI matters but do not know where to start.</p>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Leaders who need to make a sensible decision before spending money.</p>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Businesses that have tried a few things but still do not have a clear direction.</p>
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
            Ready to find the <span class="text-amber-200">right starting point</span>?
          </h2>
          <p class="mb-8 text-lg text-gray-300">
            Tell us what you're trying to figure out. We'll respond within 24 hours.
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
  ClipboardCheck,
  Gauge,
  ShieldAlert,
  Route,
  Check,
} from 'lucide-vue-next'
</script>
