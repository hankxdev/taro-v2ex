<template>
  <view>
    <Loading v-if="isLoading" />
    <view v-else>
      <DiscussDetails v-for="d in discusses" :key="d.id" :discuss="d" />
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Loading from "./Loading.vue";
import DiscussDetails from "./DiscussDetails.vue";
import { mapState, mapActions } from "vuex";

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
    ...mapState(["discusses"]),
  },
  methods: {
    ...mapActions(["loadDiscuss"]),
  },
})
export default class Discuss extends Vue {
  isLoading = false;

  async mounted() {
    if (this.replyCount < 1) {
      return;
    }

    this.isLoading = true;
    await this.loadDiscuss(this.threadId);
    this.isLoading = false;
  }
}
</script>

<style>
</style>
