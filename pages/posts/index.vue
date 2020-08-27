<template>
  <div class="mx-auto font-semibold py-4 px-4">
    <h1 class="text-center font-bold text-gray-800">Posts du Blog de Carpinto</h1>
      <ul class="px-12">
        <li class="mx-auto text-gray-500 py-4 px-4" v-for="(post, index) in posts" :key="index">
          <NuxtLink :to="`/posts/${post.slug}`">{{ post.title }} by {{ post.author }}</NuxtLink>
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
