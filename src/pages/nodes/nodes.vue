<template>
  <view></view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState } from 'vuex'
import { common } from '../../mixin'
import Discuss from '../../components/Discuss.vue'

@Component({
  computed: {
    ...mapState(['article']),
  },
  mixins: [common],
  components: {
    Discuss,
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
