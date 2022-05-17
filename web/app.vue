<template>
  <Head>
    <Link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />
    <Link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />
    <Link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />
    <Link
      rel="manifest"
      href="/site.webmanifest"
    />
    <Link
      rel="mask-icon"
      href="/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <Meta
      name="msapplication-TileColor"
      content="#da532c"
    />
    <Meta
      name="theme-color"
      content="#ffffff"
    />
    <Link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <Link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossorigin=""
    />
    <Link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
      rel="stylesheet"
    />
  </Head>

  <div class="flex flex-col w-full min-h-screen">
    <WebNavbar />

    <NuxtPage class="grow" />

    <WebFooter />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Beranda',
  titleTemplate: '%s | BEM UNS 2022 Aksata Swara',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
});
</script>
