<template>
  <div class="w-full">
    <button
      @click="handleCheckout"
      :disabled="isLoading"
      class="w-full px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 disabled:bg-gray-300 transition-colors duration-200"
    >
      {{ isLoading ? 'Redirecting to checkout...' : buttonText }}
    </button>
    <p v-if="error" class="text-red-600 text-sm mt-2">{{ error }}</p>
    <p v-if="isDev && devMessage" class="text-yellow-600 text-xs mt-2">{{ devMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Product {
  id: string;
  name: string;
  price: number; // in cents
  description: string;
}

interface Props {
  product?: Product;
  coupon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  product: () => ({
    id: 'seo-automation',
    name: 'SEO Automation Package',
    price: 19900,
    description: 'Folder structure and prompts for SEO improvement',
  }),
  coupon: undefined,
});

const isLoading = ref(false);
const error = ref('');
const devMessage = ref('');
const isDev = import.meta.env.DEV;

const buttonText = computed(() => {
  const priceInDollars = (props.product.price / 100).toFixed(2);
  return `Buy Now - $${priceInDollars}`;
});

const handleCheckout = async () => {
  isLoading.value = true;
  error.value = '';
  devMessage.value = '';

  try {
    // Build the API URL
    let apiUrl = '/api/checkout';
    if (isDev && !window.location.origin.includes('localhost:3001')) {
      // For local dev, the Vercel dev server runs on 3000 by default
      // but we're proxying through Vite on 5173
      devMessage.value = 'To test payments locally, run: vercel dev';
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...props.product,
        ...(props.coupon && { coupon: props.coupon }),
      }),
    });

    if (!response.ok) {
      if (isDev) {
        devMessage.value = `Dev error: ${response.status} ${response.statusText}. Make sure to run 'vercel dev' in another terminal.`;
      }
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();
    
    // Redirect to Stripe checkout
    window.location.href = data.url;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An error occurred';
    isLoading.value = false;
  }
};
</script>
