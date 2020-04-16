<template>
  <div
    class="register-container undraw_mobile_web_2g8b"
    @touchstart="touchStart"
    @touchend="touchEnd"
  >
    <i-toast id="toast" />
    <div class="register-box">
      <div class="register-title">Hi，欢迎加入我们</div>
      <div class="register-input">
        <input type="text" v-model="loginName" placeholder="账号" />
        <input type="text" v-model="phone" placeholder="手机" />
        <input type="text" v-model="password" placeholder="密码" />
        <button class="register-btn" open-type="getUserInfo" @getuserinfo="register">注册</button>
      </div>
    </div>
    <div class="return-foot">
      <p>向右滑动返回上一层</p>
    </div>
  </div>
</template>

<script>
const { $Toast } = require("../../../static/dist/base/index");
import store from "../../vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loginName: "",
      password: "",
      phone: ""
    };
  },
  onLoad() {
    wx.getSetting({
      success(res) {
        if (!res.authSetting["scope.userInfo"]) {
          console.log("未授权,正在授权");
          wx.authorize({
            scope: " scope.userInfo",
            success() {
              console.log("授权成功");
            }
          });
        } else {
          console.log("已授权");
        }
      }
    });
  },
  methods: {
    ...mapActions("user", ["Register"]),
    // 注册
    register(e) {
      if (this.loginName == "") {
        $Toast({
          content: "账号不能为空",
          type: "error"
        });
        return;
      }
      if (this.password == "") {
        $Toast({
          content: "密码不能为空",
          type: "error"
        });
        return;
      }
      if (this.phone == "") {
        $Toast({
          content: "手机号码不能为空",
          type: "error"
        });
        return;
      }
      let data = {
        loginName: this.loginName,
        password: this.password,
        phone: this.phone,
        userName: e.mp.detail.userInfo.nickName
      };
      this.userName = e.mp.detail.userInfo.nickName;
      this.Register(data);
    }
  },
  store
};
</script>
<style >
page {
  background-color: #fff;
  height: 100%;
}
</style>
<style scoped>
.register-container {
  width: 100%;
  height: 100%;
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: 30% 5%;
  overflow: hidden;
}
.register-box {
  margin: auto;
  width: 80%;
  margin-top: 65%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.register-title {
  height: 100px;
  text-align: center;
  font-size: 50px;
  line-height: 150px;
  flex: 1;
}
.register-input {
  padding: 0 30px;
  color: #a3a3a3;
  position: relative;
  flex: 5;
}
.register-input input {
  height: 100px;
  background-color: #fff;
  padding: 0 30px;
  font-size: 27px;
  margin-bottom: 40px;
  border-bottom: 1px solid #353889;
}
.register-btn {
  margin: 0 auto;
  height: 80px;
  font-size: 37px;
  font-weight: normal;
  background: #353889;
  color: #fff;
  border-radius: 70px;
  line-height: 80px;
  margin-top: 50px;
}
button::after {
  border: none;
}
</style>