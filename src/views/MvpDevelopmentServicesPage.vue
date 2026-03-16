<template>
  <div class="landing-page">
    <SEOHead
      title="MVP Development Services | Build Your Startup MVP in 8 Weeks"
      description="Launch your startup MVP in just 8 weeks with our proven rapid validation methodology. AI-accelerated development + strategic CTO guidance. NZ-based, serving globally. Book a discovery call."
      url="/mvp-development-services"
    />

    <!-- Hero Section -->
    <section class="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 class="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                MVP Development Services | Build Your Startup MVP in 8 Weeks
              </h1>
              <p class="text-gray-300 text-lg mt-4">
                Go from concept to launched product in 8 weeks with our proven rapid validation methodology. 
                AI-accelerated development meets strategic guidance from an experienced fractional CTO.
              </p>
              <div class="mt-8 flex flex-col sm:flex-row gap-4">
                <Button as-child size="lg" variant="secondary">
                  <router-link to="/cv">Start Your MVP Journey</router-link>
                </Button>
                <Button as-child size="lg" variant="outline" class="border-white/20 text-white hover:bg-white/20 hover:text-white bg-transparent">
                  <router-link to="/projects">See How It Works</router-link>
                </Button>
              </div>
            </div>
            <div class="hidden lg:flex justify-center">
              <div class="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                <div class="text-6xl mb-4">🚀</div>
                <div class="text-4xl font-bold">8 Weeks</div>
                <div class="text-gray-300">From Idea to Launch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-6">
            The Problem with Traditional MVP Development
          </h2>
          <p class="text-gray-700 text-lg mb-6">
            You've got the idea. You've validated the problem. But finding the right development partner 
            feels like a minefield—offshore agencies overpromise and underdeliver, freelancers disappear 
            mid-project, and traditional dev shops want 6-month contracts and $100K+ budgets before you've 
            even tested your core assumptions.
          </p>
          <p class="text-gray-700 mb-6">
            Our 8-week MVP development services combine AI-accelerated engineering with strategic product 
            guidance. You get a working product in market faster, with the technical leadership to ensure 
            you're building the <em>right</em> thing, not just <em>anything</em>.
          </p>
          <p class="text-gray-900 font-medium">Here's how we do it differently...</p>
        </div>
      </div>
    </section>

    <!-- Key Features Section -->
    <section id="process" class="py-12 sm:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">
            How Our 8-Week Sprint Works
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Feature 1 -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">⚡</span>
              </div>
              <h3 class="font-medium text-gray-900 text-lg mb-2">8-Week Rapid Validation Sprint</h3>
              <p class="text-gray-600 text-sm mb-3">Launch in weeks, not months</p>
              <p class="text-gray-700 text-sm">
                Our proven 8-week framework takes you from requirements to live product. Each week has 
                clear deliverables and milestones, with weekly check-ins to keep progress on track. 
                By week 4, you'll have a working prototype. By week 8, real users are signing up.
              </p>
            </div>
            <!-- Feature 2 -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">🤖</span>
              </div>
              <h3 class="font-medium text-gray-900 text-lg mb-2">AI-Accelerated Development</h3>
              <p class="text-gray-600 text-sm mb-3">Higher quality, faster delivery, lower cost</p>
              <p class="text-gray-700 text-sm">
                We leverage modern AI tools and automation throughout the development process—from code 
                generation to testing to deployment. This means you get enterprise-quality engineering 
                at a fraction of traditional agency costs.
              </p>
            </div>
            <!-- Feature 3 -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">🎯</span>
              </div>
              <h3 class="font-medium text-gray-900 text-lg mb-2">Fractional CTO Included</h3>
              <p class="text-gray-600 text-sm mb-3">Build the right product, not just any product</p>
              <p class="text-gray-700 text-sm">
                Unlike offshore code factories, you get direct access to an experienced CTO who challenges 
                assumptions, prioritises features ruthlessly, and ensures your technical decisions support 
                your business goals.
              </p>
            </div>
            <!-- Feature 4 -->
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">🇳🇿</span>
              </div>
              <h3 class="font-medium text-gray-900 text-lg mb-2">NZ-Based, Global Reach</h3>
              <p class="text-gray-600 text-sm mb-3">Local accountability, global standards</p>
              <p class="text-gray-700 text-sm">
                Based in New Zealand, we offer the timezone convenience and communication clarity that 
                offshore agencies can't match. You'll have direct access via Slack, weekly video calls 
                in your timezone, and peace of mind.
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
            Why Founders Choose Learned Late
          </h2>
          
          <!-- Stats -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div class="text-3xl font-semibold text-gray-900">4+</div>
              <div class="text-gray-600 text-sm">MVPs Delivered</div>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div class="text-3xl font-semibold text-gray-900">1000+</div>
              <div class="text-gray-600 text-sm">Users Launched to Market</div>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div class="text-3xl font-semibold text-gray-900">8</div>
              <div class="text-gray-600 text-sm">Week Average Delivery</div>
            </div>
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div class="text-3xl font-semibold text-gray-900">NZ</div>
              <div class="text-gray-600 text-sm">Based, Serving Globally</div>
            </div>
          </div>

          <!-- Testimonial -->
          <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <blockquote class="text-gray-700 text-lg italic mb-4">
              "Florian helped us go from idea to paying customers in under 2 months. His combination 
              of strategic guidance and rapid execution was exactly what we needed as first-time founders."
            </blockquote>
            <div class="text-gray-900 font-medium">— Founder, Days to Expiry</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">
            Learned Late vs The Alternatives
          </h2>
          <div class="overflow-x-auto bg-white border border-gray-200 rounded-xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factor</TableHead>
                  <TableHead>Learned Late</TableHead>
                  <TableHead>Offshore Agencies</TableHead>
                  <TableHead>Traditional Dev Shops</TableHead>
                  <TableHead>Freelancers</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell class="font-medium">Delivery Time</TableCell>
                  <TableCell class="font-medium text-green-700">8 weeks</TableCell>
                  <TableCell>3-6 months</TableCell>
                  <TableCell>4-8 months</TableCell>
                  <TableCell>Unpredictable</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium">Strategic Guidance</TableCell>
                  <TableCell class="font-medium text-green-700">Included</TableCell>
                  <TableCell>Extra cost</TableCell>
                  <TableCell>Extra cost</TableCell>
                  <TableCell>Rare</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium">Timezone Alignment</TableCell>
                  <TableCell class="font-medium text-green-700">NZ/AU friendly</TableCell>
                  <TableCell>Challenges</TableCell>
                  <TableCell>Varies</TableCell>
                  <TableCell>Varies</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium">AI-Accelerated Dev</TableCell>
                  <TableCell class="font-medium text-green-700">Yes</TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>Rare</TableCell>
                  <TableCell>Rare</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium">Fixed Engagement</TableCell>
                  <TableCell class="font-medium text-green-700">Yes</TableCell>
                  <TableCell>Sometimes</TableCell>
                  <TableCell>Rare</TableCell>
                  <TableCell>No</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="font-medium">Post-Launch Support</TableCell>
                  <TableCell class="font-medium text-green-700">Included</TableCell>
                  <TableCell>Extra cost</TableCell>
                  <TableCell>Extra cost</TableCell>
                  <TableCell>Unavailable</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div class="space-y-4">
            <details class="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <summary class="cursor-pointer font-medium text-gray-900">
                How much do your MVP development services cost?
              </summary>
              <p class="text-gray-700 mt-3">
                We offer fixed-price engagements with transparent pricing. This includes strategic scoping, 
                full development, testing, deployment, and 30 days of post-launch support. Unlike hourly 
                billing that balloons out of control, our fixed engagement means you know exactly what 
                you're investing before we start.
              </p>
            </details>
            <details class="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <summary class="cursor-pointer font-medium text-gray-900">
                What happens after the 8-week MVP is delivered?
              </summary>
              <p class="text-gray-700 mt-3">
                The 8-week sprint delivers your product to market with core features validated. Post-launch, 
                we offer flexible ongoing support options: fractional CTO retainer for continued strategic 
                guidance, feature development sprints for iterating based on user feedback, or knowledge 
                transfer to help you bring development in-house. Most founders continue with some form of 
                ongoing partnership.
              </p>
            </details>
            <details class="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <summary class="cursor-pointer font-medium text-gray-900">
                How do you ensure quality with an 8-week timeline?
              </summary>
              <p class="text-gray-700 mt-3">
                Speed doesn't mean cutting corners—it means being ruthless about scope and leveraging 
                AI-accelerated development. We build on modern, proven tech stacks with automated testing 
                and CI/CD from day one. The 8-week timeline focuses your MVP on the absolute essentials 
                that validate your core hypothesis. You can always add features post-launch once you have 
                real user feedback.
              </p>
            </details>
            <details class="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <summary class="cursor-pointer font-medium text-gray-900">
                Do you work with international founders or only NZ-based startups?
              </summary>
              <p class="text-gray-700 mt-3">
                While we're based in New Zealand, we work with founders globally. Our timezone (NZST) 
                overlaps well with APAC and parts of the US West Coast. For European and US East Coast 
                founders, we maintain async communication via Slack and schedule strategic calls at 
                mutually convenient times. The advantage of working with us isn't geography—it's the 
                combination of speed, quality, and strategic partnership.
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
          <h2 class="text-2xl sm:text-3xl font-light">Ready to Build Your MVP in 8 Weeks?</h2>
          <p class="text-gray-300 mt-4">
            Book a free 30-minute discovery call. We'll discuss your idea, assess fit for our 8-week 
            program, and outline what your MVP could look like. No commitment required.
          </p>
          <div class="mt-8">
            <Button as-child size="lg" variant="secondary">
              <a href="mailto:hello@learnedlate.com?subject=MVP%20Development%20Services%20Inquiry">Book Your Discovery Call</a>
            </Button>
            <div class="mt-4 space-y-2 text-sm text-gray-400">
              <p>✓ No-obligation consultation</p>
              <p>✓ Response within 24 hours</p>
              <p>✓ Limited to 2 new projects per month to ensure quality</p>
            </div>
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
.landing-page { overflow-x: hidden; }
</style>
