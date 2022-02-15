/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "vue3-marquee" {
  interface MarqueeProps {
    direction?: "normal" | "reverse";
    duration?: number;
    delay?: number;
    loop?: number;
    clone?: boolean;
    gradient?: boolean;
    gradientColor?: any;
    gradientWidth?: string;
    pauseOnHover?: boolean;
    pauseOnClick?: boolean;
  }
}
