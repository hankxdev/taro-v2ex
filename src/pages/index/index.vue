<template>
  <view class="index">
    <Loading v-if="loading" />
    <ThreadList :threads="recentThreads" v-else />
    <NavBar :activeId="0" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ThreadList from '../../components/ThreadList.vue'
import Loading from '../../components/Loading.vue'
import { mapActions, mapState } from 'vuex'
import NavBar from '../../components/NavBar.vue'

@Component({
  components: {
    ThreadList,
    Loading,
    NavBar,
  },
  methods: {
    ...mapActions(['loadRecentThreads']),
  },
  computed: {
    ...mapState(['recentThreads', 'loading']),
  },
})
export default class Index extends Vue {
  mounted() {
    this.loadRecentThreads()
  }
  //not working
  onShow() {
    console.log("I'm showing")
  }
  //not working
  onPullDownRefresh() {
    console.log('you pull me down')
  }
  show() {
    console.log('showing')
  }
}
</script>

<style>
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
