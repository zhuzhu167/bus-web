<template>
  <div class="index-container">
    <i-toast id="toast" />
    <div class="index-search">
      <div class="index-position">{{ city_name }}</div>
      <div class="index-search-input">
        <div @click="toSearch()" class="input">搜索公交线路，车站</div>
      </div>
    </div>
    <div class="index-context">
      <div class="index-select">
        <div
          class="index-point"
          v-bind:class="{ 'input-border': cardToggle }"
          @click="cardToggleFn(true)"
        >附近站点</div>
        <div
          class="index-route"
          v-bind:class="{ 'input-border': !cardToggle }"
          @click="cardToggleFn(false)"
        >历史线路</div>
      </div>
      <div class="index-card-list" v-show="cardToggle">
        <div v-if="SynsStationShow">
          <StationCard :route="SynsStationList" :station="place"></StationCard>
        </div>
      </div>
      <div v-show="cardToggle"></div>
    </div>
  </div>
</template>

<script>
import StationCard from "@/components/stationCard";
import amap from "amap-wx";
import { mapGetters, mapActions } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      cardToggle: true,
      markersData: {
        latitude: "", //纬度
        longitude: "", //经度
        key: "94d4bb757ed3cc2656b8f91e03665b0f" //申请的高德地图key（申请的web key）
      },
      gpsCode: "",
      city_name: "正在定位",
      place: "芙蓉园"
    };
  },
  created() {
    this.getLocation();
    this.GetRoutesMsg(this.place);
  },
  computed: {
    ...mapGetters("bus", ["SynsStationList", "SynsStationShow"])
  },
  methods: {
    ...mapActions("bus", ["GetRoutesMsg"]),
    //获取经纬度
    getLocation() {
      var that = this;
      //调用自带位置获取
      wx.getLocation({
        type: "gcj02",
        //返回可以用于wx.openLocation的经纬度
        success: function(res) {
          let latitude = res.latitude; //维度
          let longitude = res.longitude; //经度
          that.loadCity(latitude, longitude); //调用高德
        }
      });
    },
    //调用高德api
    loadCity(latitude, longitude) {
      var that = this;
      var myAmapFun = new amap.AMapWX({ key: that.markersData.key });

      myAmapFun.getRegeo({
        location: "" + longitude + "," + latitude + "", //location的格式为'经度,纬度'
        success: function(data) {
          var cityCode = data[0].regeocodeData.addressComponent.adcode; //获取城市code
          that.gpsCode = cityCode;
          that.city_name = data[0].regeocodeData.addressComponent.city; //获取
        },
        fail: function(info) {}
      });
    },
    //跳转
    toSearch() {
      wx.navigateTo({
        url: "/pages/search/main"
      });
    },
    cardToggleFn(bol) {
      if (this.cardToggleFn != bol) {
        this.cardToggle = bol;
      }
    }
  },
  components: {
    StationCard
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
.index-container {
  height: 100%;
  padding-bottom: 20px;
}
.index-search {
  display: flex;
  background-color: #fec84f;
  height: 70px;
  line-height: 70px;
  padding: 30px 0;
}
.index-position {
  flex: 1;
  text-align: center;
  overflow: hidden;
  padding: 0 10px;
}
.index-search-input {
  flex: 3;
}
.input {
  height: 70px;
  background-color: #fff;
  border-radius: 50px;
  width: 93%;
  text-indent: 20px;
  font-size: 25px;
  color: #a3a3a3;
  text-align: center;
}
.index-context {
}
.index-select {
  height: 80px;
  display: flex;
  line-height: 80px;
  padding: 20px 0 30px 25px;
}
.index-point {
  margin: 0 15px;
}
.index-route {
  margin: 0 15px;
}
.input-border {
  border-bottom: 8px solid #fec84f;
}
.index-card-list {
  padding: 0 25px;
}
</style>
