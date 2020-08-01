<template>
  <AtAccordion :title="node.name" :open="ifOpen" :note="getNodeInfo(node)">
    <AtList :hasBorder="false">
      <AtListItem
        v-for="n in node.nodes"
        :key="n.id"
        :title="n.name"
        :note="getNodeInfo(n)"
        :thumb="n.avatar_mini"
      />
    </AtList>
  </AtAccordion>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
})
export default class NodeDetail extends Vue {
  get ifOpen() {
    return this.node.id === 1
  }

  getNodeInfo(node) {
    const { topics, stars } = node
    let note = `主题: ${topics} 星标:${stars}`
    // parent node
    if (node.nodes) {
      const subNodeLen = node.nodes.length
      note += ` 子节点:${subNodeLen}`
    }
    return note
  }
}
</script>

<style>
</style>
