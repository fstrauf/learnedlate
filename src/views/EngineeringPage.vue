<template>
  <div class="engineering-page">
    <SEOHead 
      title="AI Engineering – Custom Build When Standard Tools Fall Short | LearnedLate"
      description="When off-the-shelf tools can't solve it, we build custom AI solutions and provide ongoing engineering support. Working software, not prototypes."
      url="/services/engineering"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="mb-6 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Engineering
          </h1>
          <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Off-the-shelf tools don't solve every problem. When standard tools fall short, we build custom AI solutions and provide ongoing engineering support. You get working software, not prototypes.
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
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              What we believe.
            </h2>
          </div>
          
          <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-8">
            <p class="text-gray-300 leading-relaxed">
              If a commercial tool solves the problem, use it. We don't build for the sake of building. Custom work is only worth it when you need domain-specific logic standard tools can't handle, hard integrations into your environment, or capabilities that give you a real edge.
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
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              What we build.
            </h2>
          </div>
          
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Code class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Custom AI solutions</h3>
              <p class="text-sm text-gray-300">When domain-specific logic or hard integrations require it — built to your requirements, not a template.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Layers class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Full-stack applications</h3>
              <p class="text-sm text-gray-300">End-to-end application development — backend APIs, frontend interfaces, cloud infrastructure.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Brain class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Model fine-tuning</h3>
              <p class="text-sm text-gray-300">Adapting models to your specific business context, terminology, and decision patterns.</p>
            </div>
            <div class="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <Wrench class="mb-3 h-6 w-6 text-amber-500" />
              <h3 class="mb-2 text-lg font-medium text-white">Ongoing engineering support</h3>
              <p class="text-sm text-gray-300">Continued development, maintenance, and iteration in regular sprint cycles.</p>
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
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              How we work.
            </h2>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">1</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">Prove the gap</h3>
                <p class="text-sm text-gray-300">We validate why standard tools fail on your integration, control, or domain requirements before writing code.</p>
              </div>
            </div>
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">2</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">Define a narrow build</h3>
                <p class="text-sm text-gray-300">The first scope is intentionally tight so value can be tested before the work expands.</p>
              </div>
            </div>
            <div class="flex items-start gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xl font-bold text-amber-300">3</div>
              <div>
                <h3 class="mb-2 text-lg font-medium text-white">Ship in sprints</h3>
                <p class="text-sm text-gray-300">Regular cycles, clear deliverables, shared communication channels. Transparent progress throughout.</p>
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
            <h2 class="mb-4 text-2xl font-light text-white sm:text-3xl">
              Who this is for.
            </h2>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Teams that need capabilities standard tools can't provide.</p>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Products with AI at the core.</p>
            </div>
            <div class="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <p class="text-sm text-gray-300">Organisations that need ongoing engineering capacity without the overhead of full-time hires.</p>
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
            Think you need custom AI?
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
