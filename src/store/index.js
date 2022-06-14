import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //每次都从本地中获取token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    //改变token的值同时改变localStorage的token值
    token(state, token){
      state.Authorization = token;
      localStorage.setItem('Authorization',token)
    }
  },
  actions: {
  },
  modules: {
  }
})
