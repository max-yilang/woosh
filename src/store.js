import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isDarkMode: true
  },
  mutations: {
    toggleDarkMode: state => (state.isDarkMode = !state.isDarkMode)
  }
});
