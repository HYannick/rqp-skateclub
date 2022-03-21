import { Wrapper, createLocalVue, shallowMount } from '@vue/test-utils';
import { SliderControlComponent, SliderControlVue } from '~/components/common/slider/slider-control';

let wrapper: Wrapper<SliderControlComponent>;
let sliderControlComponent: SliderControlComponent;

const createWrapper = () => {
  const localVue = createLocalVue();
  wrapper = shallowMount<SliderControlComponent>(SliderControlVue, {
    localVue,
    propsData: {
      type: 'previous'
    }
  });
  sliderControlComponent = wrapper.vm;
};

describe('Slider Control Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    createWrapper();
  });

  it('should be a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should retrieve control type', () => {
    expect(sliderControlComponent.type).toBe('previous')
  });

  it('should emit click event', () => {
    sliderControlComponent.handleClick();
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
