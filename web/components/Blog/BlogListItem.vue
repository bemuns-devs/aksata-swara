<template>
  <article class="group">
    <NuxtLink
      :to="{name: 'blogs-slug--id', params: {blogs: 'blogs', slug: slug, id: id}}"
      class="flex gap-4 p-2 group-hover:bg-secondary/5 rounded-lg focus:ring active:ring ring-secondary-100 transition"
    >
      <div class="shrink-0 h-24 lg:h-32 aspect-[7/5] lg:aspect-[9/5] bg-gray-300 border border-secondary-50 overflow-hidden rounded-md">
        <img
          :src="`${thumbnailUrl}?a`"
          :alt="title"
          class="object-cover transition-transform group-hover:scale-110 group-hover:rotate-2"
        >
      </div>
      <div class="flex flex-col justify-center">
        <h5 class="text-gray-700 line-clamp-2 font-bold">
          {{ title }}
        </h5>
        <div class="text-sm text-gray-500 flex items-center divide-x divide-gray-300">
          <span class="shrink break-all line-clamp-1 pr-2">Kementrian Media dan Komunikasi</span>
          <time class="shrink-0 pl-2 font-light">{{ createdAt.toLocaleDateString() }}</time>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>
import { paramCase } from 'change-case';

const props = defineProps<{
  id: string;
  title: string;
  thumbnailUrl: string;
  createdAt: Date;
}>();

const slug = computed(() => paramCase(props.title));
</script>
