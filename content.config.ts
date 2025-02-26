import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        title: z.string(),
        category: z.string(),
        description: z.string(),
        keys: z.array(z.string()),
        createdAt: z.string(),
      }),
    }),
  },
})
