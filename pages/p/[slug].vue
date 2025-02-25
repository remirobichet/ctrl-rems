<script setup lang="ts">
const route = useRoute()

const slug = route.params.slug
if (!slug || typeof slug !== 'string') {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: page } = await useAsyncData('page-' + slug, () => {
  return queryCollection('content').where('stem', '=', slug).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <Header />
  <div class="text-center">
    <KbdGroup :keys="page.keys" />
  </div>
  <div
    class="prose prose-neutral prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto dark:prose-invert prose-img:rounded-lg"
  >
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </div>
</template>
