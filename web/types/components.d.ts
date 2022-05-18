import { NuxtLinkProps } from 'nuxt/dist/app/components';
import type { Component } from 'vue';

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

declare module './components/Button.vue' {
  declare const Button: DefineComponent<Props>;
  export default Button;
}
