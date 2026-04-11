<template>
  <div class="home-page">
    <SEOHead 
      title="LearnedLate – AI Readiness, Workflow Automation & Delivery Support | NZ & Australia"
      description="LearnedLate helps ANZ mid-market teams identify the right first AI workflow, automate it, and expand with the same delivery partner."
      url="/"
      type="website"
      :schema="homeSchema"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div class="text-center lg:text-left">
            <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-sm text-amber-200">
              <MapPin class="h-4 w-4" />
              Serving New Zealand & Australia
            </div>
            <h1 class="mb-6 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Turn AI Into One Working Business System.
            </h1>
            <p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 lg:mx-0 lg:text-xl">
              For ANZ mid-market teams that need a clear starting point, a practical first use case, and implementation support that reaches production.
            </p>
            <div class="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button 
                as-child 
                size="lg" 
                class="bg-amber-600 text-white hover:bg-amber-700"
                data-track='{"event":"cta_click","cta_text":"Book an AI Readiness Assessment","location":"hero","destination":"/contact"}'
              >
                <router-link to="/contact">
                  Book an AI Readiness Assessment
                </router-link>
              </Button>
              <Button 
                as-child 
                size="lg" 
                variant="outline" 
                class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
                data-track='{"event":"cta_click","cta_text":"See How It Works","location":"hero","destination":"/services"}'
              >
                <router-link to="/services">
                  See How It Works
                </router-link>
              </Button>
            </div>
            <p class="mt-6 text-sm text-gray-400">
              Assessment, automation, and delivery in one team.
            </p>
          </div>

          <div class="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-gray-400">At a glance</p>
            <div class="space-y-4">
              <div class="flex items-start gap-3 rounded-xl bg-gray-900/40 p-4">
                <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                <div>
                  <p class="text-sm font-medium text-white">Start with one clear use case</p>
                  <p class="text-sm text-gray-300">Get a practical first step instead of a broad AI wishlist.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 rounded-xl bg-gray-900/40 p-4">
                <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                <div>
                  <p class="text-sm font-medium text-white">Automate a real workflow</p>
                  <p class="text-sm text-gray-300">Connect the work to your existing systems and pilot it in operations.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 rounded-xl bg-gray-900/40 p-4">
                <Check class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                <div>
                  <p class="text-sm font-medium text-white">Expand with the same team</p>
                  <p class="text-sm text-gray-300">Keep planning, delivery, and rollout aligned when the work grows.</p>
                </div>
              </div>
            </div>
            <p class="mt-6 border-t border-white/15 pt-6 text-sm text-gray-300">
              Built for mid-market leadership teams that want progress they can measure and actually operate.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Proof Strip -->
    <section class="relative isolate overflow-hidden py-12 sm:py-16 bg-gray-50">
      <div class="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-100/60 blur-3xl" />
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto grid gap-4 md:grid-cols-3 relative">
          <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <p class="text-sm font-medium text-gray-900">Start with readiness, not guesswork</p>
            <p class="mt-2 text-sm text-gray-600">Know which use case to fund first and what needs to be true before you build.</p>
          </div>
          <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <p class="text-sm font-medium text-gray-900">Automate real work, not demos</p>
            <p class="mt-2 text-sm text-gray-600">We design around your process, connect the right systems, and pilot in live operations.</p>
          </div>
          <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <p class="text-sm font-medium text-gray-900">Keep planning and delivery aligned</p>
            <p class="mt-2 text-sm text-gray-600">The same team stays involved when the work needs broader rollout or ongoing support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-amber-700">
              Pick your starting point
            </div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Three Ways We Help
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Start with readiness, automate one workflow, or keep the same team involved through a broader rollout.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <router-link to="/services/ai-readiness" class="group">
              <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                <CardHeader>
                  <ClipboardCheck class="w-8 h-8 text-amber-600 mb-3" />
                  <CardTitle class="text-xl">AI Readiness Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p class="text-gray-600 mb-4">
                    Find the right first AI opportunity and leave with a practical next-step plan.
                  </p>
                  <p class="text-sm text-gray-500">
                    Best when AI matters but the first priority is still unclear.
                  </p>
                </CardContent>
              </Card>
            </router-link>

            <router-link to="/services/agentic-workflows" class="group">
              <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                <CardHeader>
                  <Bot class="w-8 h-8 text-amber-600 mb-3" />
                  <CardTitle class="text-xl">AI Workflow Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p class="text-gray-600 mb-4">
                    Automate one high-friction workflow and connect it to the systems your team already uses.
                  </p>
                  <p class="text-sm text-gray-500">
                    Best when a specific process is slow, manual, or spread across tools.
                  </p>
                </CardContent>
              </Card>
            </router-link>

            <router-link to="/services/full-stack-delivery" class="group">
              <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                <CardHeader>
                  <Layers class="w-8 h-8 text-amber-600 mb-3" />
                  <CardTitle class="text-xl">Delivery Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p class="text-gray-600 mb-4">
                    Keep the same team involved from planning through rollout when the work is larger or more complex.
                  </p>
                  <p class="text-sm text-gray-500">
                    Best when multiple teams, systems, or stages need to stay aligned.
                  </p>
                </CardContent>
              </Card>
            </router-link>
          </div>

          <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center shadow-sm">
            <p class="text-sm font-medium text-gray-900">Need something more specialised?</p>
            <p class="mt-2 text-sm text-gray-600">
              We scope custom AI only when standard tools are not enough.
              <router-link to="/services/custom-ai-development" class="text-amber-700 hover:underline">See when custom development makes sense.</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              How Work Usually Progresses
            </h2>
            <p class="text-gray-600 text-lg">
              The path is simple: assess the right starting point, automate one workflow, then expand if it proves valuable.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-semibold">1</div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">Assess</h3>
              <p class="text-sm text-gray-600">Use the readiness assessment to pick the best first use case and understand the conditions for success.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-semibold">2</div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">Automate</h3>
              <p class="text-sm text-gray-600">Map one workflow, build the automation, connect the right systems, and pilot it in live operations.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-semibold">3</div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">Expand</h3>
              <p class="text-sm text-gray-600">If the first workflow proves valuable, keep the same team involved as the work gets broader or more complex.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="relative isolate overflow-hidden py-16 sm:py-20 bg-gray-900 text-white">
      <div class="pointer-events-none absolute -left-20 -top-10 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light mb-4">
            Start With Clarity
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Book an AI Readiness Assessment and leave with a clearer first use case, the key risks, and the next steps worth funding.
          </p>
          <div class="mx-auto mb-8 max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-6 text-left shadow-2xl backdrop-blur">
            <p class="mb-3 text-xs uppercase tracking-[0.2em] text-gray-400">What you get</p>
            <ul class="space-y-2 text-sm text-gray-200">
              <li class="flex items-start gap-2">
                <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
                Scored readiness view across people, process, technology, and data.
              </li>
              <li class="flex items-start gap-2">
                <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
                A shortlist of high-value AI use cases.
              </li>
              <li class="flex items-start gap-2">
                <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
                Clear next-step recommendation and risk view.
              </li>
            </ul>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as-child 
              size="lg" 
              class="bg-amber-600 text-white hover:bg-amber-700"
              data-track='{"event":"cta_click","cta_text":"Book an AI Readiness Assessment","location":"final_cta","destination":"/contact"}'
            >
              <router-link to="/contact">
                Book an AI Readiness Assessment
              </router-link>
            </Button>
            <Button 
              as-child 
              size="lg" 
              variant="outline" 
              class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900"
              data-track='{"event":"cta_click","cta_text":"Explore Services First","location":"final_cta","destination":"/services"}'
            >
              <router-link to="/services">
                Explore Services First
              </router-link>
            </Button>
          </div>
          <p class="mt-6 text-sm text-gray-500">
            If the right answer is "not yet," we'll tell you that too.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Check,
  ClipboardCheck,
  Bot,
  Layers,
} from 'lucide-vue-next'

// Schema markup for homepage
const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://learnedlate.com/#website",
    "url": "https://learnedlate.com",
    "name": "LearnedLate",
    "description": "AI readiness, workflow automation, and delivery support for New Zealand and Australian mid-market businesses",
    "inLanguage": "en-NZ",
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
    "description": "AI readiness, workflow automation, and delivery support for NZ and Australian mid-market businesses",
    "areaServed": [
      {
        "@type": "Country",
        "name": "New Zealand"
      },
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "serviceType": [
      "AI Readiness Assessment",
      "AI Workflow Automation",
      "Delivery Partnership"
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
