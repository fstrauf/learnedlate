<template>
  <div class="agentic-workflows-page">
    <SEOHead 
      title="AI Workflow Automation – Automate Real Business Processes | LearnedLate"
      description="Automate one high-friction workflow, connect it to your existing systems, and pilot it in live operations."
      url="/services/agentic-workflows"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Automate One High-Friction Workflow
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            We map the process, build the automation, connect it to your systems, and pilot it in real operations.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Discuss Your Workflow
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
              This Is a Good Fit When
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              The best candidates are real workflows with clear friction, clear owners, and a clear operational payoff.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <Repeat class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Manual Repetition</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">The same task happens again and again, with rules people already follow.</p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <Clock class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Slow Handoffs</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">Work waits between people, teams, or approval steps instead of moving smoothly.</p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <Search class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Scattered Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">People waste time pulling context from email, docs, databases, or business systems.</p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <Users class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Inconsistent Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">Quality varies by person, shift, or handoff, which creates rework and delays.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Outcomes Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              What Changes After Rollout
            </h2>
            <p class="text-gray-600 text-lg">
              The goal is operational improvement you can see, not automation for its own sake.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle class="text-lg">Less Manual Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">
                  Routine actions are completed automatically, with people stepping in only when judgment or exception handling is needed.
                </p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle class="text-lg">Faster Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">
                  Requests move through the workflow faster because routing, retrieval, and standard decisions no longer wait on manual effort.
                </p>
              </CardContent>
            </Card>

            <Card class="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader>
                <CardTitle class="text-lg">Better Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">
                  The workflow becomes easier to monitor because steps, exceptions, and outcomes are visible instead of hidden in manual work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Plug class="w-8 h-8 text-green-600" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
            Built Into Your Existing Stack
          </h2>
          <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            No parallel workflow and no isolated AI tool. We build around the systems your team already depends on.
          </p>
          
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div class="bg-gray-50 rounded-lg p-4">
              <Database class="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <p class="text-sm text-gray-600">Databases</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <Cloud class="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <p class="text-sm text-gray-600">Cloud APIs</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <FileText class="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <p class="text-sm text-gray-600">Documents</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <Mail class="w-6 h-6 text-gray-600 mx-auto mb-2" />
              <p class="text-sm text-gray-600">Email/Slack</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              How Delivery Works
            </h2>
            <p class="text-gray-600 text-lg">
              The work stays focused on one workflow, one pilot, and one operational result at a time.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Map the Workflow</h3>
              <p class="text-sm text-gray-600">
                We define the inputs, decisions, handoffs, exceptions, and systems involved.
              </p>
              <p class="text-xs text-gray-500 mt-2">Week 1</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Build and Pilot</h3>
              <p class="text-sm text-gray-600">
                We build the automation, connect the systems, and pilot it in a controlled operational setting.
              </p>
              <p class="text-xs text-gray-500 mt-2">2 to 3 weeks to prototype, then pilot</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Roll Out or Expand</h3>
              <p class="text-sm text-gray-600">
                If the pilot proves valuable, we help you roll it out cleanly or expand into a broader delivery program.
              </p>
              <p class="text-xs text-gray-500 mt-2">Based on pilot results</p>
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
            Have a Workflow That Should Run Better?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Tell us where the friction is. We will help you decide whether workflow automation is the right next move and what a pilot could look like.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Discuss Your Workflow
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
  Plug,
  Repeat,
  Clock,
  Search,
  Users,
  Database,
  Cloud,
  FileText,
  Mail,
} from 'lucide-vue-next'
</script>
