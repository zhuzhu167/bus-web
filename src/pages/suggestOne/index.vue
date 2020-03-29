<template>
  <div class="remind-container">
    <i-toast id="toast" />
    <i-panel title="反馈">
      <i-cell>
        <textarea auto-height placeholder="请输入您的反馈信息" />
      </i-cell>
    </i-panel>
    <i-button v-on:click="feedBack()" type="success" shape="circle" size="small">提交</i-button>
  </div>
</template>

<script>
export default {
  methods: {
    feedBack() {
      $Toast({
        content: "提交成功",
        type: "success"
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
.remind-container {
}
.remind-head {
  height: 100px;
  background-color: #fff;
  line-height: 100px;
  padding: 0 35px;
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
  background: #fec84f;
  color: #fff;
  border-radius: 10px;
  line-height: 80px;
  border: 0px;
}
</style>