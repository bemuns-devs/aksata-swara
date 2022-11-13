<script lang="ts" setup>
import { SecureVersion } from 'tls';
import { isBetween } from '~~/utils/date';

interface Props {
  title: string;
  imgSrc: string;
  url: string;
  periodStart?: Date;
  periodEnd?: Date;
}

type SurveyStatus = 'open' | 'closed' | 'upcoming';

const props = defineProps<Props>();

const imgUrl = useContentAsset(() => props.imgSrc, '?webp&w=320');

const status = computed<SurveyStatus>(() => {
  const now = new Date();

  if (props.periodStart && props.periodEnd) {
    if (isBetween(now, props.periodStart, props.periodEnd)) {
      return 'open';
    } else if (now < props.periodStart) {
      return 'upcoming';
    } else {
      return 'closed';
    }
  }

  return 'open';
});
</script>

<template>
  <article class="group relative h-full max-h-25vh aspect-5/3 bg-slate-300 overflow-hidden rounded-lg shadow">
    <img :src="imgUrl" :alt="`Gambar thumbnail '${title}'`" loading="lazy">
    <NuxtLink :to="url" class="absolute inset-0 block flex flex-col">
      <div class="flex justify-end">
        <span v-if="status === 'open'" class="label bg-emerald-400 text-white">
          Sedang berlangsung
        </span>
        <span v-else-if="status === 'upcoming'" class="label bg-amber-500 text-white">
          Sedang berlangsung
        </span>
      </div>

      <div class="grow"></div>

      <div
        class="p-2 group-hover:pb-12 h-1/2 group-hover:h-full bg-gradient-to-t from-amber-900 via-slate-900/40 group-hover:via-slate-900/60 flex flex-col justify-end transition-height,padding">
        <h3 class="text-lg font-bold text-white tracking-wide group-hover:underline">{{ title }}</h3>
      </div>
    </NuxtLink>
  </article>
</template>

<style lang="sass" scoped>
.label
  @apply text-sm px-2 py-1 rounded-bl-lg shadow-md
</style>
