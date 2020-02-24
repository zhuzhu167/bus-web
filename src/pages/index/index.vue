<template>
  <div class="index-container">
    <div class="index-search">
      <div class="index-position">定位</div>
      <div class="index-search-input">
        <div class="input">搜索公交线路，车站，地点</div>
      </div>
    </div>
    <div class="index-context">
      <div class="index-select">
        <div class="index-point">附近站点</div>
        <div class="index-route">历史线路</div>
      </div>
      <div class="index-card-list">
        <StationCard></StationCard>
      </div>
    </div>
  </div>
</template>

<script>
import StationCard from "@/components/stationCard";
export default {
  components: {
    StationCard
  }
};
</script>
<style>
page {
  background-color: #f8f8f8;
  height: 100%;
}
</style>
<style scoped>
.index-container {
  height: 100%;
  padding-bottom: 20px;
}
.index-search {
  display: flex;
  background-color: #fff;
  height: 70px;
  line-height: 70px;
  padding: 30px 0;
}
.index-position {
  flex: 1;
  text-align: center;
}
.index-search-input {
  flex: 3;
}
.input {
  height: 70px;
  background-color: #efefef;
  border-radius: 50px;
  width: 93%;
  text-indent: 20px;
  font-size: 25px;
  color: #a3a3a3;
  text-align: center;
}
.index-context {
}
.index-select {
  height: 80px;
  display: flex;
  line-height: 80px;
  padding: 20px 0 30px 25px;
}
.index-point {
  margin: 0 15px;
  border-bottom: 8px solid #fec84f;
}
.index-route {
  margin: 0 15px;
}
.index-card-list {
  padding: 0 25px;
}
</style>
