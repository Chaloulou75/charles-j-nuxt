<template>
  <div class="mx-auto my-24 container-inner" id="contact">
    <div class="relative w-full h-auto px-8 py-8 lg:px-24 lg:py-12">

      <!-- <div class="absolute inset-0 transform opacity-100 bg-gold rounded-xl rotate-12"></div>
      <div class="absolute inset-0 transform bg-pink-700 opacity-75 -rotate-12 rounded-xl"></div>
      <div class="absolute inset-0 transform bg-indigo-800 opacity-75 rounded-xl -rotate-2"></div> -->

      <h2 class="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" data-scroll>{{ $t('contactme') }}</h2>
      <p class="z-20 mb-12 text-xl font-semibold leading-loose text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500" v-html=" $t('contacttext') " data-scroll></p>
    </div>
  </div>
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
