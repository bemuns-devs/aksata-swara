<template>
  <div class="flex flex-col gap-4">
    <section class="flex flex-col">
      <div class="relative flex flex-col bg-secondary">
        <div class="absolute z-0 inset-x-0 bottom-0 h-28 bg-white" />

        <div class="content-container z-[1] flex flex-col gap-8 px-4 py-12">
          <div class="flex">
            <NuxtLink
              :to="{name: 'blogs', query: {category: blog.category.name}}"
              class="text-sm text-gray-700 capitalize bg-white hover:bg-secondary-50 px-2 py-0.5 rounded-full border border-secondary-300 ring focus:ring-1 ring-secondary transition"
            >
              {{ blog.category.name }}
            </NuxtLink>
          </div>

          <div class="flex flex-col gap-2">
            <h1 class="text-3xl lg:text-5xl text-gray-900 font-bold tracking-wide">
              {{ blog.title }}
            </h1>
            <span class="text-lg text-secondary-900">Kementrian Media dan Komunikasi</span>
          </div>

          <img
            :src="`${getAssetUrl(blog.featured_image)}?width=900&format=webp`"
            :alt="blog.title"
            class="w-full h-[50vh] lg:h-[70vh] object-cover bg-gray-300 shadow-lg"
          >
        </div>
      </div>

      <div class="content-container flex flex-col lg:flex-row justify-between gap-8 bg-white px-4 pt-4 pb-12">
        <main class="prose lg:prose-lg">
          <!-- eslint-disable vue/no-v-html -->
          <div v-html="marked(blog.content || '')" />
          <!-- eslint-enable vue/no-v-html -->
          <ul class="list-none flex !px-0 mt-8 gap-x-2">
            <li
              v-for="tag in blog.tags"
              :key="tag"
            >
              <NuxtLink
                :to="{name: 'blogs', query: {tags: [tag]}}"
                class="!text-violet-500 hover:!text-violet-700"
              >
                #{{ tag }}
              </NuxtLink>
            </li>
          </ul>
        </main>

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

      <template v-if="relatedBlogs.length">
        <ul class="hidden lg:flex gap-4">
          <li
            v-for="el in relatedBlogs"
            :key="el.id"
          >
            <BlogCard
              :title="el.title"
              :img-src="getAssetUrl(el.featured_image)"
              :slug="blogFormatter.getSlug(el)"
              :date="el.date_created"
              :publisher="el.user_created.first_name"
            />
          </li>
        </ul>

        <ul class="flex lg:hidden flex-col">
          <li
            v-for="el in relatedBlogs"
            :key="el.id"
            class="group"
          >
            <BlogListItem
              :title="el.title"
              :img-src="getAssetUrl(el.featured_image)"
              :slug="blogFormatter.getSlug(el)"
              :date="el.date_created"
              :publisher="el.user_created.first_name"
            />
          </li>
        </ul>
      </template>

      <template v-else>
        <p class="text-gray-500">
          Belum ada informasi terkait.
        </p>
      </template>

      <Button
        :to="{name: 'blogs'}"
        link
        class="text-primary"
      >
        Lihat informasi lainnya
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
const slug = computed(() => String(route.params.slug));

// eslint-disable-next-line no-restricted-globals
const shareUrl = computed(() => location?.href);
const { copy } = useClipboard({ source: shareUrl });

const { data: blog, pending: isBlogLoading } = useLazyAsyncData(
  `blog_${slug.value}`,
  () => Blogs.bySlug(slug.value),
  { default: () => ({} as Blog) },
);

const relatedBlogs = computedAsync(
  () => (blog.value.tags
    ? Blogs.list({
      filter: {
        id: { _neq: blog.value.id },
        _or: blog.value.tags.map((tag) => ({ tags: { _contains: tag } })),
      },
    })
    : Promise.resolve([] as Blog[])),
  [],
);

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

whenever(slug, () => {
  window.scrollTo({ top: 0 });
});

useHead(({
  title: (() => blog.value.title) as unknown as string,
}));
</script>

<style lang="sass" scoped>
.content-container
  @apply mx-auto
</style>
