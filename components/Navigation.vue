<template>
  <div id="herotop" >
    <nav class="flex items-center justify-between w-full px-8 py-8 bg-transparent">

      <nuxt-link :to="localePath('/')" class="text-xl font-semibold tracking-wider text-transparent no-underline uppercase transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 hover:text-green-500 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Charles Jeandey</nuxt-link>

      <button
        class="outline-none mobile-hamburger lg:hidden focus:outline-none hover:text-green-700"
        @click="show = !show"
      >
        <svg v-if="!show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <svg v-if="show" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="hidden lg:block">
        <div class="flex items-center">
          <button  @click.prevent="toggleTheme"
            class="p-2 text-gray-500 transition duration-150 ease-in-out bg-transparent border border-transparent rounded-md dark:text-gray-200 hover:text-gray-700 focus:outline-none">
            <svg v-if="theme === 'dark'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>

        </div>
      </div>

      <div class="hidden desktop-menu lg:block">
        <ul class="flex items-center justify-around space-x-6 font-semibold uppercase">
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
          <div class="flex space-x-2">
            <li class="text-sm text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-1 hover:text-green-500 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
              v-for="locale in availableLocales"
              :key="locale.code"
            >
              <nuxt-link :to="switchLocalePath(locale.code)">
                {{ locale.name }}
              </nuxt-link>
            </li>
          </div>
        </ul>
      </div>
    </nav>

    <transition name="fade" class="mobile-menu lg:hidden">
        <ul class="flex flex-col items-start px-8 space-y-2 text-sm font-semibold uppercase" v-if="show">
          <li class="text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"><nuxt-link :to="localePath('/posts')">Not Blog</nuxt-link></li>
          <li class="text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"><scroll-link href="#contact">{{ $t('contact') }}</scroll-link></li>

          <div class="flex space-x-3">
            <li class="text-xs text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-1 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
              v-for="locale in availableLocales"
              :key="locale.code"
            >
              <nuxt-link :to="switchLocalePath(locale.code)">
                {{ locale.name }}
              </nuxt-link>
            </li>
          </div>
          <div>
            <button  @click.prevent="toggleTheme"
              class="p-2 text-gray-500 transition duration-150 ease-in-out bg-transparent border border-transparent rounded-md dark:text-gray-200 hover:text-gray-700 focus:outline-none">
              <svg v-if="theme === 'dark'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          </button>
          </div>
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
      show: false,
      theme: 'dark',
    }
  },
  mounted(){
    this.theme = localStorage.getItem('theme') || 'dark'
    if(this.theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    toggleTheme : function(){
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', this.theme)
      if(this.theme === 'dark' || localStorage.theme === 'dark'){
        document.documentElement.classList.add('dark')
      } else{
        document.documentElement.classList.remove('dark')
      }
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
