<template>
  <nav class="flex justify-between w-full px-8 py-8 text-white bg-gray-800 border-green-700 border-t-14">

      <NuxtLink to="/" class="font-semibold uppercase">Charles Jeandey</NuxtLink>

      <ul class="flex justify-around space-x-6 font-semibold">

        <li><NuxtLink to="/posts">Blog</NuxtLink></li>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>

      </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
