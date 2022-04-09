<template lang="pug">
  .image-text-block
    h4(v-text="$prismic.asHtml(slice.primary.title)" )
    .image-text-block__container
      .image-text-block__picture
        img(:src="slice.primary.picture.url")
      .image-text-block__content
        p(v-html="$prismic.asHtml(slice.primary.description)" )
</template>

<script>
export default {
  name: "ImageTextBlock",
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
.image-text-block {
  margin-top: 20rem;
  h4 {
    font-family: $rqp-default-heading-font-family;
    font-weight: lighter;
    font-size: 6rem;
    margin: 0 0 2rem;
  }
  &__container {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  &__picture {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    flex: 1;
  }
}
</style>
