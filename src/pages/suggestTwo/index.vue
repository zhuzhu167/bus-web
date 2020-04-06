<template>
  <div class="remind-container fadeIn">
    <i-toast id="toast" />
    <div class="card-title">关于{{ msg }}的帮助</div>
  </div>
</template>

<script>
import store from "../../vuex/index";
import { mapActions } from "vuex";
const { $Toast } = require("../../../static/dist/base/index");
export default {
  data() {
    return {
      msg: ""
    };
  },
  onLoad(options) {
    this.msg = options.msg;
  },
  methods: {},
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