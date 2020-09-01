<template>
  <div class="px-4 py-4 mx-auto font-semibold container-inner">
    <h1 class="mb-16 text-2xl font-bold text-center text-gray-100 truncate">Ceci n'est pas un blog!</h1>
      <ul class="px-12">
        <li class="px-4 py-4 mx-auto border-b border-gray-700" v-for="(post, index) in posts" :key="index">
          <NuxtLink :to="`/posts/${post.slug}`" class="text-gray-400">{{ post.title }} by {{ post.author }}</NuxtLink>
        </li>
      </ul>
    <div class="w-1/2 px-8 py-8 mx-auto mt-8 sm:py-0">
        <img src="~assets/img/design.svg" alt="design" />
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      posts: null
    }
  },
  async fetch() {
    this.posts = await this.$content()
      .fetch()
  }
}
</script>
