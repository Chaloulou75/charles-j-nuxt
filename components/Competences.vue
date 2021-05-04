<template>
  <div class="overflow-x-hidden competences" ><!-- competences -->
      <div class="skills" >
        <div class="relative py-8 mx-auto text-xl border-b border-gray-500 lg:py-16 container-inner">
          <h2 class="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-blue-800 dark:from-green-300 dark:to-blue-400" >
            {{ $t('skills') }}
          </h2>
          <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
            <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
          </div>

          <div class="justify-between px-12 mb-12 space-y-3 text-xl font-semibold text-gray-800 lg:px-4 lg:flex lg:space-y-0 dark:text-gray-300" >
            <ul class="space-y-3 list-disc lg:space-y-4">
              <li data-scroll><code>TALL Stack</code></li>
              <li data-scroll><code>Laravel</code></li>
              <li data-scroll><code>Tailwind css</code></li>
              <li data-scroll><code>Livewire</code></li>
              <li data-scroll><code>Alpine js</code></li>
              <li data-scroll><code>Inertia js</code></li>
            </ul>
            <ul class="space-y-3 text-xl list-disc lg:space-y-4">
              <li data-scroll><code>HTML/CSS</code> </li>
              <li data-scroll><code>PHP/MySQL</code></li>
              <li data-scroll><code>JavaScript</code></li>
              <li data-scroll><code>SASS</code> </li>
              <li data-scroll><code>Vue js</code></li>
              <li data-scroll><code>Nuxt js</code></li>
            </ul>
            <ul class="space-y-3 text-xl list-disc lg:space-y-4">
              <li data-scroll><code>Git/ Github</code></li>
              <li data-scroll><code>Visual Studio Code</code></li>
              <li data-scroll><code>JAMstack</code></li>
              <li data-scroll><code>Laragon</code></li>
              <li data-scroll><code>VuePress / Gridsome</code></li>
              <li data-scroll><code>Deployment</code></li>
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
