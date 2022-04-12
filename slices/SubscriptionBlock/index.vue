<template lang="pug">
  .container
    .subscription-container
      .subscription-picture
        img(:src="slice.primary.picture.url" :alt="slice.primary.picture.alt")
      .subscription-content
        h2.title-2.text-xxl.-colored-span(v-html='$prismic.asHtml(slice.primary.title)')
        p.text-semi-light(v-html='$prismic.asHtml(slice.primary.description)')
        prismic-link(:field="slice.primary.link" target="_blank").subscription-link
          img(:src='require("~/assets/svg/hello-asso-logo.svg")')
</template>

<script>
export default {
  name: "SubscriptionBlock",
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
.subscription {
  &-container {
    display: flex;
    align-items: center;
    @media screen and (max-width: $screen-size-sm) {
      flex-direction: column;
    }

    &:hover {
      .subscription-picture {
        img {
          transform: scale(1.05);
        }
      }
    }
  }
  &-picture {
    flex: 1;
    -webkit-mask-image: url('~/assets/svg/brushes/sub-mask.svg');
    mask-image: url('~/assets/svg/brushes/sub-mask.svg');
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    @media screen and (max-width: $screen-size-sm) {
      mask-image: none;
      -webkit-mask-image: none;
      height: 40rem;
      margin-bottom: 4rem;
    }
    img {
      width: 100%;
      height: 100%;
      transition: transform 2s cubic-bezier(0.25, 1, 0.35, 1);
    }
  }
  &-content {
    text-align: center;
    flex: 0.2;
    h2 {
      color: $color-primary;
    }
  }
  &-link {
    display: block;
    margin: 0 auto;
    width: 20rem;
    img {
      width: 100%;
    }
  }
}
</style>
