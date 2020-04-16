<template>
  <div class="login-container undraw_mobile_login_ikmv" @touchstart="touchStart" @touchend="touchEnd">
    <i-toast id="toast" />
    <div class="login-box">
      <div class="login-title">Hi，欢迎您回来</div>
      <div class="login-input">
        <input type="text" v-model="loginName" placeholder="账号" />
        <input type="password" v-model="password" placeholder="密码" />
        <button class="login-btn" @click="login()">登录</button>
      </div>
      <div class="register">
        <p @click="toRegister()">新用户？请点击注册</p>
      </div>
    </div>
    <div class="return-foot">
      <p>向右滑动返回上一层</p>
    </div>
  </div>
</template>

<script>
const { $Toast } = require("../../../static/dist/base/index");
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loginName: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("user", ["Login"]),
    toRegister() {
      wx.navigateTo({
        url: "/pages/register/main"
      });
    },
    login() {
      if (this.login == "") {
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
      let data = {
        loginName: this.loginName,
        password: this.password
      };
      this.Login(data);
    }
  }
};
</script>
<style >
page {
  background-color: #fff;
  height: 100%;
}
</style>
<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  padding-top: 20%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0% 70%;
}
.login-box {
  margin: auto;
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
}
.login-title {
  height: 100px;
  text-align: center;
  padding: 30px;
  font-size: 50px;
  line-height: 100px;
}
.login-input {
  padding: 0 30px;
  color: #a3a3a3;
  flex: 2;
  margin-bottom: 35px;
}
.login-input input {
  height: 100px;
  background-color: #fff;
  padding: 0 30px;
  font-size: 27px;
  margin-bottom: 10px;
  border-bottom: 1px solid #353889;
}
.login-btn {
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
.register {
  flex: 2;
  margin-top: 30px;
  text-align: center;
  color: #353889;
}
</style>