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
            name="search"
            placeholder="Cari informasi disini..."
            :value="qSearch"
            class="w-full"
          >
        </div>
        <select name="category">
          <option
            :selected="!categoriesName.includes(qCategory)"
            value=""
          >
            Semua
          </option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.name"
            :selected="qCategory === category.name"
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
              :img-src="getAssetUrl(blog.featured_image)"
              :slug="blogFormatter.getSlug(blog)"
              :date="blog.date_created"
              :publisher="blog.user_created.first_name"
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
import {
  BlogCategories, BlogCategoryInList, blogFormatter, Blogs, getAssetUrl,
} from '~~/services/cms';

const route = useRoute();
const router = useRouter();

const qSearch = computed(() => route.query.search && String(route.query.search));
const qCategory = computed(() => route.query.category && String(route.query.category));
const { data: blogs, pending: blogsLoading } = useLazyAsyncData(() => Blogs.list({
  filter: qCategory.value && ({ category: { name: qCategory.value } }),
  search: qSearch.value,
}), {
  watch: [qSearch, qCategory],
});

const { data: categories } = useLazyAsyncData(() => BlogCategories.list(), { default: () => [] as BlogCategoryInList[] });

const categoriesName = computed(() => categories.value.map((el) => el.name));

const onSubmit = (e: FormDataEvent) => {
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
