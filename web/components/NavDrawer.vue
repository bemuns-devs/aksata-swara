<template>
  <Overlay
    v-model="isOpen"
    :transition="{
      appear: true,
      enterFromClass: 'translate-x-full',
      enterToClass: 'translate-x-0',
      leaveFromClass: 'translate-x-0',
      leaveToClass: 'translate-x-full',
      class:'transition-transform ease-in-out'
    }"
  >
    <nav class="self-end relative w-full h-full max-w-screen-sm bg-white p-2 overflow-y-auto flex flex-col shadow">
      <div class="flex justify-between mb-2">
        <div class="p-4">
          <NuxtLink
            :to="{name: 'index'}"
            class="flex items-center gap-2"
          >
            <BrandSVG class="w-12 h-12" />
            <span class="text-xl text-primary text-center font-bold font-brand">Aksata Swara</span>
          </NuxtLink>
        </div>

        <Button
          icon="heroicons-solid:x"
          round
          class="self-start "
          icon-class="text-lg"
          @click="onCloseClick"
        />
      </div>

      <hr>

      <ul class="nav-items mt-2 p-2">
        <li @click="onNavItemClick">
          <nuxt-link :to="{name: 'index'}">
            Beranda
          </nuxt-link>
        </li>

        <li @click="onNavItemClick">
          <nuxt-link :to="{name: 'about'}">
            Tentang
          </nuxt-link>
        </li>

        <li @click="onNavItemClick">
          <nuxt-link :to="{name: 'blogs'}">
            Informasi
          </nuxt-link>
        </li>

        <li @click="onNavItemClick">
          <nuxt-link :to="{name: 'index', hash: '#unit-platform'}">
            Unit
          </nuxt-link>
        </li>

        <div class="grow" />

        <li @click="onNavItemClick">
          <Button
            filled
            class="w-full"
            @click="$emit('codeInfoClick')"
          >
            Masukkan Kode Info
          </Button>
        </li>
      </ul>
    </nav>
  </Overlay>
</template>

<script lang="ts" setup>
interface Props {
  modelValue?: boolean;
}

interface Emits {
  (e: 'update:modelValue', v: boolean): void;
  (e: 'codeInfoClick'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const _isOpen = ref(props.modelValue);
const isOpen = computed({
  get: () => (props.modelValue === undefined ? _isOpen.value : props.modelValue),
  set(v) {
    if (props.modelValue === undefined) {
      _isOpen.value = v;
    } else {
      emit('update:modelValue', v);
    }
  },
});

const onCloseClick = () => {
  isOpen.value = false;
};

const onNavItemClick = () => {
  isOpen.value = false;
};
</script>

<style lang="sass" scoped>
.nav-items
  @apply flex flex-col gap-2
  li
    @apply flex
    a
      @apply grow px-4 py-2 text-lg
      &:hover
        @apply bg-primary-100/30
</style>
