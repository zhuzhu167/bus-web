<template>
  <div class="like-box">
    <i-toast id="toast" />
    <div class="like-head">
      <div class="return-black">
        <i-icon type="return"
                color="#ffffff"
                size="35"
                @click="comeBack()" />
      </div>
      <div class="text">为你尽心服务的公交</div>
      <div class="text text-p"
           style="font-size:50rpx;">留下你的鼓励</div>
    </div>
    <div class="like-body">
      <div class="input-item">
        <i-cell title="公交线路">
          <input slot="footer"
                 v-model="route"
                 class="weui-input"
                 placeholder="必填项" />
        </i-cell>
      </div>
      <div class="input-item">
        <i-cell title="公交号码">
          <input slot="footer"
                 v-model="num"
                 class="weui-input"
                 placeholder="必填项" />
        </i-cell>
      </div>
      <div class="like-btn">
        <i-button @click="like()"
                  shape="circle"
                  size="small">点赞</i-button>
      </div>
    </div>
  </div>
</template>

<script>
const { $Toast } = require('../../../static/dist/base/index')
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      route: '',
      num: ''
    }
  },
  mounted() {
    Object.assign(this.$data, this.$options.data())
  },
  methods: {
    ...mapActions('user', ['Like']),
    like() {
      if (this.route !== '' && this.num !== '') {
        let data = {
          like_carNum: this.num,
          like_route: this.route,
          userid: wx.getStorageSync('loginName')
        }
        this.Like(data)
        this.route = ''
        this.num = ''
      } else if (this.route == '') {
        $Toast({
          content: '公交线路不能为空',
          type: 'error'
        })
      } else if (this.num == '') {
        $Toast({
          content: '公交号码不能为空',
          type: 'error'
        })
      }
    },
    comeBack() {
      wx.navigateBack(-1)
    }
  },
  onUnload() {
    Object.assign(this.$data, this.$options.data())
  }
}
</script>
<style>
page {
  height: 100%;
  background-color: #f1f1f1;
}
</style>
<style scoped>
.like-box {
  background-color: #353889;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.like-head {
  flex: 1.5;
  color: #fff;
}
.text {
  margin: 0 10%;
  font-size: 60px;
  font-weight: lighter;
  margin-bottom: 11%;
}
.like-body {
  flex: 1;
  border-top-right-radius: 70px;
  border-top-left-radius: 70px;
  background-color: #fff;
  padding: 10% 8%;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 20px 0;
}
.like-btn {
  width: 100%;
  display: inline-block;
}
.like-btn button {
  background-color: #353889;
}
.input-item {
  flex: 1;
}
</style>