<template>
  <div class="mx-auto mt-4 mb-24 container-inner" id="contact">
    <section class="relative w-full h-auto py-20">
      <h2
        class="mb-8 text-4xl font-bold text-transparent bg-gradient-to-r from-green-800 to-blue-800 bg-clip-text dark:from-green-400 dark:to-blue-500"
        data-scroll
      >
        {{ $t("contactme") }}
      </h2>
      <p class="mb-12 text-xl font-semibold leading-loose" data-scroll>
        {{ $t("contacttextuno") }}
        <Mailto
          class="font-bold text-green-700 dark:text-green-500"
          mail="c.jeandey@gmail.com"
          >email</Mailto
        >. {{ $t("contacttextdos") }}
      </p>
    </section>

    <section class="grid grid-flow-col grid-cols-4 gap-4 py-4 mx-auto">
      <div class="flex items-center justify-center h-full">
        <Mailto
          mail="c.jeandey@gmail.com"
          class="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <LazyLogosGmail class="w-10 h-10" fill="#EA4335" />
          <span class="sr-only">email</span>
        </Mailto>
      </div>
      <div class="flex items-center justify-center h-full">
        <a
          href="https://twitter.com/CarlitosBuck"
          target="_blank"
          rel="”noreferrer”"
          class="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <LazyLogosTwitterLogo class="w-10 h-10" fill="#1DA1F2" />
          <span class="sr-only">Twitter</span>
        </a>
      </div>
      <div class="flex items-center justify-center h-full">
        <a
          href="https://www.linkedin.com/in/charles-jeandey"
          target="_blank"
          rel="”noreferrer”"
          class="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <LazyLogosLinkedin class="w-10 h-10" fill="#0A66C2" />
          <span class="sr-only">linkedin</span>
        </a>
      </div>
      <div class="flex items-center justify-center h-full">
        <a
          href="https://github.com/Chaloulou75"
          target="_blank"
          rel="”noreferrer”"
          class="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <LazyLogosGithub
            class="w-10 h-10 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
            fill="currentColor"
          />
          <span class="sr-only">Github</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
      threshold: 0.2
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>

<style scoped>
[data-scroll] {
  transition: all 2s;
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
