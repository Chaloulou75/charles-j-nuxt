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
      { hid: 'description', name: 'description', content: 'Développeur web Laravel | VueJS | TailwindCSS' }
    ],
    link: [
      // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      // { rel: 'manifest', href: '/site.webmanifest' }, //favicon.ico
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap'}
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
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
    locales: [
      {
        code: 'en',
        name: 'Eng',
        iso: 'en-US'
      },
      {
        code: 'es',
        name: 'Esp',
        iso: 'es-ES'
      },
      {
        code: 'fr',
        name: 'Fra',
        iso: 'fr-FR'
      }
    ],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        en: {
          welcome: 'Welcome',
          dev : 'Web Developer',
          notblog : 'This is not blog!',
          contact : 'Contact',
          skills : 'Skills',
          contactme : 'Contact me',
          contacttext: 'Want to make your website, or just have a question? Do not hesitate to contact me via <a class="text-green-500 font-bold" href="mailto:c.jeandey@gmail.com"> email </a>. I will answer you as soon as possible.',
          intro: 'Hello! I’m Charles. I spend my days designing and developing web applications.<br> I specialize in the <a class="text-green-500 font-bold" href="https://laravel.com/" target="_blank" rel=”noreferrer”>Laravel PHP framework</a> on the backend, <a class="text-green-500 font-bold" href="https://vuejs.org/" target="_blank" rel=”noreferrer”>Vue.js</a> on the frontend and <a class="text-green-500 font-bold" href="https://tailwindcss.com/" target="_blank" rel=”noreferrer”> Tailwindcss </a> for styling. I also really love working with <a class="text-green-500 font-bold" href="https://nuxtjs.org/" target="_blank" rel=”noreferrer”> NuxtJS</a> recently.',
          projects : 'Here are some projects I\'ve worked on:',
          whatshere : 'What is it here?',
          compotrans : 'Just a small Vue component with a smoothie transition',
          tete : 'But above all, I had to show my face somewhere...',
          persona: 'Website for Julieta, Design creation. Made with VueJS (NuxtJS) and Tailwind CSS',
          apuestamigo : 'Site of football predictions between friends. Made with Laravel, Tailwind, Livewire and Alpine JS. Deployed with Heroku',
          julien : 'Julien Leprêtre website and blog. Made with Laravel, Tailwind, and Vuejs. Deployed with Heroku ',
          carpinto : 'Website where I describe my favorite development tools. Especially for testing VuePress. Deployed with Netlify',
          videogames : 'Site where I use a video game API. Made with NuxtJS and Tailwindcss. Deployed with Netlify ',
          charlesjnuxt : 'Site where you are right now! Made with NuxtJS, Tailwindcss. Deployed with Netlify',
          encore : 'Ok, but tell us more',
          encoretext : 'Self-taught and passionate, I studied (and continue every day) through platforms such as <a class="text-green-500 font-bold" href="https://laracasts.com" target="_blank" rel=”noreferrer”> Laracasts </a> and <a class="text-green-500 font-bold" href = " https://openclassrooms.com "target =" _ blank " rel=”noreferrer”> Openclassrooms </a>, and also thanks to several YouTube channels which taught me a lot and I don’t want to forget to mention (<a class="text-green-500 font-bold" href = "https://www.youtube.com/channel/UCzuaB4F2znrMggxcwUuVhAw" target = "_ blank" rel=”noreferrer”> Les Teachers Du Net </a>, <a class="text-green-500 font-bold" href = "https://www.youtube.com/channel/UCtb40EQj2inp8zuaQlLx3iQ" target = "_ blank" rel=”noreferrer”> André Madarang </a> or <a class="text-green-500 font-bold" href="https://www.youtube.com/channel/UChyW1pwcQT2RA4Q2onfNfpg" target="_blank" rel=”noreferrer”> Thibault Dauce </a> among others).',
          encoretext2 : 'On the other hand, I am a huge fan of <a class="text-green-500 font-bold" href="https://open.spotify.com/artist/2VAvhf61GgLYmC6C8anyX1?si=_VqY9WhHQeG58JX8cc1CaQ" target="_blank" rel=”noreferrer”> Boards Of Canada </a>, and an unbeatable player at <a class="text-green-500 font-bold" href="https://mpg.football/dashboard?lang=fr-FR" target="_blank" rel=”noreferrer”> Mon Petit Gazon </a>!',
          footer : 'All rights reserved'

        },
        es: {
          welcome: 'Bienvenido',
          dev : 'Desarrollador Web',
          notblog : 'Eso no es un blog!',
          contact : 'Contacto',
          skills : 'Habilidades',
          contactme : 'Contáctame',
          contacttext : '¿Quierés que haga tu sitio web o simplemente hacerme una pregunta? No dudes en contactarme a través del <a class="text-green-500 font-bold" href="mailto:c.jeandey@gmail.com"> correo electrónico </a>. Te responderé lo antes posible.',
          intro: '¡Hola! Soy Charles y me dedico al diseño y desarrollo de aplicaciones y sitios web.<br> Me especialicé en el<a class="text-green-500 font-bold" href="https://laravel.com/" target="_blank" rel=”noreferrer”> framework PHP Laravel </a> para el backend, <a class="text-green-500 font-bold" href="https://vuejs.org/" target="_blank" rel=”noreferrer”> Vue.js </a> para el frontend y <a class="text-green-500 font-bold" href="https://tailwindcss.com/" target="_blank" rel=”noreferrer”> Tailwindcss </a> para el estilo. Tambien, me re gusta trabajar con <a class="text-green-500 font-bold" href="https://nuxtjs.org/" target="_blank" rel=”noreferrer”> NuxtJS</a> recientemente.',
          projects : 'Aquí hay algunos proyectos en los que he trabajado:',
          whatshere: '¿Qué hay aquí?',
          compotrans : 'Solo un pequeño componente de Vue con una transición',
          tete : 'Tenía que mostrar mi cara en algun lado...',
          persona: 'Sitio web de Julieta, Diseñadora. Hecho con VueJS (NuxtJS) y Tailwind CSS',
          apuestamigo : 'Sitio de predicciones de fútbol entre amigos. Hecho con Laravel, Tailwind, Livewire y Alpine JS. Implementado con Heroku',
          julien : 'Sitio web de Julien Leprêtre. Hecho con Laravel, Tailwind y Vuejs. Desplegado con Heroku ',
          carpinto : 'Sitio donde describo mis herramientas de desarrollo favoritas. Especialmente para probar VuePress. Implementado con Netlify ',
          videogames : 'Sitio usando una API de videojuegos. Hecho con NuxtJS y Tailwindcss. Implementado con Netlify ',
          charlesjnuxt : '¡Sitio donde estás ahora mismo! Hecho con NuxtJS y Tailwindcss. Implementado con Netlify',
          encore : 'Ok, pero cuéntanos más',
          encoretext : 'Autodidacta y apasionado, me formé (y continúo haciéndolo a diario) en distintas plataformas como <a class="text-green-500 font-bold" href="https://laracasts.com" target="_blank" rel=”noreferrer”> Laracasts </a> y <a class="text-green-500 font-bold" href="https://openclassrooms.com" target="_blank" rel=”noreferrer”> Openclassrooms </a>. También, gracias a varios canales de Youtube, los cuales no quiero dejar de mencionar porque me enseñaron mucho (<a class="text-green-500 font-bold" href="https://www.youtube.com/channel/UCzuaB4F2znrMggxcwUuVhAw" target="_ blank" rel=”noreferrer”> Les Teachers Du Net </a>, <a class="text-green-500 font-bold" href="https://www.youtube.com/channel/UCtb40EQj2inp8zuaQlLx3iQ" target="_ blank" rel=”noreferrer”> André Madarang </a> o <a class="text-green-500 font-bold" href="https://www.youtube.com/channel/UChyW1pwcQT2RA4Q2onfNfpg" target="_blank" rel=”noreferrer”> Thibault Dauce </a> entre otros).',
          encoretext2 : 'Por otro lado, soy un gran admirador de <a class="text-green-500 font-bold" href="https://open.spotify.com/artist/2VAvhf61GgLYmC6C8anyX1?si=_VqY9WhHQeG58JX8cc1CaQ" target="_blank" rel=”noreferrer”> Boards Of Canada </a>, y un jugador inigualable en <a class="text-green-500 font-bold" href="https://mpg.football/dashboard?lang=fr-FR" target="_blank" rel=”noreferrer”> Mon Petit Gazon</a>.',
          footer : 'Todos los derechos reservados'
        },
        fr: {
          welcome: 'Bienvenue',
          dev : 'Développeur Web',
          notblog : 'Ceci n\'est pas un blog!',
          contact : 'Contact',
          skills : 'Compétences',
          contactme : 'Contactez moi',
          contacttext : 'Vous voulez faire votre site web, ou avez simplement une question? N\'hésitez pas à me contacter via <a class="text-green-500 font-bold" href="mailto:c.jeandey@gmail.com">email</a>. Je vous répondrai dés que possible.',
          intro: 'Bonjour! Je suis Charles et je passe mes journées à développer des applications web. <br>Je me suis spécialisé sur le<a class="text-green-500 font-bold" href="https://laravel.com/" target="_blank" rel=”noreferrer”> framework PHP Laravel </a> pour le backend, <a class="text-green-500 font-bold" href="https://vuejs.org/" target="_blank" rel=”noreferrer”> Vue.js </a> pour le frontend et <a class="text-green-500 font-bold" href="https://tailwindcss.com/" target="_blank" rel=”noreferrer”> Tailwindcss </a> pour la stylisation. Aussi, j\'adore travailler avec <a class="text-green-500 font-bold" href="https://nuxtjs.org/" target="_blank" rel=”noreferrer”> NuxtJS</a> ces derniers temps.',
          projects : 'Quelques-uns de mes projets:',
          whatshere: 'Qu\'il y a t-il ici?',
          compotrans : 'Juste un petit composant Vue avec une transition smoothie',
          tete : 'Mais surtout, il fallait bien que je montre ma tête quelque part...',
          persona: 'Site web de Julieta, Creatrice de design. Réalisé avec VueJS (NuxtJS) et Tailwind CSS',
          apuestamigo : 'Site de ligues de pronostics entre amis sur le foot. Réalisé avec Laravel, Tailwind, Livewire et Alpine JS. Déployé avec Heroku',
          julien : 'Site de Julien Leprêtre. Réalisé avec Laravel, Tailwind, et Vuejs. Déployé avec Heroku ',
          carpinto : 'Site où je décris mes outils de développement préférés. Surtout pour tester VuePress. Déployé avec Netlify ',
          videogames : 'Site où j\'utilise une API de jeux videos. Réalisé avec NuxtJS et Tailwindcss. Déployé avec Netlify ',
          charlesjnuxt : 'Site sur lequel vous êtes. Réalisé avec NuxtJS et Tailwindcss. Déployé avec Netlify',
          encore : 'Mais encore?',
          encoretext : 'Autodidacte et passionné, je me suis formé (et continue chaque jour) au travers de plateformes telles que <a class="text-green-500 font-bold" href="https://laracasts.com" target="_blank" rel=”noreferrer”> Laracasts</a> et <a class="text-green-500 font-bold" href="https://openclassrooms.com" target="_blank" rel=”noreferrer”> Openclassrooms</a>, mais aussi via diverses chaines Youtube qui m\'ont beaucoup appris et que je tiens à mentionner ici (<a class="text-green-500 font-bold" href="https://www.youtube.com/channel/UCzuaB4F2znrMggxcwUuVhAw" target="_blank" rel=”noreferrer”> Les Teachers Du Net</a>, <a class="text-green-500 font-bold" href="https://www.youtube.com/channel/UCtb40EQj2inp8zuaQlLx3iQ" target="_blank" rel=”noreferrer”>André Madarang</a> ou encore <a class="text-green-500 font-bold" href="https://www.youtube.com/channel/UChyW1pwcQT2RA4Q2onfNfpg" target="_blank" rel=”noreferrer”>Thibault Dauce</a> entre autres).',
          encoretext2 : 'Par ailleurs, je suis un grand amateur de <a class="text-green-500 font-bold" href="https://open.spotify.com/artist/2VAvhf61GgLYmC6C8anyX1?si=_VqY9WhHQeG58JX8cc1CaQ" target="_blank" rel=”noreferrer”> Boards Of Canada</a>, et un joueur intraitable à <a class="text-green-500 font-bold" href="https://mpg.football/dashboard?lang=fr-FR" target="_blank" rel=”noreferrer”> Mon Petit Gazon</a>!',
          footer : 'Tous droits réservés'
        }
      }
    }
  },

  optimizedImages: {
    optimizeImages: true
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
    }
  }

}
