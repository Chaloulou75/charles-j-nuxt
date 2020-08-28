<template>
  <div class="flex justify-between w-full px-8 py-8 text-gray-900 bg-gray-200 border-green-700 border-t-14" :class="{ 'absolute w-full top-0 left-0': menu }">
    <div class="container flex flex-wrap sm:mx-auto">
      <div class="w-auto p-6">
        <!-- Title -->
        <h1 class="hidden font-semibold text-green-700 uppercase sm:block">Charles Jeandey</h1>
        <!-- Icon -->
        <div class="block font-semibold text-green-700 uppercase sm:hidden">
          C J
        </div>
      </div>
      <!-- Desktop nav list -->
      <nav class="hidden sm:block">
        <ul class="flex">
          <li
            v-for="(item, index) in items"
            :key="index"
          >
            <a :href="item.href" class="block p-6 hover:text-green-700">{{ item.title }}</a>
          </li>
        </ul>
      </nav>
      <!-- Toggle menu mobile icon -->
      <div class="p-6 ml-auto sm:hidden" @click="menu = !menu">
        icon burger
      </div>
    </div>
    <!-- Mobile nav list -->
    <nav v-show="menu" class="w-full">
      <ul class="flex flex-col text-center">
        <li
          v-for="(item, index) in items"
          :key="index"
        >
          <a :href="item.href" class="block p-6 hover:text-green-700">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      items: [
        {
          title: 'Home',
          href: '#home'
        },
        {
          title: 'Works',
          href: '#works'
        },
        {
          title: 'Contact',
          href: '#contact'
        },
        {
          title: 'Blog',
          href: '/blog'
        }
      ]
    }
  }
}
</script>
