import { Wrapper, createLocalVue, shallowMount } from '@vue/test-utils';
import { EventCardComponent, EventCardVue } from '~/components/common/event-card';
import { mockEventData } from '~/test/unit/components/common/event-card/event.fixtures';

let wrapper: Wrapper<EventCardComponent>;
let eventCardComponent: EventCardComponent
const createWrapper = () => {
  const localVue = createLocalVue();
  wrapper = shallowMount<EventCardComponent>(EventCardVue, {
    localVue,
    propsData: {
      event: mockEventData(),
    },
    stubs: ['prismic-link'],
  });

  eventCardComponent = wrapper.vm;
};

describe('Event Card Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    createWrapper();
  });

  it('should be a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should retrieve event props', () => {
    expect(eventCardComponent.event).toEqual({
      thumbnail: {
        alt: 'ortega',
        url: 'ortega.png',
      },
      title: 'Shiva Contest',
      description: 'Lorem Ipsum',
      date: new Date('2022-06-12'),
      link: 'linkUrl',
    })
  });

  it('should pérse event date', () => {
    expect(eventCardComponent.eventDate).toEqual({
      day: 12,
      month: 'juin'
    })
  });
});
