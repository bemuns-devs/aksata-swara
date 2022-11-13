<script lang="ts" setup>
interface Props {
  title: string;
  image: string;
  value: any;
  periodStart?: Date;
  periodEnd?: Date;
}

defineProps<Props>();
</script>

<template>
  <div class="px-4 py-6">
    <h1 class="text-4xl text-stone-900 font-bold">
      {{ title }}
    </h1>
  </div>

  <img :src="image" :alt="title">

  <div class="prose p-4">
    <ContentRenderer :value="value" />
  </div>

  <hr class="h-2 bg-slate-300" />

  <div class="flex p-4 gap-4">
    <slot name="actions" />
  </div>
</template>
