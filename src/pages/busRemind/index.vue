<template>
  <div class="remind-container">
    <i-toast id="toast" />
    <div class="remind-head">
      <div class="remind-add" @click="toNext()">
        <i class="fa fa-plus-square-o" aria-hidden="true"></i>
      </div>
    </div>
    <div v-if="IsRemind">
      <i-panel title="闹钟列表">
        <div class="clock-box" v-for="(item,index) in ClockList" :key="index">
          <div class="box-left">
            <i-cell
              :key="index"
              :label="item.busNum + ' 号线'"
              :title="item.start + ' - ' + item.end"
              :value="item.station"
            ></i-cell>
          </div>
          <div class="box-right" @click="deleteClock(index)">
            <i-icon type="trash" size="22" />
          </div>
        </div>
      </i-panel>
    </div>
    <div class="remind-null" v-if="!IsRemind">
      <div class="img-clock">
        <img src="../../../static/tabs/clock.png" alt="提醒闹钟" />
      </div>
      <div class="remind-tip">您还没有添加任何上车提醒</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "../../vuex/index";
import { ClockList } from "../../vuex/user/getters";
export default {
  created() {
    this.GetClockList();
  },
  computed: {
    ...mapGetters("user", ["IsRemind", "ClockList"])
  },
  methods: {
    ...mapActions("user", ["GetClockList"]),
    toNext() {
      wx.navigateTo({
        url: "/pages/busRemindOne/main"
      });
    },
    deleteClock(index) {
      this.ClockList.splice(index, 1);
      wx.setStorageSync("clockList", this.ClockList);
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
.remind-container {
}
.remind-head {
  height: 100px;
  background-color: #fff;
  line-height: 100px;
  padding: 0 35px;
}
.remind-title {
  font-size: 40px;
  display: inline-block;
}
.remind-add {
  color: #a3a3a3;
  display: inline-block;
  float: right;
  font-weight: lighter;
  font-size: 50px;
}
.remind-null {
  position: absolute;
  top: 30%;
  width: 100%;
}

.img-clock {
  text-align: center;
}
.img-clock img {
  width: 320px;
  height: 320px;
}
.remind-tip {
  color: #a3a3a3;
  margin-top: 30px;
  font-size: 30px;
  text-align: center;
}
.remind-add-btn {
  margin: 0 auto;
  margin-top: 30px;
  width: 250px;
  height: 80px;
  font-size: 30px;
  font-weight: normal;
  background: #fec84f;
  color: #fff;
  border-radius: 10px;
  line-height: 80px;
  border: 0px;
}
.clock-box {
  display: flex;
  align-items: center;
}
.box-left {
  flex: 3;
}
.box-right {
  flex: 0.4;
  color: #ed3f14;
}
</style>