<template>
  <div class="lost-box">
    <i-card
      :extra="item.title"
      :title="item.losttime"
      v-for="(item,index) in LostList"
      :key="index"
    >
      <view slot="content">{{ item.content }}</view>
      <view slot="footer">联系方式：{{ item.contactNum }}</view>
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
  background-color: #f1f1f1;
}
</style>
<style scoped>
.lost-box {
  margin-top: 60px;
}
</style>