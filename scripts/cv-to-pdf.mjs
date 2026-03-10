#!/usr/bin/env node
/**
 * Convert CV markdown to PDF using Playwright
 * Usage: node scripts/cv-to-pdf.mjs
 */

import { chromium } from 'playwright';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const css = `
/* Professional CV Styling for PDF */
@page {
  size: A4;
  margin: 15mm;
}

* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 10pt;
  line-height: 1.5;
  color: #333;
  max-width: 100%;
  padding: 0;
  margin: 0;
}

h1 {
  font-size: 22pt;
  color: #1a1a1a;
  margin-bottom: 8px;
  border-bottom: 2px solid #2563eb;
  padding-bottom: 8px;
}

h2 {
  font-size: 12pt;
  color: #2563eb;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 18px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 4px;
}

h3 {
  font-size: 11pt;
  color: #1a1a1a;
  margin-top: 12px;
  margin-bottom: 4px;
}

p {
  margin: 6px 0;
}

ul {
  margin: 6px 0;
  padding-left: 20px;
}

li {
  margin: 3px 0;
}

a {
  color: #2563eb;
  text-decoration: none;
}

strong {
  color: #1a1a1a;
}

/* Page break control */
h2 {
  page-break-after: avoid;
}

h3 {
  page-break-after: avoid;
}

li {
  page-break-inside: avoid;
}
`;

async function convert() {
  const cvPath = path.join(__dirname, '..', 'cv.md');
  const outputPath = path.join(__dirname, '..', 'Florian_Strauf_CV.pdf');
  
  // Read markdown
  const markdown = fs.readFileSync(cvPath, 'utf-8');
  
  // Remove YAML frontmatter
  const contentWithoutFrontmatter = markdown.replace(/^---\n[\s\S]*?\n---\n*/, '');
  
  // Convert to HTML
  const htmlContent = marked.parse(contentWithoutFrontmatter);
  
  // Wrap in full HTML
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Florian Strauf - CV</title>
  <style>${css}</style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;
  
  // Launch browser and create PDF
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
  
  console.log(`✅ CV saved to: ${outputPath}`);
}

convert().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
