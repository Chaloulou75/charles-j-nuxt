<template>
  <div class="absolute inset-0 z-0 mt-16">
    <div class="flex flex-col items-center justify-center px-24 py-20 space-y-20">
      <div class="flex items-center justify-between w-full space-x-4 ">

        <div class="w-1/4 h-5 bg-gray-200 rounded-full opacity-25">
          <div class="w-full h-5 origin-left transform bg-red-600 rounded-full idiomas" data-scroll></div>
        </div>
        <div class="hidden w-2/4 h-5 bg-orange-200 rounded-full">
          <div class="w-full h-5 origin-left transform bg-blue-500 rounded-full idiomas" data-scroll></div>
        </div>
        <div class="w-1/4 h-5 bg-green-400 rounded-full">
          <div class="w-full h-5 origin-left transform bg-indigo-500 rounded-full idiomas" data-scroll></div>
        </div>
      </div>
      <div class="flex items-center justify-between w-full space-x-4 ">
        <div class="w-2/3 h-5 bg-white rounded-full">
          <div class="w-full h-5 origin-left transform bg-green-500 rounded-full idiomas" data-scroll></div>
        </div>
        <div class="w-1/3 h-5 bg-white rounded-full">
          <div class="w-full h-5 origin-left transform bg-red-800 rounded-full idiomas" data-scroll></div>
        </div>
      </div>
      <div class="flex items-center justify-between w-full space-x-4">
        <div class="w-2/5 h-5 bg-white rounded-full">
          <div class="w-full h-5 origin-left transform bg-yellow-500 rounded-full idiomas" data-scroll></div>
        </div>
        <div class="w-2/5 h-5 bg-gray-500 rounded-full">
          <div class="w-full h-5 origin-left transform bg-red-500 rounded-full idiomas" data-scroll></div>
        </div>
        <div class="hidden w-1/5 h-5 bg-red-200 rounded-full">
          <div class="w-full h-5 origin-left transform bg-green-500 rounded-full idiomas" data-scroll></div>
        </div>
      </div>

    </div>
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
  transition: all 2s;
}

[data-scroll="in"] {
  opacity: 1;
  /* transform: scale(1); */
}
[data-scroll="out"] {
  opacity: 0;
  /* transform: scale(.2); */
}

.idiomas[data-scroll] {
  transition: all 1s alternate;
}
.idiomas[data-scroll="in"] {
  transform: scaleX(1);
}
.idiomas[data-scroll="out"] {
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 400ms ease-in-out;
}

</style>
