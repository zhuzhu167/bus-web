<template>
  <div class="fadeIn">
    <i-toast id="toast" />
    <div class="return-black">
      <i-icon type="return" color="#353889" size="35" @click="comeBack()" />
    </div>
    <div class="box">
      <div class="card-title">关于{{ msg }}的反馈</div>
      <div class="text-box">
        <textarea class="text" v-model="suggest" placeholder="请输入您的反馈信息" />
      </div>
      <div class="btn">
        <i-button @click="feedBack()" shape="circle" size="small">提交</i-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../vuex/index";
import { mapActions } from "vuex";
const { $Toast } = require("../../../static/dist/base/index");
export default {
  data() {
    return {
      msg: "",
      suggest: ""
    };
  },
  onLoad(options) {
    this.msg = options.msg;
  },
  onUnload: function() {
    Object.assign(this.$data, this.$options.data());
  },
  methods: {
    ...mapActions("user", ["FeedBack"]),
    feedBack() {
      if (this.suggest != "") {
        let userid = wx.getStorageSync("loginName");
        let data = {
          content: this.suggest,
          userid: userid
        };
        this.FeedBack(data);
      } else {
        $Toast({
          content: "反馈信息不能为空",
          type: "error"
        });
      }
    },
    comeBack() {
      wx.navigateBack(-1);
    }
  },
  store
};
</script>
<style>
page {
  background-color: #fff;
  height: 100%;
  position: relative;
}
</style>
<style scoped>
.box {
  padding: 0 40px;
}
.text-box {
  border: 1px solid #353889;
  border-radius: 30px;
  padding: 40px;
}
.text {
  height: 400px;
  width: 100%;
}
.card-title {
  margin: 40px 0;
  color: #353889;
  font-size: 40px;
}
.btn {
  margin-top: 100px;
}
</style>