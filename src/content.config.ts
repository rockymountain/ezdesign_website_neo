import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),

    heroTitle: z.string(),
    heroDescription: z.string(),

    seoTitle: z.string(),
    seoDescription: z.string(),
    ogImage: z.string().optional(),

    eyebrow: z.string().optional(),

    problems: z.array(z.string()).default([]),

    features: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      )
      .default([]),

    useCases: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      )
      .default([]),

    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),

    relatedCaseStudy: z
      .object({
        title: z.string(),
        href: z.string(),
      })
      .optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),

    client: z.string(),
    industry: z.string(),
    product: z.string(),

    summary: z.string(),
    heroTitle: z.string(),
    heroDescription: z.string(),

    seoTitle: z.string(),
    seoDescription: z.string(),
    ogImage: z.string().optional(),

    canPublicName: z.boolean(),
    canPublicImages: z.boolean(),
    canPublicMetrics: z.boolean(),
    canPublicFlow: z.boolean(),
    canPublicCharacter: z.boolean(),
    hasTestimonial: z.boolean(),

    challenge: z.array(z.string()).default([]),

    solution: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      )
      .default([]),

    highlights: z.array(z.string()).default([]),

    testimonial: z
      .object({
        quote: z.string(),
        name: z.string().optional(),
        role: z.string().optional(),
      })
      .optional(),

    relatedServices: z
      .array(
        z.object({
          title: z.string(),
          href: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = {
  services,
  'case-studies': caseStudies,
};