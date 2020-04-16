<template>
  <div class="box">
    <i-toast id="toast" />
    <div class="return-back">
      <i-icon type="return" color="#fff" size="35" @click="comeBack()" />
    </div>

    <div class="up">
      <div class="up-item">
        <div class="route-input">
        <input type="text" v-model="from" placeholder="出发点" />
        <div class="line"></div>
        <input type="text" v-model="to" placeholder="目的点" />
        <div class="exchange-icon" @click="exchangeFromTo()">
          <i-icon type="narrow" size="25"/>
        </div>
        <button class="route-btn" @click="find()">搜索</button>
      </div>
      </div>
    </div>
    <div class="down">
      <div class="down-item">
        <div v-if="TransferIsShow" class="route-card fadeIn">
      <div class="card" @click="getDetailStationT()">
        <div class="card-left">
          <div class="card-title">
            {{ start }}
            <i-icon type="enterinto_fill" color="#353889" />
            {{ end }}
          </div>
          <div class="card-context">
            坐 {{ TransferList[0] }}
            <p style="display:inline-block" v-if="TransferList[2]!=null&&TransferList[2]!=''">
              号线，在{{ TransferList[2] }}站 
              <p style="display:inline-block;color:#353889"/> 转</p> 
              {{ TransferList[1] }} 号线
            </p>
          </div>
        </div>
        <div class="card-right">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
      </div>
    </div>

    <!-- <div class="route-container">
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
    <div v-if="TransferIsShow" class="route-card fadeIn">
      <div class="card" @click="getDetailStationT()">
        <div class="card-left">
          <div class="card-title">
            {{ start }}
            <i-icon type="enterinto_fill" color="#353889" />
            {{ end }}
          </div>
          <div class="card-context">
            坐 {{ TransferList[0] }}
            <p style="display:inline-block" v-if="TransferList[2]!=null&&TransferList[2]!=''">
              号线，在{{ TransferList[2] }}站 
              <p style="display:inline-block;color:#353889"> 转</p> 
              {{ TransferList[1] }} 号线
            </p>
          </div>
        </div>
        <div class="card-right">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>-->
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
    ...mapActions("bus", [
      "LessTransfer",
      "GetSEStationsTran",
      "GetSEStations"
    ]),
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
    },
    getDetailStationT() {
      if (this.TransferList[2] != "") {
        let data = {
          sta: this.start,
          end: this.end,
          tran: this.TransferList[2],
          rid: this.TransferList[0],
          ridTran: this.TransferList[1]
        };
        this.GetSEStationsTran(data);
        wx.reLaunch({
          url: "/pages/routeStations/main"
        });
      } else {
        let data = {
          sta: this.start,
          end: this.end,
          rid: this.TransferList[0]
        };
        this.GetSEStations(data);
        wx.reLaunch({
          url: "/pages/routeStations/main"
        });
      }
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
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.up {
  flex: 1;
  background-color: #fff;
}
.return-back {
  background-color: #353889;
  padding: 10% 5%;
}
.up-item {
  background-color: #353889;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 100px;
}
.down {
  flex: 1.5;
  background-color: #353889;
}
.down-item {
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-top-left-radius: 100px;
  margin-left: 15px;
}
.route-container {
  background-color: #353889;
  padding-bottom: 30px;
}
.route-title {
  font-size: 50px;
  padding: 20px 0 20px 30px;
}
.route-input {
  padding: 0 40px;
  color: #a3a3a3;
  position: relative;
}
.route-input input {
  height: 100px;
  border-radius: 10px;
  background-color: #fff;
  padding: 0 30px;
  font-size: 27px;
}
.line {
  background-color: #353889;
  height: 10px;
}
.exchange-icon {
  position: absolute;
  z-index: 2;
  top: 20%;
  right: 20%;
  font-size: 35px;
  color: #353889;
  border-radius: 80px;
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
  border-radius: 70px;
  line-height: 80px;
  margin-top: 30px;
}
button::after {
  border: none;
}
.route-card {
  padding: 20px 25px;
}
.card {
  height: 200px;
background-color: #fff;
border-radius: 10px;
padding: 0 35px;

}
.card-title {
  height: 110px;
  line-height: 135px;
  font-size: 37px;
}
.card-context {
  height: 90px;
  line-height: 55px;
  color: #a8a8a8;
  font-size: 32px;
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
.card-left {
  display: inline-block;
}
.card-right {
  float: right;
  display: inline-block;
  height: 100%;
  line-height: 200px;
}
</style>
