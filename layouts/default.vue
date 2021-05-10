<template>
    <div class="relative min-h-screen overflow-x-hidden text-gray-900 bg-gray-100 bg-center bg-cover content-wrapper dark:text-gray-100 font-ubuntu dark:bg-bluefonce bg-texture bg-blend-multiply">
      <Navigation />
      <Nuxt />
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.content-wrapper{
  transition: background-color .2s;
}
</style>
