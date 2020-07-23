<template>
  <view>Here is the list</view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    threads: {
      type: Array,
      required: true,
    },
  },
})
export default class ThreadList extends Vue {}
</script>

<style lang="scss">
</style>
