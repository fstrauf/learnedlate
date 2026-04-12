<template>
  <div class="contact-form">
    <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label for="name" class="text-white">Name *</Label>
          <Input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Your name"
            required
            :disabled="isSubmitting"
            class="mt-1 border-white/15 bg-white/5 text-white placeholder:text-gray-500 focus:border-amber-600 focus:ring-amber-600"
          />
        </div>
        <div>
          <Label for="email" class="text-white">Email *</Label>
          <Input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="you@company.com"
            required
            :disabled="isSubmitting"
            class="mt-1 border-white/15 bg-white/5 text-white placeholder:text-gray-500 focus:border-amber-600 focus:ring-amber-600"
          />
        </div>
      </div>
      
      <div>
        <Label for="company" class="text-white">Company</Label>
        <Input
          id="company"
          v-model="form.company"
          type="text"
          placeholder="Your company (optional)"
          :disabled="isSubmitting"
          class="mt-1 border-white/15 bg-white/5 text-white placeholder:text-gray-500 focus:border-amber-600 focus:ring-amber-600"
        />
      </div>
      
      <div>
        <Label for="message" class="text-white">Message *</Label>
        <Textarea
          id="message"
          v-model="form.message"
          placeholder="Tell us about your project or questions..."
          :rows="5"
          required
          :disabled="isSubmitting"
          class="mt-1 border-white/15 bg-white/5 text-white placeholder:text-gray-500 focus:border-amber-600 focus:ring-amber-600"
        />
      </div>
      
      <Button 
        type="submit" 
        :disabled="isSubmitting || !isValid"
        class="w-full bg-amber-600 text-white hover:bg-amber-700"
        size="lg"
      >
        <Loader2 v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin" />
        <Send v-else class="mr-2 h-4 w-4" />
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </Button>
      
      <p class="text-center text-xs text-gray-400">
        We'll respond within 24 hours. No spam, ever.
      </p>
    </form>

    <div v-else class="py-8 text-center">
      <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20">
        <CheckCircle class="h-8 w-8 text-amber-300" />
      </div>
      <h3 class="mb-2 text-xl font-medium text-white">Message Sent!</h3>
      <p class="mb-6 text-gray-300">
        Thanks for reaching out. We'll get back to you within 24 hours.
      </p>
      <Button @click="resetForm" variant="outline" class="border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
        Send Another Message
      </Button>
    </div>

    <div v-if="error" class="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
      <p class="text-sm text-red-300">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, Send, CheckCircle } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  company: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')

const isValid = computed(() => {
  return form.value.name && 
    form.value.email && 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email) &&
    form.value.message
})

const handleSubmit = async () => {
  if (!isValid.value) return
  
  isSubmitting.value = true
  error.value = ''
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        company: form.value.company,
        message: form.value.message,
        source: window.location.pathname,
      }),
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message')
    }
    
    isSubmitted.value = true
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('contact_form_submitted', {
        has_company: !!form.value.company,
      })
    }
    
  } catch (err: any) {
    error.value = err.message || 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  form.value = { name: '', email: '', company: '', message: '' }
  isSubmitted.value = false
  error.value = ''
}
</script>
