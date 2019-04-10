import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    // sync between localStorage and Vuex State
    createPersistedState({
      paths: ["isDarkMode"]
    })
  ],
  state: {
    isDarkMode: true
  },
  mutations: {
    toggleDarkMode: state => (state.isDarkMode = !state.isDarkMode)
  }
});
