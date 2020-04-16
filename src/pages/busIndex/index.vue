<template>
  <div class="bus-index">
    <i-toast id="toast" />
    <div class="place">
      <map
        class="map"
        id="map"
        :markers="markers"
        :longitude="longitude"
        :latitude="latitude"
        scale="16"
      ></map>
      <div class="list">
        <div class="list-btn" @click="toUser()">
          <i-icon type="homepage_fill" size="35" color="#353889" />
        </div>
        <div class="list-btn" @click="setSearchShow()">
          <i-icon type="search" size="35" color="#353889" />
        </div>
      </div>
      <div class="list-right">
        <div class="list-btn" @click="loadLocation()">
          <i-icon size="35" color="#353889" type="coordinates_fill" />
        </div>
      </div>
    </div>
    <div :class="is_up === true ? 'bus-msg-up' : 'bus-msg'">
      <div class="more" v-if="!is_up" @click="setUp()">
        <i-icon type="packup" color="#c4c3cc" size="20" />
      </div>
      <div class="more" v-if="is_up" @click="setUp()">
        <i-icon type="unfold" color="#c4c3cc" size="20" />
      </div>
      <StationCard :route="SynsStationList" :station="Place"></StationCard>
      <div class="more" v-if="!is_up">
        <i-icon type="more" color="#c4c3cc" size="30" />
      </div>
    </div>
  </div>
</template>

<script>
import StationCard from "@/components/stationCard";
import amap from "amap-wx";
import { mapGetters, mapActions } from "vuex";
import store from "../../vuex/index";
const { $Toast } = require("../../../static/dist/base/index");
export default {
  data() {
    return {
      markersData: {
        latitude: "", //纬度
        longitude: "", //经度123
        key: "94d4bb757ed3cc2656b8f91e03665b0f" //申请的高德地图key（申请的web key）
      },
      gpsCode: "",
      city_name: "正在定位",
      latitude: "",
      longitude: "",
      markers: [],
      is_up: false
    };
  },
  created() {
    this.getLocation();
    this.GetRoutesMsg(this.Place);
    this.loadMap();
  },
  onShow() {
    this.GetRoutesMsg(this.Place);
  },
  mounted() {
    this.loadMap();
  },
  computed: {
    ...mapGetters("bus", ["SynsStationList", "SynsStationShow", "Place"])
  },
  methods: {
    ...mapActions("bus", ["GetRoutesMsg"]),
    //获取经纬度
    getLocation() {
      let that = this;
      //调用自带位置获取
      wx.getLocation({
        type: "gcj02",
        //返回可以用于wx.openLocation的经纬度
        success: function(res) {
          that.latitude = 23.374107 - 0.003; // 维度
          that.longitude = 116.709419; //res.longitude; // 经度
          that.loadCity(that.latitude, that.longitude); // 调用高德
        },
        fail: function(res) {
          $Toast({
            content: "请打开GPS定位",
            type: "error"
          });
        }
      });
    },
    //调用高德定位
    loadCity(latitude, longitude) {
      let that = this;
      let myAmapFun = new amap.AMapWX({ key: that.markersData.key });
      myAmapFun.getRegeo({
        location: "" + longitude + "," + latitude + "", //location的格式为'经度,纬度'
        success: function(data) {
          let cityCode = data[0].regeocodeData.addressComponent.adcode; //获取城市code
          that.gpsCode = cityCode;
          that.city_name = data[0].regeocodeData.addressComponent.city; //获取
        }
      });
    },
    // 加载高德地图
    loadMap() {
      let that = this;
      let myAmapFun = new amap.AMapWX({ key: that.markersData.key });
      myAmapFun.getRegeo({
        success: function(data) {
          console.log(data);
          let marker = [
            {
              id: data[0].id,
              latitude: that.latitude + 0.003,
              longitude: that.longitude,
              iconPath: data[0].iconPath,
              width: data[0].width,
              height: data[0].height,

              label: {
                content: "公交站-" + that.Place, //文本
                color: "#ffffff", //文本颜色
                borderRadius: 3, //边框圆角
                borderWidth: 1, //边框宽度
                borderColor: "#353889", //边框颜色
                bgColor: "#353889", //背景色
                padding: 7, //文本边缘留白
                textAlign: "center" //文本对齐方式。有效值: left, right, center
              }
            }
          ];
          // that.latitude = data[0].latitude - 0.003;
          // that.longitude = data[0].longitude ;
          that.markers = marker;
          console.log(that.latitude, that.longitude);
        },
        fail: function(info) {
          // wx.showModal({title:info.errMsg})
        }
      });
    },

    loadLocation() {
      let mpCtx = wx.createMapContext("map");
      let that = this;
      mpCtx.moveToLocation({
        longitude: that.longitude,
        latitude: that.latitude
      });
    },
    setUp() {
      this.is_up = !this.is_up;
    },
    setSearchShow() {
      wx.navigateTo({
        url: "/pages/search/main?"
      });
    },
    toUser() {
      wx.navigateTo({
        url: "/pages/user/main?"
      });
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
  height: 100%;
  background-color: #fff;
  overflow: hidden;
}
</style>
<style scoped>
.bus-index {
  height: 100%;
}
.place {
  position: relative;
  height: 100%;
}
.bus-msg {
  position: absolute;
  bottom: 0;
  height: auto;
  width: 100%;
  background-color: #fff;
  border-top-right-radius: 70px;
  border-top-left-radius: 70px;
  padding-top: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 20px 0;
}
.bus-msg-up {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90%;
  background-color: #fff;
  border-top-right-radius: 70px;
  border-top-left-radius: 70px;
  padding-top: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 20px 0;
}
.more {
  text-align: center;
  font-weight: bold;
}
.list {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 45%;
  left: 0;
  height: auto;
  margin-left: 30px;
  margin-bottom: 20px;
}
.list-right {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 45%;
  right: 0;
  height: auto;
  margin-right: 30px;
  margin-bottom: 20px;
}
.list-btn {
  border-radius: 100px;
  flex: 1;
  margin-bottom: 40px;
  height: 60px;
  width: 60px;
  text-align: center;
  line-height: 60px;
}
.search-box {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #f9f9fa;
  padding-top: 20%;
  overflow: hidden;
}
.search-foot {
  position: fixed;
  bottom: 0;
  text-align: center;
  color: #c4c3cc;
  width: 100%;
  margin-bottom: 30px;
  opacity: 0.5;
}
.i-icon-other {
  font-weight: bold;
}
.map {
  width: 100%;
  height: 100%;
}
</style>