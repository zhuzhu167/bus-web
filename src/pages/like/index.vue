<template>
  <div>
    <i-message id="message" />
    <i-panel title="点赞信息">
      <i-input v-model="route" title="公交路线" autofocus placeholder="要点赞的公交线路" />
      <i-input v-model="num" title="公交车号" autofocus placeholder="要点赞的公交车号" />
    </i-panel>
    <i-button v-on:click="like()" type="success" shape="circle" size="small">点赞</i-button>
  </div>
</template>

<script>
const { $Message } = require("../../../static/dist/base/index");
export default {
  data() {
    return {
      route: "",
      num: ""
    };
  },
  methods: {
    like() {
      if (this.route != "" && this.num != "") {
        $Message({
          content: "点赞成功",
          type: "success"
        });
      } else if (this.route == "") {
        $Message({
          content: "公交线路不能为空",
          type: "error"
        });
      } else if (this.num == "") {
        $Message({
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
  background-color: #f8f8f8;
}
</style>
<style scoped>
</style>