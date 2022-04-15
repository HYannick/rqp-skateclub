<template lang="pug">
  .container
    .sponsor-list__container
      h4.text-xl(v-if='slice.primary.title.length' v-text="$prismic.asText(slice.primary.title)" )
      .sponsor-list
        .sponsor-image(v-for="sponsor in sponsors" :keys="sponsor.index")
          img(:src="sponsor.src" :alt="sponsor.headline")
</template>

<script lang="ts">
import {Component, Prop} from "nuxt-property-decorator";
import Vue from "vue";
import { RestSponsorImage, SponsorImage } from '~/components/common/Types';

@Component
export default class SponsorsList extends Vue {
  @Prop()
  slice!: any;

  get sponsors(): SponsorImage[] {
    return this.slice.items.map((slide: RestSponsorImage, index: number) => ({
      index,
      headline: slide.sponsorLogo.alt,
      src: slide.sponsorLogo.url,
    }))
  }
}
</script>

<style scoped lang="scss">
.sponsor-list {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  height: 10rem;

  &__container {
    h4 {
      font-family: $rqp-default-heading-font-family;
      font-weight: lighter;
      margin: 0 auto 2rem;
      text-align: center;
    }
  }
  .sponsor-image {
    height: 100%;
    margin: 0 1rem;
    display: flex;
    align-items: center;
    img {
      width: 15rem;
      @media screen and (max-width: $screen-size-sm) {
        width: 8rem;
      }
    }
  }
}
</style>
