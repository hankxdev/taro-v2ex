import Vue from 'vue'
import store from './store'
import TaroUiVue from 'taro-ui-vue'
import 'taro-ui-vue/dist/style/index.scss'


// Vue.config.productionTip = false
Vue.use(TaroUiVue)
const App = new Vue({
  store,
  onShow(options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
