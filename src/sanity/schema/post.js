export const post = {
  name: 'post',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The headline of the blog post',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Blog Link / Slug',
      type: 'slug',
      description: 'The URL path for this blog post (e.g. /blog/my-post-slug)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'The topic or industry tag for this post',
      options: {
        list: [
          { title: 'WhatsApp Strategy', value: 'WhatsApp Strategy' },
          { title: 'AI Chatbots', value: 'AI Chatbots' },
          { title: 'Meta Cloud API', value: 'Meta API' },
          { title: 'E-commerce Growth', value: 'E-commerce Growth' },
          { title: 'Omnichannel Sales', value: 'Omnichannel Sales' },
          { title: 'Product Updates', value: 'Product Updates' },
        ],
      },
      initialValue: 'WhatsApp Strategy',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'High-resolution cover image shown on the card and article banner',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'The date and time this article was published',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'Estimated reading time (e.g. "5 mins read")',
      initialValue: '5 mins read',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A 2-line summary preview displayed on cards and search results',
      validation: (Rule) => Rule.required().max(250),
    },
    {
      name: 'commentsCount',
      title: 'Comments Count',
      type: 'number',
      description: 'Display count for comments/interactions',
      initialValue: 18,
    },
    {
      name: 'viewsCount',
      title: 'Views Count',
      type: 'number',
      description: 'Display count for total views/readers',
      initialValue: 420,
    },
    {
      name: 'showBookmark',
      title: 'Show Bookmark',
      type: 'boolean',
      description: 'Toggle whether the bookmark icon is displayed on the card',
      initialValue: true,
    },
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      description: 'Action button text on card (default: "Read Article")',
      initialValue: 'Read Article',
    },
    {
      name: 'featuredBlog',
      title: 'Featured Blog',
      type: 'boolean',
      description: 'Pin or highlight this post as a featured top article',
      initialValue: false,
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      description: 'Full rich text article content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'featuredImage',
      isFeatured: 'featuredBlog',
    },
    prepare(selection) {
      const { title, category, media, isFeatured } = selection;
      return {
        title: isFeatured ? `★ [Featured] ${title}` : title,
        subtitle: category ? `Category: ${category}` : '',
        media,
      };
    },
  },
};
