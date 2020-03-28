<template>
  <div>
    <i-input title="公交路线" autofocus placeholder="要点赞的公交线路" />
    <i-input title="公交车号" autofocus placeholder="要点赞的公交车号" />
    <i-button bind:click="handleClick" type="success" shape="circle" size="small">点赞</i-button>
  </div>
</template>

<script>
export default {};
</script>
<style>
page {
  height: 100%;
  background-color: #f8f8f8;
}
</style>
<style scoped>
</style>