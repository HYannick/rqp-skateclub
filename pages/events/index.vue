<template lang="pug">
  section
    slice-zone(:slices="document.data.slices")
    .container
      .event-card__tabs
        .event-card__tab(:class='{"-active": currentTab === 0}' @click="switchTab(0)")
          p.text-bold A venir
        .event-card__tab(:class='{"-active": currentTab === 1}' @click="switchTab(1)")
          p.text-bold Passés
      .event-card__list
        EventCard(:event="event" v-for="event in eventsList" )
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import SliceZone from "vue-slicezone";
import Vue from "vue";
import EventCard from '~/components/common/event-card/EventCard.vue';
import { EventData, RestEvent } from '~/domain/Event';
import { EventsPageView } from '~/pages/events/EventsPageView';

export enum EventTab {
  FUTURE_EVENTS,
  PASSED_EVENTS,
}

@Component({
  components: {
    EventCard,
    SliceZone
  },
})
export default class EventsPageComponent extends Vue {

  currentTab: EventTab = EventTab.FUTURE_EVENTS;

  futureEvents: any;
  passedEvents: any;

  async asyncData({ $prismic, _, error }: any) {
    const document = await $prismic.api.getByUID('events-page', 'events')
    const events: {results: {data: RestEvent}[]} = await $prismic.api.query(
      $prismic.predicates.at('document.type','event')
    )
    const eventData: EventData[] = events.results.map(result => EventData.toDomain(result.data, $prismic));

    const currentDate = new Date();
    const {futureEvents, passedEvents} = EventsPageView.fromData(eventData, currentDate);

    if (document) {
      return { document, futureEvents, passedEvents}
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }

  switchTab(tab: EventTab) {
    this.currentTab = tab
  }

  get eventsList() {
    return this.currentTab === EventTab.FUTURE_EVENTS ? this.futureEvents : this.passedEvents;
  }
}
</script>

<style lang="scss">
.event-card {
  &__tabs {
    display: flex;
    justify-content: center;
    margin: 0 auto 8rem;
  }
  &__tab {
    cursor: pointer;
    margin: 0 6rem;
    &:hover {
      color: $color-primary;
    }
    p {
      margin: 0;
      font-size: 4rem;
    }
    &.-active {
      color: $color-primary;
    }
  }
}
</style>
