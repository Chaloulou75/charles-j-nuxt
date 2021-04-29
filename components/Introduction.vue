<template>
  <div class="relative min-h-full mx-auto container-inner my-14">
    <div class="w-full" data-scroll>
      <p class="text-xl font-semibold leading-loose text-transparent bg-clip-text bg-gradient-to-br dark:from-green-400 dark:to-blue-500 from-green-600 to-blue-700" v-html="$t('intro')"></p>
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
  transition: all 1.2s;
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
