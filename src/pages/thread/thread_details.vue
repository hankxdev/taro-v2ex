<template>
  <AtArticle>
    <View class="at-article">
      <View class="at-article__h1">{{article.title}}</View>
      <View class="at-article__info">2017-05-07&nbsp;&nbsp;&nbsp;这是作者</View>
      <View class="at-article__content">
        <View class="at-article__section">
          <View class="at-article__h2">这是二级标题</View>
          <View class="at-article__h3">这是三级标题</View>
          <View
            class="at-article__p"
          >这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ</View>
          <View class="at-article__p">这是文本段落。这是文本段落。</View>
          <Image class="at-article__img" src="https://jdc.jd.com/img/400x400" mode="widthFix" />
        </View>
      </View>
    </View>
  </AtArticle>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";

@Component({
  props: {
    ...mapState(["article"]),
  },
})
export default class ThreadDetails extends Vue {}
</script>

<style>
</style>
