<template>
  <section>
    <slice-zone :slices="document.data.slices" />
  </section>
</template>

<script>
import SliceZone from "vue-slicezone";
import Vue from "vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    SliceZone
  },
  async asyncData({ $prismic, _, error }) {
    const document = await $prismic.api.getByUID('home-page', 'homepage')
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>
