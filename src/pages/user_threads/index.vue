<template>
  <Loading v-if="loading" />
  <view v-else>
    <AtDivider color="red" v-if="threads.length < 1" content="这个人很懒， 啥也没发" />
    <ThreadList v-else :threads="threads" />
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
    ...mapState(['loading', 'threads']),
  },
  mixins: [common],
  components: {
    ThreadList,
    Loading
  },
  methods: {
    ...mapActions(['loadUserThreads']),
  },
})
export default class NodeDetail extends Vue {
  created() {
    const { name } = getCurrentInstance().router.params
    this.loadUserThreads(name)
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
