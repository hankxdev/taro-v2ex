<template>
  <view class="index">
    <Loading v-if="isLoading" />
    <ThreadList :threads="threads" v-else />
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ThreadList from "../../components/ThreadList.vue";
import Loading from "../../components/Loading.vue";
import { mapActions, mapState } from "vuex";

@Component({
  components: {
    ThreadList,
    Loading,
  },
  methods: {
    ...mapActions(["loadThreads"]),
  },
  computed: {
    ...mapState(["threads"]),
  },
})
export default class Index extends Vue {
  isLoading = true;
  async mounted() {
    this.isLoading  = true
    await this.loadThreads();
    this.isLoading = false
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
