export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: 'universal',
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
      { hid: 'description', name: 'description', content: 'Développeur web Laravel | Vuejs / Nuxtjs | TailwindCss' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap', crossorigin },
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
    '~/plugins/router',
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
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

  gtm: {
    id: 'GTM-N3HDGBJ'
  },

  pageTransition: {
    name: 'layout',
    mode: 'out-in'
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', iso: 'en-US', name: 'En', file: 'en-US.js' },
      { code: 'es', iso: 'es-ES', name: 'Es', file: 'es-ES.js' },
      { code: 'fr', iso: 'fr-FR', name: 'Fr', file: 'fr-FR.js' },
    ],
    skipSettingLocaleOnNavigate: true,
    lazy: true,
    langDir: "lang/",
  },

  optimizedImages: {
    optimizeImages: true
  },

  tailwindcss: {
    jit: true
  },

  sitemap: {
    hostname: 'https://charles-jeandey.com',
    gzip: true,
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
  },

  pwa: {
    manifest: {
      theme_color: '#FFDF00'
    }
  },

}
