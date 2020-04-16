<template>
  <div class="suggest-container fadeIn">
    <i-toast id="toast" />
    <!-- <div class="return-black">
      <i-icon type="return" color="#353889" size="35" @click="comeBack()" />
    </div>-->
    <div class="card">
      <div class="card-title">快速反馈</div>
      <div class="msg-card">
        <div class="msg-item"
             @click="toFeedBack('线路变更')">
          <div class="item-text">线路变更</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toFeedBack('暂无实时信息')">
          <div class="item-text">暂无实时信息</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toFeedBack('位置定位错误')">
          <div class="item-text">位置定位错误</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toFeedBack('网络不给力')">
          <div class="item-text">网络不给力</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toFeedBack('车辆到站不准确')">
          <div class="item-text">车辆到站不准确</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toFeedBack('线路尚未开通')">
          <div class="item-text">线路尚未开通</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toFeedBack('软件问题')">
          <div class="item-text">软件问题</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toFeedBack('我要吐槽<')">
          <div class="item-text">我要吐槽</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toFeedBack('侵权投诉')">
          <div class="item-text">侵权投诉</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">常见问题</div>
      <div class="msg-card">
        <div class="msg-item"
             @click="toHelp('线路尚未开通/暂时无实时信息')">
          线路尚未开通/暂时无实时信息
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toHelp('实时路况查看方法')">
          <div class="item-text">实时路况查看方法</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toHelp('小车支持的城市')">
          <div class="item-text">小车支持的城市</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
        <div class="msg-item"
             @click="toHelp('软件显示有车，却实际没有')">
          <div class="item-text">软件显示有车，却实际没有</div>
          <div class="item-img">
            <i-icon type="feedback_fill"
                    color="#ccc"
                    size="20" />
          </div>
        </div>
      </div>
    </div>
    <div class="submit">
      <div class="submit-btn"
           @click="toMySuggest()">我的反馈</div>
      <div class="submit-btn"
           @click="comeBack()">返回</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toFeedBack(msg) {
      wx.navigateTo({
        url: '/pages/suggestOne/main?msg=' + msg
      })
    },
    toHelp(msg) {
      wx.navigateTo({
        url: '/pages/suggestTwo/main?msg=' + msg
      })
    },
    toMySuggest() {
      wx.navigateTo({
        url: '/pages/suggestMy/main'
      })
    },
    comeBack() {
      wx.navigateBack(-1)
    }
  }
}
</script>
<style>
page {
  background-color: #fff;
}
</style>
<style scoped>
.suggest-container {
  padding-bottom: 160px;
  padding-top: 20%;
}
.card {
  margin: 0 60px;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 6px 0;
  margin-bottom: 40px;
}
.card-title {
  background-color: #353889;
  color: #fff;
  font-size: 50px;
  text-align: center;
  height: 150px;
  line-height: 150px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  font-weight: lighter;
}
.msg-card {
  margin: 10px 0;
}
.msg-item {
  height: 90px;
  line-height: 90px;
  font-size: 26px;
  padding: 0 50px;
  display: flex;
}
.msg-item:active {
  background-color: #f8f8f8;
}
.item-text {
  flex: 4;
}
.item-img {
  flex: 1;
  text-align: right;
}
.submit {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  height: 100px;
  width: 100%;
  display: flex;
  border-top-right-radius: 70px;
  border-top-left-radius: 70px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 10px 0;
}
.submit-btn {
  flex: 1;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  color: #352889;
}
</style>
