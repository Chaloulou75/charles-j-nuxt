<template>
  <div class="overflow-x-hidden works">
      <div class="relative py-16 mx-auto text-xl border-t border-b border-gray-500 container-inner">
        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <h2 class="mb-12 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500" id="projects" data-scroll>{{$t('projects')}}</h2>

        <div class="relative mx-2">
          <!-- <div class="absolute w-full h-full bg-gradient-to-br from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500 lg:-right-4 lg:-bottom-4 -right-2 -bottom-2 rounded-xl"></div> -->

          <div class="relative w-full px-4 py-8 space-y-10 text-lg leading-normal bg-transparent rounded-xl sm:text-xl">
            <div class="checkmark" data-scroll>
                <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500"><a href="https://personadiseno.netlify.app/" target="_blank" rel=”noreferrer”>Persona Diseño </a></div>
                <div class="text-lg tracking-wider text-gray-800 dark:text-gray-400">{{ $t('persona') }} (<a class="text-base font-semibold text-gray-800 dark:text-gray-400" href="https://github.com/chaloulou75/persona" target="_blank" rel=”noreferrer”>GitHub</a>).</div>
            </div>
            <div class="checkmark" data-scroll>
              <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500"><a href="https://www.apuestamigo.com/" target="_blank" rel=”noreferrer”>Apuestamigo</a></div>
              <div class="text-lg tracking-wider text-gray-800 dark:text-gray-400">{{ $t('apuestamigo') }} (<a class="text-base font-semibold text-gray-800 dark:text-gray-400" href="https://github.com/chaloulou75/apuestamigov3" target="_blank" rel=”noreferrer”>GitHub</a>).</div>
            </div>
            <div class="checkmark" data-scroll>
              <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500"><a href="https://charles-jeandey.com" target="_blank" rel=”noreferrer”>Charles Jeandey</a></div>
              <div class="text-lg tracking-wider text-gray-800 dark:text-gray-400"> {{ $t('charlesjnuxt')}} (<a class="text-base font-semibold text-gray-800 dark:text-gray-400" href="https://github.com/chaloulou75/charles-j-nuxt" target="_blank" rel=”noreferrer”>GitHub</a>).</div>
            </div>
            <div class="checkmark" data-scroll>
              <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500"><a href="https://pantaloni-associes.netlify.app/" target="_blank" rel=”noreferrer”>Pantaloni & Associés</a></div>
              <div class="text-lg tracking-wider text-gray-800 dark:text-gray-400"> {{ $t('pantaloni')}} </div>
            </div>
            <div class="checkmark" data-scroll>
              <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500" rel=”noreferrer”><a href="https://carpinto-sites.netlify.app/" target="_blank">Carpinto</a></div>
              <div class="text-lg tracking-wider text-gray-800 dark:text-gray-400">{{ $t('carpinto') }} (<a class="text-base font-semibold text-gray-800 dark:text-gray-400" href="https://github.com/chaloulou75/charles-j-vuepress" target="_blank" rel=”noreferrer”>GitHub</a>).</div>
            </div>
            <div class="checkmark" data-scroll>
              <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500">Julien Leprêtre</div>
              <div class="text-lg tracking-wider text-gray-800 dark:text-gray-400">{{ $t('julien') }}(<a class="text-base font-semibold text-gray-800 dark:text-gray-400" href="https://github.com/chaloulou75/julienlepretre" target="_blank" rel=”noreferrer”>GitHub</a>).</div>
            </div>
          </div>
        </div>
      </div> <!-- end projects -->
    </div>
</template>

<script>
import ScrollOut from "scroll-out"

export default {
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .3
    });
  },
  destroyed() {
    this.so.teardown();
  }
}
</script>

<style scoped>

[data-scroll] {
  transition: all 1.5s ease-in-out;
}

[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0);
}
[data-scroll="out"] {
  opacity: 0;
  transform: translateX(40px);
}

</style>
