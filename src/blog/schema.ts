import type { BlogPost } from './types'

export function buildArticleSchema(post: BlogPost, postDescription: string): object[] {
  const canonicalUrl = post.canonicalUrl || `https://www.learnedlate.com/blog/${post.slug}`
  const imageUrl = post.ogImage || post.image || 'https://www.learnedlate.com/learndlate.png'
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://www.learnedlate.com${imageUrl}`

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: post.title,
      description: postDescription,
      image: absoluteImageUrl,
      author: {
        '@type': 'Person',
        '@id': 'https://www.learnedlate.com/#person',
        name: post.author || 'Florian Strauf'
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.learnedlate.com/#organization'
      },
      datePublished: post.publishDate,
      dateModified: post.modifiedDate || post.publishDate,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      articleSection: post.category,
      keywords: post.tags.join(', '),
      wordCount: Math.ceil((post.content || '').replace(/<[^>]*>/g, '').split(/\s+/).length),
      timeRequired: `PT${post.readingTime}M`,
      inLanguage: 'en-NZ',
      isPartOf: {
        '@type': 'Blog',
        '@id': 'https://www.learnedlate.com/blog#blog'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.learnedlate.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.learnedlate.com/blog'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: canonicalUrl
        }
      ]
    }
  ]
}
