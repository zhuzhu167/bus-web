<template>
  <div class="remind-container">
    <i-toast id="toast" />
    <i-cell-group>
      <i-cell label="下一站为：荔湾站" title="1号线" value="芙蓉站"></i-cell>
    </i-cell-group>
    <i-cell-group>
      <i-cell title="提醒站距">
        <input slot="footer" class="weui-input" placeholder="即将到站" />
      </i-cell>
      <i-cell title="重复">
        <input slot="footer" type="number" class="weui-input" placeholder="分钟" />
      </i-cell>
      <i-cell title="开始时间">
        <picker
          slot="footer"
          mode="time"
          value="{{time}}"
          start="09:01"
          end="21:01"
          bindchange="bindTimeChange"
        >
          <view class="picker">{{time}}</view>
        </picker>
      </i-cell>
      <i-cell title="开始时间">
        <picker
          slot="footer"
          mode="time"
          value="{{time}}"
          start="09:01"
          end="21:01"
          bindchange="bindTimeChange"
        >
          <view class="picker">{{time}}</view>
        </picker>
      </i-cell>
      <i-cell title="提醒多辆">
        <switch slot="footer" checked color="#fec84f" />
      </i-cell>
    </i-cell-group>
    <i-button v-on:click="remind()" type="success" shape="circle" size="small">确定</i-button>
  </div>
</template>

<script>
const { $Toast } = require("../../../static/dist/base/index");
import { mapActions, mapGetters } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      switch: false,
      time: "请选择时间"
    };
  },
  computed: {
    ...mapGetters("user", ["IsRemind"])
  },
  methods: {
    ...mapActions("user", ["SetRemind"]),
    remind() {
      this.SetRemind(true);
      $Toast({
        content: "设置成功",
        type: "success"
      });
      wx.navigateTo({
        url: "/pages/busRemind/main"
      });
    }
  },
  store
};
</script>
<style>
page {
  background-color: #f1f1f1;
  height: 100%;
}
</style>
<style scoped>
</style>