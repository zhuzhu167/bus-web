<template>
  <div class="remind-container">
    <div class="remind-head">
      <div class="remind-add">
        <i class="fa fa-plus-square-o" aria-hidden="true"></i>
      </div>
    </div>
    <div class="remind-null">
      <div class="img-clock">
        <img src="../../../static/tabs/clock.png" alt="提醒闹钟" />
      </div>
      <div class="remind-tip">您还没有添加任何上车提醒</div>
      <div>
        <button class="remind-add-btn">立刻添加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
page {
  background-color: #f8f8f8;
  height: 100%;
}
</style>
<style scoped>
.remind-container {
}
.remind-head {
  height: 100px;
  background-color: #fff;
  line-height: 100px;
  padding: 0 35rpx;
}
.remind-title {
  font-size: 40px;
  display: inline-block;
}
.remind-add {
  color: #a3a3a3;
  display: inline-block;
  float: right;
  font-weight: lighter;
  font-size: 50px;
}
.remind-null {
  position: absolute;
  top: 30%;
  width: 100%;
}

.img-clock {
  text-align: center;
}
.img-clock img {
  width: 320px;
  height: 320px;
}
.remind-tip {
  color: #a3a3a3;
  margin-top: 30px;
  font-size: 30px;
  text-align: center;
}
.remind-add-btn {
  margin: 0 auto;
  margin-top: 30px;
  width: 250px;
  height: 80px;
  font-size: 30px;
  font-weight: normal;
  background: #409eff;
  color: #fff;
  border-radius: 10px;
  line-height: 80px;
  border: 0px;
}
</style>