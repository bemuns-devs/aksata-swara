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
        v-bind="props.transition"
        @after-leave="onContentAfterLeave"
      >
        <slot v-if="isShow" />
      </transition>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import type { TransitionProps } from 'vue';

interface Props {
  modelValue?: boolean;
  transition?: TransitionProps;
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

const onContentAfterLeave = () => {
  isOpen.value = false;
};

const onBackdropAfterEnter = () => {
  isShow.value = true;
};
</script>
