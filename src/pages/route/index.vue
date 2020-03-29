<template>
  <div>
    <i-toast id="toast" />
    <div class="route-container">
      <div>
        <div class="route-title">路线</div>
      </div>
      <div class="route-input">
        <input type="text" v-model="from" placeholder="出发点" />
        <div class="line"></div>
        <input type="text" v-model="to" placeholder="目的点" />
        <div class="exchange-icon" @click="exchangeFromTo()">
          <i class="fa fa-exchange" aria-hidden="true"></i>
        </div>
        <button class="route-btn" @click="find()">搜索</button>
      </div>
    </div>
    <div class="common-location" v-if="!TransferIsShow">
      <div class="common-title">常用地点</div>
      <div class="common-context"></div>
    </div>
    <div v-if="TransferIsShow" class="route-card">
      <div class="card">
        <div class="card-title">{{ start }} -> {{ end }}</div>
        <div class="card-context">
          坐{{ TransferList[0] }}号线，在{{ TransferList[2] }}站转
          {{ TransferList[1] }}号线
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { $Toast } = require("../../../static/dist/base/index");
import { mapGetters, mapActions } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      from: "",
      to: "",
      start: "",
      end: ""
    };
  },
  computed: {
    ...mapGetters("bus", ["TransferList", "TransferIsShow"])
  },
  methods: {
    ...mapActions("bus", ["LessTransfer"]),
    exchangeFromTo() {
      let temp = "";
      if (this.from != "" && this.to != "") {
        temp = this.from;
        this.from = this.to;
        this.to = temp;
      }
    },
    find() {
      if (this.from == "") {
        $Toast({
          content: "出发点不能为空",
          type: "error"
        });
        return;
      }
      if (this.to == "") {
        $Toast({
          content: "目的地不能为空",
          type: "error"
        });
        return;
      }
      let data = {
        start: this.from,
        end: this.to
      };
      this.LessTransfer(data);
      this.start = this.from;
      this.end = this.to;
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
.route-container {
  background-color: #fec84f;
  padding-bottom: 30px;
}
.route-title {
  font-size: 50px;
  padding: 20px 0 20px 30px;
}
.route-input {
  padding: 0 30px;
  color: #a3a3a3;
  position: relative;
}
.route-input input {
  height: 100px;
  border-radius: 10px;
  background-color: #f8f8f8;
  padding: 0 30px;
  font-size: 27px;
}
.line {
  background-color: #fec84f;
  height: 10px;
}
.exchange-icon {
  position: absolute;
  z-index: 2;
  top: 20%;
  right: 20%;
  transform: rotate(90deg);
  font-size: 35px;
  color: #fec84f;
  border-radius: 80rpx;
  background-color: #fff;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
}
.exchange-icon:active {
  background-color: #f8f8f8;
}
.route-btn {
  margin: 0 auto;
  height: 80px;
  font-size: 35px;
  font-weight: normal;
  background: #fff;
  color: #000;
  border-radius: 10px;
  line-height: 80px;
  margin-top: 30px;
}
button::after {
  border: none;
}
.route-card {
  padding: 20rpx 25rpx;
}
.card {
  height: 200rpx;
  background-color: #fff;
  border-radius: 10rpx;
  padding: 0 35rpx;
}
.card-title {
  height: 110rpx;
  line-height: 110rpx;
  font-size: 37rpx;
}
.card-context {
  height: 90rpx;
  line-height: 90rpx;
  color: #a8a8a8;
  font-size: 32rpx;
}
.common-location {
  padding: 20px 0 20px 30px;
}
.common-title {
  color: #a3a3a3;
  font-size: 25px;
}
.common-context {
  height: 500px;
}
</style>
