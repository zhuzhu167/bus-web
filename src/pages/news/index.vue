<template>
  <div>
    <i-toast id="toast" />
    <div class="return-black">
      <i-icon type="return" color="#353889" size="35" @click="comeBack()" />
    </div>
    <div class="new-title-box undraw_researching_22gp">
      <div class="new-title">
        <p>每天趣闻</p>
      </div>
      <div class="new-date">
        <p>2020/04/13</p>
      </div>
    </div>
    <div class="new-card-box">
      <div class="new-card" v-if="showImg" v-for="item in itemList" :key="item">
        <div class="new-img" :style="'background: url('+item.thumbnail_pic_s+') no-repeat;'"></div>
        <div class="card-title">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { $Toast } = require("../../../static/dist/base/index");
export default {
  data() {
    return {
      showImg: false,
      itemList: []
    };
  },
  onLoad() {
    this.getList();
    this.showImg = true;
  },
  methods: {
    getList() {
      $Toast({
        content: "加载中",
        type: "loading",
        duration: 0
      });
      var that = this;
      wx.request({
        url:
          "http://v.juhe.cn/toutiao/index?type=top&key=3dc86b09a2ee2477a5baa80ee70fcdf5",
        method: "get",
        success: res => {
          $Toast.hide();
          that.itemList = res.data.result.data;
        },
        fail: err => {
          $Toast.hide();
          $Toast({
            content: "请求失败",
            type: "error"
          });
        }
      });
    },
    comeBack() {
      wx.navigateBack(-1);
    }
  }
};
</script>

<style>
page {
  background-color: #ffffff;
  height: 100%;
}
</style>
<style scoped>
.return {
  margin-bottom: 6%;
  margin-left: 5%;
}
.new-title-box {
  height: 560px;
  color: #000;
  background-size: 93%;
  background-repeat: no-repeat;
  background-position: bottom;
}
.new-title {
  color: #353889;
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 40px;
  padding-left: 6%;
}
.new-date {
  font-size: 30px;
  color: #ccc;
  padding-left: 6%;
}
.new-card-box {
  padding: 0 5%;
  padding-top: 5%;
}
.new-card {
  width: 85%;
  margin: auto;
  height: 350px;
  position: relative;
  margin-bottom: 60px;
}
.new-img {
  height: 100%;
  width: 100%;
  border-radius: 30px;
  background-size: cover;
}
.card-title {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  border-radius: 30px;
}
.card-title p {
  font-size: 40px;
  display: inline-block;
  color: #ffffff;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 70px;
  position: absolute;
  bottom: 48px;
  padding: 0 30px;
}
</style>
