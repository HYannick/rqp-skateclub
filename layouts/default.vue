<template lang="pug">
  .homepage
    .background
      .background__hidden(data-rellax-speed="-1" v-rellax)
        .background__top
          img(:src='require("~/assets/svg/brushes/brush-bg-top-right.svg")')
      .background__bottom(data-rellax-speed="-1" v-rellax)
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
      @media screen and (max-width: $screen-size-md) {
        display: none;
      }
      @media screen and (max-width: $screen-size-lg) {
        .background__top {
          right: -80rem;
        }
        .background__bottom {
          bottom: -80rem;
          left: -105rem;
        }
      }
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
        bottom: -60rem;
        left: -85rem;
      }
    }
  }
</style>
