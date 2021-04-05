<template>
  <div class="flex flex-col items-center max-w-lg px-6 py-6 mx-auto mt-3 mb-8 bg-gray-100 rounded-lg shadow-md">
    <form name="contact" action="POST" data-netlify="true" data-netlify-recaptcha="true">
    <div>
      <label class="text-sm font-bold text-gray-600" for="username">Prénom et Nom:</label>
      <input class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="username" id="username">
    </div>
    <div class="mt-8">
      <label class="text-sm font-bold text-gray-600" for="email">Email:</label>
      <input  type="email" name="email" id="email" class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline">
    </div>
    <div class="mt-8">
      <label class="text-sm font-bold text-gray-600" for="sujet">Sujet:</label>
      <input type="text" name="sujet" id="sujet" class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline">
    </div>
    <div class="mt-8">
      <label class="text-sm font-bold text-gray-600" for="message">Message:</label>
      <textarea name="message" id="message" class="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
    </div>

    <div data-netlify-recaptcha="true"></div>

    <div class="mt-8">
      <button type="submit"
        class="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase transition duration-100 rounded-lg shadow-lg bg-bluefonce hover:bg-blue-800 focus:outline-none focus:shadow-outline">
        Envoyer
      </button>
    </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>
