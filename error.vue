<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="py-14">
    <h1 class="font-heading text-center jersey-20-regular text-8xl">404</h1>
    <NuxtLink to="/" class="block text-center my-8">
      <Button class="btn btn-primary">Go back</Button>
    </NuxtLink>
  </div>
  <img src="/img/404.gif" alt="404" class="block mx-auto my-14" />
</template>