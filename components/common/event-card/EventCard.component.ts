import { Component, Prop } from 'nuxt-property-decorator';
import Vue from 'vue';
import { EventData } from '~/domain/Event';

@Component
export default class EventCardComponent extends Vue {
  @Prop()
  event!: EventData;

  get eventDate() {
    const {date} = this.event;
    const month = date.toLocaleString('fr', { month: 'long' });
    return {
      day: date.getDate(),
      month,
      year: date.getFullYear(),
    }
  }
}
