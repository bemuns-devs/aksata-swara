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
    <NuxtLink :to="url"
      class="group relative h-48 hover:bg-amber-50 active:bg-amber-100 flex gap-2 p-4 overflow-hidden rounded-lg">
      <div class="w-2/5 min-w-36 h-full bg-slate">
        <img :src="imgUrl" :alt="`Gambar thumbnail '${title}'`" loading="lazy" class="w-full h-full object-cover">
      </div>
      <div class="grow flex flex-col">
        <span class="text-sm text-stone-500">
          {{ date.toLocaleDateString('id-ID', { dateStyle: 'long' }) }}
        </span>
        <h3 class="text-xl text-stone-900 font-bold">
          {{ title }}
        </h3>
        <p class="text-stone-700">
          {{ summary }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
