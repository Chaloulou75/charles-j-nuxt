<template>
  <div>
    <button
      class="py-2 mt-4 bg-gray-800 rounded outline-none hover:text-green-500 focus:outline-none"
      @click="show = !show">
      Qu'il y a t-il ici?
    </button>
    <transition name="fade">
      <p v-if="show" class="py-2 tracking-wide">
       Juste un petit toogle avec une transition smoothie
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
