<template>
  <AtTabBar fixed :tabList="tabList" :onClick="switchPages" :current="current" />
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Taro from '@tarojs/taro'
import { mapActions } from 'vuex'
@Component({
  props: {
    activeId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions(['setNavIndex']),
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
