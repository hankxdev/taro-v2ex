<template>
  <view>
    <ThreadList :threads="hotThreads" />
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import { common } from '../../mixin'
import ThreadList from '../../components/ThreadList.vue'

@Component({
  computed: {
    ...mapState(['hotThreads']),
  },
  methods:{
    ...mapActions(['loadHotThreads'])
  }
  mixins: [common],
  components: {
    ThreadList,
  },
})
export default class Hot extends Vue {
  created(){
    this.loadHotThreads()
  }
}
</script>


