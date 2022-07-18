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

        <ul
          ref="blogGalleryRef"
          class="w-full flex flex-nowrap items-center gap-4 p-8 overflow-x-auto overflow-y-hidden"
        >
          <template v-if="featuredBlogs.length">
            <li
              v-for="blog in featuredBlogs"
              :key="blog.id"
            >
              <BlogCard
                :title="blog.title"
                :img-src="getAssetUrl(blog.featured_image)"
                :slug="blogFormatter.getSlug(blog)"
                :date="blog.date_created"
              />
            </li>
          </template>

          <div
            class="blog-card justify-center hover:!bg-gray-50"
            :class="{'w-full max-w-md mx-auto aspect-none': !featuredBlogs.length}"
          >
            <div
              v-if="!featuredBlogs.length"
              class="py-4"
            >
              <p class="text-center">
                Tidak ada informasi yang ditampilkan untuk saat ini 🙏
              </p>
            </div>

            <Button
              label="Lihat informasi lainnya..."
              :to="{name: 'blogs'}"
              filled
            />
          </div>
        </ul>

        <div class="flex gap-4 p-2">
          <Button
            filled
            rounded
            @click="slideBlogGallery(true)"
          >
            <Icon
              icon="heroicons-solid:arrow-left"
              class="w-5 h-5"
            />
          </Button>
          <Button
            filled
            rounded
            @click="slideBlogGallery()"
          >
            <Icon
              icon="heroicons-solid:arrow-light"
              class="w-5 h-5"
            />
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
              <Icon
                icon="heroicons-solid:external-link"
                class="icon"
              />
            </Button>
            <Button
              to="/about"
              link
              class="!text-primary hover:!text-primary-800 hover:!bg-secondary-100/80"
            >
              <span class="text-primary">Nilai dan Budaya Kerja</span>
              <Icon
                icon="heroicons-solid:external-link"
                class="icon"
              />
            </Button>
            <Button
              to="/about"
              link
              class="!text-primary hover:!text-primary-800 hover:!bg-secondary-100/80"
            >
              <span class="text-primary">Filosofi</span>
              <Icon
                icon="heroicons-solid:external-link"
                class="icon"
              />
            </Button>
            <Button
              to="/about"
              link
              class="!text-primary hover:!text-primary-800 hover:!bg-secondary-100/80"
            >
              <span class="text-primary">Struktur Organisasi</span>
              <Icon
                icon="heroicons-solid:external-link"
                class="icon"
              />
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

        <ol
          v-if="newestBlogs.length"
          class="hidden lg:flex justify-start gap-4"
        >
          <li
            v-for="blog in newestBlogsParts.top4"
            :key="blog.id"
          >
            <BlogCard
              :title="blog.title"
              :img-src="getAssetUrl(blog.featured_image)"
              :slug="blogFormatter.getSlug(blog)"
              :date="blog.date_created"
            />
          </li>
        </ol>

        <div
          v-else
          class="hidden lg:flex"
        >
          <p>Tidak ada informasi yang dapat ditampilkan 🙏</p>
        </div>

        <div class="flex lg:hidden flex-col gap-8">
          <h4 class="text-2xl lg:text-3xl text-primary font-bold">
            Pilihan
          </h4>

          <ul class="flex flex-col">
            <li
              v-for="blog in featuredBlogs.slice(0, 4)"
              :key="blog.id"
            >
              <BlogListItem
                :title="blog.title"
                :img-src="getAssetUrl(blog.featured_image)"
                :slug="blogFormatter.getSlug(blog)"
                :date="blog.date_created"
              />
            </li>
          </ul>

          <Button
            label="Lihat informasi pilihan lainnya"
            to="/blogs"
            link
          />
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
                <BlogListItem
                  :title="blog.title"
                  :img-src="getAssetUrl(blog.featured_image)"
                  :slug="blogFormatter.getSlug(blog)"
                  :date="blog.date_created"
                />
              </li>
            </ul>
          </div>

          <Button
            label="Tampilkan lebih banyak"
            to="/blogs"
            link
          />
        </div>

        <div class="hidden lg:flex gap-8">
          <div class="grow flex flex-col gap-8">
            <ol
              v-if="newestBlogsParts.rest.length"
              class="flex flex-col"
            >
              <li
                v-for="blog in newestBlogsParts.rest"
                :key="blog.id"
              >
                <BlogListItem
                  :title="blog.title"
                  :img-src="getAssetUrl(blog.featured_image)"
                  :slug="blogFormatter.getSlug(blog)"
                  :date="blog.date_created"
                />
              </li>
            </ol>

            <Button
              label="Lihat lebih banyak"
              :to="{name: 'blogs'}"
              link
              class="self-start"
            />
          </div>

          <div class="shrink-0 flex flex-col gap-4">
            <div class="flex gap-2">
              <h4 class="text-2xl lg:text-3xl text-primary font-bold">
                Banyak dibaca
              </h4>
            </div>

            <template v-if="mostReadBlogs.length">
              <ol>
                <li
                  v-for="blog in mostReadBlogs"
                  :key="blog.id"
                  class="!h-64 self-start"
                >
                  <BlogCard
                    :title="blog.title"
                    :img-src="getAssetUrl(blog.featured_image)"
                    :slug="blogFormatter.getSlug(blog)"
                    :date="blog.date_created"
                  />
                </li>
              </ol>

              <Button
                label="Lihat lebih banyak"
                :to="{name: 'blogs', query: {category: 'most-read'}}"
                link
                class="self-start"
              />
            </template>

            <template v-else>
              <p class="text-gray-500 h-[40vh] text-center align-middle">
                Belum ada informasi yang dapat ditampilkan 🙏
              </p>
            </template>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import {
  Blog, blogFormatter, Blogs, getAssetUrl,
} from '~~/services/cms';

const { data: featuredBlogs } = useLazyAsyncData(() => Blogs.featured(), { default: () => [] as Blog[] });

const { data: newestBlogs } = useLazyAsyncData(() => Blogs.list({ sort: ['date_created'] }), { default: () => [] as Blog[] });

const mostReadBlogs = ref<Blog[]>([]);

const newestBlogsParts = computed(() => ({
  top4: newestBlogs.value.slice(0, 4),
  rest: newestBlogs.value.slice(4),
}));

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
