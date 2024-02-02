// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'], // https://tailwindcss.nuxtjs.org/
  app: {
    head: {
      title: 'Yeow fake shop',
      meta: [
        {name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
})
