<template>
  <view>
    <AtList>
      <Thread
        v-for="t in threads"
        :key="t.id"
        :node="t.node"
        :title="t.title"
        :last_modified="t.last_modified"
        :replies="t.replies"
        :tid="t.id"
        :member="t.member"
        :thread="t"
      ></Thread>
    </AtList>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Thread from "./Thread.vue";

@Component({
  props: {
    threads: {
      type: Array,
      required: true,
    },
  },
  components: {
    Thread,
  },
})
export default class ThreadList extends Vue {}
</script>

<style lang="scss">
</style>
