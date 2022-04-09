<template lang="pug">
  .container(style="margin-top: 15rem; margin-bottom: 15rem;")
    p.text-semi-light.-colored-span.-bold-span.text-size-l(v-html='$prismic.asHtml(slice.primary.text)')
</template>

<script>
export default {
  name: "ParagraphBlock",
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

<style scoped>
.section {
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
.title {
  margin-bottom: 2em;
}
</style>
