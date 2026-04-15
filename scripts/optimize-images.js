#!/usr/bin/env node
/**
 * Image Optimization Script
 * Optimizes PNG/JPG images in the public folder
 * Run manually or as part of the build process
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.join(__dirname, '..');

// Image configurations: source file → optimization settings
const IMAGE_CONFIGS = {
  'learndlate.png': {
    width: 200,  // Logo is displayed at max 40px (h-10), 200px is plenty for retina
    format: 'png',
    options: { compressionLevel: 9, adaptiveFiltering: true }
  },
  'hero.png': {
    width: 1200,
    format: 'webp',
    output: 'hero.webp',
    options: { quality: 85, effort: 6 }
  },
  'strategy.png': {
    width: 1200,
    format: 'webp',
    output: 'strategy.webp',
    options: { quality: 85, effort: 6 }
  },
  'implementation.png': {
    width: 1200,
    format: 'webp',
    output: 'implementation.webp',
    options: { quality: 85, effort: 6 }
  },
  'engineering.png': {
    width: 1200,
    format: 'webp',
    output: 'engineering.webp',
    options: { quality: 85, effort: 6 }
  }
};

async function optimizeImage(filename) {
  const config = IMAGE_CONFIGS[filename];
  if (!config) {
    console.log(`⚠️  No config found for ${filename}, skipping`);
    return;
  }

  const inputPath = path.join(ROOT_DIR, 'public', filename);
  const outputFilename = config.output || filename;
  const outputPath = path.join(ROOT_DIR, 'public', outputFilename);
  const backupPath = path.join(ROOT_DIR, 'public', `${filename}.backup`);
  
  try {
    // Check if file exists
    await fs.access(inputPath);
    
    // Get original stats
    const originalStat = await fs.stat(inputPath);
    const originalSize = originalStat.size;
    
    // Create backup
    await fs.copyFile(inputPath, backupPath);
    
    // Optimize
    let pipeline = sharp(inputPath);
    
    // Resize if width specified
    if (config.width) {
      pipeline = pipeline.resize(config.width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Convert to format
    if (config.format === 'png') {
      pipeline = pipeline.png(config.options);
    } else if (config.format === 'jpeg' || config.format === 'jpg') {
      pipeline = pipeline.jpeg({ quality: 85, progressive: true, ...config.options });
    } else if (config.format === 'webp') {
      pipeline = pipeline.webp({ quality: 85, ...config.options });
    }
    
    // Save optimized version
    const tempPath = `${outputPath}.tmp`;
    await pipeline.toFile(tempPath);
    
    // Move to final output path
    await fs.rename(tempPath, outputPath);
    
    // Get new stats
    const newStat = await fs.stat(outputPath);
    const newSize = newStat.size;
    const savings = originalSize - newSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
    
    console.log(`✅ ${filename} → ${outputFilename}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`   Optimized: ${(newSize / 1024).toFixed(1)}KB`);
    console.log(`   Saved: ${(savings / 1024).toFixed(1)}KB (${savingsPercent}%)`);
    
    // Remove backup on success (optional - keep for safety)
    // await fs.unlink(backupPath);
    
  } catch (error) {
    console.error(`❌ Failed to optimize ${filename}:`, error.message);
    // Restore from backup if exists
    try {
      await fs.access(backupPath);
      await fs.rename(backupPath, inputPath);
      console.log(`   Restored from backup`);
    } catch {
      // No backup to restore
    }
  }
}

async function main() {
  console.log('🖼️  Optimizing images...\n');
  
  const images = Object.keys(IMAGE_CONFIGS);
  
  if (images.length === 0) {
    console.log('No images configured for optimization');
    return;
  }
  
  for (const filename of images) {
    await optimizeImage(filename);
  }
  
  console.log('\n✨ Done!');
  console.log('Backups saved as *.backup files in public/');
}

main().catch(console.error);
