<template>
  <div class="ai-readiness-page">
    <SEOHead 
      title="AI Readiness Assessment – Know Where to Start With AI | LearnedLate"
      description="Get a practical view of your AI readiness, the strongest first use cases, and the next steps worth funding."
      url="/services/ai-readiness"
      type="website"
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
              Serving New Zealand and Australia
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
              Know Where to Start With AI
            </h1>
            <p class="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Get a practical assessment of your readiness, the strongest first use cases, and the next steps worth funding.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button as-child size="lg" variant="secondary">
                <router-link to="/contact">
                  Book an AI Readiness Assessment
                </router-link>
              </Button>
              <Button as-child size="lg" variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
                <router-link to="/services">
                  View All Services
                </router-link>
              </Button>
            </div>
          </div>

          <div class="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
            <p class="mb-4 text-xs uppercase tracking-[0.2em] text-gray-400">Assessment at a glance</p>
            <div class="space-y-4">
              <div class="flex items-start gap-3 rounded-xl bg-gray-900/40 p-4">
                <ClipboardCheck class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                <div>
                  <p class="text-sm font-medium text-white">Scored readiness view</p>
                  <p class="text-sm text-gray-300">Clarity across people, process, technology, and data.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 rounded-xl bg-gray-900/40 p-4">
                <Target class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                <div>
                  <p class="text-sm font-medium text-white">Prioritized opportunities</p>
                  <p class="text-sm text-gray-300">A shortlist of practical use cases you can execute.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 rounded-xl bg-gray-900/40 p-4">
                <Clock class="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                <div>
                  <p class="text-sm font-medium text-white">Fast turnaround</p>
                  <p class="text-sm text-gray-300">Written recommendation delivered within 48 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Deliverables Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              What You Leave With
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              The assessment is designed to give you a clearer first move, not more theory.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Gauge class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Readiness Score</CardTitle>
                <CardDescription>A clear view of where your team is ready and where friction will slow adoption.</CardDescription>
              </CardHeader>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <ListChecks class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Priority Use Cases</CardTitle>
                <CardDescription>A short list of the strongest first opportunities based on effort, impact, and fit.</CardDescription>
              </CardHeader>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <ShieldAlert class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Key Risks</CardTitle>
                <CardDescription>The main blockers, dependencies, and practical risks that could slow delivery.</CardDescription>
              </CardHeader>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Route class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Next-Step Plan</CardTitle>
                <CardDescription>A clear recommendation for what to do first, what to sequence later, and what not to do yet.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Assessment Areas -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              What We Assess
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              We keep the framework simple so the output stays useful.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>People</CardTitle>
                <CardDescription>Skills, ownership, and readiness for change.</CardDescription>
              </CardHeader>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Workflow class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Process</CardTitle>
                <CardDescription>Workflow maturity, governance, and operational bottlenecks.</CardDescription>
              </CardHeader>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Cpu class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Technology</CardTitle>
                <CardDescription>Systems, integrations, security, and delivery constraints.</CardDescription>
              </CardHeader>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Database class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Data</CardTitle>
                <CardDescription>Quality, access, and whether the data is usable for the opportunities you care about.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              How the Assessment Works
            </h2>
            <p class="text-gray-600 text-lg">
              Three steps from first conversation to practical next steps
            </p>
          </div>
          
          <div class="space-y-6">
            <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div class="flex flex-col md:flex-row gap-6 items-start">
              <div class="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                1
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-medium text-gray-900 mb-2">Discovery Conversation</h3>
                <p class="text-gray-600 mb-3">
                  A structured conversation about your current priorities, operational friction, and the type of result you want from AI.
                </p>
                <p class="text-sm text-gray-500">
                  <Clock class="w-4 h-4 inline mr-1" />
                  Typically scheduled within one week of booking
                </p>
              </div>
            </div>
            </div>
            
            <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div class="flex flex-col md:flex-row gap-6 items-start">
              <div class="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                2
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-medium text-gray-900 mb-2">Scored Evaluation</h3>
                <p class="text-gray-600 mb-3">
                  We review what we learned, score readiness across the four areas, and identify where momentum exists today.
                </p>
                <p class="text-sm text-gray-500">
                  <Clock class="w-4 h-4 inline mr-1" />
                  Completed within 24 hours of the discovery conversation
                </p>
              </div>
            </div>
            </div>
            
            <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div class="flex flex-col md:flex-row gap-6 items-start">
              <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                3
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-medium text-gray-900 mb-2">Written Recommendation</h3>
                <p class="text-gray-600 mb-3">
                  You receive the score, the strongest first use cases, the main risks, and a recommendation for what to do next.
                </p>
                <p class="text-sm text-gray-500">
                  <Clock class="w-4 h-4 inline mr-1" />
                  Within 48 hours of the discovery conversation
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Pricing
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Clear ranges based on organization complexity and market.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-2xl">🇳🇿</span>
                  <CardTitle>New Zealand</CardTitle>
                </div>
                <CardDescription>GST exclusive unless stated</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="text-3xl font-bold text-gray-900 mb-2">$7,500 – $15,000</div>
                <p class="text-sm text-gray-600 mb-4">
                  Typical range by organization size and complexity
                </p>

              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-2xl">🇦🇺</span>
                  <CardTitle>Australia</CardTitle>
                </div>
                <CardDescription>GST exclusive unless stated</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="text-3xl font-bold text-gray-900 mb-2">$10,000 – $30,000</div>
                <p class="text-sm text-gray-600 mb-4">
                  Typical range by organization size and complexity
                </p>
                <div class="rounded-lg bg-amber-50 border border-amber-200 p-4">
                  <div class="flex items-start gap-2">
                    <Info class="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p class="text-sm font-medium text-gray-900">Australian Businesses</p>
                      <p class="text-sm text-gray-600">
                        Contact us to discuss pricing for your specific situation and location.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light mb-4">
            Ready to Choose the Right First Move?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Book the assessment and get a clearer view of what to prioritise, what to avoid, and what to sequence next.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Book an AI Readiness Assessment
              </router-link>
            </Button>
            <Button as-child size="lg" variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
              <router-link to="/ai-readiness-checklist">
                Download Readiness Checklist
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
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  ClipboardCheck,
  Target,
  Gauge,
  ListChecks,
  ShieldAlert,
  Route,
  Users,
  Workflow,
  Cpu,
  Database,
  Clock,
  Info,
} from 'lucide-vue-next'
</script>
