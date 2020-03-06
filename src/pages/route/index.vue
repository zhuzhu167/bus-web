<template>
  <div>
    <div class="route-container">
      <div>
        <div class="route-title">路线</div>
      </div>
      <div class="route-input">
        <input type="text" />
        <div class="line"></div>
        <input type="text" />
      </div>
    </div>
    <div class="common-location">
      <div class="common-title">常用地点</div>
      <div class="common-context"></div>
    </div>
  </div>
</template>

<script>
</script>

<style>
page {
  background-color: #f8f8f8;
  height: 100%;
}
</style>
<style scoped>
.route-container {
  background-color: #ffffff;
  padding-bottom: 30px;
}
.route-title {
  font-size: 50px;
  padding: 20px 0 20px 30px;
}
.route-input {
  padding: 0 30px;
}
.route-input input {
  height: 100px;
  border-radius: 10px;
  background-color: #f8f8f8;
  padding: 0 30px;
  font-size: 27px;
}
.line {
  height: 10px;
  background-color: #ffffff;
}
.common-location {
  padding: 20px 0 20px 30px;
}
.common-title {
  color: #a3a3a3;
  font-size: 25px;
}
.common-context {
  height: 500px;
}
</style>