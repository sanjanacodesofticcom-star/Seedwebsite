export const testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fieldsets: [
    {
      name: 'customerInfo',
      title: 'Customer Information',
      options: { collapsible: true, collapsed: false }
    },
    {
      name: 'testimonialContent',
      title: 'Testimonial Content',
      options: { collapsible: true, collapsed: false }
    },
    {
      name: 'company',
      title: 'Company',
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: [
    // Customer Information
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      fieldset: 'customerInfo',
      validation: (Rule) => Rule.required().error('Customer name is required')
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      fieldset: 'customerInfo',
      description: 'e.g. UX Designer, Co-Founder, Product Manager'
    },
    {
      name: 'handle',
      title: 'Handle',
      type: 'string',
      fieldset: 'customerInfo',
      description: 'e.g. @sarah.smith, @nelson.svg'
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      fieldset: 'customerInfo',
      options: {
        hotspot: true
      }
    },

    // Testimonial Content
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      rows: 4,
      fieldset: 'testimonialContent',
      validation: (Rule) => Rule.required().error('Testimonial content is required')
    },
    {
      name: 'highlightText',
      title: 'Highlight Text',
      type: 'string',
      fieldset: 'testimonialContent',
      description: 'Key snippet or metric to emphasize in bold (e.g. "$42,000 in abandoned carts")'
    },

    // Company
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      fieldset: 'company',
      description: 'e.g. Invoice2go, Amplitude, XPENG, veroxfloor'
    },
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      fieldset: 'company',
      options: {
        hotspot: true
      }
    },

    // Standalone Fields
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'e.g. Nov 20, 2024 (or leave blank to use today\'s date)',
      initialValue: () => new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Pin or highlight this testimonial',
      initialValue: false
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Numeric order for sorting (0, 1, 2...)',
      initialValue: 0
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle ON to show this testimonial on the website',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'companyName',
      role: 'role',
      media: 'avatar',
      active: 'active'
    },
    prepare({ title, subtitle, role, media, active }) {
      return {
        title: `${title || 'Unnamed Customer'} ${active === false ? '(Inactive)' : ''}`,
        subtitle: `${role || ''} ${subtitle ? `• ${subtitle}` : ''}`.trim(),
        media
      };
    }
  }
};
