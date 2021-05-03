<template>
  <div class="overflow-x-hidden works">
    <div class="relative py-16 mx-auto text-xl border-t border-b border-gray-500 container-inner">
      <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
        <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
      </div>

      <h2 class="mb-12 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500" id="projects" data-scroll>{{$t('projects')}}</h2>

      <div class="relative">

        <div class="grid w-full grid-cols-1 px-2 py-8 text-lg leading-normal bg-transparent gap-x-6 gap-y-10 lg:grid-cols-2 rounded-xl sm:text-xl">

          <div class="flex flex-col px-3 py-4 border-4 shadow-xl fromleft border-opacity-20 ring-4 ring-offset-4 ring-green-500 ring-offset-transparent dark:border-gray-300 border-bluefonce rounded-xl" data-scroll>
            <div class="flex items-center justify-center my-4 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
              <div class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500"><a href="https://personadiseno.netlify.app/" target="_blank" rel=”noreferrer”>Persona Diseño </a></div>
            </div>
            <div class="text-lg tracking-wider text-justify text-gray-800 dark:text-gray-400">{{ $t('persona') }} (<a class="text-base font-semibold text-gray-800 dark:text-gray-400" href="https://github.com/chaloulou75/persona" target="_blank" rel=”noreferrer”>GitHub</a>).</div>
            <div class="flex justify-around pt-12 pb-8 mt-auto">
              <LazyLogosNuxtDotJs class="w-6 h-6 lg:w-10 lg:h-10" fill="#00C58E"/>
              <LazyLogosTailwindCss class="w-6 h-6 lg:w-10 lg:h-10" fill="#38B2AC" />
              <LazyLogosNetlify class="w-6 h-6 lg:w-10 lg:h-10" fill="#00C7B7" />
            </div>
          </div>

          <div class="flex flex-col px-3 py-4 border-4 shadow-xl fromright border-opacity-20 dark:border-gray-300 border-bluefonce ring-2 ring-offset-4 ring-yellow-500 ring-offset-transparent rounded-xl" data-scroll>
            <div class="flex items-center justify-center my-4 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
              <div class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500">
              <a href="https://www.apuestamigo.com/" target="_blank" rel=”noreferrer”>Apuestamigo</a>
              </div>
            </div>
            <div class="text-lg tracking-wider text-justify text-gray-800 dark:text-gray-400">{{ $t('apuestamigo') }} (<a class="text-base font-semibold text-gray-800 dark:text-gray-400" href="https://github.com/chaloulou75/apuestamigov3" target="_blank" rel=”noreferrer”>GitHub</a>).</div>
            <div class="flex justify-around pt-12 pb-8 mt-auto">
              <LazyLogosLaravel class="w-6 h-6 lg:w-10 lg:h-10" fill="#FF2D20"/>
              <LazyLogosTailwindCss class="w-6 h-6 lg:w-10 lg:h-10" fill="#38B2AC" />
              <LazyLogosHeroku class="w-6 h-6 lg:w-10 lg:h-10" fill="#430098" />
            </div>
          </div>


          <div class="flex flex-col px-3 py-4 border-4 shadow-xl fromleft border-opacity-20 dark:border-gray-300 border-bluefonce ring-2 ring-offset-4 ring-lightBlue-500 ring-offset-transparent rounded-xl" data-scroll>
            <div class="flex items-center justify-center my-4 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <div class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500"><a href="https://charles-jeandey.com" target="_blank" rel=”noreferrer”>Charles Jeandey</a></div>
            </div>
            <div class="text-lg tracking-wider text-justify text-gray-800 dark:text-gray-400"> {{ $t('charlesjnuxt')}} (<a class="text-base font-semibold text-gray-800 dark:text-gray-400" href="https://github.com/chaloulou75/charles-j-nuxt" target="_blank" rel=”noreferrer”>GitHub</a>).</div>
            <div class="flex justify-around pt-12 pb-8 mt-auto">
              <LazyLogosNuxtDotJs class="w-6 h-6 lg:w-10 lg:h-10" fill="#00C58E"/>
              <LazyLogosTailwindCss class="w-6 h-6 lg:w-10 lg:h-10" fill="#38B2AC" />
              <LazyLogosNetlify class="w-6 h-6 lg:w-10 lg:h-10" fill="#00C7B7" />
            </div>
          </div>

          <div class="flex flex-col px-3 py-4 border-4 shadow-xl fromright border-opacity-20 dark:border-gray-300 border-bluefonce ring-2 ring-offset-4 ring-rose-600 ring-offset-transparent rounded-xl" data-scroll>
            <div class="flex items-center justify-center my-4 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clip-rule="evenodd" />
              </svg>
              <div class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500"><a href="https://pantaloni-associes.netlify.app/" target="_blank" rel=”noreferrer”>Pantaloni & Associés</a></div>
            </div>
            <div class="text-lg tracking-wider text-justify text-gray-800 dark:text-gray-400"> {{ $t('pantaloni')}} </div>
            <div class="flex justify-around pt-12 pb-8 mt-auto">
              <LazyLogosNuxtDotJs class="w-6 h-6 lg:w-10 lg:h-10" fill="#00C58E"/>
              <LazyLogosTailwindCss class="w-6 h-6 lg:w-10 lg:h-10" fill="#38B2AC" />
              <LazyLogosNetlify class="w-6 h-6 lg:w-10 lg:h-10" fill="#00C7B7" />
            </div>
          </div>

          <div class="flex flex-col px-3 py-4 border-4 shadow-xl fromleft border-opacity-20 dark:border-gray-300 border-bluefonce ring-2 ring-offset-4 ring-amber-500 ring-offset-transparent rounded-xl" data-scroll>
            <div class="flex items-center justify-center my-4 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              <div class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500" ><a href="https://carpinto-sites.netlify.app/" target="_blank" rel=”noreferrer”>Carpinto</a></div>
            </div>
            <div class="text-lg tracking-wider text-justify text-gray-800 dark:text-gray-400">{{ $t('carpinto') }} (<a class="text-base font-semibold text-gray-800 dark:text-gray-400" href="https://github.com/chaloulou75/charles-j-vuepress" target="_blank" rel=”noreferrer”>GitHub</a>).</div>
            <div class="flex justify-around pt-12 pb-8 mt-auto">
              <LazyLogosVueDotJs class="w-6 h-6 lg:w-10 lg:h-10" fill="#4FC08D"/>
              <LazyLogosTailwindCss class="w-6 h-6 lg:w-10 lg:h-10" fill="#38B2AC" />
              <LazyLogosNetlify class="w-6 h-6 lg:w-10 lg:h-10" fill="#00C7B7" />
            </div>
          </div>

          <div class="flex flex-col px-3 py-4 border-4 shadow-xl fromright border-opacity-20 dark:border-gray-300 border-bluefonce ring-2 ring-offset-4 ring-purple-600 ring-offset-transparent rounded-xl" data-scroll>
            <div class="flex items-center justify-center my-4 space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500">Julien Leprêtre</div>
            </div>
            <div class="text-lg tracking-wider text-justify text-gray-800 dark:text-gray-400">{{ $t('julien') }}(<a class="text-base font-semibold text-gray-800 dark:text-gray-400" href="https://github.com/chaloulou75/julienlepretre" target="_blank" rel=”noreferrer”>GitHub</a>).</div>
            <div class="flex justify-around pt-12 pb-8 mt-auto">
              <LazyLogosLaravel class="w-6 h-6 lg:w-10 lg:h-10" fill="#FF2D20" />
              <LazyLogosTailwindCss class="w-6 h-6 lg:w-10 lg:h-10" fill="#38B2AC" />
              <LazyLogosVueDotJs class="w-6 h-6 lg:w-10 lg:h-10" fill="#4FC08D"/>
            </div>
          </div>

          <div class="flex flex-col px-3 py-4 border-4 shadow-xl fromleft border-opacity-20 dark:border-gray-300 border-bluefonce ring-2 ring-offset-4 ring-blue-400 ring-offset-transparent rounded-xl" data-scroll>
            <div class="flex items-center justify-center my-4 space-x-3">
              <svg class="w-6 h-6 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              <div class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500"><a href="https://neymarxpokerstars.netlify.app/" target="_blank" rel=”noreferrer”>Neymar X Pokerstars</a></div>
            </div>
            <div class="text-lg tracking-wider text-justify text-gray-800 dark:text-gray-400">  Petit jeu fait dans le cadre d'un projet étudiant pour un client, réalisé avec Nuxt et Tailwind.
            </div>
            <div class="flex justify-around pt-12 pb-8 mt-auto">
              <LazyLogosNuxtDotJs class="w-6 h-6 lg:w-10 lg:h-10" fill="#00C58E"/>
              <LazyLogosTailwindCss class="w-6 h-6 lg:w-10 lg:h-10" fill="#38B2AC" />
              <LazyLogosNetlify class="w-6 h-6 lg:w-10 lg:h-10" fill="#00C7B7" />
            </div>
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
      threshold: .2
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

.fromright[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0);
}
.fromright[data-scroll="out"] {
  opacity: 0;
  transform: translateX(30px);
}
.fromleft[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0);
}
.fromleft[data-scroll="out"] {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
