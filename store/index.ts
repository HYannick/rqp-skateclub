export interface MenuState {
  menu: any
}
export const state = () => ({
  menu: {}
})

export const mutations = {
  SET_MENU(state: MenuState, menu: any) {
    state.menu = menu
  },
  SET_ERROR(state: MenuState, error: any) {
    state.menu = error
  }
}

export const actions = {
  async fetchMenu({ commit }: any, $prismic: any) {
    try {
      const menu = (await $prismic.api.getSingle('menu')).data
      commit('SET_MENU', menu)
    } catch (e) {
      const error = 'Please create a menu document'

      commit('SET_ERROR', error);
    }
  }
}
