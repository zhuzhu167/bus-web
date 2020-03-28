<template>
  <div class="suggest-container">
    <div class="card-title">快速反馈</div>
    <div class="msg-card">
      <div class="msg-item">
        <div class="item-text">线路变更</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">暂无实时信息</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">位置定位错误</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">网络不给力</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">车辆到站不准确</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">线路尚未开通</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">软件问题</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">我要吐槽</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">侵权投诉</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="card-title">常见问题</div>
    <div class="msg-card">
      <div class="msg-item">
        线路尚未开通/暂时无实时信息
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">实时路况查看方法</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">小车支持的城市</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="msg-item">
        <div class="item-text">软件显示有车，却实际没有</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="submit">
      <div class="submit-btn">意见反馈</div>
      <div class="submit-btn">我的反馈</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
page {
  background-color: #f8f8f8;
}
</style>
<style scoped>
.suggest-container {
  padding-bottom: 160px;
}
.card-title {
  margin: 30px 30px 30px 40px;
  color: #a8a8a8;
  font-size: 30px;
}
.msg-card {
  margin: 30px 30px 0 30px;
  background-color: #fff;
  border-radius: 10px;
}
.msg-item {
  height: 90px;
  line-height: 90px;
  font-size: 26px;
  padding: 0 30px;
  display: flex;
}
.msg-item:active {
  background-color: #f1f1f1;
}
.item-text {
  flex: 1;
}
.item-img {
  flex: 1;
  text-align: right;
}
.submit {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  height: 130px;
  width: 100%;
  display: flex;
}
.submit-btn {
  flex: 1;
  line-height: 130px;
  text-align: center;
  font-size: 30px;
  background-color: #409eff;
  color: #fff;
}
</style>
