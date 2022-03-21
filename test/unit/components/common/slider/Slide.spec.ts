import { Wrapper, createLocalVue, shallowMount } from '@vue/test-utils';
import { SlideComponent, SlideVue } from '~/components/common/slider/slide';
import { createSlide } from '~/test/unit/components/common/slider/slider.fixtures';

let wrapper: Wrapper<SlideComponent>;
let slideComponent: SlideComponent;
let slideRef: any;

const mockedSlide = createSlide({index: 1});
const createWrapper = (slideRef: any) => {
  const localVue = createLocalVue();
  wrapper = shallowMount<SlideComponent>(SlideVue, {
    localVue,
    propsData: {
      slide: mockedSlide,
      current: 0,
    }
  });
  slideComponent = wrapper.vm;
  slideComponent.$refs.slide = slideRef;
};

describe('Slide Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    slideRef = {
      style: {
        setProperty: jest.fn()
      },
      getBoundingClientRect: jest.fn().mockReturnValue({
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        width: 200,
        height: 200
      })
    };
    createWrapper(slideRef);
  });

  it('should be a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should retrieve props', () => {
    expect(slideComponent.current).toBe(0)
    expect(slideComponent.slide).toBe(mockedSlide);
  });

  it('should set current slide classes on slider change if indexes matches', () => {
    slideComponent.updateSlides(1);
    expect(slideComponent.classNames).toBe('slide slide--current');
    slideComponent.updateSlides(0);
    expect(slideComponent.classNames).toBe('slide slide--next');
    slideComponent.updateSlides(2);
    expect(slideComponent.classNames).toBe('slide slide--previous');
  });

  // HANDLE THIS FUCKING REFS
  // it('should update slide ref position on mouse move event update', () => {
  //   const mockedEvent = {
  //     clientX: 20,
  //     clientY: 30
  //   }
  //   const setProperty = jest.fn();
  //   slideRef = {
  //     style: {
  //       setProperty,
  //     },
  //     getBoundingClientRect: jest.fn().mockReturnValue({
  //       left: 10,
  //       right: 10,
  //       top: 10,
  //       bottom: 10,
  //       width: 200,
  //       height: 200
  //     })
  //   };
  //
  //   createWrapper(slideRef);
  //   slideComponent.handleMouseMove(mockedEvent);
  //   expect(setProperty).toHaveBeenCalledTimes(2);
  // });

  it('should change target opacity on image loaded', () => {
    const mockedEvent = {
      target: {
        style: {
          opacity: 0,
        }
      }
    }

    createWrapper(slideRef);
    slideComponent.imageLoaded(mockedEvent);
    expect(mockedEvent.target.style.opacity).toBe(1);
  });
});
