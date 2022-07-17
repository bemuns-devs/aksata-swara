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
            :selected="!categoriesName.includes(String($route.query.category))"
            value=""
          >
            Pilih kategori...
          </option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="sentenceCase(category.name)"
            :selected="$route.params.blogs === category.name"
          >
            {{ sentenceCase(category.name) }}
          </option>
        </select>
        <Button
          label="Cari"
          type="submit"
          filled
        />
      </form>

      <template v-if="blogsLoading">
        <p>Loading...</p>
      </template>

      <template v-else-if="blogs?.length">
        <ul class="flex flex-col">
          <li
            v-for="blog in blogs"
            :key="blog.id"
          >
            <BlogListItem
              :title="blog.title"
              :img-src="blog.featured_image"
              :slug="blog.slug"
              :date="blog.date_created"
            />
          </li>
        </ul>

        <Button
          to="/blogs"
          link
          class="self-start text-primary"
        >
          Tampilkan lebih banyak
        </Button>
      </template>

      <div
        v-else
        class="min-h-[40vh]"
      >
        <p class="text-xl text-center text-gray-500 mt-20">
          Tidak ada artikel yang dapat ditampilkan 🙏
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { sentenceCase } from 'change-case';
import { FromAPI } from '~~/api/types';

const { data: blogs, loading: blogsLoading } = useBlog();

const categories: FromAPI.BlogCategory[] = [];

const categoriesName = computed(() => categories.map((el) => el.name));

const onSubmit = (e: Event) => {
  console.log(e);
};

useHead({
  title: 'Informasi',
});
</script>
