<script lang="ts" setup>
interface Props {
  title: string;
  imgSrc: string;
  summary: string;
  date: Date;
  url: string;
}

const props = defineProps<Props>()

const imgUrl = useContentAsset(() => props.imgSrc, '?webp&w=320')
</script>

<template>
  <article>
    <NuxtLink :to="url" class="relative h-48 flex gap-2 p-4 overflow-hidden rounded-lg">
      <img :src="imgUrl" :alt="`Gambar thumbnail '${title}'`" loading="lazy" class="w-2/5 bg-slate-300">
      <div class="flex flex-col">
        <span>{{ date.toLocaleDateString('id-ID', {dateStyle: 'long'}) }}</span>
        <h3>{{ title }}</h3>
        <p>{{ summary }}</p>
      </div>
    </NuxtLink>
  </article>
</template>
