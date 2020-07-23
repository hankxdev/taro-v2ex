<template>
  <view class="index">
    <ThreadList :is-loading="isLoading" :threads="threads" />
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Taro from "@tarojs/taro";
import ThreadList from "../../components/ThreadList.vue";

import API from "../../utils/api";

@Component({
  components: {
    ThreadList,
  },
})
export default class Index extends Vue {
  isLoading = true;
  threads = [];

  async created() {
    try {
      const result = await Taro.request({
        url: API.getLatest(),
      });
      this.isLoading = false;
      this.threads = [...result.data];
    } catch (error) {
      console.log(error);
      Taro.showToast({
        title: "网络请求出错",
      });
    }
  }
}
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
