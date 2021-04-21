<template>
  <div id="herotop" class="mb-4">
    <nav class="flex items-center justify-between w-full px-4 py-4 bg-transparent">

      <div class="text-xl font-semibold tracking-wider text-transparent no-underline uppercase transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 hover:text-green-500 bg-clip-text bg-gradient-to-r dark:from-green-400 dark:to-blue-500 from-green-600 to-blue-700">
        <nuxt-link :to="localePath('index')">Charles Jeandey</nuxt-link>
      </div>

      <div class="flex items-center justify-between space-x-4 lg:hidden"> <!-- Mobile nav -->

        <button  @click.prevent="toggleTheme"
          class="p-2 text-green-500 transition duration-200 ease-in-out transform bg-transparent dark:text-yellow-400 hover:dark:text-yellow-600 hover:text-green-700 focus:outline-none hover:scale-125">
          <svg v-if="theme === 'dark'" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
          <span class="sr-only">Change Theme</span>
        </button>

        <button
          class="text-green-500 outline-none mobile-hamburger focus:outline-none hover:text-green-700"
          @click="show = !show"
        >
          <svg v-if="!show" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Open Menu</span>
        </button>
      </div>

      <div class="hidden desktop-menu lg:block"> <!--Lg nav -->
        <div class="flex items-center justify-around space-x-6 font-semibold uppercase">
          <div class="text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 hover:text-green-500 bg-clip-text bg-gradient-to-r dark:from-green-400 dark:to-blue-500 from-green-600 to-blue-700">
            <scroll-link href="#contact">
              {{ $t('contact') }}
            </scroll-link>
          </div>
          <div class="flex space-x-2">
            <div class="text-sm text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-1 hover:text-green-500 bg-clip-text bg-gradient-to-r dark:from-green-400 dark:to-blue-500 from-green-600 to-blue-700"
            v-for="locale in availableLocales" :key="locale.code"
            >
              <nuxt-link :to="switchLocalePath(locale.code)">
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
          <button aria-label="toggleTheme" @click.prevent="toggleTheme"
            class="p-2 text-blue-700 transition duration-200 ease-in-out transform bg-transparent dark:text-yellow-400 hover:dark:text-yellow-600 hover:text-bluefonce focus:outline-none hover:scale-125">
            <svg v-if="theme === 'dark'" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
            <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            <span class="sr-only">Change Theme</span>
        </button>
        </div>
      </div>
    </nav>

    <transition name="fade" class="mobile-menu lg:hidden"><!-- nav mobile-->
        <div class="flex flex-col items-end px-4 py-2 space-y-2 text-base font-semibold uppercase" v-if="show">
          <div class="text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-2 bg-clip-text bg-gradient-to-r from-green-600 to-blue-700 dark:from-green-400 dark:to-blue-500">
            <scroll-link href="#contact">{{ $t('contact') }}</scroll-link>
          </div>

          <div class="flex space-x-3">
            <div class="text-xs text-transparent transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-1 bg-clip-text bg-gradient-to-r dark:from-green-400 dark:to-blue-500 from-green-600 to-blue-700" v-for="locale in availableLocales"
              :key="locale.code">
              <nuxt-link :to="switchLocalePath(locale.code)">
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
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
  // mounted(){
  //   this.theme = localStorage.getItem('theme') || 'dark'
  //   if(this.theme === 'dark'){
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //   }
  // },
  mounted() {
      // check for active theme
      let htmlElement = document.documentElement;
      let theme = localStorage.getItem("theme");

      if (this.theme === 'dark') {
          htmlElement.setAttribute('theme', 'dark')
          document.documentElement.classList.add('dark')
      } else {
          htmlElement.setAttribute('theme', 'light')
          document.documentElement.classList.remove('dark')
      }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
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
