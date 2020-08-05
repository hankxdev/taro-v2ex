<template>
  <view @tap="gotoDetail">
    <view class="at-list__item at-list__item--thumb at-list__item--multiple">
      <view class="at-list__item-container">
        <view class="at-list__item-thumb item-thumb">
          <view class="taro-img item-thumb__info">
            <AtAvatar size="small" :image="user.avatar_large"/>
          </view>
        </view>
        <view class="at-list__item-content item-content">
          <view class="item-content__info">
            <view class="item-content__info-title"> {{thread.title}}</view>
            <view class="item-content__info-note d-flex flex-row at-row__justify--between">
              <AtTag size="small" class="">{{node.title}}</AtTag>
              <view class="user-name">{{user.username}}</view>
              <view class="post-time">{{timeAgo(thread.created)}}</view>
            </view>
          </view>
        </view>
        <view class="at-list__item-extra item-extra">
          <view class="item-extra__info">
            <AtTag circle>{{thread.replies}}</AtTag>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import Taro from "@tarojs/taro";
  import {mapActions} from "vuex";
  import {common} from '../mixin'

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
    mixins:[common]
  })
  export default class Thread extends Vue {
    get user() {
      return this.thread.member
    }

    get node() {
      return this.thread.node
    }

    gotoDetail() {
      this.setArticle(this.thread);
      Taro.navigateTo({
        url: "/pages/thread/thread_details",
      });
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
  .user-name{
    max-width: 138px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
  }
</style>
