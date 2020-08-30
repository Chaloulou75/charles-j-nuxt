<template>
  <div class="px-4 py-4 mx-auto font-semibold">
    <h1 class="font-bold text-center text-gray-100 truncate">Cette page est juste pour dire que je peux faire un Blog</h1>
      <ul class="px-12">
        <li class="px-4 py-4 mx-auto " v-for="(post, index) in posts" :key="index">
          <NuxtLink :to="`/posts/${post.slug}`" class="text-gray-400">{{ post.title }} by {{ post.author }}</NuxtLink>
        </li>
      </ul>
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
