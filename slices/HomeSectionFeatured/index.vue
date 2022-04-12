<template lang="pug">
  section.section
    ContentImageVue(:background-image-url='slice.primary.leftImage.url' side='left')
    .content-container
      h2.title-2.text-xxl.-colored-span(v-html='$prismic.asHtml(slice.primary.title)')
      h4.title-4.text-l.text-bold.-colored-span(v-html='$prismic.asHtml(slice.primary.subTitle)')
      p.text-semi-light(v-html='$prismic.asHtml(slice.primary.description)')
      prismic-link(:field="slice.primary.viewMore").btn-link.link.link--helike.text-bold.text-color-default
        span En savoir
        span.colored-span plus
    ContentImageVue(:background-image-url='slice.primary.rightImage.url' side='right')
</template>

<script>
import Vue from "vue";
import {ContentImageVue} from "~/components/common/content-image";

export default Vue.extend({
  name: "HomeSectionFeatured",
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
})
</script>

<style scoped lang="scss">
.section {
  margin: 30rem auto;
  display: flex;
  position: relative;
  color: $color-text-primary-dark;
  text-align: center;
  max-width: 192rem;
  width: 100%;
  height: 62rem;
  @media screen and (max-width: $screen-size-sm) {
    height: 120rem;
    margin: 10rem 0;
  }
  > div {
    flex: 1;
  }
  > div:first-child {
    transform: translateY(-10rem);
    @media screen and (max-width: $screen-size-sm) {
      transform: translateY(0);
      margin-bottom: 8rem;
    }
  }
  > div:last-child {
    transform: translateY(10rem);
    @media screen and (max-width: $screen-size-sm) {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: $screen-size-sm) {
    flex-direction: column;
  }
}

.content-container {
  background: $color-white;
  position: relative;
  transform: translateY(-5rem);
  display: flex;
  padding: 0 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .btn-link {
    margin-top: 5rem;
  }
}
</style>

