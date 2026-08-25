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

function mapSanityPost(p) {
  const imageSource = p.featuredImage || p.mainImage;
  return {
    id: p._id,
    title: p.title,
    slug: p.slug?.current || p.slug || p._id,
    category: p.category || 'Automation',
    publishedAt: p.publishedAt ? new Date(p.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
    readTime: p.readTime || '5 mins read',
    excerpt: p.excerpt || '',
    featuredImage: imageSource ? urlFor(imageSource).url() : '/images/avatars/avatar-2.jpg',
    image: imageSource ? urlFor(imageSource).url() : '/images/avatars/avatar-2.jpg',
    commentsCount: p.commentsCount ?? 18,
    viewsCount: p.viewsCount ?? 420,
    showBookmark: p.showBookmark ?? true,
    ctaText: p.ctaText || 'Read Article',
    featuredBlog: Boolean(p.featuredBlog),
    content: p.body ? (typeof p.body === 'string' ? p.body : JSON.stringify(p.body)) : null
  };
}

/**
 * Fetch latest blog posts from Sanity (projectId: 6sg9up19)
 */
export async function getBlogPosts() {
  try {
    const posts = await client.fetch(POSTS_QUERY);
    if (!posts || posts.length === 0) {
      return fallbackPosts;
    }
    return posts.map(mapSanityPost);
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
    return mapSanityPost(post);
  } catch (error) {
    console.warn('Sanity fetch by slug error:', error.message);
    return fallbackPosts.find(p => p.slug === slug) || null;
  }
}
