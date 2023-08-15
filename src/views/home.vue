<template>
  <PropsList :postList="list"/>
</template>
<script setup>
import PropsList from '../components/props-list.vue'
import { ref } from 'vue'
let list = ref([
  { id: 1, title: '和我一起学JAVA', desc: '和我一起学JAVA' },
  { id: 2, title: '和我一起学Js', desc: '和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js' },
  { id: 3, title: '和我一起学vue', desc: '和我一起学vue' }
])
</script>
<style scoped>

</style>