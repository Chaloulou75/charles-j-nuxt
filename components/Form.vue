<template>
  <div
    class="flex flex-col items-center max-w-md px-3 py-10 mx-auto mt-3 mb-8 bg-gray-100 border border-gray-500 rounded-lg shadow-xl dark:border-gray-300 dark:bg-bluefonce lg:max-w-xl lg:px-4"
  >
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <p class="hidden">
        <label
          >Don’t fill this out if you’re human: <input name="bot-field"
        /></label>
      </p>
      <div>
        <label
          class="text-sm font-bold text-gray-800 dark:text-gray-200"
          for="username"
          >{{ $t("nometprenom") }}:
          <input
            class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg shadow-md focus:shadow-outline ring-offset-2 focus:outline-none focus:ring-4 focus:ring-bluefonce focus:ring-opacity-30 dark:focus:ring-blue-300"
            type="text"
            name="username"
            id="username"
        /></label>
      </div>
      <div class="mt-8">
        <label
          class="text-sm font-bold text-gray-800 dark:text-gray-200"
          for="email"
          >Email:
          <input
            type="email"
            name="email"
            id="email"
            class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg shadow-md focus:shadow-outline ring-offset-2 focus:outline-none focus:ring-4 focus:ring-bluefonce focus:ring-opacity-30 dark:focus:ring-blue-300"
        /></label>
      </div>
      <div class="mt-8">
        <label
          class="text-sm font-bold text-gray-800 dark:text-gray-200"
          for="sujet"
          >{{ $t("sujet") }}:
          <input
            type="text"
            name="sujet"
            id="sujet"
            class="w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg shadow-md focus:shadow-outline ring-offset-2 focus:outline-none focus:ring-4 focus:ring-bluefonce focus:ring-opacity-30 dark:focus:ring-blue-300"
        /></label>
      </div>
      <div class="mt-8">
        <label
          class="text-sm font-bold text-gray-800 dark:text-gray-200"
          for="message"
          >{{ $t("message") }}:
          <textarea
            name="message"
            id="message"
            class="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg shadow-md focus:shadow-outline ring-offset-2 focus:outline-none focus:ring-4 focus:ring-bluefonce focus:ring-opacity-30 dark:focus:ring-blue-300"
          ></textarea
        ></label>
      </div>

      <div class="mt-8">
        <button
          type="submit"
          class="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase transition duration-100 rounded-lg shadow-lg focus:shadow-outline bg-bluefonce ring-offset-2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-bluefonce focus:ring-opacity-30 dark:bg-gray-200 dark:text-bluefonce dark:hover:bg-gray-300 dark:focus:ring-blue-300"
        >
          {{ $t("envoyer") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>
