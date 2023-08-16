<script setup>
// 接收
// const props = defineProps({
//   msg1: {
//     type: String,
//     default: ''
//   },
//   msg2: {
//     type: String,
//     default: ''
//   }
// })
// // 必须用 update:modelValue 这个名字来通知父组件修改值
// const emit = defineEmits(['update:msg1', 'update:msg2'])
// function handleMsg1Click() {
//   emit('update:msg1', '这个是-msg1-新值')
// }
// function handleMsg2Click() {
//   emit('update:msg2', '这个是-msg2-新值')
// }


// 修饰符
const props = defineProps([
  'modelValue',
  'modelModifiers'
])

const emit = defineEmits(['update:modelValue'])
onMounted(() => {
  // 判断有没有 uppercase 修饰符，有的话就执行 toUpperCase() 方法
  console.log('修饰符', props)
  if (props.modelModifiers.uppercase) {
    emit('update:modelValue', props.modelValue.toUpperCase())
  }
})
</script>

<template>
  <div>
    <!-- <button @click="handleMsg1Click">{{ msg1 }}</button>
    <button @click="handleMsg2Click">{{ msg2 }}</button> -->
    <button>{{ modelValue }}</button>
  </div>
</template>

