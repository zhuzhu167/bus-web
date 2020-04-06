<template>
  <div>
    <i-toast id="toast" />
    <div class="new-title">趣闻</div>
    <div class="page fadeIn">
      <div>
        <div class="list-cell" v-for="item in itemList" :key="item">
          <div class="media-list-logo">
            <image v-if="showImg" :src="item.thumbnail_pic_s" />
          </div>
          <div class="media-list-body">
            <div class="media-list-text-top">{{item.author_name}}</div>
            <div class="media-list-text-bottom">{{item.title}}</div>
          </div>
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
.new-title {
  font-size: 50px;
  padding: 20px 0 20px 30px;
  background-color: #fec84f;
}
image {
  width: 120px;
  height: 115px;
  display: inline-block;
  overflow: hidden;
}
.list-cell {
  height: 180px;
  display: flex;
  background-color: #fff;
  margin-bottom: 10px;
}
.media-list-logo {
  flex: 1;
  padding: 35px 20px;
}
.media-list-body {
  flex: 5;
  padding: 20px;
}
.media-list-text-bottom {
  font-size: 31px;
}
</style>
