<script setup lang="ts">
const { data } = await useAsyncData('recent-post', () => {
  return queryCollection('content').order('createdAt', 'DESC').limit(3).all()
})

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      slug: articles.stem,
      title: articles.title,
      category: articles.category,
      keys: articles.keys,
    }
  })
})
</script>

<template>
  <Header />
  <div>
    <h1>Recent Post</h1>
    <div v-if="data">
      <div
        v-for="article in data"
        :key="article.stem"
      >
        <h2>{{ article.title }}</h2>
        <p>{{ article.category }}</p>
        <p>{{ article.keys }}</p>
        <NuxtLink :to="`/p/${article.stem}`">
          <Button>Read more</Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
