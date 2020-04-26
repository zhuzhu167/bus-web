<template>
  <div class="bus-index fadeIn" v-show="is_mapLoad">
    <div class="user" @click="toUser()">
      <div class="user-btn">
        <i-icon size="25" color="#353889" type="mine" />
      </div>
    </div>
    <i-toast id="toast" />
    <div class="place">
      <map class="map" id="map" :enable-traffic="RealTimeBus" :bindupdated="mapLoaded()" :enable-zoom="false" :markers="markers" :longitude="longitude" :latitude="latitude" scale="16"
        subkey="3ZCBZ-6NXRG-46HQX-I54ZE-BJ2O2-3JFIQ"></map>
    </div>
    <div class="list">
      <!-- <div class="list-btn" @click="toUser()">
          <i-icon type="homepage_fill" size="35" color="#353889" />
        </div> -->
      <div class="list-btn" @click="loadLocation()">
        <i-icon size="25" color="#353889" type="coordinates" />
      </div>
      <div class="list-btn" @click="setSearchShow()">
        <i-icon type="search" size="23" color="#353889" />
      </div>
    </div>
    <div class="btn-box" v-show="!is_busSta" @click="loadBuss()">
      <div class="bus-btn">附近公交站</div>
    </div>
    <div v-show="is_busSta" class="fadeInUp" :class=" is_up ? 'bus-msg-up' : 'bus-msg'">
      <div class="more" v-if="!is_up" @click="setUp()">
        <i-icon type="packup" color="#c4c3cc" size="20" />
      </div>
      <div class="more" v-if="is_up" @click="setUp()">
        <i-icon type="unfold" color="#c4c3cc" size="20" />
      </div>
      <div :class=" is_up ? 'card-up' : 'card-down'">
        <StationCard :route="SynsStationList" :station="StaName"></StationCard>
      </div>
      <div v-if="!is_up" class="down" @click="showStaMsg()">
        收起
      </div>
    </div>
  </div>
</template>

<script>
import QQMapWX from '@/utils/qqmap-wx-jssdk.js'
import StationCard from '@/components/stationCard'
import amap from 'amap-wx'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import store from '../../vuex/index'
const { $Toast } = require('../../../static/dist/base/index')
export default {
  data() {
    return {
      markersData: {
        latitude: '', //纬度
        longitude: '', //经度123
        key: '94d4bb757ed3cc2656b8f91e03665b0f' //申请的高德地图key（申请的web key）
      },
      gpsCode: '',
      city_name: '正在定位',
      latitude: '',
      longitude: '',
      markers: [],
      is_up: false,
      qqmapsdk: Object,
      is_busSta: false,
      nearBusList: [],
      is_mapLoad: false,
      staList: []
    }
  },
  created() {
    this.initMap()
    this.getLocation()
    // this.GetRoutesMsg(this.Place)
  },
  onShow() {
    // this.GetRoutesMsg(this.Place)
  },
  mounted() {},
  computed: {
    ...mapGetters('bus', [
      'SynsStationList',
      'SynsStationShow',
      'Place',
      'RealTimeBus',
      'StaName'
    ])
  },
  methods: {
    ...mapMutations('bus', ['SET_SYNSTATIONLIST_NULL', 'SET_STANAME_NULL']),
    ...mapActions('bus', ['GetRoutesMsg']),
    // 初始化地图对象
    initMap() {
      this.qqmapsdk = new QQMapWX({
        key: '3ZCBZ-6NXRG-46HQX-I54ZE-BJ2O2-3JFIQ' // 必填
      })
    },
    // 获取经纬度
    getLocation() {
      let that = this
      //调用自带位置获取
      wx.getLocation({
        type: 'gcj02',
        //返回可以用于wx.openLocation的经纬度
        success: function(res) {
          that.testLocation(res.latitude, res.longitude)
        },
        fail: function(res) {
          $Toast({
            content: '请打开GPS定位',
            type: 'error'
          })
        }
      })
    },
    // 测试当前定位是否为汕头
    testLocation(lat, lng) {
      let that = this
      this.qqmapsdk.reverseGeocoder({
        location: {
          latitude: lat,
          longitude: lng
        },
        success: function(res) {
          if (res.result.address_component.city == '汕头市') {
            that.latitude = lat
            that.longitude = lng
            that.loadMy()
          } else {
            that.latitude = 23.374107
            that.longitude = 116.709419
            that.loadMy()
          }
        }
      })
    },
    // 获取当前定位
    loadMy() {
      let that = this
      this.qqmapsdk.reverseGeocoder({
        location: {
          latitude: that.latitude,
          longitude: that.longitude
        },
        success: function(res) {
          that.markers = [
            {
              id: 'my',
              latitude: res.result.location.lat,
              longitude: res.result.location.lng,
              callout: {
                content: '我', //文本
                color: '#ffffff', //文本颜色
                borderRadius: 10, //边框圆角
                borderWidth: 2, //边框宽度
                borderColor: '#353889', //边框颜色
                bgColor: '#353889', //背景色
                padding: 5, //文本边缘留白
                textAlign: 'center', //文本对齐方式。有效值: left, right, center
                display: 'ALWAYS',
                anchorY: -23
              }
            }
          ]
        },
        fail: function(err) {
          console.log(err)
        }
      })
    },
    // 获取公交站定位
    loadBuss() {
      let that = this
      this.SET_SYNSTATIONLIST_NULL()
      this.SET_STANAME_NULL()
      console.log(this.SynsStationList, this.StaName)
      this.qqmapsdk.search({
        keyword: '公交站',
        location: {
          latitude: that.latitude,
          longitude: that.longitude
        },
        success: function(res) {
          for (let sta of res.data) {
            if (sta.title.indexOf('(') > 0) {
              let str = sta.title.match(/(\S*)\(/)[1]
              that.uniStas(str)
            } else {
              let str = sta.title.match(/(\S*)\[/)[1]
              that.uniStas(str)
            }
          }
          that.getStaMsgList()
          that.setMarkers(res.data)
        },
        fail: function(err) {
          console.log(err)
        }
      })
      this.showStaMsg()
    },
    // 去掉重复公交站
    uniStas(data) {
      var is_push = true
      for (let joined of this.staList) {
        is_push = true
        if (data == joined) {
          is_push = false
          break
        }
      }
      if (is_push) {
        this.staList.push(data)
      }
    },
    // 设置公交坐标点
    setMarkers(data) {
      this.markers = [this.markers[0]]
      for (let sta of data) {
        this.markers.push({
          id: sta.id,
          latitude: sta.location.lat,
          longitude: sta.location.lng,
          callout: {
            content: sta.title, //文本
            color: '#353889', //文本颜色
            borderRadius: 10, //边框圆角
            borderWidth: 1, //边框宽度
            borderColor: '#353889', //边框颜色
            bgColor: '#fff', //背景色
            padding: 5, //文本边缘留白
            textAlign: 'center', //文本对齐方式。有效值: left, right, center
            display: 'BYCLICK',
            anchorY: -30
          }
        })
      }
    },
    // 跳转到搜索页面
    setSearchShow() {
      wx.navigateTo({
        url: '/pages/search/main?'
      })
    },
    toUser() {
      wx.navigateTo({
        url: '/pages/user/main?'
      })
    },
    setUp() {
      this.is_up = !this.is_up
    },
    mapLoaded() {
      this.is_mapLoad = true
    },
    showStaMsg() {
      this.is_busSta = !this.is_busSta
    },
    loadLocation() {
      let mpCtx = wx.createMapContext('map')
      let that = this
      mpCtx.moveToLocation({
        longitude: that.longitude,
        latitude: that.latitude
      })
    },
    getStaMsgList() {
      for (let i of this.staList) {
        this.GetRoutesMsg(i)
      }
    }
  },
  components: {
    StationCard
  },
  store
}
</script>
<style>
page {
  height: 100%;
  background-color: #fff;
  overflow: hidden;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
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
  height: 600px;
  width: 100%;
  background-color: #fff;
  border-top-right-radius: 70px;
  border-top-left-radius: 70px;
  padding-top: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 20px 0;
  z-index: 200;
}
.bus-msg-up {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 85%;
  background-color: #fff;
  border-top-right-radius: 70px;
  border-top-left-radius: 70px;
  padding-top: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 20px 0;
  z-index: 200;
}
.card-up {
  overflow: auto;
  height: 100%;
}
.card-down {
  overflow: hidden;
  height: 600px;
}
.more {
  text-align: center;
  font-weight: bold;
}
.down {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  color: #c1c1c1;
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
  z-index: 100;
}
.user {
  position: absolute;
  left: 0;
  height: auto;
  margin-left: 30px;
  top: 5%;
  z-index: 100;
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
  border-radius: 10px;
  flex: 1;
  margin-bottom: 40px;
  height: 70px;
  width: 70px;
  text-align: center;
  line-height: 70px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 10px 0;
}
.user-btn {
  border-radius: 70px;
  margin-bottom: 40px;
  height: 70px;
  width: 70px;
  text-align: center;
  line-height: 70px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 10px 0;
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
.btn-box {
  position: absolute;
  bottom: 100px;
  width: 100%;
}
.bus-btn {
  width: 220px;
  padding: 0 10px;
  height: 100px;
  margin: auto;
  background-color: #fff;
  border-radius: 100px;
  line-height: 100px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 10px 0;
  color: #353889;
}
</style>