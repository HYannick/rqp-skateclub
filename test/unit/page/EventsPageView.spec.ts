import { EventsPageView } from '~/pages/events/EventsPageView';
import { mockEventData } from '~/test/unit/components/common/event-card/event.fixtures';
const MOCKED_EVENTS = [
  mockEventData({date: new Date('2022-06-03')}),
  mockEventData({date: new Date('2023-01-03')}),
  mockEventData({date: new Date('2018-02-15')}),
  mockEventData({date: new Date('2020-12-10')}),
]
describe('EventsPageView', () => {
  it('should be an EventsPageView instance', () => {
    const pageView = EventsPageView.fromData(MOCKED_EVENTS, new Date());
    expect(pageView).toBeInstanceOf(EventsPageView);
  });
  it('should get sorted passed events depending of current date', () => {
    const currentDate = new Date();
    const pageView = EventsPageView.fromData(MOCKED_EVENTS, currentDate);
    expect(pageView.passedEvents).toEqual([
      mockEventData({date: new Date('2020-12-10')}),
      mockEventData({date: new Date('2018-02-15')})
    ]);
  });
  it('should get sorted future events depending of current date', () => {
    const currentDate = new Date();
    const pageView = EventsPageView.fromData(MOCKED_EVENTS, currentDate);
    expect(pageView.futureEvents).toEqual([
      mockEventData({date: new Date('2023-01-03')}),
      mockEventData({date: new Date('2022-06-03')}),
    ]);
  });
});
