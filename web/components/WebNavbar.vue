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
      <Button>
        <Icon
          icon="heroicons-solid:menu"
          class="w-6 h-6 text-gray-700"
        />
      </Button>
    </div>

    <ul class="hidden lg:flex items-center gap-4">
      <li>
        <Button
          label="Beranda"
          to="/"
        />
      </li>

      <li>
        <Button
          label="Tentang"
          to="/about"
        />
      </li>

      <li>
        <Button
          label="Informasi"
          :to="{name: 'blogs'}"
        />
      </li>

      <li>
        <Button label="Unit" />
      </li>

      <li class="ml-4">
        <Button
          label="Masukkan Kode Info"
          to="#"
          filled
        />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const { y } = useWindowScroll();
</script>
