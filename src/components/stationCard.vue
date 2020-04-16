<template>
  <div class="card-container">
    <div class="card">
      <div class="card-title">
        <div class="card-station">
          <i-icon size="20" color="#353889" type="coordinates_fill" />
          {{ station }}
        </div>
        <div class="card-dis">
          <div class="card-station-num">3个站点</div>
          <div class="card-station-distance">500m</div>
        </div>
      </div>
      <div class="card-station-route" v-for="(item,index) in route[0]" :key="index">
        <div class="one">
          <div class="from-to">{{ item.rname }}</div>
        </div>
        <div class="two">
          <div class="destination">开往{{ item.startSta }}</div>
          <div class="time">
            <i-icon size="15" color="#353889" type="time" />
            首{{ item.startT }} | 末{{ item.endT }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../vuex/index";
export default {
  props: {
    route: {
      type: Object,
      default: {}
    },
    station: {
      type: String,
      default: ""
    }
  },
  store
};
</script>

<style scoped>
.card {
  border-radius: 70px;
  margin: 0 30px;
}
.card-title {
  display: flex;
  height: 110px;
  line-height: 110px;
  padding-left: 20px;
}
.card-station {
  flex: 2;
  font-size: 35px;
  margin-right: 20px;
}
.card-dis{
  flex: 1;
}
.card-station img {
  width: 30px;
  height: 30px;
  vertical-align: center;
}
.card-station-num {
  color: #a8a8a8;
  font-size: 30px;
  margin-right: 20px;
  display: inline-block;
}
.card-station-distance {
  color: #a8a8a8;
  font-size: 30px;
  display: inline-block;
}
.card-station-route {
  height: 180px;
  border-top: 5px solid #f8f8f8;
}
.one {
  display: flex;
  padding: 0 20px;
  height: 90px;
  line-height: 120px;
  font-size: 35px;
}
.from-to {
  flex: 1;
}
.bus-num {
  flex: 1;
  text-align: right;
}
.two {
  display: flex;
  padding: 0 20px;
  color: #a8a8a8;
  font-size: 30px;
  height: 90px;
  line-height: 90px;
}
.destination {
  flex: 1;
}
.time {
  flex: 1;
  text-align: right;
}
</style>
