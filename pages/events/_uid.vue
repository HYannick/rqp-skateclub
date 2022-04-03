<template>
  <section>
    {{document.data}}
  </section>
</template>

<script>
import SliceZone from "vue-slicezone";
import Vue from "vue";

export default Vue.extend({
  name: "EventPageContent",
  components: {
    SliceZone
  },
  async asyncData({ $prismic, _, error, route }) {
    const document = await $prismic.api.getByUID('event', route.params.uid)
    console.log(document);
    if (document) {
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>
