<template>
  <view class="index">
    <ThreadList />
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import ThreadList from "../../components/ThreadList.vue";

@Component({
  components: {
    ThreadList
  }
})
export default class Index extends Vue {}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
