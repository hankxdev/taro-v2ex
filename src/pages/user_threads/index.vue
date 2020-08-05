<template>
  <Loading v-if="loading" />
  <view v-else>
    <view class="at-article">
      <view class="at-article__h1">
        <AtAvatar :image="user.avatar_large" size="large" />
        {{user.username}}
      </view>
      <view class="at-article__info">{{user.id}}</view>
      <view class="at-article__content">
        <view class="at-article__section">
          <view class="at-article__h3">{{user.bio}}</view>
          <view class="at-article__p" v-if="user.location">城市: {{user.location}}</view>
          <view class="at-article__p" v-if="user.github">Github: {{user.github}}</view>
          <view class="at-article__p" v-if="user.website">Website: {{user.website}}</view>
        </view>
      </view>
    </view>
    <AtDivider fontColor="red" v-if="userThreads.length < 1" content="这个人很懒， 啥也没发" />
    <ThreadList v-else :threads="userThreads" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import { common } from '../../mixin'
import ThreadList from '../../components/ThreadList.vue'
import Loading from '../../components/Loading.vue'
import { getCurrentInstance } from '@tarojs/taro'

@Component({
  computed: {
    ...mapState(['loading', 'userThreads', 'userProfile']),
  },
  mixins: [common],
  components: {
    ThreadList,
    Loading,
  },
  methods: {
    ...mapActions(['loadUserThreads', 'loadUserProfile']),
  },
})
export default class NodeDetail extends Vue {
  created() {
    const { name, id } = getCurrentInstance().router.params
    console.log(getCurrentInstance())
    this.loadUserThreads(name)
    this.loadUserProfile(id)
  }

  get user() {
    return this.userProfile
  }
}
</script>

<style lang="scss">
</style>
