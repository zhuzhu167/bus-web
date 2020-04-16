<template>
  <div class="lost-box fadeIn" @touchstart="touchStart" @touchend="touchEnd">
    <i-toast id="toast" />
    <i-card
      :extra="item.title"
      :title="item.losttime"
      v-for="(item,index) in LostList"
      :key="index"
    >
      <view slot="content">{{ item.content }}</view>
      <view slot="footer">联系方式：{{ item.contactNum }}</view>
    </i-card>
    <div class="return-foot">
      <p>向右滑动返回上一层</p>
    </div>
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
    this.GetLost();
  },
  computed: {
    ...mapGetters("user", ["LostList"])
  },
  methods: {
    ...mapActions("user", ["GetLost"])
  },
  store
};
</script>
<style>
page {
  height: 100%;
  background-color: #fff;
}
</style>
<style scoped>
.lost-box {
  margin-top: 10%;
  height: 100%;
}
</style>