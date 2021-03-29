<template>
  <div class="overflow-x-hidden competences" ><!-- competences -->
      <div class="skills" >
        <div class="relative py-8 mx-auto text-xl border-b border-gray-500 lg:py-16 container-inner">
          <h2 class="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 dark:from-green-400 dark:to-blue-500" >
            {{ $t('skills') }}
          </h2>
          <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
            <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
          </div>

          <div class="justify-between px-12 mb-12 space-y-3 lg:px-4 lg:flex lg:space-y-0" >
            <ul class="space-y-3 text-xl text-gray-800 list-disc dark:text-gray-400 lg:space-y-4">
              <li class="font-semibold hover:brightness-175" data-scroll><code>TALL Stack</code></li>
              <li data-scroll><code>Laravel</code></li>
              <li data-scroll><code>Tailwind CSS</code></li>
              <li data-scroll><code>Livewire</code></li>
              <li data-scroll><code>AlpineJS</code></li>
              <li data-scroll><code>InertiaJS</code></li>
            </ul>
            <ul class="space-y-3 text-xl text-gray-800 list-disc dark:text-gray-400 lg:space-y-4">
              <li data-scroll><code>PHP/MySQL</code></li>
              <li data-scroll><code>HTML/CSS</code> </li>
              <li data-scroll><code>SASS</code> </li>
              <li data-scroll><code>Vue JS</code></li>
              <li data-scroll><code>Nuxt JS</code></li>
              <li data-scroll><code>JAMstack</code></li>
            </ul>
            <ul class="space-y-3 text-xl text-gray-800 list-disc dark:text-gray-400 lg:space-y-4">
              <li data-scroll><code>Git/Version Control</code></li>
              <li data-scroll><code>Deployment</code></li>
              <li data-scroll><code>JavaScript</code></li>
              <li data-scroll><code>Bootstrap</code></li>
              <li data-scroll><code>VuePress / Gridsome</code></li>
            </ul>
          </div>
        </div>
      </div>
    </div> <!-- end competences -->
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
  transition: all 1.5s;
}

[data-scroll="in"] {
  opacity: 1;
  /* transform: translateX(0) scale(1); */
}
[data-scroll="out"] {
  opacity: 0;
  /* transform: translateX(-70px) scale(.7); */
}

</style>
