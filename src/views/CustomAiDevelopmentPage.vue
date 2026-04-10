<template>
  <div class="custom-ai-development-page">
    <SEOHead 
      title="Custom AI Development – Tailored AI Solutions | LearnedLate"
      description="Specialized model training, unique integrations, and bespoke AI tools when off-the-shelf solutions aren't enough. Built only when justified."
      url="/services/custom-ai-development"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-24">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Tailored AI Tools When Off-the-Shelf Isn't Enough
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Specialized model training, unique integration architectures, and competitive differentiation through custom AI capabilities.
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

    <!-- When Custom Makes Sense -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              When Custom Development Is Appropriate
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              We build custom only when commercial solutions are demonstrably insufficient
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card class="h-full">
              <CardHeader>
                <GraduationCap class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Specialized Model Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-red-700 text-sm">
                  Your domain requires deep expertise that generic models don't have—technical jargon, proprietary methodologies, or industry-specific reasoning patterns.
                </p>
              </CardContent>
            </Card>

            <Card class="h-full">
              <CardHeader>
                <Puzzle class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Unique Integration Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">
                  Your technology stack or security requirements demand bespoke integration architectures that off-the-shelf tools can't accommodate.
                </p>
              </CardContent>
            </Card>

            <Card class="h-full">
              <CardHeader>
                <Trophy class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Competitive Differentiation</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm">
                  The AI capability itself is a core differentiator for your business—using the same tools as competitors would eliminate your advantage.
                </p>
              </CardContent>
            </Card>
          </div>

          <!-- When NOT to build custom -->
          <div class="mt-12 bg-gray-100 rounded-xl p-6 border border-gray-200">
            <div class="flex items-start gap-4">
              <AlertTriangle class="w-8 h-8 text-gray-600 flex-shrink-0" />
              <div>
                <h3 class="font-medium text-gray-900 mb-2">When We Won't Build Custom</h3>
                <p class="text-gray-600 text-sm mb-3">
                  If a commercial solution can solve your problem effectively, we'll tell you to use it. We're not interested in reinventing wheels or charging you for unnecessary development.
                </p>
                <p class="text-gray-600 text-sm">
                  <strong>Our commitment:</strong> We'll only propose custom development when we can clearly demonstrate why off-the-shelf options won't work for your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Depth Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Technical Capabilities
            </h2>
            <p class="text-gray-600 text-lg">
              Full-stack custom AI development from model to monitoring
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card class="h-full">
              <CardHeader>
                <Network class="w-6 h-6 text-amber-600 mb-2" />
                <CardTitle class="text-lg">Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Model selection and fine-tuning strategy
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    RAG (Retrieval-Augmented Generation) pipelines
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Multi-modal system design
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Scalable inference architectures
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card class="h-full">
              <CardHeader>
                <Plug class="w-6 h-6 text-amber-600 mb-2" />
                <CardTitle class="text-lg">Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    API design and development
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Legacy system connectivity
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Real-time data pipelines
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Authentication and access control
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card class="h-full">
              <CardHeader>
                <Rocket class="w-6 h-6 text-amber-600 mb-2" />
                <CardTitle class="text-lg">Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Cloud and on-premise options
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Containerization and orchestration
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    CI/CD for ML models
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Performance optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card class="h-full">
              <CardHeader>
                <Activity class="w-6 h-6 text-amber-600 mb-2" />
                <CardTitle class="text-lg">Monitoring & Observability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Model performance tracking
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Drift detection and alerting
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Usage analytics and cost monitoring
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Automated retraining pipelines
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Scope Discipline Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck class="w-8 h-8 text-amber-600" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
            Scope Discipline
          </h2>
          <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Custom AI projects can expand indefinitely. We maintain strict discipline through clear success criteria, phased delivery, and regular scope reviews.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div class="bg-gray-50 rounded-lg p-6">
              <Target class="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 class="font-medium text-gray-900 mb-2">Clear Success Criteria</h3>
              <p class="text-sm text-gray-600">
                Defined, measurable outcomes before development begins
              </p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6">
              <Layers class="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 class="font-medium text-gray-900 mb-2">Phased Delivery</h3>
              <p class="text-sm text-gray-600">
                Working increments with go/no-go decision gates
              </p>
            </div>
            <div class="bg-gray-50 rounded-lg p-6">
              <RefreshCw class="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 class="font-medium text-gray-900 mb-2">Regular Reviews</h3>
              <p class="text-sm text-gray-600">
                Weekly check-ins to keep scope aligned with value
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
            Think You Need Custom AI Development?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Let's discuss your requirements. We'll give you an honest assessment of whether custom development makes sense—or if there's a faster, cheaper path with existing tools.
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
  Rocket,
  Activity,
  Check,
  ShieldCheck,
  Target,
  Layers,
  RefreshCw,
} from 'lucide-vue-next'
</script>
