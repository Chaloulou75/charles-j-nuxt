<template>
  <div>
    <div class="overflow-x-hidden">
      <div class="pt-16 skills">
        <div class="relative pb-4 mx-auto text-xl container-inner">
          <h2 class="mb-6 font-bold focus:outline-none" @click="show = !show">
            Mes compétences:
          </h2>

          <div class="absolute top-0 right-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
          </div>

          <transition name="fade">
            <div v-if="show" class="justify-between px-4 mb-12 lg:flex">
              <ul class="text-base text-green-500 list-disc lg:space-y-3">
                <li>Laravel</li>
                <li>PHP/MySQL</li>
                <li>VueJS</li>
                <li>HTML/CSS</li>
              </ul>
              <ul class="text-base text-green-500 list-disc lg:space-y-3">
                <li>Tailwind CSS</li>
                <li>Livewire</li>
                <li>JavaScript</li>
                <li>AlpineJS</li>
              </ul>
              <ul class="text-base text-green-500 list-disc lg:space-y-3">
                <li>Git/Version Control</li>
                <li>Deployment</li>
                <li>UI/UX Design</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
