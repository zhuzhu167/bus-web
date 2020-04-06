<template>
  <div class="card">
    <i-toast id="toast" />
    <StationCard :route="SynsStationList" :station="station"></StationCard>
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
  background-color: #f1f1f1;
  height: 100%;
}
</style>
<style scoped>
.card {
  margin: 25rpx;
}
</style>