<template>
  <div class="services-page overflow-x-hidden">
    <SEOHead
      title="Fractional CTO & AI Development Services"
      description="Expert AI-accelerated development, fractional CTO services, and technical due diligence for New Zealand startups. Get your MVP built faster and smarter."
      url="/services"
      :schema="servicesSchema"
    />

    <section class="bg-gradient-to-r from-gray-50 to-gray-100 py-12 sm:py-16">
              <div class="container mx-auto px-2 sm:px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Strategic Technology Solutions That Drive Business Results
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed px-2">
            From automating a single, time-consuming task to providing long-term technical leadership, my services are designed to deliver measurable ROI and give you a sustainable competitive advantage.
          </p>
          <div class="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm text-gray-500 px-4">
            <span class="bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">🚀 AI-Accelerated</span>
            <span class="bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">🇳🇿 New Zealand Based</span>
            <span class="bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">⚡ Rapid Prototyping</span>
            <span class="bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">🎯 Results Focused</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-16">
              <div class="container mx-auto px-2 sm:px-4 lg:px-6">
        <div class="grid grid-cols-1 gap-8 sm:gap-12 max-w-4xl mx-auto">

          <div id="quick-wins" class="service-card bg-white rounded-lg border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 relative">
            <div class="absolute top-4 sm:top-6 right-4 sm:right-6 text-sm font-light text-blue-600">Tier 1</div>
            <h3 class="text-xl sm:text-2xl font-light text-gray-900 mb-4 pr-8">
              The Quick Win: AI Automation & Business Implementation
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              You're spending too much time on repetitive, manual work like data entry, invoicing, or customer follow-ups. I'll identify your single biggest time-drain and build a reliable automation to handle it, saving you 10+ hours a week.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600 text-sm sm:text-base"><strong>Perfect for:</strong> Businesses feeling overwhelmed by admin and looking for a fast, high-ROI project to start with.</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600 text-sm sm:text-base"><strong>Deliverables:</strong> A fully functional automation for one core business process, team training, and a clear ROI report.</span>
              </div>
            </div>
            <div class="pt-4 border-t border-gray-100">
              <div class="flex flex-wrap gap-3 mb-3">
                <router-link to="/automation" class="inline-flex items-center bg-gray-900 text-white px-5 py-2.5 rounded-md text-sm hover:bg-gray-800">Learn More About Automation</router-link>
              </div>
            </div>
          </div>

          <div id="build-launch" class="service-card bg-white rounded-lg border-2 border-blue-500 p-6 sm:p-8 shadow-lg transition-shadow duration-300 relative">
            <div class="absolute top-4 sm:top-6 right-4 sm:right-6 text-sm font-light text-blue-600">Tier 2</div>
            <h3 class="text-xl sm:text-2xl font-light text-gray-900 mb-4 pr-8">
              The Product Launch: AI-Accelerated MVP Development
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              You have a software idea but need to get to market quickly without sacrificing quality. I combine deep architectural experience with modern AI tools to build your market-ready MVP in as little as 8 weeks. Avoid costly mistakes and build a product on a foundation that's ready for scale.
            </p>

            <div class="space-y-3 mb-6">
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600 text-sm sm:text-base"><strong>Perfect for:</strong> Founders and businesses who need to validate an idea, secure investment, or launch a new product efficiently.</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600 text-sm sm:text-base"><strong>Deliverables:</strong> A complete, scalable MVP, launch-ready infrastructure, and full intellectual property ownership.</span>
              </div>
            </div>
            <div class="pt-4 border-t border-gray-100">
              <div class="flex flex-wrap gap-3 mb-3">
                <router-link to="/mvp-development" class="inline-flex items-center bg-gray-900 text-white px-5 py-2.5 rounded-md text-sm hover:bg-gray-800">Learn More About MVP Development</router-link>
              </div>
            </div>
          </div>

          <div id="strategic-leadership" class="service-card bg-white rounded-lg border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 relative">
            <div class="absolute top-4 sm:top-6 right-4 sm:right-6 text-sm font-light text-blue-600">Tier 3</div>
            <h3 class="text-xl sm:text-2xl font-light text-gray-900 mb-4 pr-8">
              The Strategic Partnership: Fractional CTO & Technical Leadership
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
              You're making critical technology decisions without senior expertise. You need to scale your team, prepare for due diligence, or align your tech with business goals. I provide the strategic leadership of a full-time CTO for a fraction of the cost.
            </p>
            <div class="space-y-3 mb-6">
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600 text-sm sm:text-base"><strong>Perfect for:</strong> Growing startups (Seed to Series A) and established businesses needing to modernize their technology strategy.</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600 text-sm sm:text-base"><strong>Deliverables:</strong> A clear technical roadmap, improved team velocity, investor-ready documentation, and confident technical decision-making.</span>
              </div>
            </div>
            <div class="pt-4 border-t border-gray-100">
              <div class="flex flex-wrap gap-3 mb-3">
                <router-link to="/fractional-cto" class="inline-flex items-center bg-gray-900 text-white px-5 py-2.5 rounded-md text-sm hover:bg-gray-800">Learn More About Fractional CTO Services</router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-12 sm:py-16 bg-gray-50">
              <div class="container mx-auto px-2 sm:px-4 lg:px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-center text-gray-900 mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div class="space-y-4 sm:space-y-6">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-sm">
              <button
                @click="toggleFAQ(index)"
                class="w-full px-2 sm:px-4 lg:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <span class="font-medium text-gray-900 text-sm sm:text-base pr-2">{{ faq.question }}</span>
                <svg
                  :class="{ 'rotate-180': expandedFAQ === index }"
                  class="w-5 h-5 text-gray-500 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
                </svg>
              </button>
              <div v-show="expandedFAQ === index" class="px-2 sm:px-4 lg:px-6 pb-3 sm:pb-4">
                <p class="text-gray-600 leading-relaxed text-sm sm:text-base">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-16">
              <div class="container mx-auto px-2 sm:px-4 lg:px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-8">
            Serving New Zealand Businesses
          </h2>
          <p class="text-gray-600 mb-8 text-sm sm:text-base px-2">
            Providing AI automation, development, and fractional CTO services across New Zealand's major business centers:
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div class="text-center">
              <div class="text-xl sm:text-2xl mb-2">🏙️</div>
              <div class="font-medium text-gray-900 text-sm sm:text-base">Auckland</div>
              <div class="text-xs sm:text-sm text-gray-500">Business Hub</div>
            </div>
            <div class="text-center">
              <div class="text-xl sm:text-2xl mb-2">🏛️</div>
              <div class="font-medium text-gray-900 text-sm sm:text-base">Wellington</div>
              <div class="text-xs sm:text-sm text-gray-500">Capital City</div>
            </div>
            <div class="text-center">
              <div class="text-xl sm:text-2xl mb-2">🏔️</div>
              <div class="font-medium text-gray-900 text-sm sm:text-base">Christchurch</div>
              <div class="text-xs sm:text-sm text-gray-500">South Island</div>
            </div>
            <div class="text-center">
              <div class="text-xl sm:text-2xl mb-2">🌐</div>
              <div class="font-medium text-gray-900 text-sm sm:text-base">Remote</div>
              <div class="text-xs sm:text-sm text-gray-500">Nationwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 sm:py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-2 sm:px-4 lg:px-6 text-center">
        <h2 class="text-2xl sm:text-3xl font-light mb-6">
          Have a Project in Mind?
        </h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto text-sm sm:text-base px-2">
          Let's discuss how AI-accelerated development can bring your idea to life, or how strategic automation can free up your time.
        </p>
        <a
          href="mailto:hello@learnedlate.com"
          @click="handleContactClick"
          class="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
        >
          Start a Conversation
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SEOHead from '../components/SEOHead.vue'

// NEW FAQ for the new service
const faqs = [
  {
    question: "How is 'AI-Accelerated Development' different from just using ChatGPT to code?",
    answer: "It's the difference between having a powerful engine and having a skilled driver with a map. AI tools generate code quickly, but they lack strategic context. My service combines that speed with experienced architectural planning, quality control, and a focus on your business goals. This ensures the final product is not just built fast, but built right—scalable, secure, and ready for the market."
  },
  {
    question: "How do you help businesses cut through AI confusion and actually implement useful automation?",
    answer: "I start with a practical AI assessment to identify why current AI initiatives aren't working, then implement specific, measurable solutions like custom ChatGPT workflows, process automation, and team training. Unlike generic AI consultants, I focus on immediate business value with clear ROI tracking and measurable outcomes."
  },
  {
    question: "What exactly is a fractional CTO and how does it work?",
    answer: "A fractional CTO provides strategic technology leadership on a part-time or project basis. You get access to senior-level expertise without the full-time salary and equity commitment. I work with your team to develop technology strategy, make architectural decisions, guide technical hiring, and provide leadership during critical growth phases."
  },
  {
    question: "How quickly can I get an MVP developed with your AI-accelerated approach?",
    answer: "Most AI-powered MVPs can be developed in 1-3 months, which is often 30-50% faster than traditional methods. We start with a 1-2 week 'Feasibility & Prototype Sprint' to scope the project and create a clear roadmap, ensuring we build the right product from day one."
  },
  {
    question: "What's included in a technical due diligence assessment?",
    answer: "A comprehensive review covering code quality, architecture scalability, security posture, technical debt, team capabilities, and technology stack evaluation. You'll receive a detailed report with risk assessment, recommendations, and strategic guidance for technology decisions."
  },
  {
    question: "Do you work with companies outside of Auckland?",
    answer: "Absolutely! I serve clients across all of New Zealand including Wellington, Christchurch, and other regions. Many engagements are conducted remotely, with occasional in-person meetings as needed. I'm experienced in managing distributed teams and remote collaboration."
  }
]

// FAQ state management
const expandedFAQ = ref<number | null>(null)

const toggleFAQ = (index: number) => {
  expandedFAQ.value = expandedFAQ.value === index ? null : index
}

onMounted(() => {
  // PostHog will automatically track page views
})

const handleContactClick = () => {
  // PostHog will automatically track this click via autocapture
}

// Services schema markup
const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Accelerated Development",
    "description": "Rapidly build and launch your Minimum Viable Product (MVP) or custom software using a combination of expert development oversight and AI-powered coding tools.",
    "provider": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "serviceType": "Software Development",
    "offers": [
       {
        "@type": "Offer",
        "name": "AI Feasibility & Prototype Sprint",
        "price": "2500-5000",
        "priceCurrency": "NZD"
      },
      {
        "@type": "Offer",
        "name": "AI-Powered MVP Build",
        "price": "15000-50000",
        "priceCurrency": "NZD"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation & Business Implementation",
    "description": "Practical AI automation solutions and ChatGPT implementation for New Zealand businesses with measurable results in 90 days",
    "provider": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "serviceType": "AI Consulting"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fractional CTO Services",
    "description": "Part-time technology leadership and strategic guidance for startups and growing companies",
    "provider": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "serviceType": "Technology Consulting"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
]
</script>

<style scoped>
.service-card {
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-2px);
}
</style>