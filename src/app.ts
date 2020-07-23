import Vue from 'vue'
import store from './store'
import TaroUIVue from 'taro-ui-vue'

// Vue.config.productionTip = false
Vue.use(TaroUIVue)
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
