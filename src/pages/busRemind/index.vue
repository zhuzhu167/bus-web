<template>
  <div class="remind-container" @touchstart="touchStart" @touchend="touchEnd">
    <i-toast id="toast" />
    <!-- <div class="return-black" >
      <i-icon type="return" color="#353889" size="35" @click="comeBack()"/>
    </div>-->
    <div class="remind-head">
      <div class="remind-add" @click="toNext()">
        <i-icon type="add" color="#353889" size="40" />
      </div>
      <div class="head-title">添加提醒</div>
    </div>
    <div v-if="!isRemind">
      <i-swipeout
        i-class="i-swipeout-demo-item"
        :actions="actions"
        v-for="(item,index) in ClockList"
        :key="index"
      >
        <div slot="content">
          <i-cell
            :key="index"
            :label="item.busNum + ' 号线'"
            :title="item.start + ' - ' + item.end"
            :value="item.station"
          ></i-cell>
        </div>
      </i-swipeout>
    </div>
    <div class="remind-null" v-if="isRemind">
      <div class="img-clock">
        <img src="../../../static/tabs/undraw_time_management_30iu.png" alt="提醒闹钟" />
      </div>
      <div class="remind-tip">您还没有添加任何上车提醒</div>
    </div>
    <div class="return-foot">
      <p>向右滑动返回上一层</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import store from "../../vuex/index";
import { ClockList } from "../../vuex/user/getters";
export default {
  data() {
    return {
      actions: [
        {
          name: "删除",
          color: "#fff",
          fontsize: "20",
          width: 100,
          icon: "trash",
          background: "#353889"
        }
      ]
    };
  },
  created() {
    this.GetClockList();
  },
  computed: {
    ...mapGetters("user", ["ClockList"]),
    isRemind() {
      if (this.ClockList.length === 0) {
        return true;
      } else {
        return false;
      }
    }
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
    },
    comeBack() {
      wx.navigateBack(-1);
    }
  },
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
.remind-container {
  height: 100%;
  overflow: hidden;
  padding-top: 20%;
}
.remind-head {
  height: 100px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}
.remind-add {
  padding-left: 30px;
  flex: 1;
}
.head-title {
  display: inline-block;
  flex: 1;
  text-align: right;
  padding-right: 30rpx;
  font-size: 36rpx;
  color: #353889;
}
.remind-title {
  font-size: 40px;
  display: inline-block;
}
.remind-null {
  top: 30%;
  width: 100%;
}

.img-clock {
  text-align: center;
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
  background: #353889;
  color: #fff;
  border-radius: 10px;
  line-height: 80px;
  border: 0px;
}
.clock-box {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #353889;
}
.box-left {
  flex: 3;
}
.box-right {
  flex: 0.4;
  color: #ed3f14;
}
</style>