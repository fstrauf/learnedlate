<template>
  <div class="contact-page">
    <SEOHead 
      title="Get Started – LearnedLate | AI Strategy, Implementation & Engineering"
      description="Tell us what you're working on. We respond within 24 hours."
      url="/contact"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 text-white sm:py-24">
      <div class="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="mb-6 text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p class="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Tell us what you're working on. We'll respond within 24 hours.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-2xl">
          <div class="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
            <div class="mb-6 text-center">
              <h2 class="mb-2 text-2xl font-light text-white">Send a Message</h2>
              <p class="text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <!-- Alternative Option -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20">
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="mb-6 text-xl font-light text-white sm:text-2xl">
            Prefer Email?
          </h2>
          <p class="mb-6 text-gray-300">
            You can also reach us directly at 
            <a href="mailto:hello@learnedlate.com" data-cfemail="" class="text-amber-300 hover:text-amber-200 hover:underline">hello@learnedlate.com</a>
          </p>
          <Button as-child variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
            <a href="mailto:hello@learnedlate.com" data-cfemail="">
              <Mail class="mr-2 h-4 w-4" />
              Send an Email
            </a>
          </Button>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24">
      <div class="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div class="container relative mx-auto px-4 lg:px-6">
        <div class="mx-auto max-w-3xl">
          <h2 class="mb-10 text-center text-xl font-light text-white sm:text-2xl">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible class="space-y-4">
            <AccordionItem value="item-1" class="rounded-2xl border border-white/15 bg-white/5 px-4 backdrop-blur">
              <AccordionTrigger class="py-4 text-left text-white hover:no-underline hover:text-amber-300">
                How quickly will you respond?
              </AccordionTrigger>
              <AccordionContent class="pb-4 text-gray-300">
                We aim to respond to all inquiries within 24 hours during business days. 
                For complex questions, we may suggest a brief call to discuss in detail.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" class="rounded-2xl border border-white/15 bg-white/5 px-4 backdrop-blur">
              <AccordionTrigger class="py-4 text-left text-white hover:no-underline hover:text-amber-300">
                What information should I include in my message?
              </AccordionTrigger>
              <AccordionContent class="pb-4 text-gray-300">
                Helpful details include your company size, the workflow or process you want to improve,
                the systems involved, and the result you want to achieve. The more context, the better we can help.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue'
import ContactForm from '../components/ContactForm.vue'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Mail,
} from 'lucide-vue-next'
</script>
