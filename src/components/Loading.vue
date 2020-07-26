<template>
  <view class="full-heigth full-width d-flex flex-row align-items-center justify-content-center">
    <AtLoading :size="size"></AtLoading>
  </view>
</template>

<script>
export default {
  name: "Loading",
  props: {
    size: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style>
</style>
