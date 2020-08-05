<template>
  <view>
    <Loading v-if="loading" />
    <DiscussDetails v-else v-for="d in discusses" :key="d.id" :discuss="d" />
    <AtDivider v-if="discusses.length>0" fontColor="gray" lineColor="gray" content="下面没有了" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Loading from './Loading.vue'
import DiscussDetails from './DiscussDetails.vue'
import { mapState, mapActions } from 'vuex'

@Component({
  props: {
    threadId: {
      type: Number,
      required: true,
    },
    replyCount: {
      type: Number,
    },
  },
  components: {
    Loading,
    DiscussDetails,
  },
  computed: {
    ...mapState(['discusses', 'loading']),
  },
  methods: {
    ...mapActions(['loadDiscuss']),
  },
})
export default class Discuss extends Vue {
  isLoading = false

  mounted() {
    if (this.replyCount < 1) {
      return
    }
    this.loadDiscuss(this.threadId)
  }
}
</script>

<style>
</style>
