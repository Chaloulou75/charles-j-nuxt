<template>
  <div class="py-16 pb-8 mx-auto text-center container-inner textl-xl">
    <h2 class="mb-8 text-2xl font-bold">Join my Newsletter</h2>

    <div class="w-4/5 mx-auto mb-8">
      <p class="mb-8 text-lg sm:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptatum. Quam, deleniti nulla.</p>

      <form action="#">
        <div class="flex flex-col sm:flex-row">
          <input type="email" name="email" placeholder="Your email address" class="z-10 flex-1 px-4 py-4 leading-normal border rounded shadow outline-none bg-background-form sm:rounded-r-none border-border-color-primary sm:border-r-0 focus:border-green-700" required>
          <button data-element="submit" class="z-10 w-full px-8 py-3 mt-4 text-lg tracking-wide text-white uppercase bg-green-700 rounded shadow flex-2 sm:rounded-l-none focus:outline-none hover:bg-green-800 focus:bg-green-800 sm:w-auto sm:mt-0">
            <span>Subscribe</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
