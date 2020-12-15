<template>
  <div class="overflow-x-hidden competences" >
      <div class="skills"><!-- competences -->
        <div class="relative py-8 mx-auto text-xl border-b border-gray-200 lg:py-16 container-inner">
          <h2 class="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" data-scroll>
            {{ $t('skills') }}
          </h2>
          <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
            <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
          </div>

          <div class="justify-between px-12 mb-12 lg:px-4 lg:flex">
            <ul class="space-y-2 text-xl text-gray-400 list-disc lg:space-y-4">
              <ol class="font-semibold" data-scroll>TALL Stack</ol>
              <li data-scroll>Laravel </li>
              <li data-scroll>Tailwind CSS</li>
              <li data-scroll>Livewire</li>
              <li data-scroll>AlpineJS </li>
            </ul>
            <ul class="space-y-2 text-xl text-gray-400 list-disc lg:space-y-4">
              <li data-scroll>PHP/MySQL</li>
              <li data-scroll>HTML/CSS </li>
              <li data-scroll>SASS </li>
              <li data-scroll>Vue JS</li>
              <li data-scroll>Nuxt JS</li>
            </ul>
            <ul class="space-y-2 text-xl text-gray-400 list-disc lg:space-y-4">
              <li data-scroll>Git/Version Control</li>
              <li data-scroll>Deployment</li>
              <li data-scroll>JavaScript</li>
              <li data-scroll>Bootstrap</li>
              <li data-scroll>VuePress / Gridsome</li>
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
      threshold: .1
    });
  },
  destroyed() {
    this.so.teardown();
  }
}
</script>

<style scoped>

[data-scroll] {
  transition: all 2s;
}

[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0) scale(1);
}
[data-scroll="out"] {
  opacity: 0;
  transform: translateX(-70px) scale(.7);
}

</style>
