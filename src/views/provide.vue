<template>
  <div>
    <h1>provide</h1>
    <Child />
  </div>
</template>
<script setup>
import Child from '../components/provide.vue'

const name = ref('猛虎下山')
const msg = ref('雷猴')

// 使用readonly可以让子组件无法直接修改，需要调用provide往下传的方法来修改
provide('name', readonly(name))

provide('msg', msg)

provide('changeName', (value) => {
  name.value = value
})

</script>
<style scoped>

</style>