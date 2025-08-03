<template>
  <div class="min-h-screen bg-gray-50 py-6 sm:py-8 overflow-x-hidden">
    <div class="container mx-auto px-2 sm:px-4 lg:px-6">
      <div class="prose prose-sm sm:prose-base lg:prose-lg bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md max-w-4xl mx-auto 
                  prose-headings:text-gray-900 prose-headings:font-semibold
                  prose-h1:text-2xl sm:prose-h1:text-3xl lg:prose-h1:text-4xl prose-h1:mb-4 sm:prose-h1:mb-6
                  prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-3xl prose-h2:mt-8 sm:prose-h2:mt-10 prose-h2:mb-3 sm:prose-h2:mb-4
                  prose-h3:text-lg sm:prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:mt-6 sm:prose-h3:mt-8 prose-h3:mb-2 sm:prose-h3:mb-3
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-3 sm:prose-p:mb-4
                  prose-ul:my-4 sm:prose-ul:my-6 prose-li:text-gray-700 prose-li:my-1
                  prose-strong:text-gray-900 prose-strong:font-semibold" 
           v-html="cvHtml">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { marked } from 'marked'
import cvMarkdownRaw from '../../cv.md?raw'

const cvHtml = ref('')

// Function to strip YAML front matter
const stripYamlFrontMatter = (markdown: string): string => {
  return markdown.replace(/^---[\s\S]*?---\n/, '');
}

onMounted(async () => {
  const markdownContent = stripYamlFrontMatter(cvMarkdownRaw);
  const parseMarkdown = marked.parse as (markdown: string) => Promise<string>; 
  cvHtml.value = await parseMarkdown(markdownContent);
})
</script> 