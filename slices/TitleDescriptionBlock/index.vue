<template lang="pug">
  .container(style="margin-top: 15rem; margin-bottom: 15rem;")
    h2.title-2.text-size-xxl.-colored-span(v-html='$prismic.asHtml(slice.primary.title)')
    p.text-semi-light(v-html='$prismic.asHtml(slice.primary.description)')
</template>

<script lang="ts">
export default {
  name: "TitleDescriptionBlock",
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
