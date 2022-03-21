import { Wrapper, createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import { HeaderPrismicComponent, HeaderPrismicVue } from '~/components/common/header';

let wrapper: Wrapper<HeaderPrismicComponent>;
let state;
let store;

const createWrapper = (state: any) => {
  const localVue = createLocalVue();
  localVue.use(Vuex)
  store = new Vuex.Store({
    state
  });
  wrapper = shallowMount<HeaderPrismicComponent>(HeaderPrismicVue, {
    localVue,
    store,
    stubs: ['nuxt-link', 'svg-icon']
  });
};

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    state = {
      menu: {
        socialLinks: [],
        menuLinks: []
      }
    }

    createWrapper(state);
  });

  it('should be a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
