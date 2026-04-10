<template>
  <div class="ai-readiness-page">
    <SEOHead 
      title="AI Readiness Assessment – Know Where You Stand | LearnedLate"
      description="Comprehensive four-dimension AI readiness evaluation for NZ & Australian businesses. Written summary within 48 hours. NZ AI Advisory Pilot co-funding eligible."
      url="/services/ai-readiness"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-24">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Know Where You Stand Before You Invest
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            A comprehensive four-dimension assessment that tells you exactly what you're ready for, what needs work, and where to start for maximum impact.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Book Your Free Assessment
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

    <!-- The Four Dimensions Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              The Four Dimensions of AI Readiness
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              We evaluate your organization across the four critical dimensions that determine AI success or failure
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- People -->
            <Card class="h-full">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>People</CardTitle>
                <CardDescription>Skills, culture, and organizational readiness</CardDescription>
              </CardHeader>
              <CardContent>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Technical skills assessment
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Leadership commitment and vision
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Change readiness and appetite
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Training and upskilling needs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <!-- Process -->
            <Card class="h-full">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Workflow class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Process</CardTitle>
                <CardDescription>Workflows, governance, and decision-making</CardDescription>
              </CardHeader>
              <CardContent>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Current process documentation
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Governance and approval structures
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Decision velocity and bottlenecks
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Quality control and feedback loops
                  </li>
                </ul>
              </CardContent>
            </Card>

            <!-- Technology -->
            <Card class="h-full">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Cpu class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Technology</CardTitle>
                <CardDescription>Infrastructure, tools, and integration capability</CardDescription>
              </CardHeader>
              <CardContent>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Current system architecture
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Cloud and infrastructure readiness
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    API and integration capabilities
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Security and compliance posture
                  </li>
                </ul>
              </CardContent>
            </Card>

            <!-- Data -->
            <Card class="h-full">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Database class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Data</CardTitle>
                <CardDescription>Quality, access, and management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Data quality and completeness
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Accessibility and silos
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Data governance and privacy
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Historical data availability
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Deliverable Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-6">
                What You Receive
              </h2>
              <div class="space-y-4">
                <div class="flex gap-4">
                  <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Scored Assessment</h3>
                    <p class="text-gray-600 text-sm">Numerical scores across all four dimensions with benchmark comparisons</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Prioritized Opportunity Map</h3>
                    <p class="text-gray-600 text-sm">Specific, ranked opportunities with effort/impact analysis</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Risk Assessment</h3>
                    <p class="text-gray-600 text-sm">Key risks and mitigation strategies for your top opportunities</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-900">Recommended Next Steps</h3>
                    <p class="text-gray-600 text-sm">Clear action items with timelines and resource requirements</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-6 border">
              <div class="text-center mb-6">
                <h3 class="text-lg font-medium text-gray-900">Sample Readiness Report</h3>
                <p class="text-sm text-gray-500">AI Readiness Score: 68/100</p>
              </div>
              
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>People</span>
                    <span class="font-medium">72/100</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gray-700 h-2 rounded-full" style="width: 72%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>Process</span>
                    <span class="font-medium">58/100</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gray-400 h-2 rounded-full" style="width: 58%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>Technology</span>
                    <span class="font-medium">81/100</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gray-700 h-2 rounded-full" style="width: 81%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-1">
                    <span>Data</span>
                    <span class="font-medium">62/100</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gray-400 h-2 rounded-full" style="width: 62%"></div>
                  </div>
                </div>
              </div>
              
              <div class="mt-6 pt-6 border-t">
                <h4 class="font-medium text-gray-900 mb-2">Top Opportunities</h4>
                <ul class="text-sm text-gray-600 space-y-1">
                  <li>1. Customer inquiry automation (High impact, Medium effort)</li>
                  <li>2. Document processing pipeline (Medium impact, Low effort)</li>
                  <li>3. Predictive maintenance (High impact, High effort)</li>
                </ul>
              </div>
            </div>
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
              The Assessment Process
            </h2>
            <p class="text-gray-600 text-lg">
              Three steps from booking to actionable insights
            </p>
          </div>
          
          <div class="space-y-8">
            <div class="flex flex-col md:flex-row gap-6 items-start">
              <div class="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                1
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-medium text-gray-900 mb-2">Discovery Conversation</h3>
                <p class="text-gray-600 mb-3">
                  30 minute structured conversation with key stakeholders. We explore your business objectives, current challenges, and AI aspirations across all four dimensions.
                </p>
                <p class="text-sm text-gray-500">
                  <Clock class="w-4 h-4 inline mr-1" />
                  Typically scheduled within one week of booking
                </p>
              </div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-6 items-start">
              <div class="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                2
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-medium text-gray-900 mb-2">Scored Evaluation</h3>
                <p class="text-gray-600 mb-3">
                  We analyze the information gathered and score your readiness across each dimension using our proven framework. This includes benchmark comparisons against similar organizations.
                </p>
                <p class="text-sm text-gray-500">
                  <Clock class="w-4 h-4 inline mr-1" />
                  Completed within 24 hours of the discovery conversation
                </p>
              </div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-6 items-start">
              <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                3
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-medium text-gray-900 mb-2">Written Summary Delivery</h3>
                <p class="text-gray-600 mb-3">
                  You receive a comprehensive written report within 48 hours, including your scored assessment, prioritized opportunity map, risk analysis, and recommended next steps.
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
    </section>

    <!-- Pricing Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Investment
            </h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card class="h-full">
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
                  Typical range depending on organization size and complexity
                </p>
                <div class="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <div class="flex items-start gap-2">
                    <BadgePercent class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p class="text-sm font-medium text-amber-900">NZ AI Advisory Pilot</p>
                      <p class="text-sm text-amber-700">
                        Eligible for 50% co-funding (capped at $15,000). Your net cost could be as low as $3,750.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card class="h-full">
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
                  Typical range depending on organization size and complexity
                </p>
                <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
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
            Ready to Understand Your AI Readiness?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Book your free assessment today. No obligation, no pressure—just clarity on where you stand.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Book Your Free Assessment
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
  Users,
  Workflow,
  Cpu,
  Database,
  Check,
  Clock,
  BadgePercent,
  Info,
} from 'lucide-vue-next'
</script>
