<template>
  <div class="flex flex-col">
    <header class="flex gap-3 h-[80vh] p-8">
      <div class="shrink-0 self-center flex flex-col gap-8 pb-8">
        <div class="flex flex-col gap-2">
          <h1 class="text-5xl text-primary font-bold font-brand flex flex-col">
            <span>BEM UNS 2022</span>
            <span>— AKSATA SWARA</span>
          </h1>
          <p class="text-lg text-gray-700 max-w-prose flex flex-col">
            <span>Badan Eksekutif Mahasiswa Universitas Sebelas Maret</span>
            <span>Kabinet 2022/2023</span>
          </p>
        </div>

        <div class="flex gap-4">
          <NuxtLink
            to="/blogs?soryBy=createdAt&order=desc"
            class="btn btn--filled"
          >
            Informasi Terbaru
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="btn"
          >
            Tentang Kami
          </NuxtLink>
        </div>
      </div>

      <div class="grow self-stretch hidden lg:flex flex-col items-end gap-8 h-full pl-8 overflow-hidden">
        <h2 class="w-full text-2xl text-secondary text-center font-bold">
          — Informasi pilihan
        </h2>

        <div
          ref="blogGalleryRef"
          class="grow max-w-full flex flex-nowrap items-center gap-4 p-8 overflow-x-auto overflow-y-hidden"
        >
          <article
            v-for="blog in pickedBlogs"
            :key="blog.id"
            class="blog-card"
          >
            <NuxtLink
              :title="blog.title"
              :to="{name: 'blogs-slug--id', params: {slug: blog.slug, id: blog.id}}"
              class="absolute inset-0 w-full h-full"
            />
            <img
              :src="blog.thumbnailUrl"
              :alt="blog.title"
              class="thumbnail"
            >
            <h5 class="title">
              {{ blog.title }}
            </h5>
            <div class="subtitle">
              <span class="author">Kementrian Media dan Komunikasi</span>
              <time class="">{{ blog.createdAt.toLocaleDateString() }}</time>
            </div>
          </article>
          <div class="blog-card justify-center">
            <a
              href="#blogs"
              class="btn"
            >
              Lihat informasi lainnya...
            </a>
          </div>
        </div>

        <div class="flex gap-4 p-2">
          <button
            class="btn btn--rounded btn--filled"
            @click="slideBlogGallery(true)"
          >
            <ArrowLeftIcon class="w-5 h-5" />
          </button>
          <button
            class="btn btn--rounded btn--filled"
            @click="slideBlogGallery()"
          >
            <ArrowRightIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>

    <main class="flex flex-col">
      <section class="relative flex flex-col lg:flex-row justify-center items-stretch gap-4 lg:gap-16 bg-secondary-50 h-[80vh] px-4 py-8 lg:px-24 lg:py-16 overflow-hidden">
        <BrandSVG class="absolute inset-1/2 left-[10%] opacity-10 -translate-y-1/2 -rotate-12 z-0" />

        <h3 class="text-sm lg:text-base text-gray-700 font-light">
          Sekilas tentang kami
        </h3>
        <div class="flex flex-col lg:p-2.5">
          <h2 class="text-base lg:text-xl text-primary font-bold">
            <span>BEM UNS kabinet &ldquo;AKSATA SWARA&rdquo;</span>
          </h2>
          <q class="text-sm lg:text-base text-gray-700 font-light p-2 lg:py-2.5">kami berkomitmen untuk</q>
          <blockquote class="text-2xl lg:text-5xl text-primary font-bold">
            &ldquo;Melayani Hak-hak Dasar Mahasiswa&rdquo;
          </blockquote>
          <p class="lg:text-lg text-gray-700 max-w-prose py-4 lg:py-8">
            <!-- eslint-disable-next-line max-len -->
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="flex flex-wrap gap-2 lg:gap-4">
            <NuxtLink
              to="/about"
              class="btn about-us-link"
            >
              <span>Visi Misi</span>
              <ExternalLinkIcon class="icon" />
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="btn about-us-link"
            >
              <span>Nilai dan Budaya Kerja</span>
              <ExternalLinkIcon class="icon" />
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="btn about-us-link"
            >
              <span>Filosofi</span>
              <ExternalLinkIcon class="icon" />
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="btn about-us-link"
            >
              <span>Struktur Organisasi</span>
              <ExternalLinkIcon class="icon" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="flex flex-col gap-8 px-4 lg:px-20 py-8 lg:py-12">
        <h3 class="text-sm lg:text-base text-gray-500 font-light">
          Portal Informasi
        </h3>

        <div class="flex gap-2">
          <h4 class="text-2xl lg:text-3xl text-primary font-bold">
            Terbaru
          </h4>
          <time class="self-center text-sm text-gray-500 font-light mt-2">| 20 April 2022</time>
        </div>

        <div class="hidden lg:flex justify-center gap-4">
          <article
            v-for="blog in newestBlogs.slice(0, 4)"
            :key="blog.id"
            class="blog-card"
          >
            <NuxtLink
              :title="blog.title"
              :to="{name: 'blogs-slug--id', params: {slug: blog.slug, id: blog.id}}"
              class="absolute inset-0 w-full h-full"
            />
            <img
              :src="blog.thumbnailUrl"
              :alt="blog.title"
              class="thumbnail"
            >
            <h5 class="title">
              {{ blog.title }}
            </h5>
            <div class="subtitle">
              <span class="author">Kementrian Media dan Komunikasi</span>
              <time class="">{{ blog.createdAt.toLocaleDateString() }}</time>
            </div>
          </article>
        </div>

        <div class="flex lg:hidden flex-col gap-8">
          <h4 class="text-2xl lg:text-3xl text-primary font-bold">
            Pilihan
          </h4>
          <ul class="flex flex-col">
            <li
              v-for="blog in pickedBlogs"
              :key="blog.id"
              class="group"
            >
              <NuxtLink
                :to="{name: 'blogs-slug--id', params: {slug: blog.slug, id: blog.id}}"
                class="flex gap-4 p-2 group-hover:bg-primary/5 rounded-lg"
              >
                <div class="shrink-0 h-24 aspect-[7/5] bg-gray-300 border border-primary-50 overflow-hidden rounded-md">
                  <img
                    :src="blog.thumbnailUrl"
                    :alt="blog.title"
                    class="object-cover transition-transform group-hover:scale-110 group-hover:rotate-2"
                  >
                </div>
                <div class="flex flex-col justify-center">
                  <h5 class="text-gray-700 font-bold">
                    {{ blog.title }}
                  </h5>
                  <div class="text-sm text-gray-500 flex items-center divide-x divide-gray-400">
                    <span class="author">Kementrian Media dan Komunikasi</span>
                    <time class="">{{ blog.createdAt.toLocaleDateString() }}</time>
                  </div>
                </div>
              </NuxtLink>
            </li>
          </ul>

          <NuxtLink
            to="/blogs"
            class="btn self-start text-primary underline"
          >
            Lihat informasi pilihan lainnya
          </NuxtLink>
        </div>

        <div class="flex lg:hidden flex-col gap-8">
          <div class="flex gap-2">
            <h4 class="text-2xl lg:text-3xl text-primary font-bold">
              Terbaru
            </h4>
            <time class="self-center text-sm text-gray-500 font-light mt-2">| 20 April 2022</time>
          </div>
          <div class="flex flex-col">
            <article class="group">
              <NuxtLink
                v-for="blog in newestBlogs"
                :key="blog.id"
                :to="{name: 'blogs-slug--id', params: {slug: blog.slug, id: blog.id}}"
                class="group flex gap-4 p-2 hover:bg-primary/5 rounded-lg"
              >
                <div class="shrink-0 h-24 aspect-[7/5] bg-gray-300 border border-primary-50 overflow-hidden rounded-md">
                  <img
                    :src="`${blog.thumbnailUrl}?a`"
                    :alt="blog.title"
                    class="object-cover transition-transform group-hover:scale-110 group-hover:rotate-2"
                  >
                </div>
                <div class="flex flex-col justify-center">
                  <h5 class="text-gray-700 font-bold">
                    {{ blog.title }}
                  </h5>
                  <div class="text-sm text-gray-500 flex items-center divide-x divide-gray-400">
                    <span class="author">Kementrian Media dan Komunikasi</span>
                    <time class="">{{ blog.createdAt.toLocaleDateString() }}</time>
                  </div>
                </div>
              </NuxtLink>
            </article>
          </div>

          <NuxtLink
            to="/blogs"
            class="btn self-start text-primary underline"
          >
            Tampilkan lebih banyak
          </NuxtLink>
        </div>

        <div class="hidden lg:flex gap-8">
          <div class="grow flex flex-col gap-8">
            <ul class="flex flex-col">
              <li
                v-for="blog in newestBlogs"
                :key="blog.id"
                class="group"
              >
                <article>
                  <NuxtLink
                    :to="{name: 'blogs-slug--id', params: {slug: blog.slug, id: blog.id}}"
                    class="flex gap-4 p-2 group-hover:bg-secondary/5 rounded-lg focus:ring active:ring ring-secondary-100 transition"
                  >
                    <div class="shrink-0 h-24 lg:h-32 aspect-[7/5] lg:aspect-[9/5] bg-gray-300 border border-secondary-50 overflow-hidden rounded-md">
                      <img
                        :src="`${blog.thumbnailUrl}?a`"
                        :alt="blog.title"
                        class="object-cover transition-transform group-hover:scale-110 group-hover:rotate-2"
                      >
                    </div>
                    <div class="flex flex-col justify-center">
                      <h5 class="text-gray-700 line-clamp-2 font-bold">
                        {{ blog.title }}
                      </h5>
                      <div class="text-sm text-gray-500 flex items-center divide-x divide-gray-300">
                        <span class="shrink break-all line-clamp-1 pr-2">Kementrian Media dan Komunikasi</span>
                        <time class="shrink-0 pl-2 font-light">{{ blog.createdAt.toLocaleDateString() }}</time>
                      </div>
                    </div>
                  </NuxtLink>
                </article>
              </li>
            </ul>

            <NuxtLink
              to="/blogs"
              class="btn self-start text-primary underline"
            >
              Tampilkan lebih banyak
            </NuxtLink>
          </div>

          <div class="shrink-0 flex flex-col gap-4">
            <div class="flex gap-2">
              <h4 class="text-2xl lg:text-3xl text-primary font-bold">
                Banyak dibaca
              </h4>
            </div>

            <article
              v-for="blog in mostReadBlogs"
              :key="blog.id"
              class="blog-card blog-card--dense self-start"
            >
              <NuxtLink
                :title="blog.title"
                :to="{name: 'blogs-slug--id', params: {slug: blog.slug, id: blog.id}}"
                class="absolute inset-0 w-full h-full"
              />
              <img
                :src="blog.thumbnailUrl"
                :alt="blog.title"
                class="thumbnail"
              >
              <h5 class="title">
                {{ blog.title }}
              </h5>
              <div class="subtitle">
                <span class="author">Kementrian Media dan Komunikasi</span>
                <time class="">{{ blog.createdAt.toLocaleDateString() }}</time>
              </div>
            </article>

            <NuxtLink
              to="/blogs"
              class="btn self-start text-primary underline"
            >
              Tampilkan lebih banyak
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from '@heroicons/vue/solid';
import { nanoid } from 'nanoid';

interface Blog {
  id: string;
  title: string;
  thumbnailUrl: string;
  createdAt: Date;
  slug: string;
}

const pickedBlogs: Blog[] = [
  {
    id: nanoid(),
    title: 'Terlalu Visioner, Steve Jobs Tak Mau iPhone Pertama Punya Slot Kartu SIM',
    thumbnailUrl: 'https://picsum.photos/300/300',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
  {
    id: nanoid(),
    title: 'Terlalu Visioner, Steve Jobs Tak Mau iPhone Pertama Punya Slot Kartu SIM',
    thumbnailUrl: 'https://picsum.photos/300/300',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
  {
    id: nanoid(),
    title: 'Terlalu Visioner, Steve Jobs Tak Mau iPhone Pertama Punya Slot Kartu SIM',
    thumbnailUrl: 'https://picsum.photos/300/300',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
  {
    id: nanoid(),
    title: 'Terlalu Visioner, Steve Jobs Tak Mau iPhone Pertama Punya Slot Kartu SIM',
    thumbnailUrl: 'https://picsum.photos/300/300',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
];

const newestBlogs: Blog[] = [
  {
    id: nanoid(),
    title: 'Selamat Datang Mahasiswa Baru jalur SBMPTN Tahun 2022!',
    thumbnailUrl: 'https://picsum.photos/300/300',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
  {
    id: nanoid(),
    title: 'Selamat Datang Mahasiswa Baru jalur SBMPTN Tahun 2022!',
    thumbnailUrl: 'https://picsum.photos/300/300',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
  {
    id: nanoid(),
    title: 'Selamat Datang Mahasiswa Baru jalur SBMPTN Tahun 2022!',
    thumbnailUrl: 'https://picsum.photos/300/300',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
  {
    id: nanoid(),
    title: 'Selamat Datang Mahasiswa Baru jalur SBMPTN Tahun 2022!',
    thumbnailUrl: 'https://picsum.photos/300/300',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
];

const mostReadBlogs: Blog[] = [
  {
    id: nanoid(),
    title: 'Selamat Datang Mahasiswa Baru jalur SBMPTN Tahun 2022!',
    thumbnailUrl: 'https://picsum.photos/300/300?b',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
  {
    id: nanoid(),
    title: 'Selamat Datang Mahasiswa Baru jalur SBMPTN Tahun 2022!',
    thumbnailUrl: 'https://picsum.photos/300/300?b',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
  {
    id: nanoid(),
    title: 'Selamat Datang Mahasiswa Baru jalur SBMPTN Tahun 2022!',
    thumbnailUrl: 'https://picsum.photos/300/300?b',
    createdAt: new Date(),
    slug: 'terlalu-visioner-steve-jobs-tak-mau-iphone-pertama-punya-slot-kartu-sim',
  },
];

const blogGalleryRef = ref<HTMLDivElement | null>(null);

const slideBlogGallery = (reverse = false) => {
  const elm = blogGalleryRef.value;

  if (elm) {
    if (reverse) {
      const isLeftReached = elm.scrollLeft === 0;
      return elm.scrollTo({
        left: isLeftReached ? elm.scrollWidth : elm.scrollLeft - elm.clientWidth,
        behavior: 'smooth',
      });
    }
    const isRightReached = elm.scrollLeft + elm.clientWidth >= elm.scrollWidth;
    return elm.scrollTo({
      left: isRightReached ? 0 : elm.scrollLeft + elm.clientWidth,
      behavior: 'smooth',
    });
  }
  return undefined;
};
</script>

<style lang="sass" scoped>
.blog-card
  @apply shrink-0 relative flex flex-col overflow-hidden
  @apply h-72 aspect-[6/5] px-4 py-3 bg-white rounded-lg border border-gray-50 shadow transition
  &:hover
    @apply bg-secondary-50 border-secondary-100 shadow-lg
    .subtitle
      @apply text-secondary-700 divide-secondary-300
  &:focus,
  &:active
    @apply bg-secondary-100 border-secondary-300 ring ring-secondary-300
  .thumbnail
    @apply grow w-full rounded-md overflow-hidden object-cover
  .title
    @apply shrink-0 text-ellipsis line-clamp-2 font-medium flex items-center pt-2 pb-1 overflow-hidden
  .subtitle
    @apply text-sm text-gray-500 flex items-center divide-x divide-gray-300
    .author
      @apply shrink break-all line-clamp-1 pr-2
    time
      @apply shrink-0 pl-2 font-light
  &--dense
    @apply h-52 aspect-[4/3] p-0
    .thumbnail
      @apply rounded-none
    .title
      @apply text-sm px-2 pt-1 pb-0.5
    .subtitle
      @apply px-2 pb-0.5

.about-us-link
  @apply text-primary underline
  &:hover
    @apply text-primary-800 bg-secondary-100
  .icon
    @apply w-4 h-4
</style>
