<template>
  <nav
    class="sticky top-0 z-10 flex justify-between items-center bg-white/60 backdrop-blur px-6 py-4 transition duration-500"
    :class="{'bg-primary-100/30 border-b border-primary-500 shadow': y > 0}"
  >
    <div>
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
      >
        <BrandSVG class="w-12 h-12" />
        <span class="text-xl text-primary text-center font-bold font-brand hidden lg:block">Aksata Swara</span>
      </NuxtLink>
    </div>

    <div class="lg:hidden">
      <button class="btn">
        <MenuIcon class="w-6 h-6 text-gray-700" />
      </button>
    </div>

    <ul class="hidden lg:flex items-center gap-4">
      <li>
        <NuxtLink
          to="/"
          class="btn"
        >
          Beranda
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          to="/about"
          class="btn"
        >
          Tentang
        </NuxtLink>
      </li>

      <li>
        <button class="btn">
          Unit
        </button>
      </li>

      <li class="ml-4">
        <a
          href="#"
          class="btn btn--filled"
        >
          Masukkan Kode Info
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { MenuIcon } from '@heroicons/vue/solid';
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
</script>
