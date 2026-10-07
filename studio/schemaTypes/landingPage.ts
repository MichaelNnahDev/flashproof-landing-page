// studio/schemaTypes/landingPage.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headerBadge',
      title: 'Top Nav Header Badge',
      type: 'string',
      initialValue: 'v1.2.0 • 100% Free & Open Source',
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'pillBadge',
          title: 'Hero Pill Badge',
          type: 'string',
          initialValue: 'Built for WooCommerce • Sub-3KB Footprint • Pure Vanilla JS',
        }),
        defineField({
          name: 'title',
          title: 'H1 Headline',
          type: 'string',
          initialValue: 'FlashProof Sales Popup for Woo – Live Sales Notification & Social Proof',
        }),
        defineField({
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Display real-time recent order notifications without slowing down your WooCommerce store. Built natively for Woo (WooCommerce) with no external tracking servers, zero monthly visitor limits, native database transient caching, and custom clearance offsets designed to stay above mobile sticky bars and chat buttons.',
        }),
        defineField({
          name: 'githubUrl',
          title: 'GitHub URL',
          type: 'url',
          initialValue: 'https://github.com/MichaelNnahDev/flashproof-sales-popup-for-woo.git',
        }),
        defineField({
          name: 'snippetButtonText',
          title: 'Code Snippet CTA Button',
          type: 'string',
          initialValue: 'Get Raw WPCode Snippet',
        }),
      ],
    }),

    // Demo Controls
    defineField({
      name: 'demoBar',
      title: 'Demo Controls Bar',
      type: 'object',
      fields: [
        defineField({
          name: 'showDemo',
          title: 'Show Interactive Demo Bar',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'label',
          title: 'Demo Label',
          type: 'string',
          initialValue: 'Interactive Demo:',
        }),
      ],
    }),

    // Features Section
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon (Emoji or Text)', type: 'string' }),
            defineField({ name: 'title', title: 'Feature Title', type: 'string' }),
            defineField({ name: 'description', title: 'Feature Description', type: 'text', rows: 2 }),
          ],
        },
      ],
      initialValue: [
        {
          icon: '⚡',
          title: 'Zero Bloat Architecture',
          description: 'Under 3KB total JavaScript footprint. No jQuery, no external trackers, no external dependencies.',
        },
        {
          icon: '🛡️',
          title: 'Privacy-First & GDPR Compliant',
          description: 'All sales notification data is processed strictly on your own server. Zero customer data leaves your store.',
        },
        {
          icon: '🎈',
          title: 'Custom Floating Offsets',
          description: 'Configurable pixel offsets ensure social proof popups never obscure mobile navigation or chat buttons.',
        },
        {
          icon: '🏷️',
          title: 'Smart Multi-Item Sales',
          description: 'Intelligently combines multiple item purchases into compact, elegant notification toasts.',
        },
      ],
    }),

    // Comparison Section
    defineField({
      name: 'comparison',
      title: 'Comparison Section',
      type: 'object',
      fields: [
        defineField({
          name: 'tag',
          title: 'Section Tag',
          type: 'string',
          initialValue: 'ARCHITECTURE COMPARISON',
        }),
        defineField({
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Native WordPress & WooCommerce vs. Hosted SaaS Tools',
        }),
        defineField({
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'text',
          rows: 2,
          initialValue:
            'Why pay recurring monthly subscription fees and load external tracking scripts for functionality your WooCommerce store already possesses?',
        }),
        defineField({
          name: 'rows',
          title: 'Comparison Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'parameter', title: 'Key Parameter', type: 'string' }),
                defineField({ name: 'flashproof', title: 'FlashProof Text', type: 'string' }),
                defineField({ name: 'hasCheck', title: 'Show Green Checkmark', type: 'boolean', initialValue: true }),
                defineField({ name: 'saas', title: 'Hosted SaaS Services', type: 'string' }),
                defineField({ name: 'bloated', title: 'Bloated Plugins', type: 'string' }),
              ],
            },
          ],
          initialValue: [
            {
              parameter: 'Monthly Cost',
              flashproof: '100% Free Forever',
              hasCheck: false,
              saas: '$10 – $40+ / month (Recurring)',
              bloated: 'Free tier with paid Pro locks ($49–$99/yr)',
            },
            {
              parameter: 'Monthly Visitor / Order Limits',
              flashproof: 'Unlimited (Zero Caps)',
              hasCheck: true,
              saas: 'Strictly capped (1,000–25,000 visits)',
              bloated: 'Unlimited (Self-hosted)',
            },
            {
              parameter: 'External Cloud Dependency',
              flashproof: 'None (100% Native WooCommerce)',
              hasCheck: true,
              saas: 'Requires syncing orders to external cloud',
              bloated: 'None',
            },
            {
              parameter: 'Frontend Script Footprint',
              flashproof: '< 3 KB (Pure Vanilla JS)',
              hasCheck: true,
              saas: '~30–70 KB external tracking scripts',
              bloated: 'Heavy (Loads jQuery + bloated UI assets)',
            },
            {
              parameter: 'Customer Data Privacy',
              flashproof: 'Stays on your private server',
              hasCheck: true,
              saas: 'Customer names & orders stored externally',
              bloated: 'Stays on your server',
            },
            {
              parameter: 'Mobile Layout Clearance',
              flashproof: 'Custom px offsets (Floats over chats)',
              hasCheck: true,
              saas: 'Fixed placement (Often covers mobile buttons)',
              bloated: 'Basic positioning only',
            },
          ],
        }),
        defineField({
          name: 'disclaimer',
          title: 'Table Footer Disclaimer',
          type: 'string',
          initialValue:
            'Comparison based on standard technical architectures of cloud-hosted social proof widgets versus lightweight native WooCommerce plugins.',
        }),
      ],
    }),

    // Terminal Command Section
    defineField({
      name: 'terminal',
      title: 'WP-CLI Terminal Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Terminal Title', type: 'string', initialValue: 'One-Line WP-CLI Installation' }),
        defineField({ name: 'subtitle', title: 'Terminal Subtitle', type: 'string', initialValue: 'Deploy directly from your server terminal in under 5 seconds.' }),
        defineField({
          name: 'command',
          title: 'Installation Command',
          type: 'string',
          initialValue:
            'wp plugin install https://github.com/MichaelNnahDev/flashproof-sales-popup-for-woo/archive/refs/heads/main.zip --force --activate',
        }),
      ],
    }),

    // Lead Capture Section
    defineField({
      name: 'leadCapture',
      title: 'Lead Capture Section',
      type: 'object',
      fields: [
        defineField({ name: 'tag', title: 'Tag Badge', type: 'string', initialValue: 'NO PLUGIN REQUIRED' }),
        defineField({ name: 'title', title: 'Form Title', type: 'string', initialValue: 'Prefer adding raw PHP/JS via WPCode?' }),
        defineField({
          name: 'description',
          title: 'Form Description',
          type: 'text',
          rows: 3,
          initialValue:
            "Don't want to install an extra plugin on your WooCommerce store? Enter your email to instantly receive the clean PHP backend handler and frontend CSS/JS scripts ready to paste directly into WPCode, Code Snippets, or your theme's functions.php.",
        }),
        defineField({ name: 'buttonText', title: 'Submit Button Text', type: 'string', initialValue: 'Send Snippet Package' }),
        defineField({
          name: 'privacyNotice',
          title: 'Privacy Notice',
          type: 'string',
          initialValue: '🔒 Instant delivery. We respect your inbox and never send spam.',
        }),
      ],
    }),
  ],
})