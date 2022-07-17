<template>
  <article class="blog-card">
    <NuxtLink
      :title="title"
      :to="{name: 'blogs-slug', params: {slug}}"
      class="click-helper"
    />
    <div class="thumbnail">
      <img
        :src="`${imgSrc}?width=500`"
        :alt="title"
      >
    </div>
    <h5 class="title">
      {{ title }}
    </h5>
    <div class="subtitle">
      <span class="author">Kementrian Media dan Komunikasi</span>
      <time class="">{{ date.toLocaleDateString() }}</time>
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  imgSrc: string;
  slug: string;
  date: Date;
}>();
</script>

<style lang="sass">
.blog-card
  @apply shrink-0 relative flex flex-col overflow-hidden
  @apply h-72 max-h-full aspect-[6/5] px-4 py-3 bg-white rounded-lg border border-gray-50 shadow transition
  &:hover
    @apply bg-secondary-50 border-transparent shadow-lg
    .subtitle
      @apply text-secondary-700 divide-secondary-300
    .thumbnail
      img
        @apply scale-105 rotate-2
  &:focus,
  &:active
    @apply bg-secondary-100 border-secondary-300 ring ring-secondary-300
  &:active
    @apply shadow-none
  .click-helper
    @apply absolute inset-0 w-full h-full
  .thumbnail
    @apply grow w-full rounded-md overflow-hidden pointer-events-none
    img
      @apply h-full object-cover transition-transform
  .title
    @apply shrink-0 text-ellipsis line-clamp-2 font-medium flex items-center pt-2 pb-1 overflow-hidden
  .subtitle
    @apply text-sm text-gray-500 flex items-center divide-x divide-gray-300
    .author
      @apply shrink break-all line-clamp-1 pr-2
    time
      @apply shrink-0 pl-2 font-light
</style>
