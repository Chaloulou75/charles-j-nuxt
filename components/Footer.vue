<template>
  <footer class="text-gray-800 bg-transparent dark:text-white">
    <div class="container flex items-center justify-between px-4 py-8 mx-auto lg:px-10">
      <div class="text-xs font-normal leading-relaxed tracking-wide text-gray-800 dark:text-gray-300">
        &copy; Charles Jeandey &bull; {{ new Date().getFullYear() }}<br> {{$t('footer')}}.
      </div>

      <div class="grid grid-flow-col grid-cols-4 gap-4 py-4">
        <div class="flex items-center justify-center h-full">
          <Mailto mail="c.jeandey@gmail.com" class="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
              <LazyLogosGmail class="w-6 h-6" fill="#EA4335" />
              <span class="sr-only">email</span>
          </Mailto>
        </div>
        <div class="flex items-center justify-center h-full">
          <a href="https://twitter.com/CarlitosBuck" target="_blank" rel=”noreferrer” class="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
              <LazyLogosTwitter class="w-6 h-6" fill="#1DA1F2" />
              <span class="sr-only">Twitter</span>
            </a>
        </div>
        <div class="flex items-center justify-center h-full">
          <a href="https://www.linkedin.com/in/charles-jeandey" target="_blank" rel=”noreferrer” class="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
            <LazyLogosLinkedin class="w-6 h-6" fill="#0A66C2" />
            <span class="sr-only">linkedin</span>
          </a>
        </div>
        <div class="flex items-center justify-center h-full">
          <a href="https://github.com/Chaloulou75" target="_blank" rel=”noreferrer” class="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100">
              <LazyLogosGithub class="w-6 h-6 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100" fill="currentColor" />
              <span class="sr-only">Github</span>
            </a>
        </div>
      </div>
    </div>
  </footer>
</template>
