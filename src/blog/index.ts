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

// Utility function to extract frontmatter and content
function parseBlogPost(raw: string, filename: string): BlogPost {
  const lines = raw.split('\n');
  const frontmatterEnd = lines.findIndex((line, index) => index > 0 && line.trim() === '---');
  
  if (frontmatterEnd === -1) {
    throw new Error(`Invalid frontmatter format in ${filename}`);
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

  // Extract slug from filename (remove date prefix and .md extension)
  const baseFilename = filename.split('/').pop() || filename;
  const slug = baseFilename.split('-').slice(3).join('-').replace('.md', '');

  return {
    title: frontmatter.title || 'Untitled',
    slug: slug,
    excerpt: frontmatter.summary || frontmatter.excerpt || '',
    publishDate: frontmatter.date || frontmatter.publishDate || '2025-06-22',
    author: frontmatter.author || 'Florian Strauf',
    tags: frontmatter.tags || [],
    category: frontmatter.category || 'Uncategorized',
    metaDescription: frontmatter.metaDescription || frontmatter.summary || frontmatter.excerpt || '',
    content,
    readingTime
  };
}

// Dynamically import all markdown files from the posts directory
const postModules = import.meta.glob('./posts/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: true 
}) as Record<string, string>;

// Parse all blog posts dynamically
const blogPosts: BlogPost[] = Object.entries(postModules).map(([path, raw]) => {
  return parseBlogPost(raw, path);
});

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