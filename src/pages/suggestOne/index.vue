<template>
  <div class="remind-container">
    <i-toast id="toast" />
    <div class="card-title">关于{{ msg }}的反馈</div>
    <i-panel>
      <i-cell>
        <textarea v-model="suggest" auto-height placeholder="请输入您的反馈信息" />
      </i-cell>
    </i-panel>
    <i-button v-on:click="feedBack()" type="success" shape="circle" size="small">提交</i-button>
  </div>
</template>

<script>
import store from "../../vuex/index";
import { mapActions } from "vuex";
const { $Toast } = require("../../../static/dist/base/index");
export default {
  data() {
    return {
      msg: "",
      suggest: ""
    };
  },
  onLoad(options) {
    this.msg = options.msg;
  },
  onUnload: function() {
    Object.assign(this.$data, this.$options.data());
  },
  methods: {
    ...mapActions("user", ["FeedBack"]),
    feedBack() {
      if (this.msg != "") {
        let data = {
          content: this.suggest,
          userid: "liangzhu167"
        };
        this.FeedBack(data);
      } else {
        $Toast({
          content: "反馈信息不能为空",
          type: "error"
        });
      }
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
.card-title {
  margin: 30px 30px 30px 40px;
  color: #a8a8a8;
  font-size: 30px;
}
</style>