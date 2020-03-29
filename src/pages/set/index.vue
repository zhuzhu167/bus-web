<template>
  <div class="set-container">
    <i-toast id="toast" />
    <div class="set-card">
      <div class="set-item">
        <div class="item-text">关于我们</div>
        <div class="item-img">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
page {
  background-color: #f1f1f1;
  height: 100%;
}
</style>
<style scoped>
.set-card {
  margin: 30px 30px 30px 30px;
  background-color: #fff;
  border-radius: 10px;
}
.set-item {
  height: 90px;
  padding: 0 30px;
  line-height: 90px;
  display: flex;
}
.item-text {
  flex: 1;
  font-size: 26px;
}
.item-img {
  flex: 1;
  text-align: right;
}
</style>