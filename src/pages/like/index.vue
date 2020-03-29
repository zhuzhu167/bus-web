<template>
  <div>
    <i-toast id="toast" />
    <div class="card-title">点赞信息</div>
    <i-cell title="公交线路">
      <input slot="footer" v-model="route" class="weui-input" placeholder="必填项" />
    </i-cell>
    <i-cell title="公交号码">
      <input slot="footer" v-model="num" class="weui-input" placeholder="必填项" />
    </i-cell>
    <i-button v-on:click="like()" type="success" shape="circle" size="small">点赞</i-button>
  </div>
</template>

<script>
const { $Toast } = require("../../../static/dist/base/index");
import { mapActions } from "vuex";
export default {
  data() {
    return {
      route: "",
      num: ""
    };
  },
  mounted() {
    Object.assign(this.$data, this.$options.data());
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
        this.route = "";
        this.num = "";
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
.card-title {
  margin: 30px 30px 30px 40px;
  color: #a8a8a8;
  font-size: 30px;
}
</style>