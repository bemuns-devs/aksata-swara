<script lang="ts" setup>
interface Props {
  title: string;
  imgSrc: string;
  url: string;
}

const props = defineProps<Props>()

const imgUrl = useContentAsset(() => props.imgSrc, '?webp&w=320')
</script>

<template>
  <article class="relative w-lg h-64 bg-slate-300 overflow-hidden rounded-lg">
    <img :src="imgUrl" :alt="`Gambar thumbnail '${title}'`" loading="lazy">
    <NuxtLink :to="url" class="absolute inset-0">
      <h3>{{ title }}</h3>
    </NuxtLink>
  </article>
</template>
