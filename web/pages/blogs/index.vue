<script lang="ts" setup>
import { sentenceCase } from 'change-case';
import { Blogs } from '~~/services/content';

const route = useRoute();

const qSearch = computed(() => route.query.search && String(route.query.search));
const qCategory = computed(() => route.query.category && String(route.query.category));

const { data: categories } = useLazyAsyncData<string[]>(async () => {
  const { categories } = await queryContent('/blogs/_meta').only(['categories']).findOne();
  return categories;
}, { default: () => [] });
const { data } = useLazyAsyncData(() => Blogs
  .list({ ...(qSearch.value && { search: qSearch.value }), ...(qCategory.value && { category: qCategory.value }) }),
  {
    default: () => [],
    watch: [qSearch, qCategory],
  });

const onSubmit = (e: Event) => {
  const formElm = e.target as HTMLFormElement;
  const category = (formElm.elements.namedItem('category') as HTMLSelectElement).value;
  const search = (formElm.elements.namedItem('search') as HTMLSelectElement).value;
  return navigateTo({
    query: {
      search,
      category,
    },
  });
};

useHead({
  title: 'Informasi',
});
</script>

<template>
  <main class="flex flex-col">
    <div class="flex flex-col gap-8 w-full max-w-screen-xl mx-auto py-8">
      <form class="flex gap-4" @submit.prevent="onSubmit">
        <div class="grow flex">
          <input type="search" name="search" placeholder="Cari informasi disini..." :value="qSearch" class="w-full">
        </div>
        <select name="category">
          <option :selected="categories!.includes(qCategory!)" value="">
            Semua
          </option>
          <option v-for="category in categories" :key="category" :value="category" :selected="qCategory === category">
            {{ sentenceCase(category) }}
          </option>
        </select>
        <Button label="Cari" type="submit" filled />
      </form>

      <template v-if="data?.length">
        <ul class="flex flex-col">
          <li v-for="blog in data" :key="blog.id">
            <BlogListItem :title="blog.title" :img-src="blog.image!" :slug="blog.path" :date="blog.date"
              :author="blog.author" />
          </li>
        </ul>

        <Button to="/blogs" link class="self-start text-primary">
          Tampilkan lebih banyak
        </Button>
      </template>

      <template v-else>
        <div class="min-h-[40vh]">
          <p class="text-xl text-center text-gray-500 mt-20">
            Tidak ada artikel yang dapat ditampilkan 🙏
          </p>
        </div>
      </template>
    </div>
  </main>
</template>
