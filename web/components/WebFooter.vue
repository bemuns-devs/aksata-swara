<template>
  <footer class="flex flex-col lg:flex-row-reverse lg:justify-evenly lg:items-start gap-8 bg-secondary p-8">
    <NuxtLink
      to="/"
      class="flex items-center gap-2"
    >
      <BrandSVG class="shrink-0 w-12 h-12 brightness-0 invert" />
      <span class="text-xl text-white text-center font-bold font-brand">Aksata Swara</span>
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
            <li
              v-for="el in unitPlatforms"
              :key="el.id"
            >
              <a
                :href="el.link"
                target="_blank"
              >
                {{ el.name }}
              </a>
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

<script lang="ts" setup>
import { UnitPlatformInList, UnitPlatforms } from '~~/services/cms';

const { data: unitPlatforms } = await useAsyncData('unit-platforms', () => UnitPlatforms.list(), { default: () => [] as UnitPlatformInList[] });
</script>

<style lang="sass" scoped>
footer
  .nav-list
    h2
      @apply text-gray-700 font-normal mb-2
    ul
      @apply flex flex-col gap-2
      li
        @apply text-primary font-medium hover:underline

  .legal
    @apply text-gray-700 font-normal
</style>
