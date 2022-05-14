<template>
  <nav
    class="sticky top-0 flex justify-between items-center bg-white/80 backdrop-blur-lg px-6 py-4 transition-shadow duration-300"
    :class="{'border-b border-slate-100 shadow': y > 0}"
  >
    <div>
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
      >
        <BrandSVG class="w-12 h-12" />
        <span class="text-xl text-brand-1 text-center font-bold font-brand-title hidden lg:block">Aksata Swara</span>
      </NuxtLink>
    </div>

    <div class="lg:hidden">
      <button class="flex justify-center items-center p-2">
        <MenuIcon class="w-6 h-6 text-gray-700" />
      </button>
    </div>

    <ul class="hidden lg:flex items-center gap-4">
      <li>
        <NuxtLink
          to="/"
          class="nav-item"
        >
          Beranda
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          to="/about"
          class="nav-item"
        >
          Tentang
        </NuxtLink>
      </li>

      <li>
        <button class="nav-item">
          Unit
        </button>
      </li>

      <li class="ml-4">
        <NuxtLink
          to="#"
          class="nav-item--primary"
        >
          Masukkan Kode Info
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { MenuIcon } from '@heroicons/vue/solid';
import { useWindowScroll } from '@vueuse/core';

const {y} = useWindowScroll()
</script>

<style lang="sass">
nav
  .nav-item
    @apply flex gap-2 hover:bg-slate-100/60 px-3 py-1 rounded-md
    
    &--primary
      @apply  flex gap-2 text-white font-semibold bg-brand-1 hover:bg-violet-700 px-4 py-2.5 rounded-lg
</style>