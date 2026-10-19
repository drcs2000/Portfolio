export default defineNuxtConfig({
  compatibilityDate: '2026-10-19',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'pt', language: 'pt-BR', name: 'Português', file: 'pt.json' }
    ]
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 128
    }
  },
  typescript: {
    typeCheck: true
  }
})
