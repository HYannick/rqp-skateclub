import { Wrapper, createLocalVue, shallowMount } from '@vue/test-utils';
import { ContentImageComponent, ContentImageVue } from '~/components/common/content-image';
import { ContentImageSide } from '~/components/common/content-image/Enums';

let wrapper: Wrapper<ContentImageComponent>;
let contentImageComponent: ContentImageComponent
const createWrapper = () => {
  const localVue = createLocalVue();
  wrapper = shallowMount<ContentImageComponent>(ContentImageVue, {
    localVue,
    propsData: {
      backgroundImageUrl: 'nollie.png',
      side: ContentImageSide.LEFT
    },
    stubs: ['svg-icon'],
  });

  contentImageComponent = wrapper.vm;
};

describe('Content Image Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    createWrapper();
  });

  it('should be a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should retrieve background image url and side prop', () => {
    expect(contentImageComponent.backgroundImageUrl).toBe('nollie.png')
    expect(contentImageComponent.side).toBe(ContentImageSide.LEFT);
  });

  it('should get brush classes according to side', async () => {
    expect(contentImageComponent.brushSideClasses).toBe('brush-left');
    wrapper.setProps({
      side: ContentImageSide.RIGHT
    });
    await wrapper.vm.$nextTick();
    expect(contentImageComponent.brushSideClasses).toBe('brush-right');
  });
});
