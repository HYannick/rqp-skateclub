<template lang="pug">
  .container
    .section
      h2.title-2.text-xxl.-colored-span(v-html='$prismic.asHtml(slice.primary.title)')
      .content-container
        h4.title-4.text-l.text-bold.-colored-span(v-html='$prismic.asHtml(slice.primary.subTitle)')
        p.text-semi-light(v-text='$prismic.asText(slice.primary.description)')
        prismic-link(:field="slice.primary.viewMore").btn-link.link.link--helike.text-bold.text-color-default
          span En savoir
          span.colored-span plus
      ContentImageVue(:background-image-url='slice.primary.background.url' side='right')
</template>

<script>
import {ContentImageVue} from "~/components/common/content-image";

export default {
  name: "HomeSectionHighlighted",
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
  display: flex;
  align-items: center;
  position: relative;
  color: $color-text-primary-dark;
  text-align: right;
  max-width: 150rem;
  width: 100%;
  height: 80rem;
  @media screen and (max-width: $screen-size-sm) {
    flex-direction: column;
  }
  > div {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: $screen-size-sm) {
      > div {
        justify-content: center;
      }
    }
  }
}
h2 {
  text-align: left;
  position: absolute;
  top: -4rem;
  left: 2rem;
  z-index: 9;
  @media screen and (max-width: $screen-size-sm) {
    position: initial;
  }
}
h4 {
  max-width: 35rem;
  width: 100%;
}
.content-container {
  text-align: right;
  max-width: 60rem;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: $screen-size-sm) {
    order: 2;
    align-items: center;
    text-align: center;
  }
  .btn-link {
    margin-top: 5rem;
  }
}
</style>
