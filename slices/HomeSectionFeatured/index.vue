<template lang="pug">
  section(class="section" style="margin-top: 30rem; margin-bottom: 30rem")
    ContentImageVue(:background-image-url='slice.primary.leftImage.url' side='left')
    .content-container
      h2.title-2.text-size-xxl.-colored-span(v-html='$prismic.asHtml(slice.primary.title)')
      h4.title-4.text.text-size-l.text-bold.-colored-span(v-html='$prismic.asHtml(slice.primary.subTitle)')
      p.text-semi-light(v-html='$prismic.asHtml(slice.primary.description)')
      prismic-link(:field='slice.primary.link') {{ slice.primary.viewMore }}
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
  display: flex;
  position: relative;
  color: $color-text-primary-dark;
  text-align: center;
  max-width: 192rem;
  width: 100%;
  height: 62rem;
  > div {
    flex: 1;
  }
}

.content-container {
  background: white;
  position: relative;
  transform: translateY(-5rem);
}
</style>

