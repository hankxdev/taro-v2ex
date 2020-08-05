<template>
  <view class="index">
    <Loading v-if="loading" />
    <ThreadList :threads="threads" v-else />
    <NavBar :activeId="0" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ThreadList from '../../components/ThreadList.vue'
import Loading from '../../components/Loading.vue'
import { mapActions, mapState } from 'vuex'
import NavBar from '../../components/NavBar.vue'
import Taro from '@tarojs/taro'

@Component({
  components: {
    ThreadList,
    Loading,
    NavBar,
  },
  methods: {
    ...mapActions(['loadRecentThreads']),
  },
  computed: {
    ...mapState(['threads', 'loading']),
  },
})
export default class Index extends Vue {
  created() {
    Taro.hideTabBar()
  }
  mounted() {
    this.loadRecentThreads()
  }
  onShow() {
    console.log("I'm showing")
  }
  onPullDownRefresh() {
    console.log('you pull me down')
  }
}
</script>

<style>
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
