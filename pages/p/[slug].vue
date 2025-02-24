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
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
