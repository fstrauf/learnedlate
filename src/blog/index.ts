export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  publishDate: string;
  author: string;
  tags: string[];
  category: string;
  metaDescription: string;
  content?: string;
  readingTime?: number;
}

// Import markdown files as raw text
import post1Raw from './posts/2024-01-15-when-to-hire-fractional-cto.md?raw';
import post2Raw from './posts/2024-02-01-mvp-development-best-practices.md?raw';
import post3Raw from './posts/2024-02-15-technical-due-diligence-checklist.md?raw';

// Utility function to extract frontmatter and content
function parseBlogPost(raw: string): BlogPost {
  const lines = raw.split('\n');
  const frontmatterEnd = lines.findIndex((line, index) => index > 0 && line.trim() === '---');
  
  if (frontmatterEnd === -1) {
    throw new Error('Invalid frontmatter format');
  }

  const frontmatterLines = lines.slice(1, frontmatterEnd);
  const content = lines.slice(frontmatterEnd + 1).join('\n').trim();

  const frontmatter: Record<string, any> = {};
  
  frontmatterLines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        const arrayValue = value.slice(1, -1).split(',').map(item => 
          item.trim().replace(/^["']|["']$/g, '')
        );
        frontmatter[key.trim()] = arrayValue;
      } else {
        frontmatter[key.trim()] = value;
      }
    }
  });

  // Calculate reading time (average 200 words per minute)
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return {
    title: frontmatter.title,
    slug: frontmatter.slug,
    excerpt: frontmatter.excerpt,
    publishDate: frontmatter.publishDate,
    author: frontmatter.author,
    tags: frontmatter.tags || [],
    category: frontmatter.category,
    metaDescription: frontmatter.metaDescription,
    content,
    readingTime
  };
}

// Parse all blog posts
const blogPosts: BlogPost[] = [
  parseBlogPost(post1Raw),
  parseBlogPost(post2Raw),
  parseBlogPost(post3Raw),
];

// Sort posts by date (newest first)
export const allBlogPosts = blogPosts.sort((a, b) => 
  new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
);

// Get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.slug === slug);
}

// Get posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return allBlogPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

// Get posts by tag
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return allBlogPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = allBlogPosts.map(post => post.category);
  return [...new Set(categories)].sort();
}

// Get all unique tags
export function getAllTags(): string[] {
  const tags = allBlogPosts.flatMap(post => post.tags);
  return [...new Set(tags)].sort();
}

// Get recent posts (for homepage, etc.)
export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return allBlogPosts.slice(0, limit);
} 