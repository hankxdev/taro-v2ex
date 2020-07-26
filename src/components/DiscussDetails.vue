<template>
  <view>
    <AtCard :isFull="true" :note="discuss.content_rendered"
            :title="user.username" :thumb="user.avatar_mini"
            :extra="parseDate(discuss.last_modified)"
    ></AtCard>
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

<style>
</style>
