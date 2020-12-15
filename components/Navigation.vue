<template>
  <div id="herotop">
    <nav class="flex justify-between w-full px-8 py-8 text-white bg-transparent border-green-700 border-t-14">

      <nuxt-link :to="localePath('/')" class="text-xl font-thin tracking-wider text-transparent no-underline transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 hover:text-green-500 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Charles Jeandey</nuxt-link>

      <button
        class="outline-none mobile-hamburger lg:hidden focus:outline-none hover:text-green-700"
        @click="show = !show"
      >
        <svg v-if="!show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <svg v-if="show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="hidden desktop-menu lg:block">
        <ul class="flex justify-around space-x-6 font-semibold">
          <li class="text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 hover:text-green-500 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            <nuxt-link :to="localePath('/posts')">
              Not Blog
            </nuxt-link>
          </li>
          <li class="text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 hover:text-green-500 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            <scroll-link href="#contact">
              {{ $t('contact') }}
            </scroll-link>
          </li>
          <li class="text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 hover:text-green-500 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
            v-for="locale in availableLocales"
            :key="locale.code"
          >
            <nuxt-link :to="switchLocalePath(locale.code)">
              {{ locale.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>

    <transition name="fade" class="mobile-menu lg:hidden">
        <ul class="flex flex-col items-start px-8 space-y-2 text-sm font-semibold" v-if="show">
          <li class="text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"><nuxt-link :to="localePath('/posts')">Not Blog</nuxt-link></li>
          <li class="text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"><scroll-link href="#contact">{{ $t('contact') }}</scroll-link></li>
          <li class="text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
            v-for="locale in availableLocales"
            :key="locale.code"
          >
            <nuxt-link :to="switchLocalePath(locale.code)">
              {{ locale.name }}
            </nuxt-link>
          </li>
        </ul>
    </transition>
  </div>
</template>

<script>
import ScrollLink from './../components/ScrollLink.vue'

export default {
  components :{
    ScrollLink
  },
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
