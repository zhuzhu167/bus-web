<template>
  <div>
    <i-toast id="toast" />
    <i-panel title="点赞信息">
      <i-cell title="公交线路">
        <input slot="footer" class="weui-input" placeholder="必填项" />
      </i-cell>
      <i-cell title="公交号码">
        <input slot="footer" class="weui-input" placeholder="必填项" />
      </i-cell>
    </i-panel>
    <i-button v-on:click="like()" type="success" shape="circle" size="small">点赞</i-button>
  </div>
</template>

<script>
const { $Toast } = require("../../../static/dist/base/index");
import { mapActions } from "vuex";
export default {
  data() {
    return {
      route: "231",
      num: "2313"
    };
  },
  methods: {
    ...mapActions("user", ["Like"]),
    like() {
      if (this.route !== "" && this.num !== "") {
        let data = {
          like_carNum: this.num,
          like_route: this.route,
          userid: "liangzhu167"
        };
        this.Like(data);
      } else if (this.route == "") {
        $Toast({
          content: "公交线路不能为空",
          type: "error"
        });
      } else if (this.num == "") {
        $Toast({
          content: "公交号码不能为空",
          type: "error"
        });
      }
    }
  }
};
</script>
<style>
page {
  height: 100%;
  background-color: #f1f1f1;
}
</style>
<style scoped>
</style>