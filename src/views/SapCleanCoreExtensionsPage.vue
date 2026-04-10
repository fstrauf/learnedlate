<template>
  <div class="clean-core-page">
    <SEOHead
      title="SAP Clean Core Extensions | BTP Side-by-Side Development Services"
      description="Build upgrade-safe SAP Clean Core extensions on BTP. Side-by-side development keeps your S/4HANA core clean while delivering custom functionality. Book your assessment."
      url="/sap-clean-core-extensions"
    />

    <!-- Hero Section -->
    <section class="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto text-center">
          <div class="inline-block text-xs tracking-wide uppercase bg-white/10 border border-white/20 px-3 py-1 rounded mb-4">SAP Clean Core Extensions</div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            SAP Clean Core Extensions Built for Upgrade-Proof S/4HANA
          </h1>
          <p class="text-gray-300 text-lg sm:text-xl mt-4 max-w-3xl mx-auto">
            Side-by-side extension development on SAP BTP. Keep your core clean, your business agile, and your upgrades seamless—without the technical debt.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" as-child>
              <a href="/contact" >
                Book Clean Core Assessment
              </a>
            </Button>
            <Button size="lg" variant="outline" class="border-white/20 text-white hover:bg-white/20 hover:text-white bg-transparent" as-child>
              <a href="#features">
                View Extension Examples
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-6">
            The Hidden Risk in Your S/4HANA Extensions
          </h2>
          <p class="text-gray-700 text-lg mb-6">
            Your S/4HANA migration is complete—or underway—but your business still needs custom functionality that standard SAP doesn't provide. Traditional modifications (enhancements, user exits, core modifications) create technical debt that turns every SAP upgrade into a costly, risky project. One in three S/4HANA projects delay go-live due to extension complexity.
          </p>
          <p class="text-gray-700 mb-6">
            SAP Clean Core extensions built on BTP solve this. By developing side-by-side—outside the core but seamlessly integrated—you get the custom functionality your business demands while maintaining a clean, upgrade-ready S/4HANA system. No more modification conflicts. No more upgrade testing nightmares.
          </p>
          <p class="text-gray-900 font-medium">
            Here's how we build Clean Core extensions that protect your SAP investment:
          </p>
        </div>
      </div>
    </section>

    <!-- Key Features Section -->
    <section id="features" class="py-12 sm:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">
            Our Clean Core Extension Services
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Feature 1: Side-by-Side Architecture -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <h3 class="font-medium text-gray-900 text-xl mb-2">Side-by-Side Architecture</h3>
              <p class="text-gray-600 mb-4">Extensions live on BTP, completely separate from S/4HANA core</p>
              <p class="text-gray-700 text-sm">
                We build using SAP's recommended side-by-side pattern—your custom apps, integrations, and business logic run on SAP BTP and communicate via stable, released APIs. Your core remains untouched and 100% upgrade-compatible.
              </p>
            </div>
            <!-- Feature 2: API-First Integration -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <h3 class="font-medium text-gray-900 text-xl mb-2">API-First Integration</h3>
              <p class="text-gray-600 mb-4">Stable, versioned connections that survive upgrades</p>
              <p class="text-gray-700 text-sm">
                All integrations use SAP's released APIs and custom RAP services. We never use unreleased internal APIs or direct database access. When SAP updates S/4HANA, your extensions keep working.
              </p>
            </div>
            <!-- Feature 3: Clean Core Compliance Review -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <h3 class="font-medium text-gray-900 text-xl mb-2">Clean Core Compliance Review</h3>
              <p class="text-gray-600 mb-4">Every extension certified against SAP's Clean Core guidelines</p>
              <p class="text-gray-700 text-sm">
                Before deployment, each extension undergoes our 25-point Clean Core compliance check. We verify API usage, extension types, and architecture patterns—giving you documentation that proves compliance to auditors and SAP.
              </p>
            </div>
            <!-- Feature 4: BTP Extension Factory -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <h3 class="font-medium text-gray-900 text-xl mb-2">BTP Extension Factory</h3>
              <p class="text-gray-600 mb-4">Pre-built accelerators reduce development time and cost</p>
              <p class="text-gray-700 text-sm">
                Our reusable BTP components—authentication handlers, S/4HANA connectors, Fiori templates, and integration patterns—mean you don't pay for code that's already been written. Focus budget on your unique business logic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof Section -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">
            Client Results
          </h2>

          <!-- Stats Row -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div class="text-3xl font-semibold text-gray-900">47+</div>
              <div class="text-gray-600 text-sm">Clean Core Extensions Delivered</div>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div class="text-3xl font-semibold text-gray-900">100%</div>
              <div class="text-gray-600 text-sm">Upgrade-Safe</div>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center col-span-2 sm:col-span-1">
              <div class="text-3xl font-semibold text-gray-900">15+</div>
              <div class="text-gray-600 text-sm">S/4HANA Customers</div>
            </div>
          </div>

          <!-- Case Studies -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Case Study 1: Global Manufacturer -->
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div class="text-sm text-gray-500 mb-2">Global Manufacturer</div>
              <h3 class="font-medium text-gray-900 text-lg mb-2">Legacy Enhancement Migration</h3>
              <p class="text-gray-700 text-sm mb-3">
                Replaced 47 legacy enhancements with 12 BTP extensions—reduced upgrade testing from 6 weeks to 4 days.
              </p>
              <div class="flex gap-4 text-sm">
                <span class="text-green-700 font-medium">→ 96% faster testing</span>
                <span class="text-green-700 font-medium">→ 74% fewer extensions</span>
              </div>
            </div>
            <!-- Case Study 2: Healthcare Provider -->
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div class="text-sm text-gray-500 mb-2">Healthcare Provider</div>
              <h3 class="font-medium text-gray-900 text-lg mb-2">Custom Fiori App Deployment</h3>
              <p class="text-gray-700 text-sm mb-3">
                Deployed custom patient intake Fiori app on BTP in 3 weeks, zero core modifications.
              </p>
              <div class="flex gap-4 text-sm">
                <span class="text-green-700 font-medium">→ 3 week delivery</span>
                <span class="text-green-700 font-medium">→ Zero core mods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">
            Clean Core vs. Traditional Modifications
          </h2>
          <div class="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow class="bg-gray-900">
                  <TableHead class="text-white">Aspect</TableHead>
                  <TableHead class="text-white">Traditional Modifications</TableHead>
                  <TableHead class="text-white bg-gray-800">Our Clean Core Approach</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell class="font-medium">Extension Location</TableCell>
                  <TableCell>Inside S/4HANA core</TableCell>
                  <TableCell class="bg-amber-50">Side-by-side on BTP</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium">Upgrade Impact</TableCell>
                  <TableCell>High risk, extensive testing</TableCell>
                  <TableCell class="bg-amber-50">Minimal impact, isolated testing</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium">SAP Compliance</TableCell>
                  <TableCell>Technical debt, audit flags</TableCell>
                  <TableCell class="bg-amber-50">Clean Core certified, audit-ready</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium">Future Flexibility</TableCell>
                  <TableCell>Locked into specific version</TableCell>
                  <TableCell class="bg-amber-50">Portable, cloud-native architecture</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium">Development Speed</TableCell>
                  <TableCell>Months (core modification cycles)</TableCell>
                  <TableCell class="bg-amber-50">Weeks (agile BTP development)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p class="text-center text-gray-600 mt-6 text-sm">
            Our methodology ensures every extension passes SAP's Clean Core guidelines from day one.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">
            Common Questions About SAP Clean Core Extensions
          </h2>
          <div class="space-y-4">
            <details class="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <summary class="cursor-pointer font-medium text-gray-900">
                What exactly are SAP Clean Core extensions and why do I need them?
              </summary>
              <p class="text-gray-700 mt-3">
                SAP Clean Core extensions are custom functionalities built outside your S/4HANA system using SAP BTP (Business Technology Platform). Instead of modifying the core—creating technical debt and upgrade headaches—you extend via side-by-side architecture. If you're running S/4HANA and need custom apps, integrations, or business logic, Clean Core extensions are SAP's recommended (and only future-proof) approach.
              </p>
            </details>
            <details class="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <summary class="cursor-pointer font-medium text-gray-900">
                How do Clean Core extensions affect my S/4HANA upgrade timeline?
              </summary>
              <p class="text-gray-700 mt-3">
                Extensions built using our Clean Core methodology actually accelerate upgrades. Because they use only released APIs and run on BTP—not inside your core—they're isolated from core system changes. Our clients typically reduce upgrade testing cycles by 70-80% because they don't need to regression test dozens of modifications. The core upgrades independently; extensions continue working via stable APIs.
              </p>
            </details>
            <details class="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <summary class="cursor-pointer font-medium text-gray-900">
                Can you convert our existing S/4HANA modifications to Clean Core extensions?
              </summary>
              <p class="text-gray-700 mt-3">
                Yes—modification remediation is one of our core services. We analyse your existing enhancements, user exits, and custom code, then design BTP-based replacements that deliver the same business value without touching the core. Most remediation projects pay for themselves within the first upgrade cycle through reduced testing and consultancy costs.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light">Start Your Clean Core Journey</h2>
          <p class="text-gray-300 mt-4">
            Don't Let Extensions Compromise Your S/4HANA Investment. Book a complimentary Clean Core assessment. We'll review your extension requirements, identify modification risks in your current system, and provide a roadmap to upgrade-safe architecture—all within 48 hours.
          </p>
          <div class="mt-8">
            <Button size="lg" variant="secondary" as-child>
              <a href="/contact" >
                Get Your Free Clean Core Assessment
              </a>
            </Button>
            <p class="text-gray-400 text-sm mt-3">
              No commitment required. Delivered by certified SAP BTP architects.
            </p>
            <p class="text-gray-500 text-xs mt-2">Or email directly at <a href="/contact" class="underline" >florian@learnedlate.com</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
</script>

<style scoped>
.clean-core-page {
  overflow-x: hidden;
}
</style>
