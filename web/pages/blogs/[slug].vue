<template>
  <div class="flex flex-col gap-4">
    <section class="flex flex-col">
      <div class="relative flex flex-col bg-secondary">
        <div class="absolute z-0 inset-x-0 bottom-0 h-28 bg-white" />

        <div class="content-container z-[1] flex flex-col gap-8 px-4 py-12">
          <ul class="flex gap-4">
            <li
              v-for="tag in blog.tags"
              :key="tag"
            >
              <NuxtLink
                :to="{name: 'blogs', query: {tags: [tag]}}"
                class="text-sm text-gray-700 capitalize bg-white hover:bg-secondary-50 px-2 py-0.5 rounded-full border border-secondary-300 ring focus:ring-1 ring-secondary transition"
              >
                {{ tag }}
              </NuxtLink>
            </li>
          </ul>

          <div class="flex flex-col gap-2">
            <h1 class="text-3xl lg:text-5xl text-gray-900 font-bold tracking-wide">
              {{ blog.title }}
            </h1>
            <span class="text-lg text-secondary-900">Kementrian Media dan Komunikasi</span>
          </div>

          <img
            :src="`${getAssetUrl(blog.featured_image)}?width=900`"
            :alt="blog.title"
            class="w-full h-[50vh] lg:h-[70vh] object-cover bg-gray-300 shadow-lg"
          >
        </div>
      </div>

      <div class="content-container flex flex-col lg:flex-row justify-between gap-8 bg-white px-4 pt-4 pb-12">
        <!-- eslint-disable vue/no-v-html -->
        <main
          class="prose lg:prose-lg"
          v-html="marked(blog.content || '')"
        />
        <!-- eslint-enable vue/no-v-html -->

        <aside class="lg:self-start lg:sticky top-1/4 flex lg:flex-col items-center lg:items-end gap-4 lg:pl-8 lg:pr-4 py-4 lg:py-6 border-t-2 lg:border-t-0 lg:border-l-2 border-primary-50">
          <Button
            rounded
            outlined
            @click="onCopy"
          >
            <span>Salin</span>
            <Icon
              icon="heroicons-solid:clipboard-copy"
              class="icon"
            />
          </Button>

          <span class="lg:mr-4">atau</span>

          <Button
            rounded
            outlined
            @click="onShareClick"
          >
            <span>Bagikan</span>
            <Icon
              icon="heroicons-solid:share"
              class="icon"
            />
          </Button>
        </aside>
      </div>
    </section>

    <section class="flex flex-col gap-8 px-4 lg:px-20 py-8 lg:py-12">
      <div class="flex gap-2">
        <h4 class="text-2xl lg:text-3xl text-primary font-bold">
          Informasi Terkait
        </h4>
      </div>

      <ul class="hidden lg:flex gap-4">
        <li
          v-for="el in relatedBlogs"
          :key="el.id"
        >
          <BlogCard
            :title="blog.title"
            :img-src="blog.featured_image"
            :slug="blogFormatter.getSlug(blog)"
            :date="blog.date_created"
          />
        </li>
      </ul>

      <ul class="flex lg:hidden flex-col">
        <li
          v-for="el in relatedBlogs"
          :key="el.id"
          class="group"
        >
          <NuxtLink
            :to="{name: 'blogs-slug', params: {slug: blogFormatter.getSlug(el)}}"
            class="flex gap-4 p-2 group-hover:bg-primary/5 rounded-lg"
          >
            <div class="shrink-0 h-24 aspect-[7/5] bg-gray-300 border border-primary-50 overflow-hidden rounded-md">
              <img
                :src="el.featured_image"
                :alt="el.title"
                class="object-cover transition-transform group-hover:scale-110 group-hover:rotate-2"
              >
            </div>
            <div class="flex flex-col justify-center">
              <h5 class="text-gray-700 font-bold">
                {{ el.title }}
              </h5>
              <div class="text-sm text-gray-500 flex items-center divide-x divide-gray-400">
                <span class="author">Kementrian Media dan Komunikasi</span>
                <time class="">{{ el.date_created.toLocaleDateString() }}</time>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <Button
        to="/blogs"
        link
        class="self-end text-primary"
      >
        Lihat lebih banyak
      </Button>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { marked } from 'marked';
import {
  Blog, blogFormatter, Blogs, getAssetUrl,
} from '~~/services/cms';

const route = useRoute();

// eslint-disable-next-line no-restricted-globals
const shareUrl = computed(() => location?.href);
const { copy } = useClipboard({ source: shareUrl });

const { data: blog } = useLazyAsyncData(() => Blogs.bySlug(String(route.params.slug)), { default: () => ({} as Blog) });

const relatedBlogs = ref<Blog[]>([]);

const onCopy = () => copy()
  .then(() => alert('Link berhasil disalin!'));

const onShareClick = () => {
  if ('share' in navigator) {
    return navigator.share({
      title: blog.value.title,
      url: shareUrl.value,
    });
  }

  return onCopy();
};

useHead(({
  title: (() => blog.value.title) as unknown as string,
}));
</script>

<style lang="sass" scoped>
.content-container
  @apply mx-auto
</style>
