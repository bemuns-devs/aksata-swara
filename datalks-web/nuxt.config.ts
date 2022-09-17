import { transformerDirectives } from 'unocss'
import { imagetools } from 'vite-imagetools'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.sass',
  ],
  app: {
    head: {
      titleTemplate: '%s | Datalks UNS',
      meta: [
        { name: 'description', content: 'Website Resmi Pusat Informasi dan Publikasi Data BEM UNS Kementerian Riset dan Data BEM UNS 2022 Kabinet Aksata Swara' },
      ],
      htmlAttrs: {
        lang: 'id',
      }
    },
  },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/nuxt'
  ],
  vite: {
    plugins: [
      imagetools()
    ]
  },
  content: {
    defaultLocale: 'id'
  },
  unocss: {
    transformers: [
      transformerDirectives()
    ]
  }
})
