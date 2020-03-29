<template>
  <div>
    <i-toast id="toast" />
    <div class="search-head">
      <img
        src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"
        alt
      />

      <input v-model="num" type="text" placeholder="搜索公交线路" />
      <button class="search-btn" @click="search()">搜索</button>
    </div>
    <div>
      <div class="search-card" v-on:click="toNext()" v-if="RouteIsShow">
        <div class="card-title">
          <p class="title-route">{{ RouteList.rname }}</p>
          <div class="item-img">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { $Toast } = require("../../../static/dist/base/index");
import { mapActions, mapGetters, mapMutations } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      num: ""
    };
  },
  computed: {
    ...mapGetters("bus", ["RouteList", "RouteIsShow"])
  },
  methods: {
    ...mapActions("bus", ["SearchRoute"]),
    ...mapMutations("bus", ["SET_ROUTE_SHOW"]),
    toNext() {
      wx.navigateTo({
        url: "/pages/busRemindTwo/main?busNum=" + this.num
      });
      this.SET_ROUTE_SHOW(false);
      Object.assign(this.$data, this.$options.data());
    },
    search() {
      if (this.num != "") {
        this.SearchRoute(this.num);
      } else {
        $Toast({
          content: "公交线路不能为空",
          type: "error"
        });
      }
    }
  },
  store
};
</script>
<style>
page {
  background-color: #f1f1f1;
  height: 100%;
}
</style>
<style scoped>
.search-head {
  align-items: center;
  height: 80px;
  display: flex;
  margin: 20px 0 50px 0;
}
.search-head input {
  height: 80px;
  background-color: #fff;
  border-radius: 50px;
  font-size: 30px;
  color: #a3a3a3;
  margin: 0 30px 0 30px;
  padding: 0 90px;
  display: inline-block;
  width: 90%;
}
.search-head img {
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 0 60px;
}
.search-btn {
  margin: 0 auto;
  height: 80px;
  font-size: 30px;
  background: #fec84f;
  color: #fff;
  border-radius: 50px;
  line-height: 80px;
  margin-right: 20px;
  padding: 0 10px;
  width: 160px;
}
button::after {
  border: none;
}
.search-card {
  background-color: #fff;
  border-radius: 10px;
  height: 80px;
  padding: 10px 40px;
  margin: 25px;
}
.search-card:active {
  background-color: #f8f8f8;
}
.card-title {
  line-height: 80px;
  font-size: 35px;
  display: flex;
}
.title-route {
  flex: 3;
}
.item-img {
  flex: 1;
  text-align: right;
}
</style>