<template>
  <div>
    子组件：
    <button @click="handleBusEmit">触发Bus.$emit</button>
    <button @click="changeBusMsg">修改总线里面的msg</button>
  </div>
</template>

<script setup>
import Bus from "../utils/Bus"

function handleBusEmit () {
  Bus.$emit('changeMsg', '触发emit并且修改了msg数据')
}

function changeBusMsg () {
  Bus.msg.value = '子组件修改了总线的值'
}
</script>
