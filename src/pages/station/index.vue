<template>
  <div class="set-container fadeIn">
    <i-toast id="toast" />
    <i-index height="100%">
      <i-index-item v-for="(item,index) in resStation" :key="index" :name="item.key">
        <view
          class="i-index-item"
          v-for="(it,id) in item.list"
          :key="id"
          @click="setPlace(it.name)"
        >{{ it.name }}</view>
      </i-index-item>
    </i-index>
  </div>
</template>

<script>
import p from "wl-pinyin";
import station from "../../utils/station";
import { mapMutations, mapActions } from "vuex";
import store from "../../vuex/index";
export default {
  data() {
    return {
      resStation: []
    };
  },
  onReady() {
    let storeCity = new Array(26);
    const words = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
    words.forEach((item, index) => {
      storeCity[index] = {
        key: item,
        list: []
      };
    });
    station.forEach(item => {
      let firstName = p.getFirstLetter(item)[0];
      let index = words.indexOf(firstName);
      storeCity[index].list.push({
        name: item,
        key: firstName
      });
    });
    this.resStation = storeCity;
  },
  methods: {
    ...mapActions("bus", ["GetRoutesMsg"]),
    ...mapMutations("bus", ["SET_PLACE"]),
    setPlace(name) {
      this.SET_PLACE(name);
      this.GetRoutesMsg(name);
      this.$nextTick(function() {
        wx.switchTab({
          url: "/pages/index/main"
        });
      });
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
.i-index-item {
  background-color: #fff;
  padding: 25px;
}
</style>