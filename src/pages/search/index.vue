<template>
  <div>
    <div class="search-head">
      <img
        src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"
        alt
      />

      <input type="text" v-model="str" placeholder="搜索公交线路，车站，地点" />
      <button class="search-btn" @click="find()">搜索</button>
    </div>
    <div v-if="RouteIsShow">
      <div class="search-card">
        <div class="card-title">{{ RouteList.rname }}</div>
        <div class="item-list">
          <p class="card-item">始班：{{ RouteList.startT }}</p>
          <p class="card-item">末班：{{ RouteList.endT }}</p>
          <p class="card-item">票价：{{ RouteList.charge }}元</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      str: ""
    };
  },
  computed: {
    ...mapGetters("bus", ["RouteList", "RouteIsShow"])
  },
  methods: {
    ...mapActions("bus", ["SearchRoute"]),
    find() {
      this.SearchRoute(this.str);
      this.str = "";
    }
  },
  store
};
</script>
<style>
page {
  background-color: #f8f8f8;
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
  background-color: #efefef;
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
  height: 180px;
  padding: 10px 40px;
  margin: 25px;
}
.card-title {
  height: 90px;
  line-height: 90px;
  font-size: 35px;
}
.item-list {
  height: 90px;
  line-height: 90px;
  font-size: 27px;
  color: #a3a3a3;
}
.card-item {
  margin-right: 30px;
  display: inline-block;
}
</style>