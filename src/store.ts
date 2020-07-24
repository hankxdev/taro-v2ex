import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  article: {}
}

const mutations = {
  SET_ARTICLE(state, payload) {
    state.article = { ...payload }
  }
}

const actions = {
  setArticle(context, article) {
    context.commit('SET_ARTICLE', article)
  }
}

const getters = {
  getArticle(state) {
    return state.article
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
