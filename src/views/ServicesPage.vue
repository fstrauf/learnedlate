<template>
  <div class="services-page">
    <SEOHead 
      title="Fractional CTO & Technical Consulting Services"
      description="Expert fractional CTO services, MVP development, and technical due diligence for New Zealand startups and businesses. Get strategic technology guidance from an experienced technical leader."
      url="/services"
      :schema="servicesSchema"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Strategic Technology Leadership for Your Business
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Get expert fractional CTO services, technical advisory, and strategic guidance 
            to accelerate your technology initiatives across Auckland, Wellington, and all of New Zealand.
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span class="bg-white px-4 py-2 rounded-full shadow-sm">🇳🇿 New Zealand Based</span>
            <span class="bg-white px-4 py-2 rounded-full shadow-sm">⚡ Rapid Response</span>
            <span class="bg-white px-4 py-2 rounded-full shadow-sm">🎯 Results Focused</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-light text-center text-gray-900 mb-12">
          Professional Services
        </h2>
        <div class="grid md:grid-cols-1 lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
          
          <!-- Service 1: Fractional CTO -->
          <div class="service-card bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300 relative">
            <div class="absolute top-6 right-6 text-sm font-light text-gray-400">01</div>
            <h3 class="text-2xl font-light text-gray-900 mb-4">
              Fractional CTO & Technical Advisor
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Get seasoned technical leadership without the full-time commitment. Perfect for startups and growing companies 
              that need strategic technology guidance, team leadership, and technical decision-making support.
            </p>
            <div class="space-y-3 mb-6">
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Strategic technology planning and roadmap development</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Technical team leadership and mentoring</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Architecture reviews and technology decisions</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Investor and stakeholder communication</span>
              </div>
            </div>
            <div class="pt-4 border-t border-gray-100">
              <span class="text-sm text-gray-500">Best for: Series A-C startups, scale-ups needing technical leadership</span>
            </div>
          </div>

          <!-- Service 2: MVP Development -->
          <div class="service-card bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300 relative">
            <div class="absolute top-6 right-6 text-sm font-light text-gray-400">02</div>
            <h3 class="text-2xl font-light text-gray-900 mb-4">
              MVP & Rapid Prototype Development
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Transform your ideas into market-ready products quickly and efficiently. Specializing in lean development 
              methodologies to validate concepts, attract early users, and secure funding.
            </p>
            <div class="space-y-3 mb-6">
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Rapid prototyping and MVP development (2-12 weeks)</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">User experience design and validation testing</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Scalable architecture planning for future growth</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Go-to-market strategy and technical implementation</span>
              </div>
            </div>
            <div class="pt-4 border-t border-gray-100">
              <span class="text-sm text-gray-500">Best for: Pre-seed startups, corporate innovation teams, entrepreneurs</span>
            </div>
          </div>

          <!-- Service 3: Technical Due Diligence -->
          <div class="service-card bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300 relative">
            <div class="absolute top-6 right-6 text-sm font-light text-gray-400">03</div>
            <h3 class="text-2xl font-light text-gray-900 mb-4">
              Technical Due Diligence & Audits
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Comprehensive technical assessments for investors, acquirers, and businesses. Get detailed insights into 
              technology assets, risks, scalability potential, and strategic recommendations.
            </p>
            <div class="space-y-3 mb-6">
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Codebase quality and architecture assessment</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Scalability analysis and performance evaluation</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Security posture and compliance review</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-600">Team assessment and technical debt analysis</span>
              </div>
            </div>
            <div class="pt-4 border-t border-gray-100">
              <span class="text-sm text-gray-500">Best for: VCs, PE firms, acquirers, businesses evaluating technology</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-light text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div class="space-y-6">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-sm">
              <button
                @click="toggleFAQ(index)"
                class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <span class="font-medium text-gray-900">{{ faq.question }}</span>
                <svg 
                  :class="{ 'rotate-180': openFAQs.includes(index) }" 
                  class="w-5 h-5 text-gray-500 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
                </svg>
              </button>
              <div v-show="openFAQs.includes(index)" class="px-6 pb-4">
                <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Local Areas Served -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-light text-gray-900 mb-8">
            Serving New Zealand Businesses
          </h2>
          <p class="text-gray-600 mb-8">
            Providing fractional CTO and technical consulting services across New Zealand's major business centers:
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-2xl mb-2">🏙️</div>
              <div class="font-medium text-gray-900">Auckland</div>
              <div class="text-sm text-gray-500">Business Hub</div>
            </div>
            <div class="text-center">
              <div class="text-2xl mb-2">🏛️</div>
              <div class="font-medium text-gray-900">Wellington</div>
              <div class="text-sm text-gray-500">Capital City</div>
            </div>
            <div class="text-center">
              <div class="text-2xl mb-2">🏔️</div>
              <div class="font-medium text-gray-900">Christchurch</div>
              <div class="text-sm text-gray-500">South Island</div>
            </div>
            <div class="text-center">
              <div class="text-2xl mb-2">🌐</div>
              <div class="font-medium text-gray-900">Remote</div>
              <div class="text-sm text-gray-500">Nationwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-light mb-6">
          Ready to Accelerate Your Technology Strategy?
        </h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Get expert guidance, strategic planning, and hands-on technical leadership 
          to drive your business forward. Let's discuss your needs.
        </p>
        <a 
          href="mailto:f.strauf@gmail.com" 
          @click="handleContactClick"
          class="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
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
import { trackServiceView, trackContactEvent } from '../utils/analytics'

// FAQ data
const faqs = [
  {
    question: "What exactly is a fractional CTO and how does it work?",
    answer: "A fractional CTO provides strategic technology leadership on a part-time or project basis. You get access to senior-level expertise without the full-time salary and equity commitment. I work with your team to develop technology strategy, make architectural decisions, guide technical hiring, and provide leadership during critical growth phases."
  },
  {
    question: "How long does MVP development typically take?",
    answer: "Most MVPs can be developed in 2-12 weeks depending on complexity. I focus on rapid validation and getting to market quickly with core features. The timeline depends on your specific requirements, but I prioritize speed-to-market while building a solid foundation for future growth."
  },
  {
    question: "What's included in a technical due diligence assessment?",
    answer: "A comprehensive review covering code quality, architecture scalability, security posture, technical debt, team capabilities, and technology stack evaluation. You'll receive a detailed report with risk assessment, recommendations, and strategic guidance for technology decisions."
  },
  {
    question: "Do you work with companies outside of Auckland?",
    answer: "Absolutely! I serve clients across all of New Zealand including Wellington, Christchurch, and other regions. Many engagements are conducted remotely, with occasional in-person meetings as needed. I'm experienced in managing distributed teams and remote collaboration."
  },
  {
    question: "What industries and company sizes do you typically work with?",
    answer: "I work with startups from pre-seed to Series C, as well as established companies undergoing digital transformation. Industry experience includes fintech, healthtech, SaaS platforms, e-commerce, and emerging technologies. Company sizes range from 2-person founding teams to 200+ employee organizations."
  },
  {
    question: "How do you price your services?",
    answer: "Pricing varies based on engagement type, scope, and duration. Fractional CTO services are typically monthly retainers, MVP development is project-based, and due diligence is fixed-fee. I provide transparent proposals after understanding your specific needs and can work within most budgets."
  }
]

// FAQ state management
const openFAQs = ref<number[]>([])

const toggleFAQ = (index: number) => {
  if (openFAQs.value.includes(index)) {
    openFAQs.value = openFAQs.value.filter(i => i !== index)
  } else {
    openFAQs.value.push(index)
  }
}

// Analytics tracking
onMounted(() => {
  trackServiceView('services_page_view')
})

const handleContactClick = () => {
  trackContactEvent('email_services_page')
}

// Services schema markup
const servicesSchema = [
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
    "@type": "Service",
    "name": "MVP Development",
    "description": "Rapid prototype and minimum viable product development for startups and entrepreneurs",
    "provider": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "serviceType": "Software Development"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": "Technical Due Diligence",
    "description": "Comprehensive technical assessments for investors, acquirers, and businesses",
    "provider": {
      "@type": "Person",
      "@id": "https://learnedlate.com/#person"
    },
    "areaServed": {
      "@type": "Country",
      "name": "New Zealand"
    },
    "serviceType": "Business Consulting"
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