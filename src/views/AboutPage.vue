<template>
  <div class="about-page">
    <SEOHead 
      title="About – LearnedLate | AI Strategy-to-Execution Consultancy"
      description="LearnedLate helps NZ & Australian businesses move from AI confusion to measurable results. Strategy + Implementation. Business Fluency + Technical Depth."
      url="/about"
      type="website"
      :schema="aboutSchema"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-24">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Your AI Strategy-to-Execution Partner
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            We don't just advise. We build. We don't just code. We align.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Book a Free AI Readiness Assessment
              </router-link>
            </Button>
            <Button as-child size="lg" variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
              <router-link to="/services">
                Explore Our Services
              </router-link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Technology Serves Business Outcomes, Not Vice Versa
            </h2>
            <p class="text-gray-600 text-lg">
              We start with your business problem, not a vendor catalog.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card class="h-full">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">Business-First Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">
                  Every engagement starts with understanding your business objectives, constraints, and competitive landscape. We don't implement AI for the sake of it—we implement it when it drives measurable outcomes.
                </p>
              </CardContent>
            </Card>
            
            <Card class="h-full">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Code class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">Technical Depth</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">
                  We bring hands-on engineering expertise, not just PowerPoint recommendations. From solution architecture to deployment, we build systems that work in production, not just in demos.
                </p>
              </CardContent>
            </Card>
            
            <Card class="h-full">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Target class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">Outcome-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">
                  We define success metrics upfront and report against them transparently. If we can't define what success looks like, we won't take the engagement.
                </p>
              </CardContent>
            </Card>
            
            <Card class="h-full">
              <CardHeader>
                <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Handshake class="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle class="text-xl">True Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">
                  We work alongside your team, transferring knowledge and building internal capability. Our goal is to make ourselves unnecessary—not to create dependency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Background Journey Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              From Software Development to AI Transformation
            </h2>
            <p class="text-gray-600 text-lg">
              A journey spanning technical depth and business strategy
            </p>
          </div>
          
          <div class="space-y-8">
            <div class="flex flex-col md:flex-row gap-6 items-start">
              <div class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Code class="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">Software Development</h3>
                <p class="text-gray-600">
                  Years building complex software systems across multiple industries. Deep expertise in full-stack development, cloud architecture, and enterprise integration. Understanding that code is a means to an end—solving real business problems.
                </p>
              </div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-6 items-start">
              <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                <Building class="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">Solution Architecture</h3>
                <p class="text-gray-600">
                  Designing enterprise-scale systems that integrate with complex legacy environments. SAP expertise, cloud migrations, and integration architecture. Learning that the best technical solution is the one the organization can actually adopt and maintain.
                </p>
              </div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-6 items-start">
              <div class="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp class="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">Business Strategy</h3>
                <p class="text-gray-600">
                  Working with C-suite leaders to align technology investments with business objectives. Understanding ROI, risk management, and organizational change. Recognizing that strategy without execution is meaningless.
                </p>
              </div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-6 items-start">
              <div class="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                <Brain class="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 class="text-xl font-medium text-gray-900 mb-2">AI & Agentic Workflows</h3>
                <p class="text-gray-600">
                  Today, we help businesses navigate the AI transition—combining strategic advisory with hands-on implementation. From readiness assessments to autonomous workflow deployment, we bridge the gap between AI potential and business reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dual Fluency Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Dual Fluency: Business + Technical
            </h2>
            <p class="text-gray-600 text-lg">
              We speak both languages natively
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 rounded-xl p-8">
              <h3 class="text-xl font-medium text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase class="w-5 h-5 text-amber-600" />
                Business Fluency
              </h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start gap-2">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  C-suite and board-level communication
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ROI modeling and business case development
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Risk assessment and mitigation planning
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Change management and stakeholder alignment
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ANZ business context and regulatory awareness
                </li>
              </ul>
            </div>
            
            <div class="bg-gray-50 rounded-xl p-8">
              <h3 class="text-xl font-medium text-gray-900 mb-4 flex items-center gap-2">
                <Cpu class="w-5 h-5 text-amber-600" />
                Technical Depth
              </h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start gap-2">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  AI/ML system architecture and implementation
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Enterprise integration and legacy modernization
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Cloud-native and hybrid deployment patterns
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Security, compliance, and governance frameworks
                </li>
                <li class="flex items-start gap-2">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  Full-stack development and DevOps practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Geographic Focus -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin class="w-8 h-8 text-amber-600" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
            Based in New Zealand, Serving ANZ
          </h2>
          <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We understand the unique challenges facing New Zealand and Australian businesses—from skills shortages and geographic isolation to specific regulatory environments and government co-funding opportunities like the NZ AI Advisory Pilot.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div class="bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-amber-700 mb-2">87%</div>
              <p class="text-sm text-gray-600">of NZ businesses use AI</p>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-amber-700 mb-2">12%</div>
              <p class="text-sm text-gray-600">have scaled AI effectively</p>
            </div>
            <div class="bg-white rounded-lg p-6 shadow-sm">
              <div class="text-3xl font-bold text-amber-700 mb-2">50%</div>
              <p class="text-sm text-gray-600">gov co-funding available</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CV Download Section -->
    <section class="py-12 sm:py-16">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-xl sm:text-2xl font-light text-gray-900 mb-4">
            Detailed Background
          </h2>
          <p class="text-gray-600 mb-6">
            Want the full professional history? Download the detailed CV.
          </p>
          <Button as-child variant="outline">
            <a href="/Florian_Strauf_CV.pdf" target="_blank" rel="noopener noreferrer">
              <FileText class="w-4 h-4 mr-2" />
              Download CV (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light mb-4">
            Ready to Explore How We Can Help?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Start with a free AI Readiness Assessment. No pressure, no obligation—just clarity on where you stand and what your options are.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Book a Free AI Readiness Assessment
              </router-link>
            </Button>
            <Button as-child size="lg" variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
              <router-link to="/services">
                Explore Services
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
  Lightbulb,
  Code,
  Target,
  Handshake,
  Building,
  TrendingUp,
  Brain,
  Briefcase,
  Cpu,
  Check,
  MapPin,
  FileText,
} from 'lucide-vue-next'

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://learnedlate.com/about/#webpage",
    "url": "https://learnedlate.com/about",
    "name": "About – LearnedLate | AI Strategy-to-Execution Consultancy",
    "description": "LearnedLate helps NZ & Australian businesses move from AI confusion to measurable results. Strategy + Implementation. Business Fluency + Technical Depth.",
    "inLanguage": "en-NZ",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://learnedlate.com/#website"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://learnedlate.com/#organization",
    "name": "LearnedLate",
    "url": "https://learnedlate.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://learnedlate.com/learndlate.png"
    },
    "description": "AI strategy-to-execution consultancy for NZ and Australian mid-market businesses",
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
    "serviceType": [
      "AI Readiness Assessment",
      "Agentic Workflow Implementation",
      "Custom AI Development",
      "Full-Stack AI Delivery"
    ]
  }
]
</script>
