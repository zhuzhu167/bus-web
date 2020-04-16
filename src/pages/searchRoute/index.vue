<template>
  <div class="card undraw_navigator_a479" @touchstart="touchStart" @touchend="touchEnd">
    <i-toast id="toast" />
    <StationCard :route="SynsStationList" :station="station"></StationCard>
    <div class="return-foot">
      <p>向右滑动返回上一层</p>
    </div>
  </div>
</template>

<script>
import StationCard from "@/components/stationCard";
import { mapActions, mapGetters, mapMutations } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      station: ""
    };
  },
  onShow() {
    this.init();
    this.GetRoutesMsg(this.station);
  },
  computed: {
    ...mapGetters("bus", ["SynsStationList"])
  },
  methods: {
    ...mapActions("bus", ["GetRoutesMsg"]),
    ...mapMutations("bus", ["SET_SYNSTATIONLIST_NULL"]),
    init() {
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1];
      this.station = currPage.options.station;
    }
  },
  onUnload() {
    this.SET_SYNSTATIONLIST_NULL([]);
    this.station = "";
  },

  components: {
    StationCard
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
.card {
  height: 100%;
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: 30% 70%;
  padding-top: 25%;
}
</style>