<template>
  <Loading v-if="loading" />
  <view v-else>
    <AtDivider color="red" v-if="nodeThreads.length < 1" content="你来到了无贴区" />
    <ThreadList v-else :threads="nodeThreads" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import { common } from '../../mixin'
import ThreadList from '../../components/ThreadList.vue'
import Loading from '../../components/Loading.vue'
import { getCurrentInstance } from '@tarojs/taro'

@Component({
  computed: {
    ...mapState(['loading', 'nodeThreads']),
  },
  mixins: [common],
  components: {
    ThreadList,
    Loading
  },
  methods: {
    ...mapActions(['loadNodeThreads']),
  },
})
export default class NodeDetail extends Vue {
  created() {
    const { nodeId } = getCurrentInstance().router.params
    this.loadNodeThreads(nodeId)
  }
}
</script>

<style lang="scss">
.post_meta {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .node-title {
    display: inline-block;
  }
}
</style>
