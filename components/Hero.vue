<template>
  <div id="herotop" class="flex flex-col justify-between py-16 mx-auto hero container-inner sm:flex-row">
      <div class="w-full text-5xl font-bold text-center lg:text-7xl sm:w-3/5 sm:text-left" >
        <div class="leading-tight" data-scroll>{{ $t('dev') }} </div>
        <div class="leading-tight text-green-700" data-scroll>Full-stack</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img loading="lazy" src="~assets/img/developer.svg" alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div> <!-- end hero -->
</template>

<script>
import ScrollOut from "scroll-out"

export default {
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: .2,
    });
  },
  destroyed() {
    this.so.teardown();
  }
}
</script>

<style scoped>

[data-scroll] {
  transition: all 4s;
}

[data-scroll="in"] {
  opacity: 1;
  transform: translateY(0) scale(1);
}

[data-scroll="out"] {
  opacity: 0;
  transform: translateY(-1500px) scale(.3);
}

</style>
