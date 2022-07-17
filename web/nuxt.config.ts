import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      APIBaseUrl: process.env.DIRECTUS_URL,
    },
  },
  css: [
    '@/assets/css/main.sass',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
});
