<template>
  <div class="relative flex items-center justify-around min-h-screen">
    <div class="absolute inset-0" id="herotop"></div>
    <div
      class="flex flex-col justify-between px-2 py-4 mx-auto mt-20 mb-auto lg:flex-row"
    >
      <div
        class="flex h-full w-full animate-move-bg flex-col justify-evenly space-y-1 bg-gradient-to-r from-green-600 via-blue-800 to-green-600 bg-[length:400%] bg-clip-text text-left font-ubuntu font-black text-transparent dark:from-green-400 dark:via-blue-700 dark:to-green-400 lg:w-4/5 lg:space-y-2 xl:space-y-6 2xl:space-y-10"
      >
        <h1 class="text-5xl lg:text-9xl">
          {{ $t("dev") }}
        </h1>
        <h2
          id="laravel"
          class="pt-2 text-4xl font-black text-[#FF2D20] text-opacity-95 lg:text-8xl"
        >
          Laravel
          <LogosLaravel
            class="inline-block w-8 h-8 lg:h-16 lg:w-16"
            fill="#FF2D20"
          />
        </h2>
        <h2
          id="tailwindcss"
          class="pt-2 text-4xl font-black text-[#38B2AC] text-opacity-95 lg:text-8xl"
        >
          Tailwind css
          <LogosTailwindCss
            class="inline-block w-8 h-8 lg:h-16 lg:w-16"
            fill="#38B2AC"
          />
        </h2>
        <h2
          id="vuejs"
          class="pt-2 text-4xl font-black text-[#4FC08D] text-opacity-95 lg:text-8xl"
        >
          Vue js
          <LogosVueDotJs
            class="inline-block w-8 h-8 lg:h-16 lg:w-16"
            fill="#4FC08D"
          />
          / Nuxt js
          <LogosNuxtDotJs
            class="inline-block w-8 h-8 lg:h-16 lg:w-16"
            fill="#00C58E"
          />
        </h2>
      </div>
      <div class="relative flex items-center mt-16 lg:mt-8">
        <ImgDeveloper class="mx-auto sm:mx-0" />
        <div
          class="absolute inset-0 hidden space-y-3 transition duration-200 shadow-2xl cursor-pointer hover:animation-paused h-52 w-52 animate-slowmoove rounded-xl filter backdrop-blur backdrop-filter hover:backdrop-blur-0 hover:backdrop-filter lg:inline-block"
        >
          <div class="flex flex-col items-center justify-center w-full h-full">
            <div class="text-lg text-center">
              <LogosLaravel class="w-8 h-8" fill="#FF2D20" />
            </div>
            <div class="text-lg text-center">
              <LogosTailwindCss class="w-8 h-8" fill="#38B2AC" />
            </div>
            <div class="text-lg text-center">
              <LogosNuxtDotJs class="w-8 h-8" fill="#00C58E" />
            </div>
          </div>
        </div>
      </div>
      <!-- bg-blur-lg hover:bg-brightness-175-->
    </div>
    <!-- end hero -->
  </div>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
</script>

<!-- <style scoped>
h1,
#laravel,
#tailwindcss,
#vuejs,
[data-scroll] {
  transition: all 3s;
}

h1,
h1[data-scroll="in"] {
  opacity: 1;
  transform: translateY(0) translateX(0) scale(1);
}

h1,
h1[data-scroll="out"] {
  opacity: 0;
  transform: translateY(-50px) translateX(50px) scale(0.7);
}

#laravel,
#laravel[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0) scale(1);
}

#laravel,
#laravel[data-scroll="out"] {
  opacity: 0;
  transform: translateX(-1200px) scale(0);
}

#tailwindcss,
#tailwindcss[data-scroll="in"] {
  opacity: 1;
  transform: translateX(0) scale(1);
}

#tailwindcss,
#tailwindcss[data-scroll="out"] {
  opacity: 0;
  transform: translateX(1200px) scale(0);
}

#vuejs,
#vuejs[data-scroll="in"] {
  opacity: 1;
  transform: translateY(0) scale(1);
}

#vuejs,
#vuejs[data-scroll="out"] {
  opacity: 0;
  transform: translateY(60px) scale(0.7);
}
</style> -->
