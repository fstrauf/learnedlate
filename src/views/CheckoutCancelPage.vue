<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full text-center">
      <div class="mb-6">
        <svg class="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Payment Cancelled</h1>
      <p class="text-gray-600 mb-6">
        Your payment was cancelled. No charges have been made to your account.
      </p>
      <div class="space-x-4">
        <router-link to="/" class="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
          Return Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Cancel page - user will see this if they cancel payment
</script>
