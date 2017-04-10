import Vue from 'vue'
import Vuex from 'vuex'
import createSocket from './socket'

const io = require('socket.io-client')
const socket = io.connect('http://localhost:5000')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: '',
    onlineUsers: [],
    messages: []
  },
  mutations: {
    LOGIN_USER(state, user) {
      state.username = user
      socket.emit('add user', user)
    },
    SYNC_USERS(state, users) {
      state.onlineUsers = users
    },
    RECIEVE_MSG(state, msg) {
      state.messages.push(msg)
    }
  },
  actions: {
    loginUser({ commit }, payload) {
      commit('LOGIN_USER', payload)
    },
    syncUsers({ commit }, payload) {
      commit('SYNC_USERS', payload)
    },
    recieveMsg({ commit }, payload) {
      commit('RECIEVE_MSG', payload)
    }
  },
  plugins: [createSocket(socket)]
})

export default store
