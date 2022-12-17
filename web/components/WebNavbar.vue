<template>
  <nav
    class="sticky top-0 z-10 flex justify-between items-center bg-white/60 backdrop-blur px-6 py-4 transition duration-500"
    :class="{ '!bg-primary-100/30 !border-b !border-primary-500 !shadow': y > 0 }">
    <div>
      <NuxtLink :to="{ name: 'index' }" class="flex items-center gap-2">
        <BrandSVG class="w-12 h-12" />
        <span class="text-xl text-primary text-center font-bold font-brand">Aksata Swara</span>
      </NuxtLink>
    </div>

    <div class="lg:hidden">
      <Button icon="heroicons-solid:menu" round icon-class="w-6 h-6 text-gray-700" @click="drawer = !drawer" />
    </div>

    <ul class="hidden lg:flex items-center gap-4">
      <li>
        <Button label="Beranda" :to="{ name: 'index' }" />
      </li>

      <li>
        <Button label="Tentang" to="/about" />
      </li>

      <li>
        <Button label="Informasi" :to="{ name: 'blogs' }" />
      </li>

      <li>
        <Button label="Unit" :to="{ name: 'index', hash: '#unit-platform' }" />
      </li>

      <li class="ml-4">
        <Button label="Masukkan Kode Info" filled @click="isCodeInfoOpen = !isCodeInfoOpen">
          <span class="text-white">
            Masukkan Kode Info <kbd class="text-primary-300">/</kbd>
          </span>
        </Button>
      </li>
    </ul>
  </nav>

  <NuxtLoadingIndicator />

  <NavDrawer v-model="drawer" @code-info-click="isCodeInfoOpen = true" />

  <Overlay v-model="isCodeInfoOpen" :transition="{
    appear: true,
    enterFromClass: 'translate-y-[50vh] scale-0',
    enterToClass: 'translate-y-0',
    leaveFromClass: 'translate-y-0',
    leaveToClass: 'translate-y-[50vh] scale-0',
    class: 'transition-transform ease-out duration-100'
  }">
    <form class="w-[90vw] md:w-[80vw] flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden"
      @submit.prevent="onCodeInfoSubmit">
      <input ref="refCodeInfoInput" v-model="codeInfo" type="text" autofocus placeholder="Masukkan kode info"
        class="grow text-2xl px-4 py-6 border-0">
      <Button type="submit" label="Submit" filled square />
    </form>
  </Overlay>
</template>

<script lang="ts" setup>
import { watchPostEffect } from 'vue';

const { y } = useWindowScroll();
const refCodeInfoInput = ref<HTMLInputElement | null>(null);
const drawer = ref(false);
const isCodeInfoOpen = ref(false);
const codeInfo = ref('');

const onCodeInfoSubmit = async () => {
  await navigateTo({ name: 'codeinfo', params: { codeinfo: codeInfo.value } });
  isCodeInfoOpen.value = false;
};

const bindCodeInfoShortcut = (e: KeyboardEvent) => {
  if (e.key === '/') {
    e.preventDefault();
    isCodeInfoOpen.value = !isCodeInfoOpen.value;
  }
};

onMounted(() => {
  document.addEventListener('keydown', bindCodeInfoShortcut);
});

onUnmounted(() => {
  document.removeEventListener('keydown', bindCodeInfoShortcut);
});

watchPostEffect(() => {
  if (isCodeInfoOpen.value && refCodeInfoInput.value) {
    refCodeInfoInput.value.focus();
  }
});
</script>

<style lang="sass" scoped>
.btn
  --on-surface: theme(colors.slate.700)
</style>
