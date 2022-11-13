import { imagetools } from 'vite-imagetools'
import { transformerDirectives } from 'unocss';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.sass',
  ],
  app: {
    head: {
      titleTemplate: '%s | Datalks UNS',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'description', content: 'Website Resmi Pusat Informasi dan Publikasi Data BEM UNS Kementerian Riset dan Data BEM UNS 2022 Kabinet Aksata Swara' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
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
    icons: true,
    typography: true,
    transformers: [
      transformerDirectives()
    ]
  }
})
