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
    <AtDivider :content="dividerText" :fontColor="deviderColor" :lineColor="deviderColor" />
    <Discuss v-if="hasReply" :thread-id="article.id" :replyCount="replyCount" />
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import { common } from "../../mixin";
import Discuss from "../../components/Discuss.vue";

@Component({
  computed: {
    ...mapState(["article"]),
  },
  mixins: [common],
  components: {
    Discuss,
  },
})
export default class ThreadDetails extends Vue {
  gotoNode() {
    // TODO implement NODE page
    const url = this.article.node.url;
  }

  gotoUser() {
    // TODO implement user page
    const userID = this.article.memeber.id;
  }

  get replyCount() {
    return this.article.replies;
  }

  get hasReply() {
    return this.replyCount > 0;
  }

  get dividerText() {
    return this.hasReply ? `共 ${this.replyCount} 条帖子回复` : "暂无回复";
  }

  get deviderColor() {
    return this.hasReply ? "#2d8cf0" : "#ed3f14";
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
