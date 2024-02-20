// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n'
  ],
  googleFonts: {
    families: {
      Montserrat: true,
      Lato: true,
      'Courier Prime': true,
      'Roboto Slab': true,
      'Roboto Mono': true,
      Raleway: true,
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },

})
