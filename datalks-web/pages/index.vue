<script lang="ts" setup>
import { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';
import { resolveAsset } from '~~/utils/content'

interface HomePageInfo extends MarkdownParsedContent {
  hero: {
    coverImg: string;
  };
}

const { data } = await useAsyncData(() => queryContent<HomePageInfo>('/home-page').findOne())
const imgCover = useContentAsset(() => data.value.hero.coverImg, '?webp&w=640')

useHead({
  title: 'Beranda'
})
</script>

<template>
  <div>
    <header class="w-full h-70vh bg-slate-300">
      <img :src="imgCover" :alt="data.title" class="w-full h-full">
    </header>

    <main>
      <section>
        <ContentList path="/surveys" v-slot="{ list }">
          <ul class="flex gap-4 p-4 overflow-x-scroll">
            <li v-for="item in list" :key="item._id">
              <SurveyCard :title="item.title" :img-src="item.image" :url="item._path" />
            </li>
          </ul>
        </ContentList>
      </section>

      <section>
        <ContentList path="/blogs" v-slot="{ list }">
          <ul>
            <li v-for="item in list" :key="item._id">
              <BlogCard :title="item.title" :img-src="item.image" :summary="item.description"
                :date="new Date(item.date)" :url="item._path" />
            </li>
          </ul>
        </ContentList>
      </section>
    </main>
  </div>
</template>
