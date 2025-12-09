<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <div class="container mx-auto px-4 py-20">
      <div class="max-w-2xl mx-auto">
        <!-- Success State -->
        <div v-if="paymentStatus === 'paid'" class="animate-in">
          <div class="text-center mb-12">
            <div class="mb-6 inline-block">
              <svg class="w-16 h-16 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg>
            </div>
            <h1 class="text-4xl sm:text-5xl font-light mb-4">Payment Successful!</h1>
            <p class="text-lg text-gray-300">
              Thank you for purchasing the SEO Automation Package.
            </p>
          </div>

          <!-- Download Section -->
          <div v-if="downloadUrl" class="bg-white/5 border border-white/10 rounded-xl p-8 mb-8 backdrop-blur-sm">
            <h2 class="text-xl font-medium mb-4 text-white">Your Download</h2>
            <p class="text-gray-300 mb-6">
              Your SEO Automation Package is ready to download. Get started with the folder structure and Copilot prompts right away.
            </p>
            <a
              :href="downloadUrl"
              download
              class="inline-block w-full sm:w-auto px-8 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors text-center"
            >
              Download Package Now
            </a>
          </div>

          <!-- Support Section -->
          <div class="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
            <h2 class="text-xl font-medium mb-4 text-white">Questions or Issues?</h2>
            <p class="text-gray-300 mb-6">
              If you encounter any issues with your download or have questions about using the package, don't hesitate to reach out.
            </p>
            <a
              href="mailto:hello@learnedlate.com?subject=SEO%20Automation%20Package%20Support"
              class="inline-block w-full sm:w-auto px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors text-center"
            >
              Contact Support
            </a>
          </div>

          <!-- Getting Started Section -->
          <div class="mt-8">
            <h2 class="text-2xl font-light mb-6 text-white">Getting Started (13 Minutes)</h2>
            
            <!-- Prerequisites -->
            <div class="bg-white/5 border border-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
              <h3 class="text-lg font-medium text-white mb-4">Prerequisites</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start gap-3">
                  <span class="text-green-400 mt-1">✓</span>
                  <span><a href="https://code.visualstudio.com" target="_blank" class="text-blue-300 hover:text-blue-200 underline">VS Code</a> — Free code editor (download if needed)</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-green-400 mt-1">✓</span>
                  <span><a href="https://github.com/features/copilot" target="_blank" class="text-blue-300 hover:text-blue-200 underline">GitHub Copilot</a> — Free tier available for personal use</span>
                </li>
              </ul>
            </div>

            <!-- Quick Start Steps -->
            <div class="space-y-4">
              <div class="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-semibold">1</div>
                  <div>
                    <h4 class="text-white font-medium mb-2">Extract & Open in VS Code</h4>
                    <p class="text-gray-300 text-sm">Unzip the SEO Automation Package and open the folder in VS Code.</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-semibold">2</div>
                  <div>
                    <h4 class="text-white font-medium mb-2">Run the Setup Script</h4>
                    <p class="text-gray-300 text-sm mb-2">In VS Code's terminal, run:</p>
                    <code class="bg-black/40 text-gray-100 px-3 py-2 rounded text-xs block">chmod +x setup.sh && ./setup.sh</code>
                  </div>
                </div>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-semibold">3</div>
                  <div>
                    <h4 class="text-white font-medium mb-2">Answer 3 Questions</h4>
                    <p class="text-gray-300 text-sm">The script will ask for your project name and website URL. Everything is set up automatically.</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-semibold">4</div>
                  <div>
                    <h4 class="text-white font-medium mb-2">Connect GitHub Copilot</h4>
                    <p class="text-gray-300 text-sm mb-2">Copy the config lines from the setup and paste into your GitHub Copilot settings. Then restart Copilot.</p>
                  </div>
                </div>
              </div>

              <div class="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-semibold">5</div>
                  <div>
                    <h4 class="text-white font-medium mb-2">Start Workflow</h4>
                    <p class="text-gray-300 text-sm">Open the first prompt file in the <code class="bg-black/40 px-2 py-1 rounded text-xs">.github/prompts/</code> folder and type <code class="bg-black/40 px-2 py-1 rounded text-xs">/</code> in Copilot to run it.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- What You Get -->
            <div class="mt-6 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 class="text-lg font-medium text-white mb-4">What You'll Have</h3>
              <p class="text-gray-300 text-sm mb-4">After setup, your project folder includes:</p>
              <ul class="space-y-2 text-gray-300 text-sm">
                <li class="flex items-start gap-2">
                  <span class="text-blue-300">→</span>
                  <span>Pre-built folder structure for organizing your SEO workflow</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-300">→</span>
                  <span>4 prompts for keyword research, content creation, linking, and validation</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-300">→</span>
                  <span>Automation tools powered by GitHub Copilot</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-300">→</span>
                  <span>Complete documentation and examples</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Return Home -->
          <div class="text-center mt-8">
            <router-link to="/" class="text-gray-300 hover:text-white transition-colors">
              ← Return Home
            </router-link>
          </div>
        </div>

        <!-- Loading State -->
        <div v-else-if="paymentStatus === 'loading'" class="text-center py-20">
          <div class="mb-6 inline-block">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
          <p class="text-gray-300 text-lg">Verifying your payment...</p>
        </div>

        <!-- Error State -->
        <div v-else class="text-center py-20">
          <div class="mb-6 inline-block">
            <svg class="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h1 class="text-3xl font-light mb-4">Something went wrong</h1>
          <p class="text-gray-300 mb-8">
            {{ errorMessage }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@learnedlate.com?subject=Payment%20Error"
              class="px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
            <router-link to="/" class="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
              Return Home
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

type PaymentStatus = 'loading' | 'paid' | 'error';

const route = useRoute();
const paymentStatus = ref<PaymentStatus>('loading');
const downloadUrl = ref('');
const errorMessage = ref('');

onMounted(async () => {
  const sessionId = route.query.session_id as string;

  if (!sessionId) {
    paymentStatus.value = 'error';
    errorMessage.value = 'No payment session found.';
    return;
  }

  try {
    // Verify session with backend
    const response = await fetch('/api/verify-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId }),
    });

    if (!response.ok) {
      throw new Error('Failed to verify payment');
    }

    const data = await response.json();

    if (data.status === 'paid') {
      downloadUrl.value = data.downloadUrl;
      paymentStatus.value = 'paid';
    } else {
      paymentStatus.value = 'error';
      errorMessage.value = 'Payment was not completed.';
    }
  } catch (error) {
    paymentStatus.value = 'error';
    errorMessage.value = error instanceof Error ? error.message : 'An error occurred.';
  }
});
</script>
