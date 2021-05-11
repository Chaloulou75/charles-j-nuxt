<template>
  <div class="my-8 overflow-x-hidden"><!-- encore-->
      <div class="relative pb-8 mx-auto text-xl lg:pb-16 container-inner">
        <!-- <div class="absolute top-0 right-0" style="transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div> -->
        <h2 class="mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-blue-900 dark:from-green-400 dark:to-blue-500" id="about" data-scroll>{{ $t('encore') }}</h2>

        <div class="flex justify-center w-full mx-auto my-6 lg:mb-auto" data-scroll>
          <ImgLaravelandvue loading="lazy" class="w-48 h-48 rounded-xl" />
        </div>
        <div class="relative flex flex-col items-center justify-between h-auto py-16 lg:flex-row" >
          <div class="flex-1 text-xl leading-loose" data-scroll>
            <p class="pb-4 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-800 to-blue-900 dark:from-green-400 dark:to-blue-500" v-html="$t('encoretext')"></p>
            <p class="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-800 to-blue-900 dark:from-green-400 dark:to-blue-500" v-html="$t('encoretext2')"></p>
          </div>
        </div>
        <div class="aspect-w-16 aspect-h-9" data-scroll>
          <iframe loading=lazy title="Boards of Canada" src="https://www.youtube.com/embed/CURPyCzoKfY" style="border:0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  /* transform: translateX(0); */
}
[data-scroll="out"] {
  opacity: 0;
  /* transform: translateX(150px); */
}

</style>
