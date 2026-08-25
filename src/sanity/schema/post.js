export const post = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
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
      options: {
        list: [
          { title: 'WhatsApp Strategy', value: 'WhatsApp Strategy' },
          { title: 'AI Chatbots', value: 'AI Chatbots' },
          { title: 'Meta Cloud API', value: 'Meta API' },
          { title: 'E-commerce Growth', value: 'E-commerce Growth' },
          { title: 'Omnichannel Sales', value: 'Omnichannel Sales' },
        ],
      },
      initialValue: 'WhatsApp Strategy',
    },
    {
      name: 'mainImage',
      title: 'Main Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'readTime',
      title: 'Read Time (e.g. 5 mins read)',
      type: 'string',
      initialValue: '5 mins read',
    },
    {
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
      description: 'A 2-line summary shown on the blog cards and SEO meta description',
    },
    {
      name: 'commentsCount',
      title: 'Initial Comments Display Count',
      type: 'number',
      initialValue: 18,
    },
    {
      name: 'viewsCount',
      title: 'Initial Views Display Count',
      type: 'number',
      initialValue: 420,
    },
    {
      name: 'body',
      title: 'Body Article Content',
      type: 'array',
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
      author: 'category',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, author, media } = selection;
      return {
        title,
        subtitle: author ? `Category: ${author}` : '',
        media,
      };
    },
  },
};
