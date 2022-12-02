<script lang="ts" setup>
interface Props {
  title: string;
  image: string;
  value: any;
  periodStart?: Date;
  periodEnd?: Date;
}

defineProps<Props>();

const { y } = useWindowScroll();
</script>

<template>
  <div class="px-4 py-6">
    <h1 class="text-4xl text-stone-900 font-bold">
      {{ title }}
    </h1>
  </div>

  <div class="overflow-hidden w-full h-70vh bg-slate">
    <img :src="image" :alt="title" class="w-full h-full object-cover transform"
      :style="{ '--un-translate-y': `${y / 2}px` }">
  </div>

  <div class="prose p-4 max-w-none">
    <ContentRenderer :value="value" />
  </div>

  <hr class="h-2 bg-slate-300" />

  <div class="flex p-4 gap-4">
    <slot name="actions" />
  </div>
</template>

<style lang="sass" scoped>
:deep(iframe)
  @apply w-full min-h-60vh
</style>
