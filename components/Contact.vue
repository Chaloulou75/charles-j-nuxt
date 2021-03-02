<template>
  <div class="mx-auto my-24 container-inner" id="contact">
    <div class="relative w-full h-auto py-12">
      <h2 class="mb-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" data-scroll>{{ $t('contactme') }}</h2>
      <p class="mb-12 text-xl font-semibold leading-loose text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500" v-html=" $t('contacttext') " data-scroll></p>
    </div>
  </div>
</template>

<script>
import ScrollOut from "scroll-out"
import backgroundComponent from './backgroundComponent.vue';

export default {
  components: { backgroundComponent },
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .3
    });
  },
  destroyed() {
    this.so.teardown();
  }
}
</script>

<style scoped>

[data-scroll] {
  transition: all 2.5s;
}

[data-scroll="in"] {
  opacity: 1;
  /* transform: translateX(0) scale(1); */
}
[data-scroll="out"] {
  opacity: 0;
  /* transform: translateX(-70px) scale(.7); */
}

</style>
