<template lang="pug">
  .hero
    h1.hero-title
      span ROULE
      span QUI
      span PEUT
    SliderVue(:slides="slides")
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';
import { SliderVue } from '~/components/common/slider';

export interface RestSlide {
  slideImage: {
    alt: string;
    url: string;
  }
}

@Component({
  components: {
    SliderVue,
  },
})
export default class HomeHeroSlider extends Vue {
  @Prop()
  slice!: any;

  get slides() {
    return this.slice.items.map((slide: RestSlide, index: number) => ({
      index,
      headline: slide.slideImage.alt,
      src: slide.slideImage.url,
    }))
  }
}
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8rem 0 5rem;
}

.hero-title {
  --base-title-size: 10rem;
  --base-title-width: 40rem;
  display: flex;
  flex-direction: column;
  max-width: var(--base-title-width);
  width: 100%;
  position: absolute;
  top: -8rem;
  left: 8rem;
  font-size: var(--base-title-size);
  z-index: 99;
  align-items: flex-end;
  span:nth-child(2) {
    color: $color-primary;
    align-self: flex-start;
  }
  span:nth-child(3) {
    align-self: center;
  }
}

@media screen and (min-width: 1366px) {
  .hero-title {
    --base-title-size: 15rem;
    --base-title-width: 60rem;
  }
}
</style>
