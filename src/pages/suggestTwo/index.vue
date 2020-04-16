<template>
  <div class="box fadeIn" @touchstart="touchStart" @touchend="touchEnd">
    <i-toast id="toast" />
    <div class="card-title">关于{{ msg }}的帮助</div>
    <div class="text">
      为加强城市公共交通管理，保障城市交通安全和畅通，维护公交车，乘客安全和秩序，根据国家建设部、公安部令第31号《城市公共交通车船乘坐规定》制定本细则，告知乘客：
      一、 因公交车是无人售票不设零钞找补,望广大乘客提前自备零钱,主动投币或刷卡；IC卡优惠卡、关爱卡只限本人使用，对假冒、伪造、涂改和持他人优惠卡、关爱卡乘车的，驾驶员有权没收上交公司。
      二、老、幼、病、残、孕妇及怀抱婴儿者优先上车，其他乘客应该主动让座； 停稳后前上后下，不准强行上下。
      三 、乘客不得将身体的任何部位伸出车外；不准躺、卧、占据和蹬踏坐席；不准打闹、斗殴；不准自行开关车门；不准损坏车的设备、或者进行其他妨碍车行驶、停靠和乘客安全的行为。
      四 、禁止在车内吸烟，向车外吐痰、乱扔杂物等；车因故不能继续运行时，应服从乘运人员的安排或者换乘其他车；到达规定的起始站点后，如随车返乘须再次投币刷卡。
    </div>
    <div class="return-foot">
      <p>向右滑动返回上一层</p>
    </div>
  </div>
</template>

<script>
import store from "../../vuex/index";
import { mapActions } from "vuex";
const { $Toast } = require("../../../static/dist/base/index");
export default {
  data() {
    return {
      msg: ""
    };
  },
  onLoad(options) {
    this.msg = options.msg;
  },
  methods: {},
  store
};
</script>
<style>
page {
  background-color: #fff;
  height: 100%;
}
</style>
<style scoped>
.box {
  padding-top: 20%;
  height: 100%;
}
.card-title {
  margin: 40px;
  color: #353889;
  font-size: 40px;
}
.text {
  padding: 0 60px;
  text-align: justify;
  line-height: 45px;
}
</style>