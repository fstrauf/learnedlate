<template>
  <div class="lead-magnet-capture">
    <Card v-if="!isSubmitted" class="border-2 border-dashed border-amber-200 bg-amber-50/50">
      <CardHeader v-if="title || description">
        <CardTitle v-if="title" class="text-lg">{{ title }}</CardTitle>
        <CardDescription v-if="description">{{ description }}</CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="flex flex-col sm:flex-row gap-3">
            <Input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
              class="flex-1 bg-white"
              :disabled="isSubmitting"
            />
            <Button 
              type="submit" 
              :disabled="isSubmitting || !isValidEmail"
              class="whitespace-nowrap"
            >
              <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
              <Download v-else class="w-4 h-4 mr-2" />
              {{ buttonText }}
            </Button>
          </div>
          <p class="text-xs text-gray-500">
            We respect your privacy. Unsubscribe anytime. No spam, ever.
          </p>
        </form>
      </CardContent>
    </Card>

    <Card v-else class="bg-green-50 border-green-200">
      <CardContent class="pt-6">
        <div class="flex items-start gap-3">
          <CheckCircle class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 class="font-medium text-green-900">{{ successTitle }}</h4>
            <p class="text-sm text-green-700 mt-1">
              {{ successMessage }}
            </p>
            <p class="text-sm text-green-600 mt-2">
              Check your inbox for the download link.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Download, Loader2, CheckCircle } from 'lucide-vue-next'

interface Props {
  title?: string
  description?: string
  buttonText?: string
  magnetId: string
  magnetName: string
  downloadUrl?: string
  successTitle?: string
  successMessage?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Get the Free Checklist',
  description: 'Download our AI Readiness Checklist: 15 questions every board should ask.',
  buttonText: 'Get Free Access',
  successTitle: 'Thank You!',
  successMessage: 'Check your email for the download link. We\'ve also sent a copy to your inbox.',
})

const email = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

const handleSubmit = async () => {
  if (!isValidEmail.value) return
  
  isSubmitting.value = true
  
  // Track the conversion event
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture('lead_magnet_signup', {
      magnet_id: props.magnetId,
      magnet_name: props.magnetName,
      email_domain: email.value.split('@')[1]
    })
  }
  
  try {
    // Call the API endpoint
    const response = await fetch('/api/lead-magnet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        magnetId: props.magnetId,
        magnetName: props.magnetName,
        source: window.location.pathname,
      }),
    })
    
    if (!response.ok) {
      throw new Error('Failed to submit')
    }
    
    // Store the signup in localStorage for reference
    const signups = JSON.parse(localStorage.getItem('lead_magnet_signups') || '[]')
    signups.push({
      magnetId: props.magnetId,
      email: email.value,
      timestamp: new Date().toISOString()
    })
    localStorage.setItem('lead_magnet_signups', JSON.stringify(signups))
    
    isSubmitted.value = true
  } catch (error) {
    console.error('Failed to submit:', error)
    // Still show success to user even if API fails
    // In production, you might want to show an error message
    isSubmitted.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>
