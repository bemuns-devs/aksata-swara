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
          <Button
            label="Informasi terbaru"
            filled
            :to="{hash: '#info'}"
          />
          <Button
            label="Tentang kami"
            :to="{name: 'about'}"
          />
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
          <BlogCard
            v-for="blog in pickedBlogs"
            :key="blog.id"
            v-bind="blog"
          />
          <div class="blog-card justify-center">
            <Button :to="{hash: '#blogs'}">
              Lihat informasi lainnya...
            </Button>
          </div>
        </div>

        <div class="flex gap-4 p-2">
          <Button
            filled
            rounded
            @click="slideBlogGallery(true)"
          >
            <ArrowLeftIcon class="w-5 h-5" />
          </Button>
          <Button
            filled
            rounded
            @click="slideBlogGallery()"
          >
            <ArrowRightIcon class="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>

    <main class="flex flex-col">
      <section class="relative flex flex-col lg:flex-row justify-center items-stretch gap-4 lg:gap-16 bg-secondary-50 h-[80vh] px-4 py-8 lg:px-24 lg:py-16 overflow-hidden">
        <BrandSVG class="absolute inset-1/2 left-[10%] opacity-10 -translate-y-1/2 -rotate-12 z-0" />

        <h3 class="z-[1] text-sm lg:text-base text-gray-700 font-light">
          Sekilas tentang kami
        </h3>
        <div class="z-[1] flex flex-col lg:p-2.5">
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
            <Button
              to="/about"
              link
              class="!text-primary hover:!text-primary-800 hover:!bg-secondary-100/80"
            >
              <span class="text-primary">Visi Misi</span>
              <ExternalLinkIcon class="icon" />
            </Button>
            <Button
              to="/about"
              link
              class="!text-primary hover:!text-primary-800 hover:!bg-secondary-100/80"
            >
              <span class="text-primary">Nilai dan Budaya Kerja</span>
              <ExternalLinkIcon class="icon" />
            </Button>
            <Button
              to="/about"
              link
              class="!text-primary hover:!text-primary-800 hover:!bg-secondary-100/80"
            >
              <span class="text-primary">Filosofi</span>
              <ExternalLinkIcon class="icon" />
            </Button>
            <Button
              to="/about"
              link
              class="!text-primary hover:!text-primary-800 hover:!bg-secondary-100/80"
            >
              <span class="text-primary">Struktur Organisasi</span>
              <ExternalLinkIcon class="icon" />
            </Button>
          </div>
        </div>
      </section>

      <section
        id="info"
        class="flex flex-col gap-8 px-4 lg:px-20 py-8 lg:py-12"
      >
        <h3 class="text-sm lg:text-base text-gray-500 font-light">
          Portal Informasi
        </h3>

        <div class="flex gap-2">
          <h4 class="text-2xl lg:text-3xl text-primary font-bold">
            Terbaru
          </h4>
          <p class="self-center text-sm text-gray-500 font-light mt-2">
            | Ikuti perkembangan informasi dari kami
          </p>
        </div>

        <div class="hidden lg:flex justify-center gap-4">
          <BlogCard
            v-for="blog in newestBlogs.slice(0, 4)"
            :key="blog.id"
            v-bind="blog"
          />
        </div>

        <div class="flex lg:hidden flex-col gap-8">
          <h4 class="text-2xl lg:text-3xl text-primary font-bold">
            Pilihan
          </h4>

          <ul class="flex flex-col">
            <li
              v-for="blog in pickedBlogs.slice(0, 4)"
              :key="blog.id"
            >
              <BlogListItem v-bind="blog" />
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
            <ul class="flex flex-col">
              <li
                v-for="blog in newestBlogs"
                :key="blog.id"
              >
                <BlogListItem v-bind="blog" />
              </li>
            </ul>
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
              >
                <BlogListItem v-bind="blog" />
              </li>
            </ul>

            <NuxtLink
              :to="{name: 'blogs'}"
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

            <BlogCard
              v-for="blog in mostReadBlogs"
              :key="blog.id"
              v-bind="blog"
              class="!h-64 self-start"
            />

            <NuxtLink
              :to="{name: 'blogs', query: {category: 'most-read'}}"
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
