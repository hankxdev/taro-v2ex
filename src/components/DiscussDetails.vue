<template>

</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props:{
    discuss:{
      type: Object,
      required: true
    }
  }
})
export default class DiscussDetails extends Vue {

}
</script>

<style>

</style>
