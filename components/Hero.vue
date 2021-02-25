<template>
  <div class="flex items-center justify-around min-h-screen">
    <div class="flex flex-col justify-between px-2 py-4 mx-auto mb-auto lg:flex-row">
      <div class="w-full space-y-3 text-5xl font-extrabold text-left lg:space-y-2 lg:w-4/5 lg:text-8xl">
        <h1 class="leading-tight text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500" data-scroll>{{ $t('dev') }} </h1>
        <h2 id="laravel" class="pt-2 text-4xl leading-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-orange-400 to-blue-500" data-scroll>Laravel</h2>
        <h2 id="tailwindcss" class="pt-2 text-4xl leading-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 to-green-400" data-scroll>TailwindCSS</h2>
        <h2 id="vuejs" class="pt-2 text-4xl leading-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-700" data-scroll>VueJS / NuxtJS</h2>
      </div>
      <div class="relative flex items-center mt-8">
        <img loading="lazy" src="~assets/img/developer.svg" alt="hero" class="h-auto mx-auto sm:mx-0" />
        <div class="absolute inset-0 hidden transition duration-100 shadow-lg w-52 h-52 rounded-xl lg:inline-block bg-blur-md bg-brightness-150 animate-slowmoove hover:bg-brightness-175 hover:animation-paused"></div>
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
    });
  },
  destroyed() {
    this.so.teardown();
  }
}
</script>

<style scoped>

h1, #laravel, #tailwindcss, #vuejs, [data-scroll] {
  transition: all 3s;
}

h1, h1[data-scroll="in"] {
  opacity: 1;
  transform: translateY(0) translateX(0) scale(1);
}

h1, h1[data-scroll="out"] {
  opacity: 0;
  transform: translateY(-50px) translateX(50px) scale(0.7);
}

#laravel, #laravel[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0) scale(1);
}

#laravel, #laravel[data-scroll="out"] {
  opacity: 0;
  transform: translateX(-1200px) scale(0);
}

#tailwindcss, #tailwindcss[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0) scale(1);
}

#tailwindcss, #tailwindcss[data-scroll="out"] {
  opacity: 0;
  transform: translateX(1200px) scale(0);
}

#vuejs, #vuejs[data-scroll="in"] {
  opacity: 1;
  transform: translateY(0) scale(1);
}

#vuejs, #vuejs[data-scroll="out"] {
  opacity: 0;
  transform: translateY(60px) scale(0.7);
}

</style>
