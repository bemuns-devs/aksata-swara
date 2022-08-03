<script lang="ts" setup>
import { createError } from 'h3';
import { blogFormatter, Blogs } from '~~/services/cms';

definePageMeta({
  middleware: async (to) => {
    const { codeinfo } = to.params;
    const { data } = await useAsyncData(String(codeinfo), () => Blogs.byCodeInfo(String(codeinfo)));

    if (data.value) {
      return { name: 'blogs-slug', params: { slug: blogFormatter.getSlug(data.value) } };
    }

    throw createError({ statusCode: 404, statusMessage: `Blog dengan kode info ${codeinfo} tidak ditemukan` });
  },
});

</script>
