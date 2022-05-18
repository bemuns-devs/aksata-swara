<script lang="ts">
import type { Component, DefineComponent, PropType } from 'vue';
import { NuxtLink } from '#components';
import type { NuxtLinkProps } from '#app';

const DEFAULT_TAG = 'button';

type Props = {
  /**
   * Component to be used
   */
  as?: string | Component;
  label?: string;
  filled?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  link?: boolean;
} & NuxtLinkProps;

export default defineNuxtComponent({
  props: {
    as: {
      type: [String, Object] as PropType<string | Component>,
      required: false,
      default: undefined,
    },
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    filled: {
      type: Boolean,
      required: false,
      default: false,
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, { attrs, slots }) {
    // Infer component to be used
    const tag = computed(() => {
      if (props.as) return props.as;

      if (attrs.to || attrs.href) return NuxtLink;

      return DEFAULT_TAG;
    });

    return () => h(tag.value, {
      class: ['btn', {
        'btn--filled': props.filled,
        'btn--outlined': props.outlined,
        'btn--rounded': props.rounded,
        'btn--link': props.link,
      }],
    }, {
      default: () => slots.default?.() || props.label,
    });
  },
  // Just for better typings
}) as DefineComponent<Props>;
</script>

<style lang="sass">
.btn
  @apply flex justify-center items-center gap-2 text-gray-900 font-semibold px-4 py-2.5 rounded-lg transition
  &:hover
    @apply bg-primary-50
  &:focus
    @apply ring ring-primary-300
  &:active
    @apply bg-primary-50/50

  &--filled
    @apply text-white bg-primary
    @apply hover:bg-primary-600
    @apply active:bg-primary-700
    &:disabled,
    .disabled
      @apply bg-primary-300 text-neutral-50
      @apply hover:bg-primary-300
    *
      @apply text-white

  &--rounded
    @apply rounded-full

  &--outlined
    @apply border border-primary-500

  &--link
    @apply underline

  .icon
    @apply w-4 h-4
</style>
