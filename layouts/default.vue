<template lang="pug">
  .homepage
    .background
      .background__hidden
        .background__top
          img(:src='require("~/assets/svg/brushes/brush-bg-top-right.svg")')
      .background__bottom
        img(:src='require("~/assets/svg/brushes/brush-bg-bottom-left.svg")')
    HeaderPrismicVue
    nuxt
    FooterPrismicVue
</template>

<script>
import {HeaderPrismicVue} from "~/components/common/header";
import {FooterPrismicVue} from "~/components/common/footer";

export default {
  components: {
    HeaderPrismicVue,
    FooterPrismicVue
  },
  // Called before rendering the layout (even for error page)
  async middleware({store, $prismic}) {
    await store.dispatch('fetchMenu', $prismic)
  }
}
</script>

<style scoped lang="scss">
  .homepage {
    .background {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      &__hidden {
        position: absolute;
        overflow: hidden;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
      }
      &__top {
        position: absolute;
        top: -90rem;
        right: -70rem;
      }
      &__bottom {
        position: absolute;
        bottom: -70rem;
        left: -85rem;
      }
    }
  }
</style>
