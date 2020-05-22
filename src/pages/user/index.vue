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
  <div class="user-box">
    <i-toast id="toast" />
    <div class="user-head">
      <div class="user-img">
        <i-icon type="mine" color="#353889" size="70" />
      </div>
      <div class="user-name" v-if="IsLogin">
        <p>Hello，{{ UserName }}</p>
      </div>
      <div class="user-name" v-if="!IsLogin" @click="toLogin()">
        <p>点击登录</p>
      </div>
      <div class="user-return"></div>
    </div>
    <div class="bus-bar">
      <div class="bus-bar-title">公 告</div>2020年09月17日，中心城区公交线路全部恢复正常营运。
    </div>
    <div class="do-list">
      <div class="list-card">
        <div class="item" @click="toUrlneedLogin('clock')">
          <div class="item-img">
            <i-icon type="clock_fill" color="#5c196b" size="30" />
          </div>
          <div class="item-name">提 醒</div>
        </div>
        <div class="item" @click="toUrl('route')">
          <div class="item-img">
            <i-icon type="barrage_fill" color="#f9a11b" size="30" />
          </div>
          <div class="item-name">换乘查询</div>
        </div>
        <div class="item" @click="toUrl('news')">
          <div class="item-img">
            <i-icon type="browse_fill" color="#4f953b" size="30" />
          </div>
          <div class="item-name">趣 闻</div>
        </div>
        <div class="item" @click="toUrlneedLogin('like')">
          <div class="item-img">
            <i-icon type="like_fill" color="#E71D36" size="30" />
          </div>
          <div class="item-name">点 赞</div>
        </div>
      </div>
      <div class="list-card">
        <div class="item" @click="toUrlneedLogin('lost')">
          <div class="item-img">
            <i-icon type="service_fill" color="#0077c8" size="30" />
          </div>
          <div class="item-name">失物招领</div>
        </div>
        <div class="item" @click="toUrlneedLogin('suggest')">
          <div class="item-img">
            <i-icon type="brush_fill" color="#353889" size="30" />
          </div>
          <div class="item-name">反 馈</div>
        </div>
        <div class="item" @click="openRealTimeBus()">
          <div class="item-img">
            <i-icon type="keyboard" color="#6d6e70" size="30" />
          </div>
          <div class="item-name">实时路况</div>
        </div>
        <div class="item" @click="set()">
          <div class="item-img">
            <i-icon type="setup_fill" color="#004d73" size="30" />
          </div>
          <div class="item-name">设 置</div>
        </div>
      </div>
    </div>
    <!-- <div class="user-context">
      <swiper
        current="1"
        style="height:100%"
        display-multiple-items="2"
        previous-margin="50rpx"
        next-margin="50rpx"
      >
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
            <div class="user-card user-card-flour" @click="toUrl('route')">
              <div class="card-img">
                <i-icon type="barrage_fill" color="#ffffff" size="70" />
              </div>
              <div class="card-name">换乘查询</div>
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
            <div class="user-card user-card-flour" @click="toUrlneedLogin('lost')">
              <div class="card-img">
                <i-icon type="service_fill" color="#ffffff" size="70" />
              </div>
              <div class="card-name">失物招领</div>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </div>-->
    <div class="user-foot">
      <div class="user-return" @click="tobusindex()">
        <i-icon type="enterinto" color="#ccc" size="35" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../vuex/index";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { IsLogin } from "../../vuex/user/getters";
const { $Toast } = require("../../../static/dist/base/index");
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
    ...mapGetters("user", ["IsLogin", "UserName"]),
    ...mapGetters("bus", ["RealTimeBus"])
  },
  methods: {
    ...mapMutations("bus", ["SET_REAL_TIME_BUS"]),
    ...mapActions("user", ["CheckLogin"]),
    // 判断是否登录
    isLogin() {
      if (wx.getStorageSync("loginName") != "") {
        this.CheckLogin(wx.getStorageSync("userId"));
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
    },
    openRealTimeBus() {
      this.SET_REAL_TIME_BUS(!this.RealTimeBus);
      console.log(this.RealTimeBus);
      if (this.RealTimeBus) {
        $Toast({
          content: "已开启实时路况"
        });
      } else {
        $Toast({
          content: "已关闭实时路况"
        });
      }
    },
    set() {
      $Toast({
        content: "敬请期待"
      });
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
  margin-top: 20%;
  display: flex;
  padding: 0 50px;
  font-size: 50px;
  color: #000;
  align-items: center;
}
.user-img {
  flex: 1;
  text-align: left;
}
.user-name {
  text-align: center;
}

.user-return {
  flex: 2;
  text-align: center;
}
.user-context {
  position: relative;
  margin-top: 56px;
  padding-top: 45%;
  padding-bottom: 15%;
}
.do-list {
  margin: 50px 30px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 10px 0;
  background-color: #fff;
}
.list-card {
  display: flex;
  padding: 50px 20px;
}
.item {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.item-img {
  text-align: center;
  height: 70px;
}
.item-name {
  color: #000;
  text-align: center;
  font-weight: lighter;
  font-size: 25px;
}
.user-foot {
  position: absolute;
  background-color: #fff;
  display: flex;
  align-items: center;
  bottom: 40px;
  width: 100%;
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
.bus-bar {
  margin: 60px 30px 10px 30px;
  background-color: #353889;
  border-radius: 30px;
  padding: 30px 50px;
  color: #fff;
}
.bus-bar-title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
