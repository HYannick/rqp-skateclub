<template lang="pug">
  section
    slice-zone(:slices="document.data.slices")
    .container
      ul
        li(v-for="event in events.results")
          prismic-link(:field="event.data.link")
            img(:src="event.data.thumbnail.url" width=400)
            p(v-text="$prismic.asText(event.data.title)")
            p(v-text="$prismic.asText(event.data.shortDesc)")
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import SliceZone from "vue-slicezone";
import Vue from "vue";

@Component({
  components: {
    SliceZone
  },
})
export default class EventsPageComponent extends Vue {
  async asyncData({ $prismic, _, error }: any) {
    const document = await $prismic.api.getByUID('events-page', 'events')
    const events = await $prismic.api.query(
      $prismic.predicates.at('document.type','event')
    )
    if (document) {
      return { document, events }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}


</script>
