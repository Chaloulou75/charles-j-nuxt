<template>
  <div>
    <button
      class="py-2 mt-4 text-xl bg-gray-800 rounded outline-none hover:text-green-500 focus:outline-none"
      @click="show = !show">
      {{ $t('whatshere') }}
    </button>
    <transition name="fade">
      <p v-if="show" class="py-2 text-xl tracking-wide">
       {{$t('compotrans')}}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
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
