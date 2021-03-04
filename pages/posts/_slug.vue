<template>
  <div>
    <div class="px-2 mx-auto lg:px-20">
      <div class="px-4 py-4 mx-auto font-semibold text-center text-gray-100">{{ postInMarkdown.title}}</div>
      <div class="px-4 py-4 mx-auto text-center text-gray-300">by: {{ postInMarkdown.author}}</div>

      <nuxt-content :document="postInMarkdown" />

    </div>
    <Contact />
    <Footer />
  </div>
</template>

<script>
export default {

  async asyncData({ $content, params }) {

      const postInMarkdown = await $content(params.slug)
      .fetch()

      return {
        postInMarkdown
      }
  }

};
</script>
