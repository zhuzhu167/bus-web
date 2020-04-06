<template>
  <div class="login-container">
    <i-toast id="toast" />
    <div class="login-box fadeIn">
      <div class="login-title">Hi，欢迎您回来</div>
      <div class="login-input">
        <input type="text" v-model="loginName" placeholder="账号" />
        <input type="password" v-model="password" placeholder="密码" />
        <button class="login-btn" @click="login()">登录</button>
      </div>
      <div class="register">
        <p @click="toRegister()">注册</p>
      </div>
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
  background-color: #fec84f;
  height: 100%;
}
</style>
<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-box {
  margin: auto;
  width: 80%;
  height: 60%;
  margin-top: 10%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
  display: flex;
  flex-direction: column;
}
.login-title {
  height: 100px;
  text-align: center;
  padding: 30px;
  font-size: 50px;
  line-height: 100px;
  flex: 2;
}
.login-input {
  padding: 0 30px;
  color: #a3a3a3;
  flex: 5;
}
.login-input input {
  height: 100px;
  border-radius: 10px;
  background-color: #f1f1f1;
  padding: 0 30px;
  font-size: 27px;
  margin-bottom: 30px;
}
.login-btn {
  margin: 0 auto;
  height: 80px;
  font-size: 37px;
  font-weight: normal;
  background: #fec84f;
  color: #fff;
  border-radius: 10px;
  line-height: 80px;
  margin-top: 10px;
}
button::after {
  border: none;
}
.register {
  flex: 2;
  margin-top: 30px;
  text-align: center;
}
</style>