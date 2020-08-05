<template>
  <view>
    <view class="at-article">
      <view class="at-article__h1">{{article.title}}</view>
      <view class="post_meta">
        <view class="at-article__info">
          {{parseDate(article.created)}} ·
          <text class="font-bolder" @tap="gotoUser">{{article.member.username}}</text>
        </view>
        <view class="at-article__info">
          发布在
          <text class="font-underline" @tap="gotoNode">{{article.node.title}}</text>
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
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState } from 'vuex'
import { common } from '../../mixin'
import Discuss from '../../components/Discuss.vue'
import Taro from '@tarojs/taro'

@Component({
  computed: {
    ...mapState(['article']),
  },
  mixins: [common],
  components: {
    Discuss,
  },
})
export default class ThreadDetails extends Vue {
  gotoNode() {
    const id = this.article.node.id
    Taro.navigateTo({
      url: `/pages/node_detail/node_detail?nodeId=${id}`,
    })
  }

  gotoUser() {
    const { username, id } = this.article.member
    Taro.navigateTo({
      url: `/pages/user_threads/index?name=${username}&id=${id}`,
    })
  }

  get replyCount() {
    return this.article.replies
  }

  get hasReply() {
    return this.replyCount > 0
  }

  get dividerText() {
    return this.hasReply ? `共 ${this.replyCount} 条帖子回复` : '暂无回复'
  }

  get deviderColor() {
    return this.hasReply ? '#2d8cf0' : '#ed3f14'
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
