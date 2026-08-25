export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0...6] {
  _id,
  title,
  slug,
  mainImage,
  category,
  publishedAt,
  readTime,
  excerpt,
  commentsCount,
  viewsCount
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  category,
  publishedAt,
  readTime,
  excerpt,
  body,
  author-> {
    name,
    image,
    role
  }
}`;
