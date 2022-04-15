import { Component, Prop } from 'nuxt-property-decorator';
import Vue from 'vue';
import {ContentImageSide} from "~/components/common/content-image/Enums";

@Component
export default class ContentImageComponent extends Vue {
  @Prop()
  backgroundImageUrl!: string;

  @Prop({
    default: ContentImageSide.LEFT
  })
  side!: ContentImageSide;

  get brushSideClasses() {
    return this.side === ContentImageSide.LEFT ? 'brush-left' : 'brush-right';
  };
}
