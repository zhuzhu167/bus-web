<template>
  <div class="card-container">
    <div class="card">
      <div class="card-title">
        <div class="card-station">{{ station }}</div>
        <div class="card-station-num">3个站点</div>
        <div class="card-station-distance">500m</div>
      </div>
      <div class="card-station-route" v-for="(item,index) in route[0]" :key="index">
        <div class="one">
          <div class="from-to">{{ item.rname }}</div>
        </div>
        <div class="two">
          <div class="destination">开往{{ item.startSta }}</div>
          <div class="time">首{{ item.startT }}|末{{ item.endT }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
      default: {}
    },
    station: {
      type: String,
      default: "未知"
    }
  },
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.demo();
  },
  methods: {
    demo() {
      console.log(this.route);
    }
  }
};
</script>

<style>
.card {
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 35px;
}
.card-title {
  display: flex;
  height: 110px;
  line-height: 110px;
  padding-left: 50px;
}
.card-station {
  font-size: 35px;
  margin-right: 20px;
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
}
.card-station-distance {
  color: #a8a8a8;
  font-size: 30px;
}
.card-station-route {
  height: 180px;
  border-top: 5px solid #f8f8f8;
}
.one {
  display: flex;
  padding: 0 50px;
  height: 90px;
  line-height: 90px;
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
  padding: 0 50px;
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
