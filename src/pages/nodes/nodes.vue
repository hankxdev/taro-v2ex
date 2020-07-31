<template>
  <view>
    <Loading v-if="loading" />
    <view v-else class="node-list">
      <AtTag v-for="node in node-list" :key="node.id" onclick="gotoNodeThreads">{{node.name}}</AtTag>
    </view>
    <NavBar :activeId="2" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import { common } from '../../mixin'
import NavBar from '../../components/NavBar.vue'
@Component({
  computed: {
    ...mapState(['nodes', 'loading']),
  },
  methods: {
    ...mapActions(['loadNodeList']),
  },
  mixins: [common],
  components: {
    NavBar,
  },
})
export default class Hot extends Vue {
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
