<template>
  <div class="lost-box">
    <i-card :title="item.atime" v-for="(item,index) in MyFeedbackList" :key="index">
      <view slot="content">{{ item.content }}</view>
    </i-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {};
  },
  onLoad() {
    this.GetMyFeedback(wx.getStorageSync("loginName"));
  },
  computed: {
    ...mapGetters("user", ["MyFeedbackList"])
  },
  methods: {
    ...mapActions("user", ["GetMyFeedback"])
  },
  store
};
</script>
<style>
page {
  height: 100%;
  background-color: #f1f1f1;
}
</style>
<style scoped>
.lost-box {
  margin-top: 60px;
}
</style>