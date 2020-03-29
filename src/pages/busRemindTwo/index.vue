<template>
  <div>
    <i-toast id="toast" />
    <i-cell title="1号线" value="请选择以下站点"></i-cell>
    <div>
      <div class="search-card" v-on:click="toNext()">
        <div class="card-title">
          <i-icon type="label_fill" color="#fec84f" />
          <p class="card-title-p">芙蓉站</p>
          <div class="item-img">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toNext() {
      wx.navigateTo({
        url: "/pages/busRemindThree/main"
      });
    }
  }
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
  background-color: #fbfbfb;
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
  height: 80px;
  padding: 10px 40px;
  margin: 25px;
}
.search-card:active {
  background-color: #f8f8f8;
}
.card-title {
  line-height: 80px;
  font-size: 35px;
}
.card-title-p {
  margin-left: 25px;
  display: inline-block;
}
.item-img {
  display: inline-block;
  float: right;
}
</style>