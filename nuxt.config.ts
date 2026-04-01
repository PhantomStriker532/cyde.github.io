export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt'
  },
  routeRules: {
    '/**': { prerender: true }
  }
})
