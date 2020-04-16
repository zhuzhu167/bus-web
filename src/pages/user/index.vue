<template>
  <!-- <div>
    <i-toast id="toast" />
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
    <div class="user-do-list fadeIn">
      <div class="user-do-item" @click="toUrlneedLogin('clock')">
        <img src="../../../static/tabs/clock.png" />上车提醒
      </div>
      <div class="user-do-item" @click="toUrlneedLogin('like')">
        <img src="../../../static/tabs/good.png" />好评鼓励
      </div>
      <div class="user-do-item" @click="toUrlneedLogin('lost')">
        <img src="../../../static/tabs/lost.png" />失物招领
      </div>
      <div class="user-do-item" @click="toUrlneedLogin('suggest')">
        <img src="../../../static/tabs/text.png" />帮助与反馈
      </div>
      <div class="user-do-item" @click="toUrlneedLogin('set')">
        <img src="../../../static/tabs/set.png" />设置
      </div>
    </div>
  </div>-->
  <div class="user-box undraw_reading_0re1">
    <div class="user-head">
      <div class="user-name" v-if="IsLogin">
        <p>Hello，{{ UserName }}</p>
      </div>
      <div class="user-name" v-if="!IsLogin" @click="toLogin()">
        <p>点击登录</p>
      </div>
      <div class="user-return" @click="tobusindex()">
        <i-icon type="enterinto_fill" color="#353889" size="35" />
      </div>
    </div>
    <div class="user-context">
      <swiper style="height:100%" display-multiple-items="2">
        <block>
          <swiper-item>
            <div class="user-card user-card-one" @click="toUrlneedLogin('clock')">
              <div class="card-img">
                <i-icon type="clock_fill" color="#ffffff" size="70" />
              </div>
              <div class="card-name">上车提醒</div>
            </div>
          </swiper-item>
          <swiper-item>
            <div class="user-card user-card-two" @click="toUrlneedLogin('like')">
              <div class="card-img">
                <i-icon type="like_fill" color="#ffffff" size="70" />
              </div>
              <div class="card-name">我要点赞</div>
            </div>
          </swiper-item>
          <swiper-item>
            <div class="user-card user-card-three" @click="toUrl('news')">
              <div class="card-img">
                <i-icon type="browse_fill" color="#ffffff" size="70" />
              </div>
              <div class="card-name">候车趣闻</div>
            </div>
          </swiper-item>
          <swiper-item>
            <div class="user-card user-card-flour" @click="toUrl('route')">
              <div class="card-img">
                <i-icon type="barrage_fill" color="#ffffff" size="70" />
              </div>
              <div class="card-name">换乘查询</div>
            </div>
          </swiper-item>
          <swiper-item>
            <div class="user-card user-card-flour" @click="toUrlneedLogin('lost')">
              <div class="card-img">
                <i-icon type="service_fill" color="#ffffff" size="70" />
              </div>
              <div class="card-name">失物招领</div>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="user-foot">
      <div class="foot-item">
        <i-icon type="brush_fill" size="27" color="#b9b9b9" @click="toUrlneedLogin('suggest')" />
      </div>
      <div class="foot-item">
        <i-icon type="setup_fill" size="27" color="#b9b9b9" />
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
        like: "/pages/like/main",
        lost: "/pages/lost/main",
        news: "/pages/news/main",
        route: "/pages/route/main"
      },
      isClicked: false
    };
  },
  created() {
    this.isLogin();
  },
  computed: {
    ...mapGetters("user", ["IsLogin", "UserName"])
  },
  methods: {
    ...mapActions("user", ["CheckLogin"]),
    // 判断是否登录
    isLogin() {
      if (wx.getStorageSync("loginName") != "") {
        this.CheckLogin(wx.getStorageSync("userName"));
      }
    },
    // 控制页面跳转
    toUrlneedLogin(url) {
      if (true) {
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
    toUrl(url) {
      wx.navigateTo({
        url: this.urlList[url]
      });
    },
    toLogin() {
      wx.navigateTo({
        url: "/pages/login/main"
      });
    },
    tobusindex() {
      wx.navigateBack(-1);
    }
  },
  store
};
</script>

<style>
page {
  height: 100%;
}
</style>
<style scoped>
.user-box {
  display: flex;
  background-color: #fff;
  flex-direction: column;
  height: 100%;
  background-size: 135%;
  background-repeat: no-repeat;
  background-position: top;
}
.user-head {
  flex: 1;
  margin-top: 20%;
  display: flex;
  padding: 0 50px;
  font-size: 50px;
  color: #353889;
  align-items: center;
}
.user-name {
  flex: 1;
  text-align: left;
}
.user-return {
  flex: 1;
  text-align: right;
}
.user-context {
  flex: 6;
  position: relative;
  padding: 0 5%;
  margin-top: 56px;
  padding-top: 45%;
  padding-bottom: 15%;
}
.user-foot {
  flex: 2;
  background-color: #fff;
  display: flex;
  padding: 0 10%;
  align-items: center;
}
.foot-item {
  flex: 1;
  text-align: center;
}
.user-card {
  width: 90%;
  margin: 0 5%;
  border-radius: 70px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}
.user-card-one {
  background-color: #353889;
}
.user-card-two {
  background-color: #353889;
}
.user-card-three {
  background-color: #353889;
}
.user-card-flour {
  background-color: #353889;
}
.card-img {
  flex: 1;
  text-align: center;
  padding-top: 30%;
}
.card-name {
  flex: 1;
  text-align: center;
  color: #fff;
  font-weight: lighter;
  font-size: 45px;
  padding-top: 30%;
}
</style>
