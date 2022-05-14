<template>
  <footer class="flex flex-col lg:flex-row-reverse lg:justify-evenly lg:items-start gap-8 bg-brand-2 p-8">
    <NuxtLink
      to="/"
      class="flex items-center gap-2"
    >
      <BrandSVG class="shrink-0 w-12 h-12 brightness-0 invert" />
      <span class="text-xl text-white text-center font-bold font-brand-title">Aksata Swara</span>
    </NuxtLink>

    <div class="flex flex-col gap-8">
      <div class="flex flex-wrap gap-8 lg:gap-32">
        <div class="nav-list">
          <h2>Navigasi</h2>
          <ul>
            <li>
              <NuxtLink to="/">
                Beranda
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">
                Tentang
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blogs">
                Berita
              </NuxtLink>
            </li>        
          </ul>
        </div>

        <div class="nav-list">
          <h2>Unit</h2>
          <ul>
            <li>
              <NuxtLink to="#">
                Datalks
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">
                Desamitra
              </NuxtLink>
            </li>       
          </ul>
        </div>
      </div>

      <div class="legal">
        <p>All rights reserved © 2022 BEM UNS Developers</p>
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
footer
  .nav-list
    h2
      @apply text-gray-700 font-light mb-2
    ul
      @apply flex flex-col gap-2
      li
        @apply text-gray-900 font-medium hover:underline
  
  .legal
    @apply text-gray-700 font-light
</style>