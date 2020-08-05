<template>
  <AtTabBar fixed :tabList="tabList" :onClick="switchPages" :current="navIndex" />
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Taro from '@tarojs/taro'
import { mapActions, mapState } from 'vuex'
@Component({
  methods: {
    ...mapActions([
      'setNavIndex',
      'loadRecentThreads',
      'loadHotThreads',
      'loadNodeList',
    ]),
  },
  computed: {
    ...mapState(['navIndex']),
  },
})
export default class NavBar extends Vue {
  pages = ['/pages/index/index', '/pages/hot/hot', '/pages/nodes/nodes']

  tabList = [
    { title: '新帖', iconType: 'list' },
    { title: '热帖', iconType: 'analytics' },
    { title: '节点', iconType: 'tags' },
  ]
  pageList = []

  switchPages(newIndex) {
    // commentted out because the onShow is not working now
    // if (this.current === newIndex) {
    //   return
    // }
    this.setNavIndex(newIndex)
    const url = this.pages[newIndex]
    Taro.switchTab({
      url,
    })
  }
}
</script>

<style>
</style>
