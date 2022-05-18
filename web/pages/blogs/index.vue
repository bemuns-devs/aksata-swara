<template>
  <main class="flex flex-col">
    <div class="flex flex-col gap-8 w-full max-w-screen-xl mx-auto py-8">
      <form
        class="flex gap-4"
        @submit.prevent="onSubmit"
      >
        <div class="grow flex">
          <input
            type="search"
            name="k"
            placeholder="Cari informasi disini..."
            class="w-full"
          >
        </div>
        <select>
          <option
            :selected="!categories.includes(String($route.params.blogs))"
            value=""
          >
            Pilih kategori...
          </option>
          <option
            v-for="category in categories"
            :key="category"
            :value="sentenceCase(category)"
            :selected="$route.params.blogs === category"
          >
            {{ sentenceCase(category) }}
          </option>
        </select>
        <Button
          label="Cari"
          type="submit"
          filled
        />
      </form>

      <ul class="flex flex-col">
        <li
          v-for="blog in blogs"
          :key="blog.id"
        >
          <BlogListItem v-bind="blog" />
        </li>
      </ul>

      <Button
        to="/blogs"
        link
        class="self-start text-primary"
      >
        Tampilkan lebih banyak
      </Button>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid';
import { sentenceCase } from 'change-case';

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

const categories = [
  'komunikasi',
  'politik',
  'pendidikan',
  'sosial',
];

const onSubmit = (e: Event) => {
  console.log(e);
};
</script>
