<template>
  <div class="flex items-center justify-around min-h-screen">
    <div class="flex flex-col justify-between px-4 py-4 mx-auto mb-auto lg:flex-row">
      <div class="w-full text-6xl font-extrabold text-center lg:text-left lg:w-3/5 lg:text-8xl" >
        <div class="leading-tight text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500" data-scroll>{{ $t('dev') }} </div>
        <div class="leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" data-scroll>Full-stack</div>
      </div>
      <div class="mt-8">
        <img loading="lazy" src="~assets/img/developer.svg" alt="hero" class="mx-auto sm:mx-0" />
      </div>
    </div> <!-- end hero -->
  </div>

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
  transition: all 3s;
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
