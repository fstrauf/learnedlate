<template>
  <div class="services-page">
    <SEOHead 
      title="Services – AI Readiness, Workflow Automation & Delivery Partnership | LearnedLate"
      description="Start with AI readiness, automate one workflow, or keep the same team involved through a larger rollout."
      url="/services"
      type="website"
      :schema="servicesSchema"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-sm text-amber-200">
            <MapPin class="h-4 w-4" />
            Services for New Zealand and Australia
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Three Ways to Work With LearnedLate
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Start with readiness, automate one workflow, or keep the same team involved through a larger rollout.
          </p>
          <div class="mx-auto max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-6 text-left shadow-2xl backdrop-blur sm:p-8">
            <p class="text-xs uppercase tracking-[0.2em] text-gray-400">How to choose</p>
            <ul class="mt-4 space-y-3 text-sm text-gray-200">
              <li class="flex items-start gap-2">
                <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
                Start with readiness if the first use case is still unclear.
              </li>
              <li class="flex items-start gap-2">
                <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
                Choose workflow automation for one operational bottleneck.
              </li>
              <li class="flex items-start gap-2">
                <Check class="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />
                Choose delivery partnership when multiple teams and systems are involved.
              </li>
            </ul>
            <div class="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button as-child size="lg" variant="secondary">
                <router-link to="/contact">
                  Book an AI Readiness Assessment
                </router-link>
              </Button>
              <Button as-child size="lg" variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
                <router-link to="/services/agentic-workflows">
                  Explore Workflow Automation
                </router-link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Primary Offers -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Choose the Starting Point That Fits
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              The goal is simple: pick the right first move, then expand only when the work proves valuable.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card class="group h-full rounded-xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <ClipboardCheck class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">AI Readiness Assessment</CardTitle>
                <CardDescription>
                  Start with the right first use case
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  Get a practical view of readiness, the strongest first opportunities, and the next steps worth funding.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Scored readiness across people, process, technology, and data
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Shortlist of practical use cases
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Recommended next steps and key risks
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button as-child variant="outline" class="w-full">
                  <router-link to="/services/ai-readiness">
                    Learn More
                  </router-link>
                </Button>
              </CardFooter>
            </Card>

            <Card class="group h-full rounded-xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Bot class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">AI Workflow Automation</CardTitle>
                <CardDescription>
                  Automate one high-friction process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  Map the workflow, build the automation, connect the right systems, and pilot it in live operations.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Workflow mapping and use-case design
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Integration with the systems your team already uses
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Pilot, measurement, and rollout planning
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button as-child variant="outline" class="w-full">
                  <router-link to="/services/agentic-workflows">
                    Learn More
                  </router-link>
                </Button>
              </CardFooter>
            </Card>

            <Card class="group h-full rounded-xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-lg">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Layers class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">Delivery Partnership</CardTitle>
                <CardDescription>
                  Keep strategy and delivery in one team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  Use the same partner from planning through rollout when the work spans multiple teams, systems, or stages.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    One team across planning, delivery, and rollout
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Clear sequencing across multiple systems or stakeholders
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Ongoing accountability for rollout and outcomes
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button as-child variant="outline" class="w-full">
                  <router-link to="/services/full-stack-delivery">
                    Learn More
                  </router-link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div class="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <h3 class="text-lg font-medium text-gray-900">Where custom AI fits</h3>
            <p class="mt-2 text-sm text-gray-600">
              Custom AI is available when standard tools are not enough. We treat it as a specialist path, not the default recommendation.
              <router-link to="/services/custom-ai-development" class="text-amber-700 hover:underline"> See when custom development makes sense.</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How Work Progresses -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              How Work Usually Progresses
            </h2>
            <p class="text-gray-600 text-lg">
              Start with clarity, prove value in one workflow, then expand only when the work needs it.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-semibold">1</div>
              <h3 class="font-medium text-gray-900 mb-2">Assess</h3>
              <p class="text-sm text-gray-600">Use the readiness assessment when the right first use case is still unclear.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-semibold">2</div>
              <h3 class="font-medium text-gray-900 mb-2">Automate</h3>
              <p class="text-sm text-gray-600">Move into workflow automation when one process is clearly worth fixing first.</p>
            </div>
            <div class="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-semibold">3</div>
              <h3 class="font-medium text-gray-900 mb-2">Expand</h3>
              <p class="text-sm text-gray-600">Use delivery partnership when the work becomes multi-team, multi-system, or business-critical.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light mb-4">
            Not Sure Where to Start?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Start with an AI Readiness Assessment. It is the clearest way to choose the right first use case and avoid overbuilding too early.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Book an AI Readiness Assessment
              </router-link>
            </Button>
          </div>
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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ClipboardCheck,
  Bot,
  Layers,
  MapPin,
  Check,
} from 'lucide-vue-next'

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://learnedlate.com/services/#service",
    "serviceType": "AI Consulting",
    "provider": {
      "@type": "Organization",
      "name": "LearnedLate",
      "url": "https://learnedlate.com"
    },
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Readiness Assessment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Workflow Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Delivery Partnership"
          }
        }
      ]
    }
  }
]
</script>
