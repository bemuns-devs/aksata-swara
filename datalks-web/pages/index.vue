<script lang="ts" setup>
import { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';
import 'animate.css';

interface HomePageInfo extends MarkdownParsedContent {
  hero: {
    title: string;
    subtitle: string;
  };
}

const { data } = await useAsyncData(() => queryContent<HomePageInfo>('/home-page').findOne());
const { y } = useWindowScroll();

useHead({
  title: 'Beranda'
})
</script>

<template>
  <div>
    <template v-if="data">
      <header class="relative w-full h-70vh bg-slate-500 overflow-hidden">
        <img src="../assets/img/home-cover.png?webp&w=640&imagetools" :alt="data.title"
          class="absolute inset-0 w-full h-full object-cover transform" :style="{ '--un-translate-y': `${y / 6}px` }">

        <div
          class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent px-4 py-12">
          <div class="max-w-prose mb-2 overflow-hidden transform"
            :style="{ '--un-translate-y': `${-y / 4}px`, opacity: 1 - y / 400 }">
            <h1 class="text-4xl font-bold text-white animate__animated animate__fadeInUp animate__faster">
              {{ data.hero.title }}
            </h1>
          </div>
          <div class="max-w-prose overflow-hidden transform"
            :style="{ '--un-translate-y': `${-y / 6}px`, opacity: 1 - y / 500 }">
            <p class="text-amber-300 animate__animated animate__fadeInUp animate__faster [animation-delay:200ms]">
              {{ data.hero.subtitle }}
            </p>
          </div>
        </div>
      </header>

      <main>
        <section class="py-4">
          <div class="p-4 pb-2">
            <h2 class="text-3xl text-stone-900 font-bold transform"
              :style="{ '--un-translate-y': `${Math.max(0, 25 - y / 8)}px` }">
              Survey Kami
            </h2>
          </div>

          <ContentList path="/surveys" :query="{ limit: 5 }" v-slot="{ list }">
            <ul class="flex gap-4 p-4 pb-8 overflow-x-scroll overflow-y-hidden">
              <li v-for="(item, i) in list" :key="item._id" class="h-64 transform"
                :style="{ '--un-translate-y': `${Math.max(0, 50 + (i * 20) - y / 4)}px` }">
                <SurveyCard :title="item.title" :img-src="item.image" :url="item._path"
                  :period-start="new Date(item.periodStart)" :period-end="new Date(item.periodEnd)" />
              </li>

              <NuxtLink href="/surveys"
                class="group h-64 max-h-25vh aspect-5/3 flex flex-col justify-center bg-white hover:bg-amber-100 active:bg-amber-200 border-2 border-amber rounded-lg transform"
                :style="{ '--un-translate-y': `${Math.max(0, 50 + (list.length * 20) - y / 4)}px` }">
                <span class="self-center text-lg text-amber-600 font-medium flex items-center gap-2">
                  <span>Lihat survey lainnya</span>
                  <div class="i-akar-icons:arrow-right group-hover:translate-x-2 transition-transform"></div>
                </span>
              </NuxtLink>
            </ul>
          </ContentList>
        </section>

        <section class="bg-amber-100 py-4">
          <div class="p-4 pb-2">
            <h2 class="text-3xl text-stone-900 font-bold">Berita</h2>
          </div>

          <BlogGrid :query="{ limit: 7 }" />

          <div class="flex p-4 pt-8">
            <NuxtLink href="/blogs"
              class="bg-amber-400 hover:bg-amber-300 active:bg-amber-500 px-4 py-3 text-white font-medium flex items-center gap-2 rounded-lg">
              <span>Lihat berita lainnya</span>
              <div class="i-akar-icons:arrow-right group-hover:translate-x-2 transition-transform"></div>
            </NuxtLink>
          </div>
        </section>
      </main>
    </template>

    <template v-else>
      Loading...
    </template>
  </div>
</template>
