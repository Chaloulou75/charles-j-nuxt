<template>
  <div class="flex items-center justify-around min-h-screen">
    <div class="flex flex-col justify-between px-2 py-4 mx-auto mb-auto lg:flex-row">
      <div class="w-full space-y-3 text-5xl font-extrabold text-left lg:space-y-0 lg:w-4/5 lg:text-8xl">
        <div class="leading-tight text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500" data-scroll>{{ $t('dev') }} </div>
        <div class="pt-2 text-4xl leading-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500" data-scroll>Laravel</div>
        <div class="pt-2 text-4xl leading-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 to-green-400" data-scroll>TailwindCss</div>
        <div class="pt-2 text-4xl leading-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-700" data-scroll>VueJS</div>
      </div>
      <div class="flex items-center mt-8">
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
  transform: translateY(-1250px) scale(.3);
}

</style>
