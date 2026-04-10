<template>
  <div class="contact-form">
    <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label for="name">Name *</Label>
          <Input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Your name"
            required
            :disabled="isSubmitting"
          />
        </div>
        <div>
          <Label for="email">Email *</Label>
          <Input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="you@company.com"
            required
            :disabled="isSubmitting"
          />
        </div>
      </div>
      
      <div>
        <Label for="company">Company</Label>
        <Input
          id="company"
          v-model="form.company"
          type="text"
          placeholder="Your company (optional)"
          :disabled="isSubmitting"
        />
      </div>
      
      <div>
        <Label for="message">Message *</Label>
        <Textarea
          id="message"
          v-model="form.message"
          placeholder="Tell us about your project or questions..."
          :rows="5"
          required
          :disabled="isSubmitting"
        />
      </div>
      
      <Button 
        type="submit" 
        :disabled="isSubmitting || !isValid"
        class="w-full"
        size="lg"
      >
        <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
        <Send v-else class="w-4 h-4 mr-2" />
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </Button>
      
      <p class="text-xs text-gray-500 text-center">
        We'll respond within 24 hours. No spam, ever.
      </p>
    </form>

    <div v-else class="text-center py-8">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle class="w-8 h-8 text-green-600" />
      </div>
      <h3 class="text-xl font-medium text-gray-900 mb-2">Message Sent!</h3>
      <p class="text-gray-600 mb-6">
        Thanks for reaching out. We'll get back to you within 24 hours.
      </p>
      <Button @click="resetForm" variant="outline">
        Send Another Message
      </Button>
    </div>

    <div v-if="error" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
      <p class="text-red-700 text-sm">{{ error }}</p>
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
