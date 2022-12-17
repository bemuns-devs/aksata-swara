<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { toRefs } from '@vueuse/core';
import { BlogInList } from '~~/services/shared/models';

type UnitPlatformInList = Record<string, any>;

const refAboutSection = ref<HTMLElement | null>(null);
const { data } = await useAsyncData<[BlogInList[], BlogInList[]]>(() => Promise.all([
  [],
  [],
]), { default: () => [[], []] });
const [featuredBlogs, newestBlogs] = toRefs(data);
const { data: unitPlatforms } = await useAsyncData('unit-platforms', async () => [], { default: () => [] as UnitPlatformInList[] });

const newestBlogsParts = computed(() => ({
  top4: newestBlogs.value.slice(0, 4),
  rest: newestBlogs.value.slice(4),
}));

const { y } = useWindowScroll();
const isVisible = reactive({
  aboutSection: false,
  aboutQuote: false,
});

const onQuoteAnimationEnd = () => {
  isVisible.aboutQuote = true;
};

useIntersectionObserver(refAboutSection, ([{ isIntersecting }]) => {
  isVisible.aboutSection = isIntersecting;

  if (!isIntersecting) {
    isVisible.aboutQuote = false;
  }
}, { threshold: 0.75 });

const blogFormatter = {
  getSlug(blog: BlogInList) {
    return JSON.stringify(blog);
  },
}

const getAssetUrl = (url: string) => url;
</script>

<template>
  <div class="flex flex-col">
    <header
      class="relative overflow-hidden flex gap-3 h-[80vh] max-w-full p-4 md:px-12 md:py-8 bg-gradient-to-tr from-primary-600/95 via-primary-500/50 to-primary-500/10">
      <div class="absolute inset-0 bg-gradient-to-b from-secondary-100 to-primary-400/50 -z-50" />
      <div
        class="absolute inset-0 [mask-image:url(/static/pattern2.svg)] [mask-size:5rem] bg-gradient-to-b from-secondary-50/40 -z-50 transform [transition-duration:150ms]"
        :style="{ '--tw-translate-y': `${-(y / 2)}px` }" />

      <div
        class="shrink-0 self-center max-w-full flex flex-col gap-8 pb-8 z-10 transform animate-in slide-in-from-bottom [animation-duration:700ms] [transition-duration:150ms]"
        :style="{ '--tw-translate-y': `${y / 1.5}px` }">
        <div class="flex flex-col gap-2">
          <h1 class="text-4xl md:text-5xl text-white font-bold font-brand flex flex-col">
            <span>BEM UNS 2022</span>
            <span>— AKSATA SWARA</span>
          </h1>
          <p class="text-base md:text-lg text-white max-w-prose flex flex-col">
            <span class="leading-none">Badan Eksekutif Mahasiswa Universitas Sebelas Maret</span>
            <span>Kabinet 2022/2023</span>
          </p>
        </div>

        <div class="flex gap-4">
          <Button label="Informasi terbaru" filled :to="{ hash: '#info' }"
            class="!bg-white !text-primary hover:!bg-secondary-50 shadow shadow-primary active:shadow-none" />
          <Button label="Tentang kami" filled to="/about" class="!bg-secondary hover:!bg-secondary-50" />
        </div>
      </div>

      <div
        class="absolute inset-0 pointer-events-none [mask-image:url(/static/hero-figure2.webp)] [mask-size:30vh] md:[mask-size:70vh] [mask-repeat:no-repeat] [mask-position:bottom_-10%_right_-10%] md:[mask-position:bottom_right] bg-primary-900/70 z-0 transform animate-in slide-in-from-bottom [animation-duration:500ms] [transition-duration:150ms]"
        :style="{ '--tw-translate-y': `${y / 4}px` }" />
      <div
        class="absolute inset-0 pointer-events-none [mask-image:url(/static/hero-figure.webp)] [mask-size:45vh] md:[mask-size:95vh] [mask-repeat:no-repeat] [mask-position:bottom_-10%_left_30%] md:[mask-position:bottom_left_20%] bg-primary-900/70 z-0 transform -scale-x-100 animate-in slide-in-from-bottom [animation-delay:150ms] [animation-duration:500ms] [transition-duration:150ms]"
        :style="{ '--tw-translate-y': `${y / .8}px` }" />

      <div
        class="absolute z-20 inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-primary-700/60 via-primary-500/20 to-transparent pointer-events-none" />
    </header>

    <main class="flex flex-col">
      <section ref="refAboutSection"
        class="relative flex flex-col justify-center items-stretch gap-4 bg-secondary-50 h-[50vh] px-4 py-8 lg:px-24 lg:py-16 overflow-hidden">
        <BrandSVG class="absolute inset-0 md:inset-1/2 md:left-[10%] opacity-10 -translate-y-1/2 -rotate-12 z-0" />

        <blockquote
          class="relative text-3xl lg:text-5xl text-primary text-center font-bold fade-in slide-in-from-bottom duration-500"
          :class="{ 'animate-in': isVisible.aboutSection, 'opacity-0': !isVisible.aboutSection }"
          @animationend="onQuoteAnimationEnd">
          &ldquo;Melayani Hak-hak Dasar Mahasiswa&rdquo;
        </blockquote>

        <div class="relative mt-4 flex justify-center content-center flex-wrap gap-2 lg:gap-4">
          <Button label="Visi Misi" to="/about" append-icon="heroicons-solid:external-link" filled
            class="fade-in slide-in-from-bottom-8 duration-500"
            :class="{ 'animate-in': isVisible.aboutQuote, 'opacity-0': !isVisible.aboutQuote }" />
          <Button label="Nilai dan Budaya Kerja" to="/about" append-icon="heroicons-solid:external-link" filled
            class="fade-in slide-in-from-bottom-8 duration-500"
            :class="{ 'animate-in': isVisible.aboutQuote, 'opacity-0': !isVisible.aboutQuote }" />
          <Button label="Filosofi" to="/about" append-icon="heroicons-solid:external-link" filled
            class="fade-in slide-in-from-bottom-8 duration-500"
            :class="{ 'animate-in': isVisible.aboutQuote, 'opacity-0': !isVisible.aboutQuote }" />
          <Button label="Struktur Organisasi" to="/about" append-icon="heroicons-solid:external-link" filled
            class="fade-in slide-in-from-bottom-8 duration-500"
            :class="{ 'animate-in': isVisible.aboutQuote, 'opacity-0': !isVisible.aboutQuote }" />
        </div>
      </section>

      <section id="info" class="flex flex-col gap-8 px-4 lg:px-20 py-8 lg:py-12">
        <h3 class="text-sm lg:text-base text-gray-500 font-light">
          Portal Informasi
        </h3>

        <div class="hidden lg:flex gap-2">
          <h4 class="text-2xl lg:text-3xl text-primary font-bold">
            Terbaru
          </h4>
        </div>

        <ol v-if="newestBlogs.length" class="hidden lg:flex justify-start gap-4">
          <li v-for="blog in newestBlogsParts.top4" :key="blog.id">
            <BlogCard :title="blog.title" :img-src="getAssetUrl(blog.featured_image)"
              :slug="blogFormatter.getSlug(blog)" :date="blog.date_created" :publisher="blog.user_created.first_name" />
          </li>
        </ol>

        <div v-else class="hidden lg:flex">
          <p>Tidak ada informasi yang dapat ditampilkan 🙏</p>
        </div>

        <div class="flex lg:hidden flex-col gap-8">
          <h4 class="text-2xl lg:text-3xl text-primary font-bold">
            Pilihan
          </h4>

          <ul class="flex flex-col">
            <li v-for="blog in featuredBlogs.slice(0, 4)" :key="blog.id">
              <BlogListItem :title="blog.title" :img-src="getAssetUrl(blog.featured_image)" :url="blog.url"
                :date="blog.date_created" :publisher="blog.user_created.first_name" />
            </li>
          </ul>

          <Button label="Lihat informasi pilihan lainnya" to="/blogs" link />
        </div>

        <div class="flex lg:hidden flex-col gap-8">
          <div class="flex gap-2">
            <h4 class="text-2xl lg:text-3xl text-primary font-bold">
              Terbaru
            </h4>
            <p class="self-center text-sm text-gray-500 font-light">
              | Ikuti perkembangan informasi dari kami
            </p>
          </div>
          <div class="flex flex-col">
            <ul class="flex flex-col">
              <li v-for="blog in newestBlogs" :key="blog.id">
                <BlogListItem :title="blog.title" :img-src="getAssetUrl(blog.featured_image)" :url="blog.url"
                  :date="blog.date_created" :publisher="blog.user_created.first_name" />
              </li>
            </ul>
          </div>

          <Button label="Tampilkan lebih banyak" to="/blogs" link />
        </div>

        <div class="hidden lg:flex gap-8">
          <ContentList path="/blogs" :query="{ limit: 20 }" v-slot="{ list }">
            <div class="grow flex flex-col gap-8">
              <ol v-if="newestBlogsParts.rest.length" class="flex flex-col">
                <li v-for="blog in (list as BlogInList[])" :key="blog.id">
                  <BlogListItem :title="blog.title" :img-src="blog.image || 'https://via.placeholder.com/150'"
                    :url="{ name: 'blogs', params: {} }" :date="blog.date" :publisher="blog.author" />
                </li>
              </ol>

              <Button label="Lihat lebih banyak" :to="{ name: 'blogs' }" link class="self-start" />
            </div>
          </ContentList>

          <div class="shrink-0 flex flex-col gap-4">
            <div class="flex gap-2">
              <h4 class="text-2xl lg:text-3xl text-primary font-bold">
                Pilihan
              </h4>
            </div>

            <template v-if="featuredBlogs.length">
              <ol>
                <li v-for="blog in featuredBlogs" :key="blog.id" class="!h-64 self-start">
                  <BlogCard :title="blog.title" :img-src="getAssetUrl(blog.featured_image)"
                    :slug="blogFormatter.getSlug(blog)" :date="blog.date_created"
                    :publisher="blog.user_created.first_name" />
                </li>
              </ol>

              <Button label="Lihat lebih banyak" :to="{ name: 'blogs', query: { category: 'most-read' } }" link
                class="self-start" />
            </template>

            <template v-else>
              <p class="text-gray-500 h-[40vh] text-center align-middle">
                Belum ada informasi yang dapat ditampilkan 🙏
              </p>
            </template>
          </div>
        </div>
      </section>

      <section id="unit-platform" class="bg-slate-100 px-4 lg:px-8 py-8 lg:py-12 flex flex-col gap-8 lg:gap-16">
        <h3 class="text-2xl lg:text-3xl text-primary text-center font-bold">
          Unit dan Platform
        </h3>

        <ul class="max-w-screen-xl mx-auto flex justify-evenly flex-wrap gap-6 lg:gap-12">
          <li v-for="el in unitPlatforms" :key="el.id" class="grow">
            <a :href="el.link" class="group relative p-2 flex flex-col items-center gap-4 hover:bg-slate-200 rounded"
              target="_blank">
              <img :src="`${getAssetUrl(el.logo)}?width=150&format=webp`" :alt="`logo ${el.name}`" loading="lazy"
                class="w-40 h-40 rounded-full">
              <span class="text-center">{{ el.name }}</span>

              <Icon icon="heroicons-solid:external-link"
                class="absolute top-2 right-2 text-base hidden group-hover:block" />
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

