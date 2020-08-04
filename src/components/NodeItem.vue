<template>
  <view>
    <AtListItem
      :key="node.id"
      :title="node.name"
      :note="getNodeInfo(node)"
      :thumb="node.avatar_large"
      :onClick="gotoNodeDetail"
    />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Taro from '@tarojs/taro'
@Component({
  props: {
    data: {
      type: Array,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    node() {
      return this.data[this.index]
    },
  },
})
export default class NodeItem extends Vue {
  expandTree = false

  getNodeInfo(node) {
    const { topics, stars } = node
    let note = `主题: ${topics} 星标:${stars}`
    return note
  }
  gotoNodeDetail() {
    Taro.navigateTo({
      url: `/pages/node_detail/node_detail?nodeId=${this.node.id}`,
    })
  }
}
</script>

<style>
</style>
