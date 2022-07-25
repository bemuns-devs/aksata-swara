<template>
  <transition
    appear
    @after-enter="onBackdropAfterEnter"
  >
    <div
      v-show="isOpen"
      class="fixed w-full h-full bg-slate-500/50 z-[9999] flex flex-col justify-center items-center"
      @click.self="onOverlayClick"
    >
      <transition
        appear
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
        class="transition-transform ease-in-out"
        @after-leave="onContentAfterLeave"
      >
        <nav
          v-if="isShow"
          class="self-end relative w-full h-full max-w-screen-sm bg-white p-2 overflow-y-auto flex flex-col shadow"
        >
          <div class="flex justify-between mb-2">
            <div class="p-4">
              <NuxtLink
                to="/"
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
              <nuxt-link to="/">
                Beranda
              </nuxt-link>
            </li>

            <li @click="onNavItemClick">
              <nuxt-link to="/about">
                Tentang
              </nuxt-link>
            </li>

            <li @click="onNavItemClick">
              <nuxt-link :to="{name: 'blogs'}">
                Informasi
              </nuxt-link>
            </li>

            <li @click="onNavItemClick">
              <nuxt-link to="/unit-and-platform">
                Unit
              </nuxt-link>
            </li>

            <li @click="onNavItemClick">
              <nuxt-link
                to="#"
                filled
              >
                Masukkan Kode Info
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts" setup>
interface Props {
  modelValue?: boolean;
}

interface Emits {
  (e: 'update:modelValue', v: boolean): void;
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
const isShow = ref(isOpen.value);

const onOverlayClick = () => {
  isShow.value = false;
};

const onCloseClick = () => {
  isShow.value = false;
};

const onNavItemClick = () => {
  isShow.value = false;
};

const onContentAfterLeave = () => {
  isOpen.value = false;
};

const onBackdropAfterEnter = () => {
  isShow.value = true;
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
