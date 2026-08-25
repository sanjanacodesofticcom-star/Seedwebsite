/**
 * Sanity Studio Post Schema
 * You can import this into your sanity.config.ts / schemas/index.ts
 */
export default {
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
          { title: 'WhatsApp Strategy', value: 'WhatsApp' },
          { title: 'AI Chatbots', value: 'AI Chatbots' },
          { title: 'Meta Cloud API', value: 'Meta API' },
          { title: 'E-commerce Growth', value: 'E-commerce' },
          { title: 'Omnichannel Sales', value: 'Omnichannel' },
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
    },
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
};
