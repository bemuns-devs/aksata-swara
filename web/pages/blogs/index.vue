<template>
  <main class="flex flex-col">
    <div class="flex flex-col gap-8 w-full max-w-screen-xl mx-auto py-8">
      <form
        class="flex gap-4"
        @submit.prevent=""
      >
        <div class="grow flex">
          <input
            type="search"
            name="k"
            placeholder="Cari informasi disini..."
            class="w-full"
          >
        </div>
        <select name="kategori">
          <option
            selected
            value=""
          >
            Pilih kategori...
          </option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
        <button
          type="submit"
          class="btn btn--filled"
        >
          Cari
        </button>
      </form>

      <ul class="flex flex-col">
        <li
          v-for="blog in blogs"
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
  </main>
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid';

interface Blog {
  id: string;
  title: string;
  thumbnailUrl: string;
  createdAt: Date;
  slug: string;
}

const blogs: Blog[] = [
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

const categories = ['Komunikasi',
  'Media',
  'Pemerintahan',
  'Pendidikan',
  'Sosial',
];
</script>