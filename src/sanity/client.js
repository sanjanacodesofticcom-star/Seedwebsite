import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { fallbackPosts } from '@/data/blogFallback';
import { POSTS_QUERY, POST_BY_SLUG_QUERY } from './queries';

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6sg9up19',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01',
  useCdn: true,
};

// Create client
export const client = createClient(sanityConfig);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!builder || !source) return '';
  return builder.image(source).auto('format').fit('max');
}

/**
 * Fetch latest blog posts from Sanity (projectId: 6sg9up19) with fallback
 */
export async function getBlogPosts() {
  try {
    const posts = await client.fetch(POSTS_QUERY);
    if (!posts || posts.length === 0) {
      return fallbackPosts;
    }
    return posts.map(p => ({
      id: p._id,
      title: p.title,
      slug: p.slug?.current || p._id,
      category: p.category || 'Automation',
      publishedAt: p.publishedAt ? new Date(p.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
      readTime: p.readTime || '5 mins read',
      excerpt: p.excerpt || '',
      commentsCount: p.commentsCount || 18,
      viewsCount: p.viewsCount || 420,
      image: p.mainImage ? urlFor(p.mainImage).url() : '/images/avatars/avatar-2.jpg',
      content: p.body ? (typeof p.body === 'string' ? p.body : JSON.stringify(p.body)) : null
    }));
  } catch (error) {
    console.warn('Sanity fetch for project 6sg9up19:', error.message);
    return fallbackPosts;
  }
}

/**
 * Fetch single post by slug from Sanity
 */
export async function getPostBySlug(slug) {
  try {
    const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });
    if (!post) {
      return fallbackPosts.find(p => p.slug === slug) || null;
    }
    return {
      id: post._id,
      title: post.title,
      slug: post.slug?.current || slug,
      category: post.category || 'Automation',
      publishedAt: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
      readTime: post.readTime || '5 mins read',
      excerpt: post.excerpt || '',
      commentsCount: post.commentsCount || 18,
      viewsCount: post.viewsCount || 420,
      image: post.mainImage ? urlFor(post.mainImage).url() : '/images/avatars/avatar-2.jpg',
      content: post.body ? (typeof post.body === 'string' ? post.body : JSON.stringify(post.body)) : null
    };
  } catch (error) {
    console.warn('Sanity fetch by slug error:', error.message);
    return fallbackPosts.find(p => p.slug === slug) || null;
  }
}
