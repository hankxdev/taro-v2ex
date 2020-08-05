<template>
  <view>
    <Loading v-if="loading" />
    <ThreadList v-else :threads="hotThreads" />
    <NavBar :activeId="1" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import { common } from '../../mixin'
import ThreadList from '../../components/ThreadList.vue'
import NavBar from '../../components/NavBar.vue'
import Loading from '../../components/Loading.vue'

@Component({
  computed: {
    ...mapState(['hotThreads', 'loading']),
  },
  methods: {
    ...mapActions(['loadHotThreads']),
  },
  mixins: [common],
  components: {
    ThreadList,
    NavBar,
    Loading,
  },
})
export default class Hot extends Vue {
  isLoading = false
  mounted() {
    this.loadHotThreads()
  }
}
</script>


