<template>
  <div class="flex flex-col items-center max-w-md px-3 py-10 mx-auto mt-3 mb-8 bg-gray-100 border border-gray-500 rounded-lg shadow-xl dark:border-gray-300 lg:px-4 lg:max-w-xl dark:bg-bluefonce">
    <form name="contact" action="POST" data-netlify="true" data-netlify-recaptcha="true">
    <div>
      <label class="text-sm font-bold text-gray-800 dark:text-gray-200" for="username">{{ $t('nometprenom')}}:</label>
      <input class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:shadow-outline focus:ring-4 dark:focus:ring-blue-300 focus:ring-bluefonce ring-offset-2 focus:ring-opacity-30" type="text" name="username" id="username">
    </div>
    <div class="mt-8">
      <label class="text-sm font-bold text-gray-800 dark:text-gray-200" for="email">Email:</label>
      <input  type="email" name="email" id="email" class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:shadow-outline focus:ring-4 dark:focus:ring-blue-300 focus:ring-bluefonce ring-offset-2 focus:ring-opacity-30">
    </div>
    <div class="mt-8">
      <label class="text-sm font-bold text-gray-800 dark:text-gray-200" for="sujet">{{$t('sujet')}}:</label>
      <input type="text" name="sujet" id="sujet" class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:shadow-outline focus:ring-4 dark:focus:ring-blue-300 focus:ring-bluefonce ring-offset-2 focus:ring-opacity-30">
    </div>
    <div class="mt-8">
      <label class="text-sm font-bold text-gray-800 dark:text-gray-200" for="message">{{$t('message')}}:</label>
      <textarea name="message" id="message" class="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:shadow-outline focus:ring-4 dark:focus:ring-blue-300 focus:ring-bluefonce ring-offset-2 focus:ring-opacity-30"></textarea>
    </div>

    <div data-netlify-recaptcha="true" class="mt-8"></div>

    <div class="mt-8">
      <button type="submit"
        class="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase transition duration-100 rounded-lg shadow-lg dark:text-bluefonce bg-bluefonce dark:bg-gray-200 hover:bg-blue-800 dark:hover:bg-gray-300 focus:outline-none focus:shadow-outline focus:ring-4 dark:focus:ring-blue-300 focus:ring-bluefonce ring-offset-2 focus:ring-opacity-30">
        {{$t('envoyer')}}
      </button>
    </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>
