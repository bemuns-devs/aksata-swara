<script lang="ts">
import type { Component, DefineComponent, PropType } from 'vue';
import { Icon } from '@iconify/vue';
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
    round: {
      type: Boolean,
      required: false,
      default: false,
    },
    square: {
      type: Boolean,
      required: false,
      default: false,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      default: undefined,
    },
    iconClass: {
      required: false,
      default: undefined,
    },
    appendIcon: {
      type: String,
      required: false,
      default: undefined,
    },
    appendIconClass: {
      required: false,
      default: undefined,
    },
    size: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props, { attrs, slots }) {
    // Infer component to be used
    const tag = computed(() => {
      if (props.as) return props.as;

      if (attrs.to || attrs.href) return NuxtLink;

      return DEFAULT_TAG;
    });

    const icon = props.icon ? h(Icon, { icon: props.icon, class: props.iconClass }) : undefined;
    const appendIcon = props.appendIcon ? h(Icon, { icon: props.appendIcon, class: props.appendIconClass }) : undefined;

    return () => h(tag.value, {
      class: ['btn', {
        'btn--filled': props.filled,
        'btn--outlined': props.outlined,
        'btn--rounded': props.rounded,
        'btn--round': props.round,
        'btn--link': props.link,
        'btn--square': props.square,
        'btn--sm': props.size === 'sm',
      }],
    }, {
      default: () => slots.default?.() || [icon, props.label && h('span', props.label), appendIcon],
    });
  },
  // Just for better typings
}) as DefineComponent<Props>;
</script>

<style lang="sass">
.btn
  --surface: transparent
  --on-surface: theme(colors.slate.500)
  background-color: var(--surface)
  color: var(--on-surface)
  @apply text-base flex justify-center items-center gap-2 font-semibold px-4 py-2.5 rounded-lg transition
  &:hover
    --surface: theme(colors.primary.50)
  &:focus
    @apply ring ring-primary-300
  &:active
    --surface: lighten(theme(colors.primary.50), 50%)

  &--filled
    --surface: theme(colors.primary.DEFAULT)
    --on-surface: theme(colors.white)
    &:hover
      --surface: theme(colors.primary.600)
    &:active
      --surface: theme(colors.primary.700)
    &:disabled,
    .disabled
      --surface: theme(colors.primary.300)
      --on-surface: theme(colors.neutral.50)
      &:hover
        --surface: theme(colors.primary.300)

  &--rounded
    @apply rounded-full

  &--outlined
    @apply border border-primary-500

  &--round
    @apply rounded-full aspect-square

  &--square
    @apply rounded-none

  &--link
    @apply underline

  &--sm
    @apply px-2 py-1.5 leading-snug

  .icon
    @apply w-4 h-4
</style>
