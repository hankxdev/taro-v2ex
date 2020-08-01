<template>
  <!-- <AtAccordion
    :title="node.name"
    :open="ifOpen"
    :onClick="expandOrGotoDetails()"
    :note="getNodeInfo(node)"
  >-->
  <!-- <AtList :hasBorder="false"> -->
  <view>
    <AtListItem
      :key="node.id"
      :title="node.name"
      :note="getNodeInfo(node)"
      :thumb="node.avatar_mini"
    />
  </view>
  <!-- </AtList> -->
  <!-- </AtAccordion> -->
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
    //what
    let note = `主题: ${topics} 星标:${stars}`
    // // parent node
    // if (node.nodes) {
    //   const subNodeLen = node.nodes.length
    //   note += ` 子节点:${subNodeLen}`
    // }
    return note
  }

  expandOrGotoDetails() {
    this.expandTree = !this.expandTree
    if (!this.node.notes) {
      this.gotoNodeDetail(this.node)
    }
  }

  gotoNodeDetail(note) {
    const { name } = note
    Taro.navigateTo({
      url: `pages/node_detail/node_detail/:${name}`,
    })
  }
}
</script>

<style>
</style>
