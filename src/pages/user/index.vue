<template>
  <div>
    <div class="user-login">
      <div class="login">
        <div class="login-do">点击登录</div>
        <div class="login-tip">登录可以个性化编辑</div>
      </div>
      <div class="user-pic">
        <div>头像</div>
      </div>
    </div>
    <div class="user-do-list">
      <div class="user-do-item">上车提醒</div>
      <div class="user-do-item">好评鼓励</div>
      <div class="user-do-item">帮助与反馈</div>
      <div class="user-do-item">设置</div>
    </div>
  </div>
</template>

<script>
</script>

<style>
page {
  background-color: #f8f8f8;
}
</style>
<style scoped>
.user-login {
  background-color: #ffffff;
  display: flex;
  padding: 30px;
  margin-bottom: 25px;
}
.login {
  flex: 1.5;
}
.login-do {
  font-size: 50px;
  margin-bottom: 20px;
}
.login-tip {
  color: #a3a3a3;
  font-size: 35px;
}
.user-pic {
  flex: 1;
  text-align: right;
}
.user-do-list {
  background-color: #ffffff;
  margin: 0 25px;
  border-radius: 10px;
}
.user-do-item {
  height: 110px;
  line-height: 110px;
  padding-left: 50px;
  font-size: 26px;
}
</style>