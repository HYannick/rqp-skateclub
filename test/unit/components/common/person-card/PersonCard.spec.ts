import { Wrapper, createLocalVue, shallowMount } from '@vue/test-utils';
import { ContentImageSide } from '~/components/common/content-image/Enums';
import { PersonCardComponent, PersonCardVue } from '~/components/common/person-card';
import { mockPersonData } from '~/test/unit/components/common/person-card/person.fixtures';

let wrapper: Wrapper<PersonCardComponent>;
let personCardComponent: PersonCardComponent
const createWrapper = () => {
  const localVue = createLocalVue();
  wrapper = shallowMount<PersonCardComponent>(PersonCardVue, {
    localVue,
    propsData: {
      person: mockPersonData(),
      side: ContentImageSide.LEFT,
      bigTitle: 'Netrunner',
      theme: 'light'
    },
    stubs: ['svg-icon', 'prismic-link'],
  });

  personCardComponent = wrapper.vm;
};

describe('Person Card Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    createWrapper();
  });

  it('should be a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should retrieve background image url and side prop', () => {
    expect(personCardComponent.person).toEqual({
      index: 0,
      picture: {
        alt: 'picture-alt',
        url: 'ortega.jpg',
      },
      information: {
        name: 'Kristin Ortega',
        description: 'lorem ipsum',
      },
      socials: {
        facebook: 'facebook.com',
        instagram: 'instagram.com',
        youtube: 'youtube.com',
      },
    })
    expect(personCardComponent.side).toBe(ContentImageSide.LEFT);
    expect(personCardComponent.theme).toBe('light');
    expect(personCardComponent.bigTitle).toBe('Netrunner');
  });

  it('should set brushImage according to side', async () => {
    expect(personCardComponent.brushImage).toBe('brushes/brush-content-left');
    wrapper.setProps({
      side: ContentImageSide.RIGHT
    });

    await wrapper.vm.$nextTick();
    expect(personCardComponent.brushImage).toBe('brushes/brush-content-right');
  });

  it('should get classes', async () => {
    expect(personCardComponent.classes).toEqual({
      '-reverse': false,
      '-light': true
    })
    wrapper.setProps({
      side: ContentImageSide.RIGHT,
      theme: 'dark'
    });
    await wrapper.vm.$nextTick();
    expect(personCardComponent.classes).toEqual({
      '-reverse': true,
      '-light': false
    })
  });
});
