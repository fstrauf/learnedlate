<template>
  <div class="full-stack-delivery-page">
    <SEOHead 
      title="Full-Stack AI Delivery – End-to-End Implementation | LearnedLate"
      description="Complete AI transformation from discovery through optimization. Single-point accountability from assessment to production. Serving NZ & Australian businesses."
      url="/services/full-stack-delivery"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-24">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            End-to-End Accountability. No Handoff Gaps.
          </h1>
          <p class="text-lg sm:text-xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            The complete journey from discovery through optimization. Same expertise from your first conversation through production deployment and beyond.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" class="bg-white text-green-900 hover:bg-gray-100">
              <router-link to="/contact">
                Start with Discovery
              </router-link>
            </Button>
            <Button as-child size="lg" variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-green-900">
              <router-link to="/services">
                View All Services
              </router-link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Five Phases Detail Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              The Five-Phase Journey
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Each phase has clear deliverables, timelines, and decision gates
            </p>
          </div>
          
          <div class="space-y-12">
            <!-- Phase 1: Discover -->
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-1/3">
                <div class="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">Discover</h3>
                <p class="text-sm text-gray-500">1–2 weeks</p>
              </div>
              <div class="md:w-2/3">
                <Card>
                  <CardContent class="pt-6">
                    <p class="text-gray-600 mb-4">
                      Deep exploration of your business objectives, constraints, competitive landscape, and current pain points. We interview key stakeholders and review existing systems and processes.
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 class="font-medium text-gray-900 text-sm mb-2">Key Activities</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Stakeholder interviews</li>
                          <li>• Business objective mapping</li>
                          <li>• Constraint identification</li>
                          <li>• Competitive analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-900 text-sm mb-2">Deliverables</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Discovery summary document</li>
                          <li>• Initial opportunity hypothesis</li>
                          <li>• Success criteria definition</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-4 pt-4 border-t">
                      <p class="text-sm text-gray-500">
                        <strong>Decision Gate:</strong> Proceed to assessment if there's a clear business case for AI investment
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <!-- Phase 2: Map -->
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-1/3">
                <div class="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">Map</h3>
                <p class="text-sm text-gray-500">2–3 weeks</p>
              </div>
              <div class="md:w-2/3">
                <Card>
                  <CardContent class="pt-6">
                    <p class="text-gray-600 mb-4">
                      Comprehensive assessment across the four dimensions of AI readiness: People, Process, Technology, and Data. This becomes the foundation for all subsequent planning.
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 class="font-medium text-gray-900 text-sm mb-2">Key Activities</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Four-dimension assessment</li>
                          <li>• Current state documentation</li>
                          <li>• Gap analysis</li>
                          <li>• Benchmark comparisons</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-900 text-sm mb-2">Deliverables</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• AI Readiness Report</li>
                          <li>• Scored assessment</li>
                          <li>• Gap remediation plan</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-4 pt-4 border-t">
                      <p class="text-sm text-gray-500">
                        <strong>Decision Gate:</strong> Proceed to planning if readiness gaps can be addressed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <!-- Phase 3: Plan -->
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-1/3">
                <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">Plan</h3>
                <p class="text-sm text-gray-500">2–4 weeks</p>
              </div>
              <div class="md:w-2/3">
                <Card>
                  <CardContent class="pt-6">
                    <p class="text-gray-600 mb-4">
                      Development of a phased implementation roadmap with clear milestones, resource requirements, and decision gates. Risk assessment and mitigation planning.
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 class="font-medium text-gray-900 text-sm mb-2">Key Activities</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Opportunity prioritization</li>
                          <li>• Phased roadmap development</li>
                          <li>• Resource planning</li>
                          <li>• Risk assessment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-900 text-sm mb-2">Deliverables</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Implementation roadmap</li>
                          <li>• Resource plan & budget</li>
                          <li>• Risk register</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-4 pt-4 border-t">
                      <p class="text-sm text-gray-500">
                        <strong>Decision Gate:</strong> Proceed to build if roadmap is approved and resources committed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <!-- Phase 4: Build -->
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-1/3">
                <div class="w-16 h-16 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">Build</h3>
                <p class="text-sm text-gray-500">8–16 weeks</p>
              </div>
              <div class="md:w-2/3">
                <Card>
                  <CardContent class="pt-6">
                    <p class="text-gray-600 mb-4">
                      Iterative development with continuous testing and stakeholder feedback. We build in working increments, not big-bang releases, with regular demos and adjustments.
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 class="font-medium text-gray-900 text-sm mb-2">Key Activities</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Agile development sprints</li>
                          <li>• Continuous integration</li>
                          <li>• Stakeholder demos</li>
                          <li>• User acceptance testing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-900 text-sm mb-2">Deliverables</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Working AI system</li>
                          <li>• Technical documentation</li>
                          <li>• Training materials</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-4 pt-4 border-t">
                      <p class="text-sm text-gray-500">
                        <strong>Decision Gate:</strong> Proceed to optimization after successful UAT and go-live
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <!-- Phase 5: Optimize -->
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-1/3">
                <div class="w-16 h-16 bg-amber-300 text-gray-900 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                  5
                </div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">Optimize</h3>
                <p class="text-sm text-gray-500">Ongoing</p>
              </div>
              <div class="md:w-2/3">
                <Card>
                  <CardContent class="pt-6">
                    <p class="text-gray-600 mb-4">
                      Continuous monitoring, measurement against defined success criteria, and iterative improvement. Model retraining, performance tuning, and capability expansion.
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 class="font-medium text-gray-900 text-sm mb-2">Key Activities</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Performance monitoring</li>
                          <li>• Outcome measurement</li>
                          <li>• Model retraining</li>
                          <li>• Continuous improvement</li>
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-900 text-sm mb-2">Deliverables</h4>
                        <ul class="text-sm text-gray-600 space-y-1">
                          <li>• Monthly performance reports</li>
                          <li>• Optimization recommendations</li>
                          <li>• Quarterly business reviews</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-4 pt-4 border-t">
                      <p class="text-sm text-gray-500">
                        <strong>Decision Gate:</strong> Expand scope, add capabilities, or transition to steady-state support
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Single Point Accountability Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserCheck class="w-8 h-8 text-amber-600" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
            Single-Point Accountability
          </h2>
          <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            The biggest risk in AI projects isn't technology—it's handoffs. When strategy consultants pass to implementation teams who pass to IT, critical context is lost. With Full-Stack Delivery, you have one accountable partner from first conversation through production.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <Card>
              <CardHeader>
                <CardTitle class="text-base">Same Team, Start to Finish</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  The people who design your strategy are the same people who build and deploy it. No knowledge loss in handoffs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle class="text-base">Outcome Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  We're accountable for business outcomes, not just deliverables. If it doesn't work in practice, we fix it.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle class="text-base">Transparent Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-gray-600">
                  Regular, honest progress updates. If something's off track, you'll know immediately—and what we're doing about it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Outcome Commitment Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Outcome Commitment
            </h2>
            <p class="text-gray-600 text-lg">
              Baseline → Measurement → Transparent Reporting
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 class="w-7 h-7 text-gray-600" />
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Baseline</h3>
              <p class="text-sm text-gray-600">
                We establish clear baseline metrics before any changes. You need to know where you started to measure real improvement.
              </p>
            </div>
            <div class="text-center">
              <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LineChart class="w-7 h-7 text-gray-600" />
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Measurement</h3>
              <p class="text-sm text-gray-600">
                We instrument everything that matters. Automated dashboards plus regular business reviews to track progress against goals.
              </p>
            </div>
            <div class="text-center">
              <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText class="w-7 h-7 text-gray-600" />
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Transparent Reporting</h3>
              <p class="text-sm text-gray-600">
                Monthly reports showing exactly what's working, what's not, and what we're doing about it. No surprises.
              </p>
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
            Ready for End-to-End AI Transformation?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Start with a free Discovery session. We'll explore your objectives, assess your readiness, and give you an honest opinion on whether Full-Stack Delivery makes sense for your situation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Start with Discovery
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
