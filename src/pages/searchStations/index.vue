<template>
  <div class="search-stations fadeIn">
    <i-toast id="toast" />
    <!-- <div class="return-black">
      <i-icon type="return" color="#ccc" size="35" @click="comeBack()" />
    </div>-->
    <div class="sta-title">{{ name }}线</div>
    <div class="swiper-list">
      <swiper current="0" style="height:400px;" display-multiple-items="10">
        <block>
          <swiper-item
            style="padding-right: 5rpx;"
            v-for="(item,index) in StationList"
            :key="index"
          >
            <div class="sta-line"></div>
            <div class="sta-text">{{ item }} 站</div>
          </swiper-item>
        </block>
      </swiper>
    </div>

    <!-- <div class="step-list undraw_my_app_grf2">
      <i-steps>
        <i-step status="finish" v-for="(item,index) in StationList" :key="index">
          <view slot="title">{{ item }} 站</view>
        </i-step>
      </i-steps>
    </div>-->
    <div class="return-foot">
      <i-icon type="delete" size="35" color="#ccc" @click="comeBack()" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      id: "",
      name: ""
    };
  },
  onShow() {
    this.init();
    this.GetStations(this.id);
  },
  computed: {
    ...mapGetters("bus", ["StationList"])
  },
  methods: {
    ...mapActions("bus", ["GetStations"]),
    ...mapMutations("bus", ["SET_STATIONLIST"]),
    init() {
      let pages = getCurrentPages();
      let currPage = pages[pages.length - 1];
      this.id = currPage.options.id;
      this.name = currPage.options.routeName;
      console.error(currPage.options.routeName);
    },
    comeBack() {
      wx.navigateBack(-1);
    }
  },
  onUnload() {
    this.SET_STATIONLIST([]);
    this.id = "";
  },
  store
};
</script>
<style>
page {
  background-color: #fff;
  height: 100%;
  padding-top: 40%;
}
</style>
<style scoped>
.return {
  margin: 10% 5%;
  margin-bottom: 10%;
}
.step-list {
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: 13% 0%;
  width: auto;
  overflow: auto;
}
.sta-text {
  width: 30px;
}
.sta-line {
  width: 100%;
  height: 10px;
  background-color: #353889;
  margin-right: 5px;
  border-radius: 10px;
}
.swiper-list {
  padding: 0 30px;
  margin-top: 30%;
  width: auto;
}
.sta-title {
  text-align: center;
  font-size: 50px;
}
</style>