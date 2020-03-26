<template>
  <div>
    <div class="route-container">
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
      </div>
    </div>
    <div class="common-location">
      <div class="common-title">常用地点</div>
      <div class="common-context"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: "",
      to: ""
    };
  },
  methods: {
    exchangeFromTo() {
      let temp = "";
      if (this.from != "" && this.to != "") {
        temp = this.from;
        this.from = this.to;
        this.to = temp;
      }
    }
  }
};
</script>

<style>
page {
  background-color: #f8f8f8;
  height: 100%;
}
</style>
<style scoped>
.route-container {
  background-color: #fec84f;
  padding-bottom: 30px;
}
.route-title {
  font-size: 50px;
  padding: 20px 0 20px 30px;
}
.route-input {
  padding: 0 30px;
  color: #a3a3a3;
  position: relative;
}
.route-input input {
  height: 100px;
  border-radius: 10px;
  background-color: #f8f8f8;
  padding: 0 30px;
  font-size: 27px;
}
.line {
  background-color: #fec84f;
  height: 10px;
}
.exchange-icon {
  position: absolute;
  z-index: 2;
  top: 33%;
  right: 20%;
  transform: rotate(90deg);
  font-size: 35px;
  color: #fec84f;
  border-radius: 80rpx;
  background-color: #fff;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
}
.exchange-icon:active {
  background-color: #f1f1f1;
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
</style>
