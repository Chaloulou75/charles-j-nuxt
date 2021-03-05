<template>
    <div class="relative min-h-screen overflow-x-hidden text-gray-900 bg-gray-100 content-wrapper dark:text-gray-100 font-hachi dark:bg-bluefonce">
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
  transition: background-color .25s;
}
</style>
