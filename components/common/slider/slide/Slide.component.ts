import Vue from 'vue';
import { Component, Prop, Watch } from 'nuxt-property-decorator';
import SliderControl from '~/components/common/slider/slider-control/SliderControl.vue';
import { Slide, TextSlide } from '~/components/common/Types';
import { SlideVue } from '~/components/common/slider/slide/index';

@Component({
  components: {
    SlideVue,
    SliderControl,
  },
})
export default class SlideComponent extends Vue {
  @Prop()
  slide!: Slide | TextSlide;

  @Prop()
  current!: number;

  classNames =  '';
  slideRef: any = null;

  @Watch('current', {immediate: true})
  updateSlides(current: number) {
    this.classNames = 'slide'
    const {index} = this.slide
    if (current === index) this.classNames += ' slide--current'
    else if (current - 1 === index) this.classNames += ' slide--previous'
    else if (current + 1 === index) this.classNames += ' slide--next'
  }

  mounted() {
    this.slideRef = this.$refs.slide as any;
    this.classNames = 'slide';
    this.updateSlides(this.current);
  }

  handleMouseMove(event: any) {
    if(!this.slideRef) {
      return;
    }
    const el = this.slideRef as any
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
  }

  handleMouseLeave() {
    if(!this.slideRef) {
      return;
    }
    const el = this.slideRef as any
    el.style.setProperty('--x', 0)
    el.style.setProperty('--y', 0)
  }

  imageLoaded(event: any) {
    event.target.style.opacity = 1
  }
}
