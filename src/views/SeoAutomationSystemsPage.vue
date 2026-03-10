<template>
  <div class="seo-automation-systems-page">
    <SEOHead
      title="SEO Automation Systems for Developers & Founders"
      description="Build SEO automation systems that use your existing content, Google Search Console data, and AI workflows to grow organic traffic."
      url="/services/seo-automation"
      :schema="seoSchema"
    />

    <!-- Hero Section -->
    <section class="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="text-center">
          <div class="inline-block text-xs tracking-wide uppercase bg-white/10 border border-white/20 px-3 py-1 rounded mb-6">
            For Developers & Founders
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6">
            SEO Automation Systems for Developers & Founders
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-8 font-light leading-relaxed">
            You don't think content SEO is dead. You treat SEO like an engineering system. 
            My own sites reached hundreds of thousands of impressions with $0 ad spend.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@learnedlate.com"
              class="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 text-center"
            >
              Start a Conversation
            </a>
            <router-link 
              to="/services" 
              class="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200 text-center"
            >
              View All Services
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Who This Is For -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">Who This Is For</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div class="text-2xl mb-3">💻</div>
            <h3 class="font-medium text-gray-900 mb-2">Git-Based Workflows</h3>
            <p class="text-gray-600 text-sm">Sites in Git repos with Markdown content. You already think in commits and PRs.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div class="text-2xl mb-3">🚀</div>
            <h3 class="font-medium text-gray-900 mb-2">1–3 Projects</h3>
            <p class="text-gray-600 text-sm">Founders and developers managing a few sites—not agencies with 50+ clients.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div class="text-2xl mb-3">⏱️</div>
            <h3 class="font-medium text-gray-900 mb-2">No Time for Manual SEO</h3>
            <p class="text-gray-600 text-sm">You know SEO matters but can't spend hours on keyword research and optimization.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-12 sm:py-16 bg-gray-50 border-y border-gray-200">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">How It Works</h2>
        <div class="space-y-4">
          <div class="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold flex-shrink-0">1</div>
            <div>
              <h3 class="font-medium text-gray-900 mb-1">GitHub + Markdown Content</h3>
              <p class="text-gray-600">Your content lives where your code lives. Version-controlled, reviewable, and deployable.</p>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold flex-shrink-0">2</div>
            <div>
              <h3 class="font-medium text-gray-900 mb-1">Google Search Console Data</h3>
              <p class="text-gray-600">Real performance data—not guesswork. Know what queries you're ranking for and where.</p>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold flex-shrink-0">3</div>
            <div>
              <h3 class="font-medium text-gray-900 mb-1">"Control Centre" Folder/Repo</h3>
              <p class="text-gray-600">A dedicated workspace for SEO operations—specs, analysis, and content plans.</p>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold flex-shrink-0">4</div>
            <div>
              <h3 class="font-medium text-gray-900 mb-1">Deterministic + Agentic Tasks</h3>
              <p class="text-gray-600">Some tasks are rules-based (internal links, meta templates). Others use AI for content analysis and improvement suggestions.</p>
            </div>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
            <div class="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold flex-shrink-0">5</div>
            <div>
              <h3 class="font-medium text-gray-900 mb-1">CLI + AI Tools</h3>
              <p class="text-gray-600">Run SEO workflows from your terminal. Fetch data, analyze content, and generate specs—all via command line.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Example Workflow -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">Example Workflow</h2>
        <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 sm:p-8 text-white">
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-semibold flex-shrink-0">1</div>
              <div>
                <h3 class="font-medium mb-1">Fetch GSC Rankings</h3>
                <p class="text-gray-400 text-sm">Pull the latest search performance data via API. See what's climbing, what's slipping, and what's stuck on page 2.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-semibold flex-shrink-0">2</div>
              <div>
                <h3 class="font-medium mb-1">Detect Pages to Improve</h3>
                <p class="text-gray-400 text-sm">Identify content that's close to ranking well but needs optimization—low CTR, declining impressions, or keyword cannibalization.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-semibold flex-shrink-0">3</div>
              <div>
                <h3 class="font-medium mb-1">AI-Assisted Specs + Edits</h3>
                <p class="text-gray-400 text-sm">Generate content improvement specs using AI. Review, refine, and apply changes—all tracked in Git.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-semibold flex-shrink-0">4</div>
              <div>
                <h3 class="font-medium mb-1">Commit + Deploy</h3>
                <p class="text-gray-400 text-sm">Push changes, merge the PR, and deploy. Your optimized content goes live with your existing CI/CD pipeline.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagements -->
    <section class="py-12 sm:py-16 bg-gray-50 border-y border-gray-200">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">Engagement Options</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="text-sm text-gray-500 mb-2">Option A</div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">One-Off System Setup</h3>
            <p class="text-gray-600 text-sm mb-4">I build the complete SEO automation system for your site. You get the codebase, documentation, and training.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Custom GitHub + GSC integration</li>
              <li>• Control centre setup</li>
              <li>• CLI tools configured</li>
              <li>• 2 weeks of support</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl p-6 border-2 border-gray-900 relative">
            <div class="absolute -top-3 right-4 bg-gray-900 text-white text-xs px-2 py-1 rounded">Most Popular</div>
            <div class="text-sm text-gray-500 mb-2">Option B</div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Ongoing Operations</h3>
            <p class="text-gray-600 text-sm mb-4">I set up the system and run the workflows monthly. You get a steady stream of SEO improvements without the work.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Everything in Option A</li>
              <li>• Monthly GSC analysis</li>
              <li>• Content improvement specs</li>
              <li>• Priority support</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl p-6 border border-gray-200">
            <div class="text-sm text-gray-500 mb-2">Option C</div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Add-On to MVP Builds</h3>
            <p class="text-gray-600 text-sm mb-4">Building an MVP with me? Add SEO automation from day one. Start with search-friendly architecture.</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• SEO-first content structure</li>
              <li>• Automated meta generation</li>
              <li>• Search performance tracking</li>
              <li>• Discounted rate</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Results -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">Results</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-3xl sm:text-4xl font-light text-gray-900 mb-2">100K+</div>
            <div class="text-gray-600 text-sm">Impressions on Days to Expiry</div>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-3xl sm:text-4xl font-light text-gray-900 mb-2">50K+</div>
            <div class="text-gray-600 text-sm">Impressions on brewedlate.com</div>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-xl">
            <div class="text-3xl sm:text-4xl font-light text-gray-900 mb-2">$0</div>
            <div class="text-gray-600 text-sm">Ad spend across all sites</div>
          </div>
        </div>
        <p class="text-center text-gray-600 mt-6 text-sm">
          These are my own sites. No client results claimed—just proof that the system works.
        </p>
      </div>
    </section>

    <!-- Read the Article CTA -->
    <section class="py-12 sm:py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="text-2xl sm:text-3xl font-light mb-4">Want the Details?</h2>
        <p class="text-gray-400 mb-6">
          I wrote a deep dive into my entire SEO automation setup on Substack.
        </p>
        <a 
          href="https://blog.learnedlate.com/p/i-dont-think-content-seo-is-dead" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
        >
          Read: "I don't think content SEO is dead" →
        </a>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-4">Ready to Build Your SEO System?</h2>
        <p class="text-gray-600 mb-8">
          Let's talk about your site and how an automation system could grow your organic traffic.
        </p>
        <a 
          href="mailto:hello@learnedlate.com"
          class="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'

const seoSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Automation Systems",
    "description": "Build SEO automation systems that use your existing content, Google Search Console data, and AI workflows to grow organic traffic.",
    "provider": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "serviceType": "SEO Consulting",
    "offers": [
      {
        "@type": "Offer",
        "name": "One-Off System Setup",
        "description": "Complete SEO automation system setup with codebase and documentation"
      },
      {
        "@type": "Offer",
        "name": "Ongoing Operations",
        "description": "Monthly SEO workflow execution and content improvement"
      },
      {
        "@type": "Offer",
        "name": "MVP Add-On",
        "description": "SEO automation integrated into MVP development"
      }
    ]
  }
]
</script>

<style scoped>
.seo-automation-systems-page {
  overflow-x: hidden;
}
</style>
