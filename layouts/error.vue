<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404" class="pt-10 text-center">{{ pageNotFound }}</h1>
    <h1 v-else class="pt-10 text-center">{{ otherError }}</h1>
    <NuxtLink to="/" class="pt-6 text-center">На главную страницу</NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 - страница не найдена',
      otherError: 'Произошла ошибка'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
