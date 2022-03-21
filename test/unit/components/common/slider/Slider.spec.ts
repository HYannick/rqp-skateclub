import { Wrapper, createLocalVue, shallowMount } from '@vue/test-utils';
import { SliderComponent, SliderVue } from '~/components/common/slider';
import { createSlide } from '~/test/unit/components/common/slider/slider.fixtures';

let wrapper: Wrapper<SliderComponent>;
let sliderComponent: SliderComponent;

const createWrapper = () => {
  const localVue = createLocalVue();
  wrapper = shallowMount<SliderComponent>(SliderVue, {
    localVue,
    propsData: {
      slides: [
        createSlide({index: 0}),
        createSlide({index: 1}),
        createSlide({index: 2}),
      ]
    }
  });
  sliderComponent = wrapper.vm;
};

describe('Slider Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    createWrapper();
  });

  it('should be a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should handle next click', () => {
    expect(sliderComponent.current).toBe(0);
    sliderComponent.handleNextClick();
    expect(sliderComponent.current).toBe(1);
  });

  it('should reset current slide at the end of the slide list', () => {
    expect(sliderComponent.current).toBe(0);
    sliderComponent.handleNextClick();
    sliderComponent.handleNextClick();
    sliderComponent.handleNextClick();
    expect(sliderComponent.current).toBe(0);
  });

  it('should handle previous click', () => {
    expect(sliderComponent.current).toBe(0);
    sliderComponent.handleNextClick();
    sliderComponent.handleNextClick();
    sliderComponent.handlePreviousClick();
    expect(sliderComponent.current).toBe(1);
  });

  it('should go to last slide if previous button clicked at the beginning of the slide list', () => {
    expect(sliderComponent.current).toBe(0);
    sliderComponent.handlePreviousClick();
    expect(sliderComponent.current).toBe(2);
  });
});
