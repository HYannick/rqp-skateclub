<template lang="pug">
  .title-description-block
    h2.title-2.text-xxl.-colored-span(v-html='$prismic.asHtml(slice.primary.title)')
    p.text-semi-light(v-html='$prismic.asHtml(slice.primary.description)')
</template>

<script lang="ts">
export default {
  name: 'TitleDescriptionBlock',
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
.title-description-block {
  margin-top: 15rem;
  margin-bottom: 15rem;
  @media screen and (max-width: $screen-size-sm) {
    margin-top: 5rem;
    margin-bottom: 5rem;
    padding: 0;
  }
}
</style>
