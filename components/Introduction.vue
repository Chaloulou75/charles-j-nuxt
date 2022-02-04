<template>
  <div class="relative min-h-full mx-auto my-10 container-inner">
    <section class="w-full" data-scroll>
      <p
        class="inline text-2xl font-semibold leading-loose"
        v-html="$t('intro')"
      ></p>
    </section>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: 0.2
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
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
