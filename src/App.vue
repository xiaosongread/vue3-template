<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import Computed from './components/computed.vue'
// import Reactive from './components/reactive.vue'
// import Home from './views/home.vue'
import NavBar from './components/navBar.vue'

</script>

<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <!-- <Home></Home>
    <HelloWorld msg="Vite + Vue" />
    <Reactive />
    {{ count }}
    <Computed /> -->
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
