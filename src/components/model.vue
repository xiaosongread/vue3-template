<script setup>
// 接收
const props = defineProps([
  'modelValue' // 接收父组件使用 v-model 传进来的值，必须用 modelValue 这个名字来接收
])
// 必须用 update:modelValue 这个名字来通知父组件修改值
const emit = defineEmits(['update:modelValue'])
function handleClick() {
  // 参数1：通知父组件修改值的方法名
  // 参数2：要修改的值
  emit('update:modelValue', '这个是新值，哈哈！')
}
</script>

<template>
  <div>{{ modelValue }}</div>
  <button @click="handleClick">更新数据</button>
</template>
