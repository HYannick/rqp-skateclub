import { EventData } from '~/domain/Event';

export class EventsPageView {
  constructor(public readonly passedEvents: EventData[], public readonly futureEvents: EventData[]) {
  }

  static fromData(events: EventData[], currentDate: Date) {
    const dateTime = currentDate.getTime();

    const sortEvents = (events: EventData[]) => {
      return events.sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    const passedEvents = events.filter(event => event.date.getTime() < dateTime);
    const futureEvents = events.filter(event => event.date.getTime() > dateTime);

    return new EventsPageView(sortEvents(passedEvents), sortEvents(futureEvents));
  }
}
