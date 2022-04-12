<template lang="pug">
  .container
    .page-banner
      .page-banner__overlay
      img(:src="slice.primary.picture.url" :alt="slice.primary.picture.alt")
      h1.text-xxl(v-text="$prismic.asText(slice.primary.title)")
</template>

<script>
export default {
  name: "PageBanner",
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
.page-banner {
  margin: 2rem auto 10rem;
  width: 100%;
  height: 70rem;
  position: relative;
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
  @media screen and (max-width: $screen-size-sm) {
    height: 40rem;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparentize($color-primary, 0.8);
    z-index: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 4s cubic-bezier(0.25, 1, 0.35, 1);
  }
  h1 {
    position: absolute;
    margin: 0;
    z-index: 1;
    bottom: 2rem;
    font-family: $rqp-default-heading-font-family;
    color: $color-white;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
