import type { BlogPost } from './types'

export function buildPostDescription(post: BlogPost): string {
  if (post.excerpt && post.excerpt.trim()) {
    return post.excerpt.trim()
  }
  if (post.content) {
    const text = post.content
      .replace(/<[^>]*>/g, '')
      .replace(/[#*_`\[\]]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
    return text.length > 160 ? text.substring(0, 157) + '...' : text
  }
  return ''
}
