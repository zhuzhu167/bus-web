<template>
  <div>
    <i-toast id="toast" />
    <div class="search-head">
      <img
        src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"
        alt
      />

      <input type="text" v-model="str" placeholder="搜索公交线路，车站" />
      <button class="search-btn" @click="find()">搜索</button>
    </div>
    <div v-if="RouteIsShow">
      <div class="search-card fadeIn" @click="getStationDetail(str)">
        <div class="card-left">
          <div class="card-title">{{ RouteList.rname }}</div>
          <div class="item-list">
            <p class="card-item">始班：{{ RouteList.startT }}</p>
            <p class="card-item">末班：{{ RouteList.endT }}</p>
            <p class="card-item">票价：{{ RouteList.charge }}元</p>
          </div>
        </div>
        <div class="card-right">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div v-if="StationShow">
      <div
        class="search-card fadeIn"
        v-for="(item,index) in StationList"
        :key="index"
        @click="getRouteDetail(item.sname)"
      >
        <div class="card-left">
          <div class="card-title">{{ item.sname }} 站</div>
          <div class="item-list">
            <p class="card-item">经过线路：{{ item.rid }} 号</p>
          </div>
        </div>
        <div class="card-right">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { $Toast } = require("../../../static/dist/base/index");
import { mapActions, mapGetters, mapMutations } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      str: ""
    };
  },
  computed: {
    ...mapGetters("bus", [
      "RouteList",
      "RouteIsShow",
      "StationShow",
      "StationList"
    ])
  },
  methods: {
    ...mapMutations("bus", [
      "SET_ROUTE_LIST",
      "SET_ROUTE_SHOW",
      "SET_STATIONLIST",
      "SET_STATION_SHOW"
    ]),
    ...mapActions("bus", ["SearchRoute", "GetXStations"]),
    find() {
      if (this.str == "") {
        $Toast({
          content: "搜索内容不能为空",
          type: "error"
        });
        return;
      }
      if (!isNaN(parseInt(this.str))) {
        this.SET_STATIONLIST([]);
        this.SET_STATION_SHOW(false);
        this.SearchRoute(this.str);
      } else if (typeof this.str == "string") {
        this.SET_ROUTE_LIST([]);
        this.SET_ROUTE_SHOW(false);
        this.GetXStations(this.str);
      }
    },
    getStationDetail(id) {
      wx.navigateTo({
        url: "/pages/searchStations/main?id=" + id
      });
    },
    getRouteDetail(station) {
      wx.navigateTo({
        url: "/pages/searchRoute/main?station=" + station
      });
    }
  },
  onUnload() {
    this.SET_STATIONLIST([]);
    this.SET_STATION_SHOW(false);
    this.SET_ROUTE_SHOW(false);
    this.SET_ROUTE_LIST([]);
    this.str = "";
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
.search-head {
  align-items: center;
  height: 80px;
  display: flex;
  margin: 20px 0 50px 0;
}
.search-head input {
  height: 80px;
  background-color: #fff;
  border-radius: 50px;
  font-size: 30px;
  color: #a3a3a3;
  margin: 0 30px 0 30px;
  padding: 0 90px;
  display: inline-block;
  width: 90%;
}
.search-head img {
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 0 60px;
}
.search-btn {
  margin: 0 auto;
  height: 80px;
  font-size: 30px;
  background: #fec84f;
  color: #fff;
  border-radius: 50px;
  line-height: 80px;
  margin-right: 20px;
  padding: 0 10px;
  width: 160px;
}
button::after {
  border: none;
}
.search-card {
  background-color: #fff;
  border-radius: 10px;
  height: 180px;
  padding: 10px 40px;
  margin: 0 25px 25px 25px;
}
.search-card:active {
  background-color: #f8f8f8;
}
.card-title {
  height: 90px;
  line-height: 120px;
  font-size: 35px;
}
.item-list {
  height: 90px;
  line-height: 90px;
  font-size: 27px;
  color: #a3a3a3;
}
.card-item {
  margin-right: 30px;
  display: inline-block;
}
.card-left {
  display: inline-block;
}
.card-right {
  float: right;
  display: inline-block;
  height: 100%;
  line-height: 170rpx;
}
</style>