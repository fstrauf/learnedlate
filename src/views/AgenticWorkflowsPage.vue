<template>
  <div class="agentic-workflows-page">
    <SEOHead 
      title="Agentic Workflow Implementation – Autonomous AI Systems | LearnedLate"
      description="Deploy autonomous AI systems that handle complete business processes end-to-end. Integration with your existing tools. 2-week prototype to 90-day pilot."
      url="/services/agentic-workflows"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-24">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Autonomous Systems That Handle Complete Business Processes
          </h1>
          <p class="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Not just chatbots—AI agents that take action. Multi-step, decision-capable systems that integrate with your existing tools and handle workflows from start to finish.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Discuss Your Workflow Challenge
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

    <!-- What is Agentic AI Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              What Is Agentic AI?
            </h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p class="text-lg text-gray-600 mb-6">
                <strong>Agentic AI</strong> refers to autonomous systems that don't just respond to prompts—they plan, decide, and take action across multiple steps to accomplish goals.
              </p>
              <div class="space-y-4">
                <div class="flex gap-3">
                  <X class="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <p class="text-gray-600">
                    <strong>Not this:</strong> A chatbot that answers questions about your inventory
                  </p>
                </div>
                <div class="flex gap-3">
                  <Check class="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <p class="text-gray-600">
                    <strong>This:</strong> An agent that monitors stock levels, predicts shortages, places orders with suppliers, updates your ERP, and notifies relevant staff—automatically
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 rounded-xl p-6">
              <h3 class="font-medium text-gray-900 mb-4">Key Capabilities</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <Brain class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-600">Multi-step planning and reasoning</span>
                </li>
                <li class="flex items-start gap-3">
                  <GitBranch class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-600">Decision-making with conditional logic</span>
                </li>
                <li class="flex items-start gap-3">
                  <Plug class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-600">Tool use and system integration</span>
                </li>
                <li class="flex items-start gap-3">
                  <RotateCcw class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-600">Self-improvement through feedback</span>
                </li>
                <li class="flex items-start gap-3">
                  <Shield class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-600">Guardrails and human oversight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Common Use Cases
            </h2>
            <p class="text-gray-600 text-lg">
              Where agentic AI delivers the strongest ROI
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card class="h-full">
              <CardHeader>
                <Repeat class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Repetitive Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm mb-3">
                  High-volume, rules-based work that drains your team's energy
                </p>
                <p class="text-sm text-amber-600 font-medium">
                  AI Intervention: Autonomous execution with exception handling
                </p>
              </CardContent>
            </Card>

            <Card class="h-full">
              <CardHeader>
                <Clock class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Decision Delays</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm mb-3">
                  Bottlenecks where work waits for human approval or routing
                </p>
                <p class="text-sm text-amber-600 font-medium">
                  AI Intervention: Intelligent triage with confidence-based escalation
                </p>
              </CardContent>
            </Card>

            <Card class="h-full">
              <CardHeader>
                <Search class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Information Retrieval</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm mb-3">
                  Hunting across multiple systems to find answers
                </p>
                <p class="text-sm text-amber-600 font-medium">
                  AI Intervention: Unified access with natural language queries
                </p>
              </CardContent>
            </Card>

            <Card class="h-full">
              <CardHeader>
                <Users class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Coordination Overhead</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm mb-3">
                  Managing handoffs between people, teams, and systems
                </p>
                <p class="text-sm text-amber-600 font-medium">
                  AI Intervention: Autonomous orchestration with status tracking
                </p>
              </CardContent>
            </Card>

            <Card class="h-full">
              <CardHeader>
                <Target class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Quality Inconsistency</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm mb-3">
                  Variable output quality that creates rework and risk
                </p>
                <p class="text-sm text-amber-600 font-medium">
                  AI Intervention: Standardized execution with quality gates
                </p>
              </CardContent>
            </Card>

            <Card class="h-full">
              <CardHeader>
                <Zap class="w-8 h-8 text-amber-600 mb-3" />
                <CardTitle class="text-lg">Rapid Response Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600 text-sm mb-3">
                  Situations requiring immediate action around the clock
                </p>
                <p class="text-sm text-amber-600 font-medium">
                  AI Intervention: 24/7 monitoring with instant response
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
            We Make AI Talk to Your Existing Systems
          </h2>
          <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            No parallel workflows. No "AI islands." Our agentic systems integrate deeply with your ERP, CRM, databases, and custom applications—working within your existing infrastructure.
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
              Our Implementation Process
            </h2>
            <p class="text-gray-600 text-lg">
              From workflow mapping to scaled deployment
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Workflow Mapping</h3>
              <p class="text-sm text-gray-600">
                Deep dive into your current process to understand inputs, decisions, handoffs, and outputs
              </p>
              <p class="text-xs text-gray-500 mt-2">Week 1</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Pain Point ID</h3>
              <p class="text-sm text-gray-600">
                Identify the highest-impact automation opportunities with effort/impact analysis
              </p>
              <p class="text-xs text-gray-500 mt-2">Week 1</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Prototype</h3>
              <p class="text-sm text-gray-600">
                Build a working proof-of-concept that demonstrates the core automation capability
              </p>
              <p class="text-xs text-gray-500 mt-2">Weeks 2–3</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-amber-400 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 class="font-medium text-gray-900 mb-2">Pilot</h3>
              <p class="text-sm text-gray-600">
                Controlled deployment with monitoring, feedback collection, and iterative refinement
              </p>
              <p class="text-xs text-gray-500 mt-2">90 days</p>
            </div>
          </div>
          
          <div class="mt-12 text-center">
            <div class="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">
              <Rocket class="w-4 h-4" />
              Then: Full deployment with ongoing optimization and support
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
            Have a Workflow That Could Be Automated?
          </h2>
          <p class="text-gray-300 mb-8 text-lg">
            Let's discuss your specific challenge. We'll help you understand whether agentic AI is the right approach and what a solution might look like.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as-child size="lg" variant="secondary">
              <router-link to="/contact">
                Discuss Your Workflow Challenge
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
  Check,
  X,
  Brain,
  GitBranch,
  Plug,
  RotateCcw,
  Shield,
  Repeat,
  Clock,
  Search,
  Users,
  Target,
  Zap,
  Database,
  Cloud,
  FileText,
  Mail,
  Rocket,
} from 'lucide-vue-next'
</script>
