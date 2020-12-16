<template>
  <div class="mx-auto container-inner">
    <div class="relative w-full h-auto" data-scroll>
      <p class="text-xl font-semibold leading-loose text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500" v-html="$t('intro')"></p>
    </div>

    <div class="flex items-center justify-center my-20">
      <div class="w-full px-8 lg:w-1/2 lg:py-0" >
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
      threshold: .5
    });
  },
  destroyed() {
    this.so.teardown();
  }
}
</script>

<style scoped>

[data-scroll] {
  transition: all 3.5s;
}

[data-scroll="in"] {
  opacity: 1;
  /* transform: scale(1); */
}
[data-scroll="out"] {
  opacity: 0;
  /* transform: scale(.2); */
}

</style>
