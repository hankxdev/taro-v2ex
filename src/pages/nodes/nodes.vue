<template>
  <view>
    Node List
    <NavBar />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState } from 'vuex'
import { common } from '../../mixin'
import NavBar from '../../components/NavBar.vue'
@Component({
  computed: {
    ...mapState(['article']),
  },
  mixins: [common],
  components: {
    NavBar,
  },
})
export default class Hot extends Vue {}
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
