<template>
  <div class="overflow-x-hidden" id="contact">
    <div class="pt-8 lg:pt-16 contact-me">
      <div class="relative pb-4 mx-auto text-xl leading-loose container-inner">
        <h2 class="mb-6 text-4xl font-bold" data-scroll>{{ $t('contactme') }}</h2>
        <p class="z-20 mb-12" v-html=" $t('contacttext') " data-scroll></p>
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
