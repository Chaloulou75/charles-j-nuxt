<template>
  <div>
    <button
      class="py-2 mt-4 text-xl bg-gray-800 rounded outline-none hover:text-green-500 focus:outline-none"
      @click="show = !show">
      {{ $t('whatshere') }}
    </button>
    <transition name="fade">
      <div v-if="show">
        <p class="py-2 text-xl tracking-wide">
          {{ $t('compotrans') }}
        </p>
        <div class="flex flex-col items-center py-4 lg:flex-row">
          <div class="w-full lg:w-2/3">
              <p class="px-4 text-xl font-semibold tracking-wide text-center"> {{ $t('tete') }}</p>
          </div>
          <div class="w-2/3 mt-3 lg:w-1/3 lg:mt-0">
            <img src="~assets/img/perfil.jpg" alt="profil" class="rounded-lg">
          </div>
        </div>
      </div>
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
