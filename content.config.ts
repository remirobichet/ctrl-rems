import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        title: z.string(),
        categories: z.array(z.string()),
        description: z.string(),
        keys: z.array(z.string()),
        createdAt: z.string(),
      }),
    }),
  },
})
