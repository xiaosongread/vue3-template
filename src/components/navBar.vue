<script setup>

</script>

<template>
  <div class="navBar">
    <div class="logo"></div>
    <div class="bar">
      <router-link to="/">首页</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/relf">Relf</router-link>
      <router-link to="/solt">Solt 插槽</router-link>
      <router-link to="/provide">provide</router-link>
      <router-link to="/bus">bus</router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
.navBar {
  width: 100%;
  height: 40px;
  position: fixed;
  left: 0;
  top: 0;
  background: #d8d8d8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 100px;
    height: 40px;
    background: url("../assets/logo.png");
    background-size: 100px 40px;
    background-repeat: no-repeat;
  }
  .bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    color: #000;
    font-weight: 700;
    padding-right: 30px;
    a {
      color: #000;
      text-decoration: none;
      margin: 0 10px;
      &.router-link-active {
        color: #4e0000;
        font-weight: 700;
      }
    }
  }
}
</style>