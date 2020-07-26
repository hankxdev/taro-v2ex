<template>
  <view class="panel__content no-padding">
    <view class="example-item">
      <view class="at-card at-card--full">
        <view class="at-card__header">
          <view class="at-card__header-thumb">
            <view class="taro-img at-card__header-thumb-info">
              <AtAvatar class="tiny-avatar" :image="user.avatar_mini"/>
            </view>
          </view>
          <text class="at-article__info text-bolder at-card__header-title ">{{user.username}}</text>
          <text
            class="at-article__info taro-text at-card__header-extra ">{{timeAgo(discuss.last_modified)}}
          </text>
        </view>
        <view class="at-card__content">
          <view class="at-card__content-info" v-html="discuss.content_rendered"></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import {common} from '../mixin'

  @Component({
    props: {
      discuss: {
        type: Object,
        required: true,
        default: {}
      },
    },
    mixins: [common]
  })
  export default class DiscussDetails extends Vue {
    get user() {
      return this.discuss.member
    }
  }
</script>

<style lang="scss">
  .at-card__header-thumb {
  }
  .at-article__info{
    color: #ccc !important;

  }
  .at-card__content-info {
    min-height: 60px;
  }
    .tiny-avatar {
    width: 32px;
    height: 32px;

    image {
      width: 32px;
      height: 32px;
      display: initial;
    }
  }
</style>
