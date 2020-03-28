<template>
  <div>
    <div class="user-login">
      <div class="login">
        <div v-if="!IsLogin">
          <div class="login-do" @click="toLogin()">点击登录</div>
          <div class="login-tip">登录可以个性化编辑</div>
        </div>
        <div v-if="IsLogin">
          <div class="login-done">您好，{{ UserName }}</div>
        </div>
      </div>
    </div>
    <div class="user-do-list">
      <div class="user-do-item" v-on:click="toUrl('clock')">
        <img src="../../../static/tabs/clock.png" />上车提醒
      </div>
      <div class="user-do-item" v-on:click="toUrl('like')">
        <img src="../../../static/tabs/good.png" />好评鼓励
      </div>
      <div class="user-do-item" v-on:click="toUrl('suggest')">
        <img src="../../../static/tabs/text.png" />帮助与反馈
      </div>
      <div class="user-do-item" v-on:click="toUrl('set')">
        <img src="../../../static/tabs/set.png" />设置
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../vuex/index";
import { mapGetters, mapActions } from "vuex";
import { IsLogin } from "../../vuex/user/getters";
export default {
  data() {
    return {
      urlList: {
        clock: "/pages/busRemind/main",
        suggest: "/pages/suggest/main",
        set: "/pages/set/main",
        like: "/pages/like/main"
      },
      isClicked: false
    };
  },
  computed: {
    ...mapGetters("user", ["IsLogin", "UserName"])
  },
  methods: {
    // 控制页面跳转
    toUrl(url) {
      if (this.IsLogin) {
        let _this = this;
        this.isClicked = true;
        wx.navigateTo({
          url: this.urlList[url]
        });
        setTimeout(function() {
          _this.isClicked = false;
        }, 50);
      } else {
        wx.showToast({
          title: "请先登录",
          icon: "none",
          duration: 2000
        });
      }
    },
    toLogin() {
      wx.navigateTo({
        url: "/pages/login/main"
      });
    }
  },
  store
};
</script>

<style>
page {
  background-color: #f8f8f8;
}
</style>
<style scoped>
.user-login {
  background-color: #fec84f;
  padding: 30px;
  margin-bottom: 25px;
  height: 200px;
}
.login {
  text-align: center;
}
.login-do {
  font-size: 60px;
  margin-bottom: 40px;
  background-color: #fec84f;
  padding-left: 0;
}
.login-done {
  font-size: 70px;
  margin-bottom: 40px;
  background-color: #fec84f;
  padding-left: 0;
  padding: 40px;
  overflow: hidden;
  height: 75px;
}
.login-tip {
  color: #fff;
  font-size: 35px;
}
.user-pic {
  flex: 1;
  position: relative;
}
.user-pic img {
  width: 130px;
  height: 130px;
  position: absolute;
  top: 15%;
  right: 0;
  margin-right: 10px;
}
.user-do-list {
  background-color: #ffffff;
  margin: 0 25px;
  border-radius: 10px;
}
.user-do-list img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 30px;
}
.user-do-item {
  height: 110px;
  line-height: 110px;
  padding-left: 50px;
  font-size: 26px;
}
.user-do-item:active {
  background-color: #f1f1f1;
}
</style>
