import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: {
      name: 'Valera',
      age: 24,
    },
    candidates: []
  },
  getters: {
    getPerson(state) {
      return state.person
    },
    getAge: ({ person }) => person.age
  },
  mutations: {
    changeName(state, newName) {
      // console.log(state, 'state')
      // console.log(newName, 'newName')

      state.person.name = newName

      // console.log(state.name, 'state.name')

    },
    changeCandidatesList(state, candidates) {
      state.candidates = candidates;
    }
  }, 
  actions: {
    asyncChangeName() {
      //request
      //commit('changeName', data-from-request)
    },
    async asyncChangeCandidatesList({ commit }, payload) {
      const candidates = await ((await fetch('http://localhost:3005/candidates')).json())
      console.log(candidates, 'candidates');

      commit('changeCandidatesList', candidates)
    }
  }
})
