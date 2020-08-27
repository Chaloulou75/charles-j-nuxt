<template>
  <div class="mx-auto px-12">
    <div class="text-gray-800 font-semibold text-center mx-auto px-4 py-4">{{ postInMarkdown.title}}</div>
    <div class="text-gray-600 text-center mx-auto px-4 py-4">by: {{ postInMarkdown.author}}</div>

    <nuxt-content :document="postInMarkdown" />

  </div>
</template>

<script>
import Logo from '~/components/Logo';

export default {

    components: {
      Logo,
    },

  async asyncData({ $content, params }) {

      const postInMarkdown = await $content(params.slug)
      .fetch()

      return {
        postInMarkdown
      }

  }

};
</script>
