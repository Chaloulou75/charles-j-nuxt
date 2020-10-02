<template>
  <div class="px-4 py-4 mx-auto font-semibold container-inner">
    <h1 class="mb-16 text-2xl font-bold text-center text-gray-100 truncate">{{ $t('notblog') }} </h1>
      <ul class="px-12">
        <li class="px-4 py-4 mx-auto border-b border-gray-700" v-for="(post, index) in posts" :key="index">
          <NuxtLink :to="`/posts/${post.slug}`" class="text-gray-400">{{ post.title }} by {{ post.author }}</NuxtLink>
        </li>
      </ul>
    <div class="w-1/2 px-8 py-8 mx-auto mt-8 sm:py-0">
        <img src="~assets/img/design.svg" alt="design" />
    </div>
  </div>
</template>

<script>
export default {

  transition: "intro",

  data() {
    return {
      posts: null
    }
  },
  async fetch() {
    this.posts = await this.$content()
      .fetch()
  }
}
</script>

<style lang="scss">
$t-duration: 800ms;
$t-delay: 300ms;

.intro-enter-active,
.intro-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #05182d;
  }

  &::after {
    top: 50%;
    background-color: #05182d;
  }
}

.intro-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.intro-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.intro-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.intro-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>
