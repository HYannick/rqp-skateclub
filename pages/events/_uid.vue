<template lang="pug">
  .container
    EventHeroVue(:event="currentEvent")
    slice-zone(:slices="currentEvent.slices")
</template>

<script lang="ts">
import SliceZone from "vue-slicezone";
import Vue from "vue";
import {EventHeroVue} from "~/components/common/event-hero";
import { EventData, RestEvent } from '~/domain/Event';

export default Vue.extend({
  name: "EventPageContent",
  components: {
    EventHeroVue,
    SliceZone
  },
  async asyncData({ $prismic, _, error, route }: any) {
    const document: {data: RestEvent} = await $prismic.api.getByUID('event', route.params.uid);

    if (document) {
      const currentEvent = EventData.toDomain(document.data, $prismic)
      return { currentEvent }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>
