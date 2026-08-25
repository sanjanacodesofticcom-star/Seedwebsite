import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { POSTS_QUERY, POST_BY_SLUG_QUERY } from './queries';

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6sg9up19',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01',
  useCdn: false, // Set to false to ensure immediate updates when publishing in studio
};

export const client = createClient(sanityConfig);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return '';
  try {
    if (typeof source === 'string' && source.startsWith('http')) {
      return source;
    }
    if (builder) {
      return builder.image(source).auto('format').fit('max').url();
    }
  } catch (e) {
    // fallback parser
  }
  return parseSanityImageRef(source, sanityConfig.projectId, sanityConfig.dataset);
}

export function parseSanityImageRef(source, projectId = '6sg9up19', dataset = 'production') {
  if (!source) return '';
  if (typeof source === 'string') {
    if (source.startsWith('http')) return source;
    const match = source.match(/^image-([a-f0-9]+)-([0-9]+x[0-9]+)-([a-z0-9]+)$/);
    if (match) {
      return `https://cdn.sanity.io/images/${projectId}/${dataset}/${match[1]}-${match[2]}.${match[3]}`;
    }
  }
  if (source.asset && source.asset._ref) {
    const match = source.asset._ref.match(/^image-([a-f0-9]+)-([0-9]+x[0-9]+)-([a-z0-9]+)$/);
    if (match) {
      return `https://cdn.sanity.io/images/${projectId}/${dataset}/${match[1]}-${match[2]}.${match[3]}`;
    }
  }
  return '';
}

/**
 * Convert Sanity Portable Text Blocks to clean HTML
 */
export function portableTextToHtml(blocks) {
  if (!blocks) return '';
  if (typeof blocks === 'string') return blocks;
  if (!Array.isArray(blocks)) return '';

  let html = '';
  let inList = false;

  for (const block of blocks) {
    if (block._type === 'block') {
      const text = (block.children || [])
        .map(c => {
          let t = c.text || '';
          if (c.marks?.includes('strong')) t = `<strong>${t}</strong>`;
          if (c.marks?.includes('em')) t = `<em>${t}</em>`;
          if (c.marks?.includes('code')) t = `<code>${t}</code>`;
          return t;
        })
        .join('');

      if (block.listItem === 'bullet') {
        if (!inList) {
          html += '<ul class="list-disc pl-6 space-y-2 my-4">';
          inList = true;
        }
        html += `<li>${text}</li>`;
      } else {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        if (block.style === 'h2') {
          html += `<h2 class="text-[26px] sm:text-[30px] font-extrabold text-[#0B1220] mt-8 mb-3 font-display">${text}</h2>`;
        } else if (block.style === 'h3') {
          html += `<h3 class="text-[20px] sm:text-[24px] font-bold text-[#0B1220] mt-6 mb-2 font-display">${text}</h3>`;
        } else if (block.style === 'blockquote') {
          html += `<blockquote class="border-l-4 border-[#ABEF06] pl-4 py-1 italic my-4 text-[#475569]">${text}</blockquote>`;
        } else {
          html += `<p class="my-4 text-[16.5px] sm:text-[17.5px] leading-relaxed text-[#334155] font-medium">${text}</p>`;
        }
      }
    } else if (block._type === 'image') {
      const imgUrl = urlFor(block);
      if (imgUrl) {
        html += `<div class="my-6 rounded-[20px] overflow-hidden"><img src="${imgUrl}" alt="Article graphic" class="w-full h-auto rounded-[20px]" /></div>`;
      }
    }
  }
  if (inList) {
    html += '</ul>';
  }
  return html;
}

function mapSanityPost(p) {
  const imageSource = p.featuredImage || p.mainImage;
  const imageUrl = urlFor(imageSource) || '/images/avatars/avatar-2.jpg';
  
  // Format slug safely
  let slug = p.slug?.current || p.slug;
  if (!slug || slug === 'Read Article') {
    slug = (p.title || p._id)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  return {
    id: p._id,
    title: p.title || 'Untitled Post',
    slug: slug,
    category: p.category || 'Automation',
    publishedAt: p.publishedAt ? new Date(p.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
    readTime: p.readTime || '5 mins read',
    excerpt: p.excerpt || '',
    featuredImage: imageUrl,
    image: imageUrl,
    commentsCount: p.commentsCount ?? 18,
    viewsCount: p.viewsCount ?? 420,
    showBookmark: p.showBookmark ?? true,
    ctaText: p.ctaText || 'Read Article',
    featuredBlog: Boolean(p.featuredBlog),
    rawBody: p.body,
    content: portableTextToHtml(p.body)
  };
}

/**
 * Fetch ONLY live posts from Sanity (projectId: 6sg9up19)
 */
export async function getBlogPosts() {
  try {
    const posts = await client.fetch(POSTS_QUERY);
    if (!posts || !Array.isArray(posts)) {
      return [];
    }
    return posts.map(mapSanityPost);
  } catch (error) {
    console.error('Error fetching blogs from Sanity project 6sg9up19:', error.message);
    return [];
  }
}

/**
 * Fetch single post by slug from Sanity
 */
export async function getPostBySlug(slug) {
  try {
    const allPosts = await getBlogPosts();
    return allPosts.find(p => p.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching post by slug from Sanity:', error.message);
    return null;
  }
}
