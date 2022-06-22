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
  },

  mutations: {
    saveNameUser(state, payload){
      state.user.id = payload.id
      state.user.name = payload.name
      state.user.email = payload.email
      state.user.gender = payload.gender
      state.user.status = payload.status
      console.log(state.user)
    }
  },
  actions: {
    saveNameUser(context, payload){
      context.commit('saveNameUser', payload)
      console.log(payload.name)
    }
  },
  modules: {
  }
})
