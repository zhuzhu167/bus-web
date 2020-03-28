<template>
  <div class="register-container">
    <div class="register-box">
      <div class="register-title">Hi，欢迎加入我们</div>
      <div class="register-input">
        <input type="text" v-model="loginName" placeholder="账号" />
        <input type="text" v-model="phone" placeholder="手机" />
        <input type="text" v-model="password" placeholder="密码" />
        <button class="register-btn" open-type="getUserInfo" @getuserinfo="register">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
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
  background-color: #fec84f;
  height: 100%;
}
</style>
<style scoped>
.register-container {
  width: 100%;
  height: 100%;
}
.register-box {
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
.register-title {
  height: 150px;
  text-align: center;
  padding: 30px;
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
  border-radius: 10px;
  background-color: #f8f8f8;
  padding: 0 30px;
  font-size: 27px;
  margin-bottom: 30px;
}
.register-btn {
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
</style>