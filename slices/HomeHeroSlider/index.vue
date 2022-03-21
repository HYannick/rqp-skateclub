<template lang="pug">
  .hero
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
</style>
