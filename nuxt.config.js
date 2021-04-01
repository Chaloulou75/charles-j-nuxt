export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Charles Jeandey | Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Développeur web Laravel | VueJS / NuxtJS | TailwindCSS' }
    ],
    link: [
      // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      // { rel: 'manifest', href: '/site.webmanifest' }, //favicon.ico
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=Poppins&display=swap' },
    ]
  },
  //'
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/scroll-out', ssr: false },
    { src: '@/plugins/in-viewport', ssr: false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    "nuxt-compress",
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-protected-mailto',
    '@nuxt/content',
    'nuxt-i18n',
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ],
    '@nuxtjs/sitemap' //toujours en dernier des modules
  ],

  i18n: {
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', iso: 'en-US', name: 'En', file: 'en-US.js' },
      { code: 'fr', iso: 'fr-FR', name: 'Fr', file: 'fr-FR.js' },
      { code: 'es', iso: 'es-ES', name: 'Es', file: 'es-ES.js' }
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: 'fr',
  },

  optimizedImages: {
    optimizeImages: true
  },

  sitemap: {
    hostname: 'https://charles-jeandey.com',
    gzip: true,
  },
  googleAnalytics: {
    id: 'G-D49FKHF6LV'
  },

  content: {
    liveEdit: false
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    html: {
      minify: {
        decodeEntities: false
      }
    }
  }

}
