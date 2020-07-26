<template>
  <view>
    <view class="at-article">
      <view class="at-article__h1">{{article.title}}</view>
      <view class="post_meta">
        <view class="at-article__info">{{parseDate(article.created)}} by {{article.member.username}}</view>
        <view class="at-article__info">
          发布在
          <view class="node-title" @tap="gotoNode">{{article.node.title}}</view>
        </view>
      </view>
      <view class="at-article__content">
        <view class="at-article__section">
          <view class="at-article__p" v-html="article.content_rendered"></view>
        </view>
      </view>
    </view>
    <AtDivider />
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import { common } from "../../mixin";

@Component({
  computed: {
    ...mapState(["article"]),
  },
  mixins: [common],
})
export default class ThreadDetails extends Vue {
  //   content: (...)
  // content_rendered: (...)
  // created: (...)
  // id: (...)
  // last_modified: (...)
  // last_reply_by: (...)
  // last_touched: (...)
  // member: (...)
  // node: Object
  // replies: 1
  // title: "一个奇妙的发现，手机关机久了就收不到垃圾短信了。"
  // url: "https://www.v2ex.com/t/693197"

  gotoNode() {
    const url = this.article.node.url;
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
