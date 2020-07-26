import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface Article {
  title: string,
  node: string,
}

const state = {
  article: {}
}

const mutations = {
  SET_ARTICLE(state, payload: Article) {
    state.article = { ...payload }
  }
}

const actions = {
  setArticle(context, article: Article) {
    console.log(article)
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
