<template>
  <div class="card-container">
    <div class="card" v-for="(item,index) in route" :key="index" >
      <div class="card-title">
        <div class="card-station">
          <i-icon size="20" color="#353889" type="coordinates_fill" />
          {{ station[index] }}
        </div>
        <div class="card-dis">
          <div class="card-station-num">3个站点</div>
          <div class="card-station-distance">500m</div>
        </div>
      </div>
      <div class="card-station-route" v-for="(im,ix) in item" :key="ix">
        <div class="one">
          <div class="from-to">{{ im.rname }}</div>
        </div>
        <div class="two">
          <div class="destination">开往{{ im.startSta }}</div>
          <div class="time">
            <i-icon size="15" color="#353889" type="time" />
            首{{ im.startT }} | 末{{ im.endT }}
          </div>
        </div>
      </div>
      <!-- <div @click="demo()">123</div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../vuex/index'
export default {
  props: {
    route: {
      type: Object,
      default: {}
    },
    station: {
      type: String,
      default: ''
    }
  },
  methods: {
    demo() {
      console.log(this.route)
    }
  },
  store
}
</script>

<style scoped>
.card {
  margin: 0 30px;
  margin-bottom: 70px;
  border-bottom: 5px solid #f8f8f8
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
.card-dis {
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
