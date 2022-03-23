import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';
import SliderControl from '~/components/common/slider/slider-control/SliderControl.vue';
import { SlideVue } from '~/components/common/slider/slide';
import { Slide, TextSlide } from '~/components/common/Types';

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
  slides!: (Slide | TextSlide)[];


  @Prop()
  small!: boolean;

  @Prop({
    default: 0
  })
  current!: number;

  currentSlide: number = 0;

  get slideStart() {
    return this.currentSlide === 0;
  }

  get slideEnd() {
    return this.currentSlide === this.slides.length - 1;
  }

  get wrapperTransform() {
    return {
      'transform': `translateX(-${this.currentSlide * (100 / this.slides.length)}%)`
    }
  }

  created() {
    this.currentSlide = this.current;
  }

  handlePreviousClick() {
    const previous = this.currentSlide - 1
    this.currentSlide = (previous < 0) ? this.slides.length - 1 : previous
  }

  handleNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = (next === this.slides.length) ? 0 : next
  }
}
