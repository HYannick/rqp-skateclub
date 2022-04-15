<template lang="pug">
  section.section.container
    .background
      img(:src='require("~/assets/svg/brushes/brush-section-black.svg")' data-rellax-percentage="0.5" data-rellax-speed="-1"  v-rellax)
      img(:src='require("~/assets/svg/brushes/brush-section-white.svg")')
    .content
      ContentImageVue(:background-image-url='slice.primary.featuredImage.url' side='left')
      .content-container
        h2.title-2.text-xxl.-colored-span(v-html='$prismic.asHtml(slice.primary.title)')
        p.text-semi-light.-colored-span.-bold-span(v-html='$prismic.asHtml(slice.primary.description)')
</template>

<script>
import {ContentImageVue} from "~/components/common/content-image";

export default {
  name: "BigHighlightBlock",
  components: {
    ContentImageVue
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped lang="scss">
.section {
  position: relative;
  margin-top: 30rem;
  max-width: 150rem;
  width: 100%;
  height: 60rem;
  margin-bottom: 50rem;
  @media screen and (max-width: $screen-size-md) {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
  .content {
    display: flex;
    align-items: center;
    position: relative;
    color: $color-text-primary-dark;
    text-align: right;
    max-width: 150rem;
    width: 100%;
    height: 60rem;
    margin-bottom: 50rem;

    > div {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }

    @media screen and (max-width: $screen-size-md) {
      flex-direction: column;
      text-align: center;
    }
  }

}
h2 {
  text-align: right;
  position: absolute;
  top: -10rem;
  right: 12rem;
  z-index: 9;
  max-width: 60rem;
  width: 100%;
  @media screen and (max-width: $screen-size-md) {
    position: initial;
    text-align: center;
    margin-top: 2rem;
  }
}
.content-container {
  text-align: center;
  max-width: 60rem;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: $screen-size-md) {
    padding: 0;
    align-items: center;
  }
}
.background {
  position: absolute;
  left: -30rem;
  top: 0;
  transform: translateY(-25rem);
  width: 100%;
  height: 150rem;
  z-index: -1;
  @media screen and (max-width: $screen-size-md) {
    display: none;
  }
  img {
    position: absolute;
    width: 100%;
  }

  img:last-child {
    transform: translate(60rem, 12rem);
  }
}
</style>
