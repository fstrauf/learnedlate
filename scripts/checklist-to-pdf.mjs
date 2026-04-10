#!/usr/bin/env node
/**
 * Convert AI readiness checklist markdown to PDF using Playwright.
 * Usage: node scripts/checklist-to-pdf.mjs
 */

import { chromium } from 'playwright';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const css = `
@page {
  size: A4;
  margin: 15mm;
}

* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 10.5pt;
  line-height: 1.55;
  color: #1f2937;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 22pt;
  color: #111827;
  margin: 0 0 8px;
  padding-bottom: 8px;
  border-bottom: 2px solid #b45309;
}

h2 {
  font-size: 13pt;
  color: #b45309;
  margin: 20px 0 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid #e5e7eb;
}

h3 {
  font-size: 11.5pt;
  color: #111827;
  margin: 14px 0 4px;
}

p {
  margin: 6px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}

th,
td {
  border: 1px solid #e5e7eb;
  padding: 7px;
  text-align: left;
  vertical-align: top;
}

th {
  background: #f9fafb;
  color: #111827;
}

ul,
ol {
  margin: 8px 0;
  padding-left: 22px;
}

li {
  margin: 4px 0;
}

strong {
  color: #111827;
}

a {
  color: #b45309;
  text-decoration: none;
}

h2,
h3,
li,
tr {
  page-break-inside: avoid;
}
`;

async function convertChecklist() {
  const checklistPath = path.join(__dirname, '..', 'public', 'ai-readiness-checklist.md');
  const outputPath = path.join(__dirname, '..', 'public', 'ai-readiness-checklist.pdf');

  if (!fs.existsSync(checklistPath)) {
    throw new Error(`Checklist source file not found: ${checklistPath}`);
  }

  const markdown = fs.readFileSync(checklistPath, 'utf-8');
  const contentWithoutFrontmatter = markdown.replace(/^---\n[\s\S]*?\n---\n*/, '');
  const htmlContent = marked.parse(contentWithoutFrontmatter);

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>AI Readiness Checklist</title>
  <style>${css}</style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '15mm',
      right: '15mm',
      bottom: '15mm',
      left: '15mm',
    },
  });

  await browser.close();
  console.log(`✅ Checklist PDF saved to: ${outputPath}`);
}

convertChecklist().catch((err) => {
  console.error('❌ Error:', err);
  process.exit(1);
});
