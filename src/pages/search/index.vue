<template>
  <div>
    <div class="search-head">
      <img
        src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"
        alt
      />

      <input type="text" placeholder="搜索公交线路，车站，地点" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.search-head {
  align-items: center;
  height: 80px;
  display: flex;
  margin-top: 20px;
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
  width: 100%;
}
.search-head img {
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 0 60px;
}
</style>