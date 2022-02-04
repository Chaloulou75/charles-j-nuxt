<template>
  <div
    class="relative min-h-screen px-2 overflow-x-hidden text-gray-900 bg-gray-100 content-wrapper font-ubuntu dark:bg-bluefonce dark:text-gray-100"
  >
    <!-- bg-texture bg-center bg-cover bg-blend-multiply-->
    <Navigation />
    <Nuxt />
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.content-wrapper {
  transition: background-color 0.2s;
}
</style>
