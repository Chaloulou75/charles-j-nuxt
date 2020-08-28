<template>
  <div class="pt-16 contact-me bg-background-secondary">
    <div class="relative pb-4 mx-auto text-xl container-inner">
      <h2 class="mb-6 font-bold" id="contact">Contact me:</h2>

      <div class="absolute top-0 right-0" style="transform: translate(100%) rotate(180deg)">
        <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
      </div>

      <p class="mb-12">Static sites cannot submit forms on their own. However, services like <a href="https://www.netlify.com/docs/form-handling">Netlify Forms</a> or <a href="https://formspree.io">FormSpree</a> can help you do this without a backend.</p>

      <div class="mb-16 text-lg sm:text-lg">
        <form action="#" class="mb-12">
          <div class="flex flex-wrap mb-6 -mx-4">
              <div class="w-full px-4 mb-6 md:w-1/2 md:mb-0">
                  <label class="block mb-2 text-copy-primary" for="name">
                      Name
                  </label>

                  <input type="text" name="name" id="name" placeholder="Jon Snow" class="block w-full p-4 mb-2 border rounded shadow outline-none bg-background-form border-border-color-primary focus:border-green-700" required>
              </div>

              <div class="w-full px-4 md:w-1/2">
                  <label class="block mb-2 text-copy-primary" for="email">
                      Email Address
                  </label>

                  <input type="email" name="email" id="email" placeholder="email@example.com"  class="block w-full p-4 mb-2 border rounded shadow outline-none bg-background-form border-border-color-primary focus:border-green-700" required>
              </div>
          </div>

          <div class="w-full mb-12">
              <label class="block mb-2 text-copy-primary" for="message">
                  Message
              </label>

              <textarea id="message" rows="5" name="message" class="block w-full px-4 py-4 mb-2 border rounded shadow outline-none appearance-none bg-background-form border-border-color-primary focus:border-green-700" placeholder="Enter your message here." required></textarea>
          </div>

          <div class="flex justify-end w-full">
              <input type="submit" value="Submit" class="block px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase bg-green-700 rounded shadow cursor-pointer hover:bg-green-800">
          </div>
      </form>
      </div>
    </div>
  </div> <!-- end contact-me -->
</template>
