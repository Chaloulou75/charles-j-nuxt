<template>
  <div>
    <nav class="flex justify-between w-full px-8 py-8 text-white bg-gray-800 border-green-700 border-t-14">

      <NuxtLink to="/" class="font-semibold uppercase">Charles Jeandey</NuxtLink>

      <button
        class="outline-none mobile-hamburger lg:hidden focus:outline-none hover:text-green-700"
        @click="show = !show"
      >
        <svg v-if="!show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <svg v-if="show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="hidden desktop-menu lg:block">
        <ul class="flex justify-around space-x-6 font-semibold">
          <li><NuxtLink to="/posts">Not Blog</NuxtLink></li>
          <li><NuxtLink to="/#contact">{{ $t('contact') }}</NuxtLink></li>
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
        </ul>
      </div>
    </nav>
    <transition name="fade" class="mobile-menu lg:hidden">
        <ul class="flex flex-col items-end px-8 space-y-2 text-sm font-semibold" v-if="show">
          <li><NuxtLink to="/posts" >Not Blog</NuxtLink></li>
          <li><NuxtLink to="/#contact">{{ $t('contact') }}</NuxtLink></li>
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
        </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
