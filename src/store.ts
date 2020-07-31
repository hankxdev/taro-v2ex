import Vue from 'vue'
import Vuex from 'vuex'
import Taro from '@tarojs/taro'
import API from './utils/api'

Vue.use(Vuex)

interface Article {
  title: string
  node: string
}

const state = {
  article: {},
  threads: [],
  currentThread: {},
  discusses: [],
  userProfile: {},
  nodes: [],
  nodeDetail: {},
}

const mutations = {
  SET_ARTICLE(state, payload: Article) {
    state.article = payload
  },
  SET_THREADS(state, payload) {
    state.threads = payload
  },
  SET_DISCUSS(state, payload) {
    state.discusses = payload
  },
  SET_NODE_LIST(state, payload) {
    state.nodes = payload
  },
  SET_USER_PROFILE(state, payload) {
    state.userProfile = payload
  },
  SET_NODE(state, payload) {
    state.nodeDetail = payload
  }
}

const actions = {
  setArticle(context, article: Article) {
    context.commit('SET_ARTICLE', article)
  },

  async loadDiscuss(context, threadId: number) {
    let discusses = <any>[]
    if (!threadId) {
      context.commit('SET_DISCUSS', discusses)
    }
    try {
      const result = await Taro.request({
        url: API.getDiscuss(threadId),
      })
      console.log(result)
      discusses = [...result.data]
    } catch (error) {
      console.log(error)
      Taro.showToast({
        title: '网络请求出错',
      })
    } finally {
      context.commit('SET_DISCUSS', discusses)
    }
  },

  /**
   * get threads list
   * @param context
   * @param url api url
   */
  async loadThreads(context, url) {
    let threads = <any>[]
    try {
      const result = await Taro.request({
        url
      })
      threads = [...result.data]
    } catch (error) {
      console.log(error)
      Taro.showToast({
        title: '网络请求出错',
      })
    } finally {
      context.commit('SET_THREADS', threads)
    }
  },
  /**
   * call apis that returns json object
   * @param context
   * @param url api url
   * @param mutation mutation name to commit
   */

  async loadDetails(context, url: string, mutation: string) {
    let obj = {}
    try {
      const result = await Taro.request({
        url
      })
      obj = { ...result.data }
    } catch (error) {
      console.log(error)
      Taro.showToast({
        title: '网络请求出错',
      })
    } finally {
      context.commit(mutation, obj)
    }
  },


  async loadRecentThreads(context) {
    context.dispatch('loadThreads', API.getLatest)
  },

  async loadHotThreads(context) {
    context.dispatch('loadThreads', API.getHotThreads)
  },

  async loadNodeThreads(context, nodeId: number) {
    context.dispatch('loadThreads', API.getNodeThreadList(nodeId))
  },
  async loadUserThreads(context, username: string) {
    context.dispatch('loadThreads', API.getUserThreadList(username))
  },

  async loadNodeList(context) {
    context.dispatch('loadDetails', API.getNodeList, "SET_NODE_LIST")
  },

  async loadNodeDetail(context) {
    context.dispatch('loadDetails', API.getNodeDetail, "SET_NODE_DETAIL")
  },

  async loadUserProfile(context) {
    context.dispatch("loadDetails", API.getUserProfile, "SET_USER_PROFILE")
  },


}

const getters = {
  getArticle(state) {
    return state.article
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
