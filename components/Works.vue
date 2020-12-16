<template>
  <div class="overflow-x-hidden works">
      <div class="relative py-16 mx-auto text-xl border-t border-b border-gray-500 container-inner">
        <h2 class="mb-12 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" id="projects" data-scroll>{{$t('projects')}}</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <ul class="space-y-10 text-lg leading-normal sm:text-xl">
          <li class="checkmark" data-scroll>
            <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"><a href="https://vigilant-goodall-6169be.netlify.app/" target="_blank">Persona Diseño </a></div>
            <div class="text-lg tracking-wider text-gray-400">{{ $t('persona') }} (<a class="text-base font-semibold text-gray-500" href="https://github.com/chaloulou75/persona" target="_blank">GitHub</a>).</div>
          </li>
          <li class="checkmark" data-scroll>
            <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"><a href="https://www.apuestamigo.com/" target="_blank">Apuestamigo</a></div>
            <div class="text-lg tracking-wider text-gray-400">{{ $t('apuestamigo') }} (<a class="text-base font-semibold text-gray-500" href="https://github.com/chaloulou75/apuestamigov3" target="_blank">GitHub</a>).</div>
          </li>
          <li class="checkmark" data-scroll>
            <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"><a href="https://carpinto-sites.netlify.app/" target="_blank">Carpinto</a></div>
            <div class="text-lg tracking-wider text-gray-400">{{ $t('carpinto') }} (<a class="text-base font-semibold text-gray-500" href="https://github.com/chaloulou75/charles-j-vuepress" target="_blank">GitHub</a>).</div>
          </li>
          <li class="checkmark" data-scroll>
            <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"><a href="https://charles-jeandey.netlify.app/" target="_blank">Charles Jeandey</a></div>
            <div class="text-lg tracking-wider text-gray-400"> {{ $t('charlesjnuxt')}} (<a class="text-base font-semibold text-gray-500" href="https://github.com/chaloulou75/charles-j-nuxt" target="_blank">GitHub</a>).</div>
          </li>
          <li class="checkmark" data-scroll>
            <div class="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Julien Leprêtre</div>
            <div class="text-lg tracking-wider text-gray-400 ">{{ $t('julien') }}(<a class="text-base font-semibold text-gray-500" href="https://github.com/chaloulou75/julienlepretre" target="_blank">GitHub</a>).</div>
          </li>
        </ul>
      </div> <!-- end projects -->
    </div>
</template>

<script>
import ScrollOut from "scroll-out"

export default {
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .4
    });
  },
  destroyed() {
    this.so.teardown();
  }
}
</script>

<style scoped>

[data-scroll] {
  transition: all 2s ease-in-out;
}

[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0);
}
[data-scroll="out"] {
  opacity: 0;
  transform: translateX(150px);
}

</style>
