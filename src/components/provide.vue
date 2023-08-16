<template>
  <div>
    <div>msg: {{ msg }}</div>
    <div>name: {{name}}</div>
    <button @click="handleClick">修改</button>
  </div>
</template>

<script setup>
// 看看有没有值，没值的话就适用默认值（这里默认值是hello）
const name = inject('name', 'hello')
const msg = inject('msg')
const changeName = inject('changeName')

function handleClick() {
  // 这样写不合适，因为vue里推荐使用单向数据流，当父级使用readonly后，这行代码是不会生效的。没使用之前才会生效。
  // name.value = '雷猴'

  // 正确的方式
  changeName('虎躯一震')

  // 因为 msg 没被 readonly 过，所以可以直接修改值
  msg.value = '世界'
}
</script>
