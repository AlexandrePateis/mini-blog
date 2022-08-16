import { createStore } from 'vuex'

export default createStore({
  state: {
      user:{
        id: null,
        name: null,
        email: null,
        gender:null,
        status:null
      }
  },
  getters: {
    userCurrent: (state) => state.user
  },

  mutations: {
    saveNameUser(state, payload){
      state.user = payload
    }
  },
  actions: {
    saveNameUser(context, payload){
      context.commit('saveNameUser', payload)
      localStorage.setItem('state_user', JSON.stringify(payload))
      JSON.stringify(payload)

    }
  },
  modules: {
  }
})
