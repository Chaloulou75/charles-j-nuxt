<template>
  <div class="mx-auto my-8 container-inner">
    <p class="text-xl leading-loose text-gray-300" v-html="$t('intro')" data-scroll></p>

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
