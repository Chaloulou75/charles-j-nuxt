<template>
  <div class="mx-auto my-8 container-inner">
    <div class="relative w-full h-auto px-8 py-8 lg:px-24 lg:py-12">

      <!-- <div class="absolute inset-0 transform bg-pink-700 rounded-xl rotate-6"></div>
      <div class="absolute inset-0 transform bg-gold rounded-xl -rotate-12"></div>
      <div class="absolute inset-0 transform bg-purple-800 rounded-xl -rotate-3"></div> -->

      <p class="text-xl font-semibold leading-loose text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500" v-html="$t('intro')" data-scroll></p>
    </div>

    <div class="flex items-center justify-center py-6 mt-12">
      <div class="w-full px-8 py-8 lg:w-1/2 lg:py-0" data-scroll>
        <img loading="lazy" src="~assets/img/browser.svg" alt="browser" />
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
  transition: all 2s;
}

[data-scroll="in"] {
  opacity: 1;
  transform: scale(1);
}
[data-scroll="out"] {
  opacity: 0;
  transform: scale(.2);
}

</style>
