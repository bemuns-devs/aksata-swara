<template>
  <div class="flex flex-col min-h-screen">
    <WebNavbar />
    <NuxtPage class="grow" />
    <WebFooter />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Beranda',
  titleTemplate: '%s | BEM UNS 2022 Aksata Swara',
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  meta: [
    {
      name: 'description',
      content: 'Official Website BEM UNS',
    },
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: '',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap',
      rel: 'stylesheet',
    },
  ],
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-H9PQDQ4F8C',
    },
    {
      children: 'window.dataLayer ||= [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());gtag(\'config\', \'G-H9PQDQ4F8C\');',
    },
  ],
});
</script>
