import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { fallbackPosts } from '@/data/blogFallback';
import { POSTS_QUERY } from './queries';

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01',
  useCdn: false,
};

// Create client only if projectId is present
export const client = sanityConfig.projectId
  ? createClient(sanityConfig)
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source) {
  if (!builder || !source) return '';
  return builder.image(source).auto('format').fit('max');
}

/**
 * Fetch latest blog posts from Sanity with seamless fallback
 */
export async function getBlogPosts() {
  if (!client) {
    return fallbackPosts;
  }
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
      image: p.mainImage ? urlFor(p.mainImage).url() : '/images/avatars/avatar-2.jpg'
    }));
  } catch (error) {
    console.warn('Sanity fetch failed or credentials not configured. Using curated blog posts:', error.message);
    return fallbackPosts;
  }
}
