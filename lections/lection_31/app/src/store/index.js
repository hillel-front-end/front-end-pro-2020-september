import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      isAuth: true
    }
  },
  getters: {
    getIsAuth({ user }) {
      return user.isAuth;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
