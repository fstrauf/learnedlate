<template>
  <div class="custom-ai-development-page">
    <SEOHead 
      title="Custom AI Development – When Standard Tools Fall Short | LearnedLate"
      description="We recommend custom AI only when packaged tools cannot handle the integration, logic, or differentiation you actually need."
      url="/services/custom-ai-development"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Use Custom AI Only When Standard Tools Fall Short
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            We recommend custom development only when it gives you something packaged tools cannot: unique integration, proprietary logic, or genuine differentiation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Discuss Your Requirements
              </router-link>
            </Button>
            <Button as-child size="lg" variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
              <router-link to="/services">
                View All Services
              </router-link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- When Custom Fits -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              When Custom Development Is Worth It
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Custom should solve a specific gap, not become the default answer to every AI project.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <GraduationCap class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Domain-Specific Logic</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">
                  Your workflow depends on terminology, decision rules, or reasoning patterns that standard tools cannot handle reliably.
                </p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <Puzzle class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Hard Integration Problems</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">
                  Your environment, security model, or system landscape cannot be covered cleanly by off-the-shelf products.
                </p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <Trophy class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Real Differentiation</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">
                  The capability itself is strategically important enough that using the same tooling as everyone else would limit your advantage.
                </p>
              </CardContent>
            </Card>
          </div>

          <!-- When NOT to build custom -->
          <div class="mt-12 bg-gray-100 rounded-xl p-6 border border-gray-200 shadow-sm">
            <div class="flex items-start gap-4">
              <AlertTriangle class="w-8 h-8 text-gray-600 flex-shrink-0" />
              <div>
                <h3 class="font-medium text-gray-900 mb-2">When We Won't Build Custom</h3>
                <p class="text-gray-600 text-sm mb-3">
                  If a commercial solution can solve the problem well enough, we will tell you to use it. We are not interested in reinventing wheels or charging you for unnecessary build work.
                </p>
                <p class="text-gray-600 text-sm">
                  <strong>Our commitment:</strong> We only recommend custom development when we can clearly show why standard tools are not enough for your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Scope Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              How We Scope Custom Work
            </h2>
            <p class="text-gray-600 text-lg">
              Keep the work narrow, justified, and tied to a specific operational result.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <Network class="w-6 h-6 text-amber-600 mb-2" />
                <CardTitle class="text-lg">Prove the Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  We start by validating why standard tools fail on integration, control, or domain requirements.
                </p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <Plug class="w-6 h-6 text-amber-600 mb-2" />
                <CardTitle class="text-lg">Define a Narrow Build</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  The first scope is intentionally tight so value can be tested before the work expands.
                </p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <Activity class="w-6 h-6 text-amber-600 mb-2" />
                <CardTitle class="text-lg">Stage Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  We use phased delivery and clear decision gates so the project stays aligned with value.
                </p>
              </CardContent>
            </Card>
          </div>

          <div class="mt-8 rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm">
            <p class="text-sm font-medium text-gray-900">A good custom AI project should be able to answer three questions clearly:</p>
            <ul class="mt-3 space-y-2 text-sm text-gray-600">
              <li>1. What specific problem cannot be solved well enough with standard tools?</li>
              <li>2. What result will make the build worthwhile?</li>
              <li>3. What is the smallest useful version we can deliver first?</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative isolate overflow-hidden py-16 sm:py-20 bg-gray-900 text-white">
      <div class="pointer-events-none absolute -left-20 -top-10 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light mb-4">
            Think You May Need Custom AI?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            We will give you a direct view on whether custom development is justified or whether there is a faster, simpler path with standard tools.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Discuss Your Requirements
              </router-link>
            </Button>
            <Button as-child size="lg" variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
              <router-link to="/services">
                View All Services
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
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  GraduationCap,
  Puzzle,
  Trophy,
  AlertTriangle,
  Network,
  Plug,
  Activity,
} from 'lucide-vue-next'
</script>
