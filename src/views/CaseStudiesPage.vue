<template>
  <div class="case-studies-page">
    <SEOHead 
      title="Case Studies – AI Implementation Results | LearnedLate"
      description="Real-world AI transformation results from New Zealand and Australian businesses. Case studies showcasing measurable outcomes."
      url="/case-studies"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-24">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Case Studies
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Real results from AI implementations across New Zealand and Australian businesses.
          </p>
        </div>
      </div>
    </section>

    <!-- Coming Soon Section -->
    <section class="py-16 sm:py-24">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-2xl mx-auto text-center">
          <div class="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 class="w-10 h-10 text-amber-600" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
            Case Studies Coming Soon
          </h2>
          <p class="text-gray-600 text-lg mb-8">
            We're working with our first clients on transformative AI implementations. Detailed case studies with quantified results will be published here as projects complete.
          </p>
          
          <Card class="mb-8">
            <CardHeader>
              <CardTitle class="text-lg">Be Our First Featured Case Study</CardTitle>
              <CardDescription>
                Early engagement benefits for qualified businesses
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
              <ul class="text-sm text-gray-600 space-y-2 text-left">
                <li class="flex items-start gap-2">
                  <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Priority scheduling and accelerated timelines
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Reduced rates in exchange for case study participation
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Direct access to senior expertise throughout
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  Full control over what information is shared publicly
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button as-child class="w-full">
                <router-link to="/contact">
                  Discuss Partnership Opportunity
                </router-link>
              </Button>
            </CardFooter>
          </Card>
          
          <div class="text-sm text-gray-500">
            <p>
              In the meantime, learn about our <router-link to="/services" class="text-amber-700 hover:underline">approach and services</router-link>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodology Preview -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              How We Document Results
            </h2>
            <p class="text-gray-600 text-lg">
              Every case study follows a clear Problem → Approach → Outcome structure
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card class="h-full">
              <CardHeader>
                <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <AlertCircle class="w-5 h-5 text-amber-600" />
                </div>
                <CardTitle class="text-lg">Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  Clear articulation of the business challenge, including quantified pain points (time lost, costs incurred, opportunities missed).
                </p>
              </CardContent>
            </Card>
            
            <Card class="h-full">
              <CardHeader>
              <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <Lightbulb class="w-5 h-5 text-amber-600" />
                </div>
                <CardTitle class="text-lg">Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  The solution architecture, implementation process, key decisions made, and challenges overcome during delivery.
                </p>
              </CardContent>
            </Card>
            
            <Card class="h-full">
              <CardHeader>
              <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp class="w-5 h-5 text-amber-600" />
                </div>
                <CardTitle class="text-lg">Outcome</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  Quantified results with before/after metrics. ROI calculations, time savings, quality improvements, and business impact.
                </p>
              </CardContent>
            </Card>
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
  Building2,
  Check,
  AlertCircle,
  Lightbulb,
  TrendingUp,
} from 'lucide-vue-next'
</script>
