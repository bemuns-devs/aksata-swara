<script lang="ts" setup>
const st = useRootLayoutState();
</script>

<template>
  <div id="app" class="flex flex-col">
    <NuxtLoadingIndicator />
    <nav class="sticky top-0 z-100 bg-white p-4 shadow-xl flex">
      <NuxtLink to="/" class="flex items-center gap-2 p-2 pr-4 hover:bg-stone-100 active:bg-stone-200">
        <div class="relative block w-10 h-10 overflow-hidden">
          <img src="./assets/img/brand-datalks.png?webp&w=40" alt="Logo Datalks"
            class="absolute object-cover w-150% h-150% inset-1/2 -translate-1/2">
        </div>
        <span class="text-lg text-stone-700 tracking-widest">DATALKS</span>
      </NuxtLink>

      <div class="grow"></div>

      <div class="flex items-center gap-4">
        <NuxtLink v-if="st.surveyLink" :href="(st.surveyLink)" target="_blank"
          class="bg-amber-400 hover:bg-amber-300 active:bg-amber-500 px-4 py-3 text-white font-medium flex items-center gap-2 rounded-lg">
          <div class="i-akar-icons:edit"></div>
          <span>Isi survey</span>
        </NuxtLink>
      </div>
    </nav>

    <NuxtPage class="grow" />

    <hr class="h-4 bg-slate-300" />

    <footer class="bg-amber-700 p-4 text-center text-sm text-white">
      <span class="block">© 2022 Datalks</span>
      <span class="block">All rights reserved</span>
    </footer>
  </div>
</template>
