import { EventData } from '~/domain/Event';

export const mockEventData = (opts?: Partial<EventData>): EventData => ({
  thumbnail: {
    alt: 'ortega',
    url: 'ortega.png',
  },
  title: 'Shiva Contest',
  description: 'Lorem Ipsum',
  date: new Date('2022-06-12'),
  link: 'linkUrl',
  ...opts,
})
