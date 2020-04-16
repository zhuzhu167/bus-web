<template>
  <div class="search-stations fadeIn">
    <i-toast id="toast" />
    <div class="return-black">
      <i-icon type="return" color="#ccc" size="35" @click="comeBack()" />
    </div>
    <div
      class="step-list undraw_my_app_grf2"
      
    >
      <i-steps direction="vertical">
        <i-step status="finish" v-for="(item,index) in StationList" :key="index">
          <view slot="title">{{ item }} 站</view>
        </i-step>
      </i-steps>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      id: ""
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
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      this.id = currPage.options.id;
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
}
</style>