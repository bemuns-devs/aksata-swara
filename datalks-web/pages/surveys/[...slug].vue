<script lang="ts" setup>
const rootLayoutState = useRootLayoutState();
</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <DocumentView :value="doc" :title="doc.title" :image="doc.image" :period-start="new Date(doc.periodStart)"
        :period-end="new Date(doc.periodEnd)" @vnode-mounted="rootLayoutState.surveyLink = doc?.url"
        @vnode-unmounted="rootLayoutState.surveyLink = ''">
        <template #actions>
          <NuxtLink href="/"
            class="bg-white hover:bg-stone-100 active:bg-stone-200 px-4 py-3 text-stone-700 font-medium flex items-center gap-2 rounded-lg border-2 border-stone">
            <div class="i-akar-icons:home"></div>
            <span>Beranda</span>
          </NuxtLink>
          <NuxtLink href="/surveys"
            class="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 px-4 py-3 text-white font-medium flex items-center gap-2 rounded-lg shadow">
            <div class="i-akar-icons:clipboard"></div>
            <span>Lihat survey lainnya</span>
          </NuxtLink>
        </template>
      </DocumentView>
    </ContentDoc>
  </main>
</template>
