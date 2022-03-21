<template lang="pug">
  .container
    .sponsor-list
      .sponsor-image(v-for="sponsor in sponsors" :keys="sponsor.index")
        img(:src="sponsor.src" :alt="sponsor.headline")
    .introduction.text-center
      p.text.text-semi-light.-colored-span.-bold-span(v-html='$prismic.asHtml(slice.primary.introduction)')
</template>

<script lang="ts">
import {Component, Prop} from "nuxt-property-decorator";
import Vue from "vue";

export interface RestSponsorImage {
  sponsorLogo: {
    alt: string;
    url: string;
  }
}

export interface SponsorImage {
  index: number;
  headline: string;
  src: string;
}

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
.introduction {
  margin: 5rem auto 15rem;
  display: flex;
  justify-content: center;
  max-width: 100rem;
  width: 100%;
  p {
    font-size: 2.5rem;
  }
  span {
    font-weight: bold;
    color: $color-primary;
  }
}
.sponsor-list {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  height: 10rem;
  .sponsor-image {
    height: 100%;
    margin: 0 1rem;
    display: flex;
    align-items: center;
    img {
      width: 15rem;
    }
  }
}
</style>
