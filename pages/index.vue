<script setup lang="ts">
const { data } = await useAsyncData('recent-post', () => {
  return queryCollection('content').order('createdAt', 'DESC').all()
})
</script>

<template>
  <Header />
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      testrr
    </CardContent>
    <CardFooter class="flex justify-between">
      <Button variant="neutral">
        Cancel
      </Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
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
