<template>
  <view>
    <AtCard :title="discuss.memeber.username" v-html="discuss.note"/>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    discuss: {
      type: Object,
      required: true,
    },
  },
})
export default class DiscussDetails extends Vue {
  /*
  参数	说明	类型	可选值	默认值
title	元素的标题	String	-	-
note	元素的辅助信息	String	-	-
thumb	元素的缩略图	String	-	-
renderIcon	元素自定义图标	Jsx	-	-
extra	元素的额外信息	String	-	-
extraStyle	元素的额外信息自定义样式	Object	-	-
isFull	是否通栏	Boolean	-	-

*/
  /*
   "id": 4447209,
    "thanks": 0,
    "content": "工作流程怎么样？\r\nPM 会不会随意改需求？",
    "content_rendered": "工作流程怎么样？\r<br />PM 会不会随意改需求？",
    "member": {
        "id": 124253,
        "username": "joeHuang",
        "tagline": "None",
        "avatar_mini": "//v2ex.assets.uxengine.net/avatar/29b5/0fbb/124253_mini.png?m=1437789219",
        "avatar_normal": "//v2ex.assets.uxengine.net/avatar/29b5/0fbb/124253_normal.png?m=1437789219",
        "avatar_large": "//v2ex.assets.uxengine.net/avatar/29b5/0fbb/124253_large.png?m=1437789219"
    },
    "created": 1498013146,
    "last_modified": 1498013146
    */
}
</script>

<style>
</style>
