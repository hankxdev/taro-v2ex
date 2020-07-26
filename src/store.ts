import Vue from 'vue'
import Vuex from 'vuex'
import Taro from '@tarojs/taro'
import API from './utils/api'

Vue.use(Vuex)

interface Article {
  title: string,
  node: string,
}


const state = {
  article: {},
  threads: [],
  currentThread: {},
  discusses: []
}

const mutations = {
  SET_ARTICLE(state, payload: Article) {
    state.article = { ...payload }
  },
  SET_THREADS(state, payload) {
    state.threads = [...payload]
  },
  SET_DISCUSS(state, payload) {
    state.dicusses = [...payload]
  }
}

const actions = {
  setArticle(context, article: Article) {
    context.commit('SET_ARTICLE', article)
  },

  async loadDiscuss(context, threadId: Number) {
    let discusses = <any>[]
    if (!threadId) {
      context.commit("SET_DISCUSS", discusses)
    }
    try {
      const result = await Taro.request({
        url: API.getDiscuss(threadId),
      });
      discusses = [...result.data]
    } catch (error) {
      console.log(error);
      Taro.showToast({
        title: "网络请求出错",
      });
    } finally {
      context.commit("SET_DISCUSS", discusses)
    }
  },

  async loadThreads(context) {
    let threads = <any>[]
    try {
      const result = await Taro.request({
        url: API.getLatest(),
      });
      threads = [...result.data]
    } catch (error) {
      console.log(error);
      Taro.showToast({
        title: "网络请求出错",
      });
    } finally {
      context.commit("SET_THREADS", threads)
    }
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
