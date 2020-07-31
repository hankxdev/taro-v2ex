<template>
  <AtTabBar fixed tabList="tabList" @tap="switchPages" current="activeId"/>
</template>


<script lang=ts>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    activeId: {
      type: Number,
      required: true,
    },
  },
})
export default class NavBar extends Vue {
  tabList: [
    { title: '新帖'; iconType: 'list' },
    { title: '热帖'; iconType: 'analytics' },
    { title: '节点'; iconType: 'tags' }
  ]

  switchPages(){
    console.log(this.activeId)
  }
}
</script>

<style>
</style>
