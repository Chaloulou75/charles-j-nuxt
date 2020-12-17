<template>
  <div class="my-8 overflow-x-hidden"><!-- encore-->
      <div class="relative pb-8 mx-auto text-xl border-b border-gray-500 lg:pb-16 container-inner">
        <div class="absolute top-0 right-0" style="transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>
        <h2 class="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500" id="about" data-scroll>{{ $t('encore') }}</h2>

        <div class="flex justify-center w-full" data-scroll>
          <img loading="lazy" src="~assets/img/laravel_and_vue.svg" alt="laravel_and_vue" class="w-32 h-32 mb-8 rounded-full lg:mb-0" />
        </div>
        <div class="relative flex flex-col items-center justify-between h-auto py-16 lg:flex-row" >

          <!-- <div class="absolute inset-0 transform bg-orange-600 rounded-xl rotate-12"></div>
          <div class="absolute inset-0 transform bg-gold rounded-xl -rotate-12"></div>
          <div class="absolute inset-0 transform bg-purple-900 rounded-xl -rotate-3"></div> -->

          <div class="flex-1 text-xl leading-loose" data-scroll>
            <p class="pb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500" v-html="$t('encoretext')"></p>
            <p class="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500" v-html="$t('encoretext2')"></p>
          </div>
        </div>
        <div class="responsive-container" data-scroll>
          <iframe title="Boards of Canada" class="top-0 left-0 w-full h-full border-0 responsive-iframe" src="https://www.youtube.com/embed/CURPyCzoKfY" style="border:0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  </div><!-- end encore  -->
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
  /* transform: translateX(0); */
}
[data-scroll="out"] {
  opacity: 0;
  /* transform: translateX(150px); */
}

</style>
