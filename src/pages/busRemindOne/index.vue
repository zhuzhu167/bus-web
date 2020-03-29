<template>
  <div>
    <i-toast id="toast" />
    <div class="search-head">
      <img
        src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"
        alt
      />

      <input type="text" placeholder="搜索公交线路" />
      <button class="search-btn">搜索</button>
    </div>
    <div>
      <div class="search-card" v-on:click="toNext()">
        <div class="card-title">
          <p class="title-route">1号线</p>
          <div class="item-img">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toNext() {
      wx.navigateTo({
        url: "/pages/busRemindTwo/main"
      });
    }
  }
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
  background-color: #fbfbfb;
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
  flex: 1;
}
.item-img {
  flex: 1;
  text-align: right;
}
</style>