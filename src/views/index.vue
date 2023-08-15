<template>
  <div>
    <h1>vue3 组件之间的通信</h1>
    {{ text }}
    <Emit :postList="list" @setPostList = "setPostList" />
  </div>
</template>
<script setup>
import Emit from '../components/emit.vue'
let list = ref([
  { id: 1, title: '和我一起学JAVA', desc: '和我一起学JAVA' },
  { id: 2, title: '和我一起学Js', desc: '和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js' },
  { id: 3, title: '和我一起学vue', desc: '和我一起学vue' }
])
let text = ref("父组件里面的数据！")

const setPostList = function (data) {
  text.value = data
}
</script>
<style scoped>

</style>