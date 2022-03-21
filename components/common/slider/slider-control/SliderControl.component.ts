import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';


@Component
export default class SliderControlComponent extends Vue {
  @Prop()
  type!: 'previous' | 'next';

  handleClick() {
    this.$emit('click')
  }
}
