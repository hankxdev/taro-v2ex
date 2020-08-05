<template>
  <view>
    <Loading v-if="loading" />
    <virtual-list
      v-else
      :height="screenHeight"
      :item-data="sortedNodes"
      :item-count="sortedNodes.length"
      :item-size="20"
      :item="nodeItem"
      width="100%"
    />
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
import NodeItem from '../../components/NodeItem.vue'
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
    NodeItem,
    // Row
  },
})
export default class Hot extends Vue {
  mounted() {
    this.loadNodeList()
  }
  get nodeItem() {
    return NodeItem
  }
  get screenHeight() {
    return this.sortedNodes.length * 20
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
