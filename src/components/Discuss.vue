<template>

</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props:{
    threadId:{
      type: Number,
      required: true
    }
  }
})
export default class Discuss extends Vue {
  mounted(){

  }

  loadDiscuss(){
    
  }
}
</script>

<style>

</style>
