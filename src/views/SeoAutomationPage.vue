<template>
  <div class="min-h-screen bg-white">
    <SEOHead
      title="SEO Automation Package - VS Code Workflow for Blogs"
      description="A simple VS Code code and Copilot file structure and automation workflow that allows you to do SEO for your blog or website."
      url="/seo-automation"
    />

    <!-- Hero Section -->
    <section class="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-12">
          <div class="inline-block text-xs tracking-wide uppercase bg-white/10 border border-white/20 px-3 py-1 rounded mb-6">
            For Developers & Writers
          </div>
          <h1 class="text-4xl sm:text-5xl font-light leading-tight mb-6">
            SEO Automation Package
          </h1>
          <p class="text-lg sm:text-xl text-gray-300 mb-8 font-light">
            A simple VS Code file structure and Copilot automation workflow to streamline SEO for your blog or website.
          </p>
        </div>

        <!-- Main CTA -->
        <div class="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
          <div class="text-center">
            <div class="text-5xl font-light text-white mb-2">$199</div>
            <p class="text-gray-400 mb-8 text-sm">One-time payment • Instant download</p>
            <div class="max-w-xs mx-auto">
              <CheckoutButton />
            </div>
            <p class="text-xs text-gray-500 mt-4">No recurring charges. Secure payment via Stripe.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Get Section -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="text-3xl font-light text-gray-900 mb-12 text-center">What's Included</h2>
        
        <div class="grid gap-6">
          <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <div class="flex items-start gap-4">
              <div class="p-2 bg-white rounded-lg border border-gray-200 text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Folder Structure</h3>
                <p class="text-gray-600 leading-relaxed">Pre-built file organization for managing your SEO workflow in VS Code. Keep your content, keywords, and optimization notes organized in one place.</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <div class="flex items-start gap-4">
              <div class="p-2 bg-white rounded-lg border border-gray-200 text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Copilot Prompts</h3>
                <p class="text-gray-600 leading-relaxed">Ready-to-use prompts designed to work with GitHub Copilot and other AI assistants. Generate SEO-optimized content, meta descriptions, and keyword suggestions in seconds.</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <div class="flex items-start gap-4">
              <div class="p-2 bg-white rounded-lg border border-gray-200 text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Automation Workflow</h3>
                <p class="text-gray-600 leading-relaxed">Step-by-step workflow to optimize your existing blog posts and create new content with built-in SEO best practices.</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <div class="flex items-start gap-4">
              <div class="p-2 bg-white rounded-lg border border-gray-200 text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Complete Documentation</h3>
                <p class="text-gray-600 leading-relaxed">Easy-to-follow guide explaining how to use the package, integrate it with your blog, and get the most out of each prompt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-12 sm:py-16 bg-gray-50 border-y border-gray-200">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="text-3xl font-light text-gray-900 mb-12 text-center">How It Works</h2>
        
        <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          <div class="relative flex items-start gap-6 group">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm text-gray-900 font-semibold z-10 group-hover:border-gray-400 transition-colors">1</div>
            <div class="flex-1 pt-1">
              <h3 class="text-lg font-medium text-gray-900 mb-2">Download the Package</h3>
              <p class="text-gray-600">After purchase, you'll receive a ZIP file with all the tools and templates.</p>
            </div>
          </div>

          <div class="relative flex items-start gap-6 group">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm text-gray-900 font-semibold z-10 group-hover:border-gray-400 transition-colors">2</div>
            <div class="flex-1 pt-1">
              <h3 class="text-lg font-medium text-gray-900 mb-2">Set Up in VS Code</h3>
              <p class="text-gray-600">Extract the folder structure and open it in VS Code. Follow the quick setup guide.</p>
            </div>
          </div>

          <div class="relative flex items-start gap-6 group">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm text-gray-900 font-semibold z-10 group-hover:border-gray-400 transition-colors">3</div>
            <div class="flex-1 pt-1">
              <h3 class="text-lg font-medium text-gray-900 mb-2">Use the Prompts</h3>
              <p class="text-gray-600">Copy and paste prompts into Copilot to generate SEO content and optimization ideas for your blog.</p>
            </div>
          </div>

          <div class="relative flex items-start gap-6 group">
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm text-gray-900 font-semibold z-10 group-hover:border-gray-400 transition-colors">4</div>
            <div class="flex-1 pt-1">
              <h3 class="text-lg font-medium text-gray-900 mb-2">Watch Your SEO Improve</h3>
              <p class="text-gray-600">Apply the generated suggestions to your blog posts and watch your organic traffic grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="text-3xl font-light text-gray-900 mb-12 text-center">Questions?</h2>
        
        <div class="space-y-4">
          <details class="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
            <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
              <span class="font-medium text-gray-900">Do I need GitHub Copilot?</span>
              <span class="transition-transform group-open:rotate-180">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </summary>
            <div class="px-6 pb-6 text-gray-600 border-t border-gray-200/50 pt-4">
              You'll get the most value with Copilot, but the prompts work with any AI assistant (ChatGPT, Claude, etc.). The file structure is universal.
            </div>
          </details>

          <details class="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
            <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
              <span class="font-medium text-gray-900">What platform is this for?</span>
              <span class="transition-transform group-open:rotate-180">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </summary>
            <div class="px-6 pb-6 text-gray-600 border-t border-gray-200/50 pt-4">
              The package works with any blog platform (WordPress, Ghost, Medium, Hugo, etc.). The prompts and workflow are platform-agnostic.
            </div>
          </details>

          <details class="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
            <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
              <span class="font-medium text-gray-900">Is there a refund policy?</span>
              <span class="transition-transform group-open:rotate-180">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </summary>
            <div class="px-6 pb-6 text-gray-600 border-t border-gray-200/50 pt-4">
              Since this is a digital product, sales are final. However, if you have any issues accessing the package, please reach out and I'll help you.
            </div>
          </details>

          <details class="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
            <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
              <span class="font-medium text-gray-900">Can I use this for client work?</span>
              <span class="transition-transform group-open:rotate-180">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </summary>
            <div class="px-6 pb-6 text-gray-600 border-t border-gray-200/50 pt-4">
              Yes! The package is designed for personal use and client work. Use it to improve SEO for multiple blogs and websites.
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-12 sm:py-20 bg-gray-900 text-white">
      <div class="container mx-auto px-4 max-w-3xl text-center">
        <h2 class="text-3xl font-light mb-6">Ready to Automate Your SEO?</h2>
        <p class="text-gray-400 mb-8 text-lg font-light">Get started for just $49 and start optimizing your blog today.</p>
        <div class="max-w-xs mx-auto">
          <CheckoutButton />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import SEOHead from '../components/SEOHead.vue';
import CheckoutButton from '../components/CheckoutButton.vue';
</script>
