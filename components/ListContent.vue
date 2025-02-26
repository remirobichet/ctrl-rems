<script setup lang="ts">
const { data } = await useAsyncData('recent-post', () => {
  return queryCollection('content').order('createdAt', 'DESC').all()
})
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <Card
      v-for="article in data"
      :key="article.stem"
    >
      <CardHeader>
        <CardTitle>{{ article.title }}</CardTitle>
        <CardDescription>
          <Badge>{{ article.category }}</Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span class="line-clamp-3">  
          {{ article.description }}
        </span>
      </CardContent>
      <CardFooter class="flex justify-between">
        <div>
          <KbdGroup :keys="article.keys" />
        </div>
        <NuxtLink :to="`/p/${article.stem}`">
          <Button variant="neutral">Read more</Button>
        </NuxtLink>
      </CardFooter>
    </Card>
  </div>
</template>
