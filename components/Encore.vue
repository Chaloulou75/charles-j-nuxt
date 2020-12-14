<template>
  <div class="overflow-x-hidden"><!-- encore-->
      <div class="pt-8 lg:pt-16 encore">
        <div class="relative pb-8 mx-auto text-xl border-b border-gray-200 lg:pb-16 container-inner">
          <h2 class="mb-8 text-4xl font-bold text-gray-300" id="about" data-scroll>{{ $t('encore') }}</h2>

          <div class="absolute top-0 right-0" style="transform: translate(100%) rotate(180deg)">
            <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
          </div>

          <div class="flex flex-col items-center justify-between mb-16 sm:flex-row">
            <div data-scroll>
              <img loading="lazy" src="~assets/img/laravel_and_vue.svg" alt="laravel_and_vue" class="w-32 h-32 mb-8 rounded-full lg:mb-0" />
            </div>
            <div class="flex-1 ml-6 text-lg">
              <p class="pb-2 leading-loose text-gray-300" v-html="$t('encoretext')" data-scroll></p>
              <p class="leading-loose text-gray-300" v-html="$t('encoretext2')" data-scroll></p>
            </div>
          </div>
          <!-- <TransitionComponent /> -->
          <div class="responsive-container" data-scroll>
            <iframe class="top-0 left-0 w-full h-full border-0 responsive-iframe" src="https://www.youtube.com/embed/CURPyCzoKfY" style="border:0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div><!-- end encore  -->
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
  transform: translateX(0);
}
[data-scroll="out"] {
  opacity: 0;
  transform: translateX(150px);
}

</style>
