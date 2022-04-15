<template lang="pug">
  .container
    .hero
      SliderVue(:slides="slides" :current="slice.primary.startAt || 0")
        h1.hero-title(v-if='slice.variation === "default-slice"')
          span ROULE
          span QUI
          span PEUT
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';
import { SliderVue } from '~/components/common/slider';
import { Slide } from '~/components/common/Types';

export interface RestSlide {
  slideImage: {
    alt: string;
    url: string;
  }
  title?: string;
}

@Component({
  components: {
    SliderVue,
  },
})
export default class HomeHeroSlider extends Vue {
  @Prop()
  slice!: any;

  $prismic: any;

  get slides() {
    return this.slice.items.map((slide: RestSlide, index: number): Slide => ({
      index,
      asText: false,
      headline: this.$prismic.asText(slide.title),
      alt: slide.slideImage.alt,
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
  top: -4rem;
  left: -8rem;
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
  @media screen and (max-width: $screen-size-md) {
    font-size: 4.5rem;
    width: 100%;
    top: -5.5rem;
    left: -50%;
    flex-direction: row;
    transform: translateX(50%);
    justify-content: center;
  }
}

@media screen and (min-width: $screen-size-lg) {
  .hero-title {
    --base-title-size: 15rem;
    --base-title-width: 60rem;
  }
}
</style>
