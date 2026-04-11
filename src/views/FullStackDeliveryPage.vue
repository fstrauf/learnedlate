<template>
  <div class="full-stack-delivery-page">
    <SEOHead 
      title="Delivery Partnership – Keep Strategy and Delivery in One Team | LearnedLate"
      description="For larger or more complex AI programs, LearnedLate stays involved from planning through rollout so context is not lost between strategy and delivery."
      url="/services/full-stack-delivery"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Keep Strategy and Delivery in the Same Team
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            For larger or more complex AI programs, we stay involved from planning through rollout so context is not lost between advisory, delivery, and operations.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Discuss Delivery Partnership
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

    <!-- Fit Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              This Model Fits When
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Delivery partnership is for work that is too important or too interconnected to split across separate advisory and implementation teams.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle class="text-lg">Multiple Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">The work depends on several systems, data sources, or operational handoffs staying aligned.</p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle class="text-lg">Multiple Stakeholders</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">The rollout affects more than one team, owner, or business unit and needs one delivery thread.</p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle class="text-lg">Critical Sequencing</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">What happens first, what comes next, and what must be true before rollout matters as much as the build itself.</p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle class="text-lg">One Accountable Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">You want the same team to hold context across planning, execution, and operational follow-through.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Accountability Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserCheck class="w-8 h-8 text-amber-600" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
            What We Stay Accountable For
          </h2>
          <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            The value of this model is simple: context is preserved, trade-offs are made in one place, and rollout does not stall between teams.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle class="text-base">Planning and Sequencing</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  We stay responsible for the order of work, the dependencies, and the decisions that shape rollout.
                </p>
              </CardContent>
            </Card>
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle class="text-base">Delivery Across Teams and Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  We keep the work moving across technical build, business process change, and operational rollout.
                </p>
              </CardContent>
            </Card>
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle class="text-base">Operational Follow-Through</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  We stay involved long enough to see whether the work is operating as intended and what needs adjustment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Progression Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              How Work Usually Progresses
            </h2>
            <p class="text-gray-600 text-lg">
              We keep the structure simple so delivery can stay clear.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 class="w-7 h-7 text-gray-600" />
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Align</h3>
              <p class="text-sm text-gray-600">
                We agree on the business objective, the scope, the sequence, and the success criteria.
              </p>
            </div>
            <div class="text-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LineChart class="w-7 h-7 text-gray-600" />
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Deliver</h3>
              <p class="text-sm text-gray-600">
                We coordinate the build, the stakeholder decisions, and the operational rollout as one stream of work.
              </p>
            </div>
            <div class="text-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText class="w-7 h-7 text-gray-600" />
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Review and Extend</h3>
              <p class="text-sm text-gray-600">
                We measure what changed, adjust what is not working, and decide whether the partnership should continue into the next phase.
              </p>
            </div>
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
            Need One Team Across the Whole Program?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            We will tell you directly whether delivery partnership is the right fit or whether a simpler engagement is enough.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Discuss Delivery Partnership
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
  UserCheck,
  BarChart3,
  LineChart,
  FileText,
} from 'lucide-vue-next'
</script>
