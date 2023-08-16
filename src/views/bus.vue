<template>
  <div>
    <h1>Bus</h1>
    <div>
      父组件：
      <span style="margin-right: 30px;">message: {{ message }}</span>
      <span>msg: {{ msg }}</span>
    </div>
    <Child />
  </div>
</template>
<script setup>
import Bus from "../utils/Bus"
import Child from "../components/bus.vue"

const msg = ref(Bus.msg)
const message = ref('hello')

// 用监听的写法
Bus.$on('changeMsg', data => {
  message.value = data
})
</script>
<style scoped>

</style>