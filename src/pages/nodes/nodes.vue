<template>
  <view>
    <Loading v-if="loading" />
    <view v-else class="node-list">
      <NodeDetail v-for="node in sortedNodes" :key="node.id" :node="node" />
    </view>
    <NavBar :activeId="2" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState, mapActions, mapGetters } from 'vuex'
import { common } from '../../mixin'
import NavBar from '../../components/NavBar.vue'
import Loading from '../../components/Loading.vue'
import NodeDetail from '../../components/NodeDetail.vue'
@Component({
  computed: {
    ...mapState(['loading']),
    ...mapGetters(['sortedNodes']),
  },
  methods: {
    ...mapActions(['loadNodeList']),
  },
  mixins: [common],
  components: {
    NavBar,
    Loading,
    NodeDetail,
  },
})
export default class Hot extends Vue {
  created() {
    this.loadNodeList()
  }
  gotoNodeThreads() {}
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
