<template>
  <div class="remind-container">
    <i-toast id="toast" />
    <i-cell-group>
      <i-cell :label="busNum+' 号线'" :title="'下一站为：'+nextStation" :value="station"></i-cell>
    </i-cell-group>
    <i-cell-group>
      <i-cell title="提醒站距">
        <input
          slot="footer"
          v-model="distance"
          @click="openDistance()"
          class="weui-input"
          placeholder="请选择"
        />
      </i-cell>
      <i-cell title="重复">
        <input slot="footer" v-model="minute" type="number" class="weui-input" placeholder="分钟" />
      </i-cell>
      <i-cell title="开始时间">
        <picker
          slot="footer"
          mode="time"
          :value="start"
          start="09:01"
          end="21:01"
          @change="setStart"
        >
          <view class="picker">{{ start?start:'请选择' }}</view>
        </picker>
      </i-cell>
      <i-cell title="结束时间">
        <picker slot="footer" mode="time" :value="end" start="09:01" end="21:01" @change="setEnd">
          <view class="picker">{{ end?end:'请选择' }}</view>
        </picker>
      </i-cell>
      <i-cell title="提醒多辆">
        <switch slot="footer" checked color="#fec84f" />
      </i-cell>
    </i-cell-group>
    <i-button @click="setClock()" type="success" shape="circle" size="small">确定</i-button>
  </div>
</template>

<script>
const { $Toast } = require("../../../static/dist/base/index");
import { mapActions, mapGetters } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      busNum: "",
      station: "",
      nextStation: "",
      switch: false,
      distance: "",
      minute: "",
      distancelist: ["即将到站", "500米", "1公里"],
      start: "",
      end: ""
    };
  },
  onLoad(options) {
    this.busNum = options.busNum;
    this.station = options.station;
    this.nextStation = options.nextStation;
  },
  onUnload() {
    Object.assign(this.$data, this.$options.data());
  },
  computed: {
    ...mapGetters("user", ["IsRemind"])
  },
  methods: {
    ...mapActions("user", ["SetRemind", "SetClock"]),
    openDistance() {
      let that = this;
      wx.showActionSheet({
        itemList: ["即将到站", "500米", "1公里"],
        success(res) {
          that.distance = that.distancelist[res.tapIndex];
        }
      });
    },
    setStart(event) {
      this.start = event.mp.detail.value;
    },
    setEnd(event) {
      this.end = event.mp.detail.value;
    },
    setClock() {
      if (
        this.busNumthis != "" &&
        this.station != "" &&
        this.distance != "" &&
        this.minute != "" &&
        this.start != "" &&
        this.end != ""
      ) {
        let data = {
          busNum: this.busNum,
          station: this.station,
          distance: this.distance,
          minute: this.minute,
          start: this.start,
          end: this.end
        };
        this.SetClock(data);
        Object.assign(this.$data, this.$options.data());
      } else {
        $Toast({
          content: "所填信息不能为空",
          type: "error"
        });
      }
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
</style>