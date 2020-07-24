<template>
  <view @tap="gotoDetail">
    <AtListItem
      :title="thread.title"
      :note="thread.node.title"
      :extraText="thread.member.username"
      :thumb="thread.member.avatar_mini"
    ></AtListItem>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Taro from "@tarojs/taro";
import { mapActions } from "vuex";

@Component({
  props: {
    thread: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["setArticle"]),
  },
})
export default class Thread extends Vue {
  mounted() {}

  gotoDetail() {
    this.setArticle(this.threads);
    Taro.navigateTo({
      url: "/pages/thread/thread_details",
    });
    console.log(this.thread);
  }
}
</script>

<style lang="scss">
.item-content__info-note {
  text-align: left;
}
.item-content__info-title {
  text-align: left;
}
</style>
