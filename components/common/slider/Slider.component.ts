import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';
import SliderControl from '~/components/common/slider/slider-control/SliderControl.vue';
import { SlideVue } from '~/components/common/slider/slide';
import { Slide } from '~/components/common/Types';

@Component({
  components: {
    SlideVue,
    SliderControl,
  },
})
export default class SliderComponent extends Vue {
  @Prop({
    default: []
  })
  slides!: Slide[];

  current = 0;

  get wrapperTransform() {
    return {
      'transform': `translateX(-${this.current * (100 / this.slides.length)}%)`
    }
  }

  handlePreviousClick() {
    const previous = this.current - 1
    this.current = (previous < 0) ? this.slides.length - 1 : previous
  }

  handleNextClick() {
    const next = this.current + 1;
    this.current = (next === this.slides.length) ? 0 : next
  }
}
