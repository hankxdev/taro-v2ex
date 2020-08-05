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
  recentThreads: [],
  nodeThreads: [],
  userThreads: [],
  hotThreads: [],
  currentThread: {},
  discusses: [],
  userProfile: {},
  nodes: [],
  nodeDetail: {},
  loading: false,
  navIndex: 0
}

const mutations = {
  SET_ARTICLE(state, payload: Article) {
    state.article = payload
  },
  SET_THREADS(state, payload) {
    state.recentThreads = payload
  },
  SET_RECENT_THREADS(state, payload) {
    state.recentThreads = payload
  },
  SET_HOT_THREADS(state, payload) {
    state.hotThreads = payload
  },
  SET_NODE_THREADS(state, payload) {
    state.nodeThreads = payload
  },
  SET_USER_THREADS(state, payload) {
    state.userThreads = payload
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
  },
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_NAV_INDEX(state, index) {
    state.navIndex = index
  }
}

const actions = {

  setNavIndex(context, index: Number) {
    context.commit('SET_NAV_INDEX', index)
  },

  setArticle(context, article: Article) {
    context.commit('SET_ARTICLE', article)
  },

  async callAPI(context, payload) {
    const { url, mutation } = payload
    context.commit('SET_LOADING', true)
    Taro.request({ url }).then(result => {
      context.commit(mutation, result.data)
    }).catch(e => {
      console.log(e)
      Taro.showToast({
        title: '网络请求出错',
      })
    }).finally(() => {
      context.commit('SET_LOADING', false)
    })
  },

  async loadThreads(context, payload) {
    let url = API.getLatest()
    let mutation = "SET_RECENT_THREADS"
    const { name, nodeId, username } = payload // note that noteId and username won't be there at the same time
    switch (name) {
      case 'hot':
        url = API.getHotThreads()
        mutation = "SET_HOT_THREADS"
        break;
      case 'node':
        url = API.getNodeThreadList(nodeId)
        mutation = "SET_NODE_THREADS"
        break;
      case 'user':
        url = API.getUserThreadList(username)
        mutation = "SET_USER_THREADS"
        break;
    }
    context.dispatch('callAPI', { url, mutation })
  },

  async loadRecentThreads(context) {
    context.dispatch('loadThreads', {})// default to load index
  },

  async loadHotThreads(context) {
    context.dispatch('loadThreads', { name: "hot" })
  },

  async loadNodeThreads(context, nodeId: number) {
    context.dispatch('loadThreads', { name: "node", nodeId })
  },

  async loadUserThreads(context, username: string) {
    context.dispatch('loadThreads', { name: "user", username })
  },

  async loadNodeList(context) {
    context.dispatch('callAPI', { url: API.getNodeList(), mutation: "SET_NODE_LIST" })
  },

  async loadNodeDetail(context, nodeId: number) {
    context.dispatch('callAPI', { url: API.getNodeDetail(nodeId), mutation: "SET_NODE_DETAIL" })
  },

  async loadUserProfile(context, userId: number) {
    context.dispatch("callAPI", { url: API.getUserProfile(userId), mutation: "SET_USER_PROFILE" })
  },

  async loadDiscuss(context, threadId: number) {
    context.dispatch('callAPI', { url: API.getDiscuss(threadId), mutation: "SET_DISCUSS" })
  },
}

const getters = {
  getArticle(state) {
    return state.article
  },
  sortedNodes(state) {
    const { nodes } = state
    return nodes.sort((a, b) => b.topics - a.topics)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
