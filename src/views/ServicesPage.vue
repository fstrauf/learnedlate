<template>
  <div class="services-page">
    <SEOHead 
      title="Services – AI Strategy & Implementation | LearnedLate"
      description="AI Readiness Assessment, Agentic Workflow Implementation, Custom AI Development, and Full-Stack AI Delivery for NZ & Australian mid-market businesses."
      url="/services"
      type="website"
      :schema="servicesSchema"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-24">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Turn AI Strategy into Working Systems
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            From initial readiness assessment through to deployed, production-ready AI systems—we provide end-to-end accountability without the handoff gaps.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Book a Free AI Readiness Assessment
              </router-link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Cards Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Our Services
            </h2>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
              Four ways we help businesses move from AI confusion to measurable results
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <!-- AI Readiness Assessment -->
            <Card class="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <ClipboardCheck class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">AI Readiness Assessment</CardTitle>
                <CardDescription>
                  Know where you stand before you invest
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  A comprehensive four-dimension evaluation (People, Process, Technology, Data) that gives you a clear picture of your organization's AI readiness and a prioritized opportunity map.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Scored assessment across 4 dimensions
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Prioritized opportunity map
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Written summary within 48 hours
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    NZ AI Advisory Pilot co-funding eligible
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

            <!-- Agentic Workflow Implementation -->
            <Card class="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Bot class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">Agentic Workflow Implementation</CardTitle>
                <CardDescription>
                  Autonomous systems that handle complete business processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  Deploy AI agents that don't just assist—they take action. Multi-step, decision-capable systems that integrate with your existing tools and handle complete workflows end-to-end.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    End-to-end autonomous workflows
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Integration with existing systems
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    2-week prototype → 90-day pilot
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Continuous improvement built-in
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

            <!-- Custom AI Development -->
            <Card class="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Code class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">Custom AI Development</CardTitle>
                <CardDescription>
                  Tailored AI tools when off-the-shelf isn't enough
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  Specialized model training, unique integration requirements, or competitive differentiation needs. We build custom AI solutions when commercial options are demonstrably insufficient.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Specialized model training
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Unique integration architectures
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Deployment and monitoring
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Built only when justified
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button as-child variant="outline" class="w-full">
                  <router-link to="/services/custom-ai-development">
                    Learn More
                  </router-link>
                </Button>
              </CardFooter>
            </Card>

            <!-- Full-Stack AI Delivery -->
            <Card class="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Layers class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">Full-Stack AI Delivery</CardTitle>
                <CardDescription>
                  End-to-end accountability. No handoff gaps.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 mb-4">
                  The complete journey from discovery through optimization. Single-point accountability from assessment through deployment, measurement, and continuous improvement.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Five-phase integrated approach
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Single-point accountability
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Outcome-based measurement
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Transparent reporting throughout
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
        </div>
      </div>
    </section>

    <!-- Five-Phase Journey Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Our Five-Phase Journey
            </h2>
            <p class="text-gray-600 text-lg">
              From first conversation to production-ready AI systems
            </p>
          </div>
          
          <div class="relative">
            <!-- Connecting line -->
            <div class="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />
            
            <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div class="relative text-center">
                <div class="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Search class="w-7 h-7" />
                </div>
                <h3 class="font-medium text-gray-900 mb-2">1. Discover</h3>
                <p class="text-sm text-gray-600">Understand business objectives, constraints, and success criteria</p>
              </div>
              
              <div class="relative text-center">
                <div class="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Map class="w-7 h-7" />
                </div>
                <h3 class="font-medium text-gray-900 mb-2">2. Map</h3>
                <p class="text-sm text-gray-600">Assess current state across People, Process, Technology, Data</p>
              </div>
              
              <div class="relative text-center">
                <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <FileText class="w-7 h-7" />
                </div>
                <h3 class="font-medium text-gray-900 mb-2">3. Plan</h3>
                <p class="text-sm text-gray-600">Develop phased roadmap with clear milestones and decision gates</p>
              </div>
              
              <div class="relative text-center">
                <div class="w-16 h-16 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Hammer class="w-7 h-7" />
                </div>
                <h3 class="font-medium text-gray-900 mb-2">4. Build</h3>
                <p class="text-sm text-gray-600">Iterative development with continuous testing and feedback</p>
              </div>
              
              <div class="relative text-center">
                <div class="w-16 h-16 bg-amber-300 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <TrendingUp class="w-7 h-7" />
                </div>
                <h3 class="font-medium text-gray-900 mb-2">5. Optimize</h3>
                <p class="text-sm text-gray-600">Monitor, measure, and continuously improve performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement Models Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Engagement Models
            </h2>
            <p class="text-gray-600 text-lg">
              Choose the approach that fits your needs
            </p>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="border-b-2 border-gray-200">
                  <th class="text-left py-4 px-4 font-medium text-gray-900">Model</th>
                  <th class="text-left py-4 px-4 font-medium text-gray-900">Best For</th>
                  <th class="text-left py-4 px-4 font-medium text-gray-900">Deliverables</th>
                  <th class="text-left py-4 px-4 font-medium text-gray-900">Typical Duration</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b border-gray-100">
                  <td class="py-4 px-4 font-medium text-gray-900">Advisory-Only</td>
                  <td class="py-4 px-4 text-gray-600">Organizations with strong internal technical teams who need strategic guidance</td>
                  <td class="py-4 px-4 text-gray-600">Strategy documents, roadmaps, vendor evaluations, architecture reviews</td>
                  <td class="py-4 px-4 text-gray-600">4–12 weeks</td>
                </tr>
                <tr class="border-b border-gray-100">
                  <td class="py-4 px-4 font-medium text-gray-900">Implementation-Only</td>
                  <td class="py-4 px-4 text-gray-600">Organizations with clear requirements who need execution support</td>
                  <td class="py-4 px-4 text-gray-600">Deployed systems, integrations, documentation, training</td>
                  <td class="py-4 px-4 text-gray-600">8–16 weeks</td>
                </tr>
                <tr class="border-b border-gray-100 bg-amber-50">
                  <td class="py-4 px-4 font-medium text-amber-900">Full-Stack Integrated ⭐</td>
                  <td class="py-4 px-4 text-gray-700">Organizations wanting end-to-end accountability from strategy through deployment</td>
                  <td class="py-4 px-4 text-gray-700">Everything from assessment to production with outcome guarantees</td>
                  <td class="py-4 px-4 text-gray-700">12–26 weeks initial, then ongoing</td>
                </tr>
                <tr class="border-b border-gray-100">
                  <td class="py-4 px-4 font-medium text-gray-900">Ongoing Partnership</td>
                  <td class="py-4 px-4 text-gray-600">Organizations building long-term AI capabilities with continuous improvement</td>
                  <td class="py-4 px-4 text-gray-600">Retainer-based support, quarterly reviews, roadmap updates</td>
                  <td class="py-4 px-4 text-gray-600">6+ months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Audience Tiers Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Who We Help
            </h2>
            <p class="text-gray-600 text-lg">
              Services tailored to your organization's size and maturity
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Small Teams -->
            <Card class="h-full">
              <CardHeader>
                <div class="text-sm font-medium text-amber-700 mb-2">Growing Teams</div>
                <CardTitle class="text-xl">&lt; 50 Employees</CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <p class="text-gray-600">
                  Focused AI workflow sprints that deliver fast results without overwhelming your team.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Rapid workflow automation
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Fixed-price engagements
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Minimal disruption
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    NZ co-funding eligible
                  </li>
                </ul>
                <div class="pt-4 border-t">
                  <p class="text-sm text-gray-500">Typical engagement: $15K–$50K</p>
                </div>
              </CardContent>
            </Card>

            <!-- Mid-Market -->
            <Card class="h-full border-gray-300 ring-2 ring-gray-100">
              <CardHeader>
                <div class="flex items-center justify-between">
                  <div class="text-sm font-medium text-amber-700 mb-2">Mid-Market</div>
                  <Badge variant="secondary" class="bg-amber-100 text-amber-800">Primary Focus</Badge>
                </div>
                <CardTitle class="text-xl">50–500 Employees</CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <p class="text-gray-600">
                  Full AI readiness assessment, strategy development, and phased implementation tailored to your complexity.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Comprehensive readiness assessment
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Multi-phase implementation
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Change management support
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Integration with existing systems
                  </li>
                </ul>
                <div class="pt-4 border-t">
                  <p class="text-sm text-gray-500">Typical engagement: $50K–$250K</p>
                </div>
              </CardContent>
            </Card>

            <!-- Enterprise -->
            <Card class="h-full">
              <CardHeader>
                <div class="text-sm font-medium text-amber-700 mb-2">Enterprise</div>
                <CardTitle class="text-xl">500+ Employees</CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <p class="text-gray-600">
                  Transformation programs with governance frameworks, multi-year roadmaps, and enterprise-grade security.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Enterprise governance frameworks
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Multi-year transformation roadmaps
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Compliance & security architecture
                  </li>
                  <li class="flex items-start gap-2">
                    <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Executive reporting & board updates
                  </li>
                </ul>
                <div class="pt-4 border-t">
                  <p class="text-sm text-gray-500">Typical engagement: $250K+</p>
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
            Not Sure Where to Start?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Book a free AI Readiness Assessment. We'll help you understand your current state and identify the highest-impact opportunities—no obligation, no pressure.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Book a Free AI Readiness Assessment
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
import { Badge } from '@/components/ui/badge'
import {
  ClipboardCheck,
  Bot,
  Code,
  Layers,
  Check,
  Search,
  Map,
  FileText,
  Hammer,
  TrendingUp,
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
            "name": "Agentic Workflow Implementation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack AI Delivery"
          }
        }
      ]
    }
  }
]
</script>
