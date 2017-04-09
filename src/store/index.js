import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: '',
    onlineUsers: []
  },
  mutations: {
    LOGIN_USER(state, user) {
      state.username = user
    },
    ADD_ONLINE_USER(state, user) {
      if (state.onlineUsers.findIndex(u => u === user) !== -1) {
        return
      }
      state.onlineUsers.push(user)
    },
    REDUCE_ONLINE_USER(state, user) {
      const index = state.onlineUsers.findIndex(u => user)
      if (index === -1) {
        return
      }
      state.onlineUsers.splice(index, 1)
    }
  },
  actions: {
    loginUser({ commit }, payload) {
      commit('LOGIN_USER', payload)
    },
    addOnlineUser({ commit }, payload) {
      commit('ADD_ONLINE_USER', payload)
    },
    reduceOnlineUser({ commit }, payload) {
      commit('REDUCE_ONLINE_USER', payload)
    }
  }
})

export default store
