import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      DirectusURL: process.env.NUXT_DIRECTUS_URL,
      DirectusToken: process.env.NUXT_DIRECTUS_TOKEN,
    },
  },
  css: [
    '@/assets/styles/main.sass',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
});
