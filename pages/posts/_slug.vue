<template>
  <div class="px-12 mx-auto">
    <div class="px-4 py-4 mx-auto font-semibold text-center text-gray-100">{{ postInMarkdown.title}}</div>
    <div class="px-4 py-4 mx-auto text-center text-gray-300">by: {{ postInMarkdown.author}}</div>

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
