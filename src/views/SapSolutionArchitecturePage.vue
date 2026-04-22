<template>
  <div class="sap-architecture-page">
    <SEOHead
      title="SAP Solution Architecture Services | Enterprise System Design"
      description="Expert SAP Solution Architecture services for enterprises. S/4HANA transformations, system integration, and custom solution design by a former SAP Solution Architect."
      url="/sap-solution-architecture"
    />

    <!-- Hero Section -->
    <section class="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div class="container mx-auto px-2 sm:px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block text-xs tracking-wide uppercase bg-white/10 border border-white/20 px-3 py-1 rounded mb-4">
            SAP Solution Architecture
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            SAP Solution Architecture That Drives Business Value
          </h1>
          <p class="text-gray-300 text-lg sm:text-xl mt-4">
            Expert guidance for architecting scalable SAP systems, navigating S/4HANA transformations, and integrating complex enterprise landscapes.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-4">
            <Button as-child size="lg" variant="secondary">
              <a href="/contact" >
                Discuss Your SAP Project
              </a>
            </Button>
            <Button as-child size="lg" variant="outline" class="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent">
              <router-link to="/cv">View My SAP Experience</router-link>
            </Button>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="container mx-auto px-2 sm:px-4 lg:px-6 pt-10">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-3 gap-3 sm:gap-6 text-left mt-8">
            <div class="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div class="text-2xl font-semibold">15+</div>
              <div class="text-gray-300 text-sm">Enterprise Projects</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div class="text-2xl font-semibold">10+</div>
              <div class="text-gray-300 text-sm">Industries Served</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div class="text-2xl font-semibold">2014</div>
              <div class="text-gray-300 text-sm">First SAP Blockchain</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What I Offer -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-2 sm:px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">
            SAP Architecture Services
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="font-medium text-gray-900">S/4HANA Transformation Strategy</h3>
              <p class="text-gray-700 text-sm mt-2">Navigate your transition to S/4HANA with confidence. I help design migration strategies, assess system readiness, and plan phased rollouts that minimize business disruption.</p>
              <ul class="text-gray-700 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>Migration roadmap and timeline planning</li>
                <li>System conversion vs. greenfield analysis</li>
                <li>Custom code remediation planning</li>
              </ul>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="font-medium text-gray-900">System Integration Architecture</h3>
              <p class="text-gray-700 text-sm mt-2">Design robust integration solutions connecting SAP with your broader enterprise landscape. From middleware selection to API strategy, I ensure seamless data flow.</p>
              <ul class="text-gray-700 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>SAP PI/PO and Integration Suite design</li>
                <li>API-led connectivity architecture</li>
                <li>Third-party system integration patterns</li>
              </ul>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="font-medium text-gray-900">Custom Solution Design</h3>
              <p class="text-gray-700 text-sm mt-2">Extend SAP's capabilities with custom solutions that fit your unique business processes. From Fiori apps to backend enhancements, designed for maintainability.</p>
              <ul class="text-gray-700 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>Custom development architecture</li>
                <li>SAP Fiori UX design and implementation</li>
                <li>Workflow and process automation</li>
              </ul>
            </div>

            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="font-medium text-gray-900">Architecture Governance</h3>
              <p class="text-gray-700 text-sm mt-2">Establish governance frameworks that ensure long-term system health. I help create standards, review processes, and documentation practices.</p>
              <ul class="text-gray-700 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>Architecture review frameworks</li>
                <li>Development standards and guidelines</li>
                <li>Technical debt assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Work With Me -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-6">Why Work With Me?</h2>
          <p class="text-gray-600 mb-4">
            I have extensive experience working with enterprise clients across multiple industries. This means I understand not just the technology, but how businesses actually use SAP in practice.
          </p>
          <p class="text-gray-600 mb-6">
            I led SAP's innovation strategy for blockchain adoption, including board-level proposals, and have designed custom solutions for industries ranging from manufacturing to financial services.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="font-medium text-gray-900">Solution Architecture</h3>
              <p class="text-gray-700 text-sm mt-2">Deep expertise in designing scalable enterprise systems</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="font-medium text-gray-900">Cross-Industry Experience</h3>
              <p class="text-gray-700 text-sm mt-2">10+ industries from manufacturing to financial services</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="font-medium text-gray-900">Agile Delivery</h3>
              <p class="text-gray-700 text-sm mt-2">Led teams through successful PoCs, pilots, and production</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="font-medium text-gray-900">Innovation Leader</h3>
              <p class="text-gray-700 text-sm mt-2">Pioneered SAP blockchain and emerging technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement Models -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-6">Flexible Engagement Options</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="font-medium text-gray-900">Architecture Review</h3>
              <div class="text-lg font-semibold text-gray-900 mt-1">$3,500</div>
              <div class="text-sm text-gray-500">One-time assessment</div>
              <ul class="text-gray-700 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>Current architecture assessment</li>
                <li>Risk and improvement analysis</li>
                <li>Written recommendations report</li>
              </ul>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-5 relative">
              <div class="absolute -top-3 right-3 text-xs bg-gray-900 text-white px-2 py-1 rounded">MOST POPULAR</div>
              <h3 class="font-medium text-gray-900">Project-Based</h3>
              <div class="text-lg font-semibold text-gray-900 mt-1">Custom</div>
              <div class="text-sm text-gray-500">Fixed scope</div>
              <ul class="text-gray-700 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>S/4HANA migration planning</li>
                <li>Integration architecture design</li>
                <li>Custom solution blueprint</li>
              </ul>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-5">
              <h3 class="font-medium text-gray-900">Advisory Retainer</h3>
              <div class="text-lg font-semibold text-gray-900 mt-1">$5,000/mo</div>
              <div class="text-sm text-gray-500">Ongoing support</div>
              <ul class="text-gray-700 text-sm mt-3 space-y-1 list-disc list-inside">
                <li>Monthly architecture reviews</li>
                <li>Design guidance and validation</li>
                <li>Team mentoring and best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related SAP Service -->
    <section class="py-12 sm:py-16 bg-white border-t border-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-xl sm:text-2xl font-light text-gray-900 mb-3">Need Development, Not Architecture?</h2>
          <p class="text-gray-600 mb-6">If you're past the planning phase and need ABAP, Fiori, or BTP development, see the custom development offering.</p>
          <Button as-child size="lg" variant="outline">
            <router-link to="/sap-custom-development">SAP Custom Development</router-link>
          </Button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">Ready to Optimize Your SAP Landscape?</h2>
          <p class="text-gray-600 mb-8">Whether you're planning an S/4HANA migration, need integration architecture, or want a second opinion on your current setup, I can help.</p>
          <Button as-child size="lg">
            <a href="/contact" >Schedule a Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'
import { Button } from '@/components/ui/button'
</script>

<style scoped>
.sap-architecture-page {
  overflow-x: hidden;
}
</style>
