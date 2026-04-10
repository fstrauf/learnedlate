<template>
  <div class="contact-page">
    <SEOHead 
      title="Contact – Get in Touch | LearnedLate"
      description="Have a question or project in mind? Send us a message and we'll respond within 24 hours. Serving New Zealand & Australia."
      url="/contact"
      type="website"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
            Get in Touch
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Have a question about AI readiness, or want to discuss your project? 
            Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-2xl mx-auto">
          <Card class="shadow-lg">
            <CardHeader class="text-center">
              <CardTitle class="text-2xl">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Alternative Option -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-xl sm:text-2xl font-light text-gray-900 mb-6">
            Prefer Email?
          </h2>
          <p class="text-gray-600 mb-6">
            You can also reach us directly at 
            <a href="mailto:hello@learnedlate.com" class="text-amber-700 hover:underline">hello@learnedlate.com</a>
          </p>
          <Button as-child variant="outline">
            <a href="mailto:hello@learnedlate.com">
              <Mail class="w-4 h-4 mr-2" />
              Send an Email
            </a>
          </Button>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 sm:py-20">
      <div class="container mx-auto px-4 lg:px-6">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-xl sm:text-2xl font-light text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible class="space-y-4">
            <AccordionItem value="item-1" class="border rounded-lg px-4">
              <AccordionTrigger class="text-left hover:no-underline py-4">
                How quickly will you respond?
              </AccordionTrigger>
              <AccordionContent class="text-gray-600 pb-4">
                We aim to respond to all inquiries within 24 hours during business days. 
                For complex questions, we may suggest a brief call to discuss in detail.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" class="border rounded-lg px-4">
              <AccordionTrigger class="text-left hover:no-underline py-4">
                Do you work with businesses outside NZ and Australia?
              </AccordionTrigger>
              <AccordionContent class="text-gray-600 pb-4">
                Our primary focus is New Zealand and Australian mid-market businesses. 
                However, we're open to discussions with businesses in other regions if there's a strong fit.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" class="border rounded-lg px-4">
              <AccordionTrigger class="text-left hover:no-underline py-4">
                What information should I include in my message?
              </AccordionTrigger>
              <AccordionContent class="text-gray-600 pb-4">
                Helpful details include: your company size, industry, current technical setup, 
                and what you're hoping to achieve with AI. The more context, the better we can help.
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
