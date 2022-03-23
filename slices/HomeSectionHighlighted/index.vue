<template lang="pug">
  section(class="section container" style="margin-top: 10rem")
    h2.title-2.text-size-xxl.-colored-span(v-html='$prismic.asHtml(slice.primary.title)')
    div
      .content-container
        h4.title-4.text-size-l.text-bold.-colored-span(v-html='$prismic.asHtml(slice.primary.subTitle)')
        p.text-semi-light(v-text='$prismic.asText(slice.primary.description)')
        prismic-link(:field="slice.primary.viewMore" target="_blank").btn-link.link.link--helike.text-bold.text-color-default
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
  height: 60rem;
  > div {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
}
h2 {
  text-align: left;
  font-size: 10rem;
  position: absolute;
  top: -4rem;
  left: 2rem;
  z-index: 9;
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

  .btn-link {
    margin-top: 5rem;
  }
}
</style>
