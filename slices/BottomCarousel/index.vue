<template lang="pug">
  .bottom-carousel.container
    h2.title-2.text-xxl.-colored-span(v-html='$prismic.asHtml(slice.primary.title)')
    .bottom-carousel__container
      SliderVue(:slides="slides" :small="true" :current='middleSlidePos')
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';
import { SliderVue } from '~/components/common/slider';
import { RestSlide, Slide, TextSlide } from '~/components/common/Types';

@Component({
  components: {
    SliderVue,
  },
})
export default class HomeHeroSlider extends Vue {
  @Prop()
  slice!: any;

  get middleSlidePos() {
    return Math.floor(this.slides.length / 2);
  }

  get slides() {
    return this.slice.items.map((slide: RestSlide, index: number): Slide | TextSlide => {
      return ({
        index,
        headline: slide.picture.alt,
        src: slide.picture.url,
        asText: !slide.picture.url,
        content: {
          heading:  slide.heading.length ? slide.heading[0].text : '',
          text:  slide.text.length ? slide.text[0].text : '',
        },
      })
    })
  }
}
</script>

<style lang="scss">
.bottom-carousel {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 8rem auto 5rem;
  h2 {
    margin: 0 10rem 10rem;
    max-width: 70rem;
    width: 100%;
    span {
      display: block;
    }
  }
  &__container {
    position: relative;
    width: 100%;
  }
}
</style>
