export const POSTS_QUERY = `*[_type == "post"] | order(featuredBlog desc, publishedAt desc)[0...12] {
  _id,
  title,
  slug,
  category,
  publishedAt,
  readTime,
  excerpt,
  featuredImage,
  mainImage,
  commentsCount,
  viewsCount,
  showBookmark,
  ctaText,
  featuredBlog
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  publishedAt,
  readTime,
  excerpt,
  featuredImage,
  mainImage,
  commentsCount,
  viewsCount,
  showBookmark,
  ctaText,
  featuredBlog,
  body
}`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial" && active != false] | order(featured desc, displayOrder asc, _createdAt desc) {
  _id,
  name,
  role,
  handle,
  avatar,
  testimonial,
  highlightText,
  companyName,
  companyLogo,
  date,
  featured,
  displayOrder,
  active
}`;
