<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto px-4">
      <div class="prose lg:prose-xl bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto" v-html="cvHtml"></div>
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