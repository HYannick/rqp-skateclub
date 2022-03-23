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
      small: true,
      current: 0,
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

  it('should retrieve props', () => {
    expect(sliderComponent.current).toBe(0);
    expect(sliderComponent.small).toBeTruthy();
  });

  it('should get slide start and slide end', () => {
    expect(sliderComponent.slideStart).toBeTruthy();
    expect(sliderComponent.slideEnd).toBeFalsy();
    sliderComponent.handleNextClick();
    sliderComponent.handleNextClick();
    expect(sliderComponent.slideStart).toBeFalsy();
    expect(sliderComponent.slideEnd).toBeTruthy();
  });

  it('should handle next click', () => {
    expect(sliderComponent.currentSlide).toBe(0);
    sliderComponent.handleNextClick();
    expect(sliderComponent.currentSlide).toBe(1);
  });

  it('should reset currentSlide slide at the end of the slide list', () => {
    expect(sliderComponent.currentSlide).toBe(0);
    sliderComponent.handleNextClick();
    sliderComponent.handleNextClick();
    sliderComponent.handleNextClick();
    expect(sliderComponent.currentSlide).toBe(0);
  });

  it('should handle previous click', () => {
    expect(sliderComponent.currentSlide).toBe(0);
    sliderComponent.handleNextClick();
    sliderComponent.handleNextClick();
    sliderComponent.handlePreviousClick();
    expect(sliderComponent.currentSlide).toBe(1);
  });

  it('should go to last slide if previous button clicked at the beginning of the slide list', () => {
    expect(sliderComponent.currentSlide).toBe(0);
    sliderComponent.handlePreviousClick();
    expect(sliderComponent.currentSlide).toBe(2);
  });
});
