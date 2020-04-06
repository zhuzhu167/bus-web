<template>
  <div class="search-stations fadeIn">
    <i-toast id="toast" />
    <i-steps direction="vertical">
      <i-step status="finish" v-for="(item,index) in StationList" :key="index">
        <view slot="title">{{ item }} 站</view>
      </i-step>
    </i-steps>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      id: ""
    };
  },
  computed: {
    ...mapGetters("bus", ["StationList"])
  },
  methods: {
    ...mapMutations("bus", ["SET_STATIONLIST"])
  },
  onUnload() {
    this.SET_STATIONLIST([]);
    this.id = "";
  },
  store
};
</script>
<style>
page {
  background-color: #fff;
  height: 100%;
}
</style>
<style scoped>
.search-stations {
  margin-top: 30px;
}
.search-card {
  background-color: #fff;
  border-radius: 10px;
  height: 80px;
  padding: 10px 40px;
  margin: 25px;
}
.card-title {
  line-height: 80px;
  font-size: 35px;
}
.card-title-p {
  margin-left: 25px;
  display: inline-block;
}
.item-img {
  display: inline-block;
  float: right;
}
</style>