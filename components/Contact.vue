<template>
  <div class="overflow-x-hidden" id="contact">
    <div class="pt-8 lg:pt-16 contact-me">
      <div class="relative h-auto px-8 py-8 mx-auto my-24 lg:px-24 lg:py-12 container-inner">

        <div class="absolute inset-0 transform bg-green-700 rounded-xl rotate-6"></div>
        <div class="absolute inset-0 transform bg-gray-300 rounded-xl -rotate-12"></div>
        <div class="absolute inset-0 transform bg-gradient-to-r from-purple-800 to-indigo-600 rounded-xl -rotate-3"></div>

        <h2 class="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" data-scroll>{{ $t('contactme') }}</h2>
        <p class="z-20 mb-12 text-xl font-semibold leading-loose text-gray-200" v-html=" $t('contacttext') " data-scroll></p>
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
