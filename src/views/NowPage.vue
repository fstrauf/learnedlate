<template>
  <div class="now-page overflow-x-hidden">
    <SEOHead 
      title="What I'm Doing Now - Florian Strauf | Current Projects & Focus"
      description="What Florian Strauf is working on now: building Expense Sorted (AI-powered expense tracking), writing about AI and business, and helping NZ startups with fractional CTO services."
      url="/now"
      type="profile"
      :schema="[profilePageSchema]"
    />
    
    <section class="py-12 sm:py-16">
      <div class="container mx-auto px-2 sm:px-4 lg:px-6">
        <div class="max-w-2xl mx-auto">
          <h1 class="text-3xl sm:text-4xl font-light text-gray-900 mb-6 sm:mb-8">
            What I'm Doing Now
          </h1>
          
          <p class="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" class="text-amber-700 hover:underline">now page</a> — a snapshot of what I'm currently focused on. Updated regularly to reflect my current priorities and projects.
          </p>
          
          <div class="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-700 leading-relaxed">
            <div class="bg-amber-50 rounded-lg p-6">
              <h2 class="text-xl font-medium text-gray-900 mb-3">Building Expense Sorted</h2>
              <p class="mb-3">
                I'm currently deep in development on <a href="https://expensesorted.com" target="_blank" rel="noopener noreferrer" class="text-amber-700 hover:underline font-medium">Expense Sorted</a>, an AI-powered expense tracking tool designed to simplify finances for freelancers and small businesses.
              </p>
              <p class="text-gray-600">
                Using modern AI to automate categorization, reduce manual data entry, and give business owners clearer insights into their spending patterns.
              </p>
            </div>
            
            <div>
              <h2 class="text-xl font-medium text-gray-900 mb-3">Writing & Sharing</h2>
              <p>
                Writing weekly about technology, AI implementation, and business strategy at <router-link to="/blog" class="text-amber-700 hover:underline font-medium">blog.learnedlate.com</router-link>. Focus areas include:
              </p>
              <ul class="list-disc list-inside mt-2 ml-2 space-y-1 text-gray-600">
                <li>Practical AI tools for small businesses</li>
                <li>Fractional CTO insights and startup advice</li>
                <li>Custom software development best practices</li>
                <li>MVP development and launch strategies</li>
              </ul>
            </div>
            
            <div>
              <h2 class="text-xl font-medium text-gray-900 mb-3">Open for Engagements</h2>
              <p class="mb-3">
                Currently accepting new clients for <router-link to="/fractional-cto" class="text-amber-700 hover:underline font-medium">fractional CTO</router-link> and <router-link to="/ai-implementation" class="text-amber-700 hover:underline font-medium">AI consulting</router-link> engagements.
              </p>
              <p class="text-gray-600">
                I help New Zealand startups and businesses with strategic technical leadership, AI implementation, and practical solutions that drive measurable results.
              </p>
            </div>
            
            <div class="text-sm text-gray-500 pt-4 border-t border-gray-200">
              <p>Last updated: March 2026</p>
            </div>
          </div>

          <div class="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <p class="text-base sm:text-lg text-gray-800">
              Interested in working together? 
             <a href="https://calendar.notion.so/meet/florianstrauf/chat" target="_blank" rel="noopener noreferrer" class="font-semibold text-amber-700 hover:underline">Book a call →</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://www.learnedlate.com/now#profile",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://www.learnedlate.com/#person",
    "name": "Florian Strauf",
    "jobTitle": "Fractional CTO & Technical Consultant",
    "description": "Experienced technology leader specializing in fractional CTO services, AI implementation, and strategic guidance for New Zealand startups and businesses.",
    "url": "https://www.learnedlate.com",
    "image": "https://www.learnedlate.com/learndlate.png",
    "worksFor": {
      "@type": "Organization",
      "@id": "https://www.learnedlate.com/#organization"
    },
    "knowsAbout": [
      "Software Architecture",
      "Technical Leadership",
      "Startup Strategy",
      "MVP Development",
      "AI Implementation",
      "Business Automation"
    ]
  },
  "about": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Building Expense Sorted",
        "description": "AI-powered expense tracking tool for freelancers and small businesses"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Writing & Content Creation",
        "description": "Weekly articles on AI, business, and technology"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Consulting Engagements",
        "description": "Fractional CTO and AI consulting for NZ businesses"
      }
    ]
  },
  "dateModified": "2026-03-17"
}
</script>

<style scoped>
.now-page a {
  font-weight: 500;
}
</style>
