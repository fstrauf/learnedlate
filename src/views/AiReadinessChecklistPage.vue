<template>
  <div class="ai-readiness-checklist-page">
    <SEOHead 
      title="AI Readiness Checklist – Free Download | LearnedLate"
      description="Free AI Readiness Checklist: 15 questions every board should ask. Assess your organization's readiness for AI adoption."
      url="/ai-readiness-checklist"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            AI Readiness Checklist
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            15 questions every board and leadership team should ask before investing in AI
          </p>
        </div>
      </div>
    </section>

    <!-- Checklist Preview Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 class="text-2xl font-light text-gray-900 mb-6">
                What's Inside
              </h2>
              <p class="text-gray-600 mb-6">
                This free checklist helps you assess your organization's readiness across the four critical dimensions of AI adoption. Use it in board meetings, leadership offsites, or planning sessions.
              </p>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <Users class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium text-gray-900">People (4 questions)</h3>
                    <p class="text-sm text-gray-600">Skills, culture, leadership commitment</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Workflow class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium text-gray-900">Process (4 questions)</h3>
                    <p class="text-sm text-gray-600">Governance, workflows, decision velocity</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Cpu class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium text-gray-900">Technology (4 questions)</h3>
                    <p class="text-sm text-gray-600">Infrastructure, integration, security</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Database class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 class="font-medium text-gray-900">Data (3 questions)</h3>
                    <p class="text-sm text-gray-600">Quality, access, governance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <LeadMagnetCapture
              magnet-id="ai-readiness-checklist"
              magnet-name="AI Readiness Checklist"
              title="Get the Checklist"
              description="Enter your email and we'll send you the complete 15-question checklist."
              button-text="Send Me the Checklist"
              success-title="Checklist Coming Your Way!"
              success-message="We've sent the checklist to your email. Check your inbox (and spam folder) shortly."
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Sample Questions Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl font-light text-gray-900 mb-4">
              Sample Questions
            </h2>
            <p class="text-gray-600">
              A preview of what's in the full checklist
            </p>
          </div>
          
          <div class="space-y-4">
            <Card>
              <CardContent class="pt-6">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-600 font-bold text-sm">1</span>
                  </div>
                  <p class="text-gray-700">
                    <strong>People:</strong> Do we have at least one senior leader who can dedicate meaningful time to championing AI initiatives?
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent class="pt-6">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-600 font-bold text-sm">5</span>
                  </div>
                  <p class="text-gray-700">
                    <strong>Process:</strong> Can we clearly articulate the specific business outcomes we expect from AI investments?
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent class="pt-6">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-600 font-bold text-sm">9</span>
                  </div>
                  <p class="text-gray-700">
                    <strong>Technology:</strong> Do our current systems have APIs or integration points that would allow AI tools to access necessary data?
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent class="pt-6">
                <div class="flex items-start gap-4">
                  <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-600 font-bold text-sm">13</span>
                  </div>
                  <p class="text-gray-700">
                    <strong>Data:</strong> Do we have historical data that could be used to train or validate AI models for our use cases?
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div class="text-center mt-8">
            <p class="text-gray-500 text-sm">
              Plus 11 more questions covering all four dimensions of AI readiness
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light mb-4">
            Want a Comprehensive Assessment?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Our AI Readiness Assessment goes far deeper than any checklist. Book the assessment to get a scored evaluation, a shortlist of use cases, and clear next steps.
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
import LeadMagnetCapture from '../components/LeadMagnetCapture.vue'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Users,
  Workflow,
  Cpu,
  Database,
} from 'lucide-vue-next'
</script>
