<template>
  <AtTabBar fixed :tabList="tabList" :onClick="switchPages" :current="current" />
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Taro from '@tarojs/taro'

@Component({
  props: {
    activeId: {
      type: Number,
      required: true,
    },
  },
})
export default class NavBar extends Vue {
  current = this.activeId

  pages = ['/pages/index/index', '/pages/hot/hot', '/pages/nodes/nodes']

  tabList = [
    { title: '新帖', iconType: 'list' },
    { title: '热帖', iconType: 'analytics' },
    { title: '节点', iconType: 'tags' },
  ]
  pageList = []

  switchPages(newIndex) {
    if (this.current === newIndex) {
      return
    }
    this.current = newIndex
    const url = this.pages[newIndex]
    Taro.navigateTo({
      url,
    })
  }
}
</script>

<style>
</style>
