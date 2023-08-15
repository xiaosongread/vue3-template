<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import axios from 'axios'

let list = ref([])

let load = async () => {
  const { data } = await axios.get('http://localhost:3000/post')
  console.log(data)
  list.value = data || []
}
load()

let serarchText = ref('')

let resultList = computed(() => {
  if (list.value.length === 0) return
  return list.value.filter((item) => {
    return item.name.includes(serarchText.value)
  })
})
// 监听单个 data
watch(serarchText, (newValue, oldValue) => {
  console.log('watch:', newValue, oldValue)
})
// 监听多个 data
// watch([serarchText, resultList], ([newSerarchText, newResultList], [oldSerarchText, oldResultList]) => {
//   console.log(1, newSerarchText, oldSerarchText)
//   console.log(2, newResultList, oldResultList)
// })

// watchEffect 组件初始化的时候先执行一次，然后里面只要使用的变量有变化，就会重新执行此监听
// 监听多个变量，只要有一个变量有变化，就会重新执行
watchEffect(() =>{
  console.log('watchEffect:', serarchText.value)
})

// 设置停止监听
// let stopWatch = watch(serarchText, (newValue, oldValue) => {
//   console.log('watch:', newValue, oldValue)
// })

// let stopWatchEffect = watchEffect(() =>{
//   console.log('watchEffect:', serarchText.value)
// })

// let stopHandler = function (){
//   stopWatch()
//   stopWatchEffect()
// }


</script>

<template>
  <div>
    <ul>
      <li v-for="item in resultList" :key="item.id">{{ item.name }}</li>
    </ul>
    <input type="text" v-model="serarchText" />
    <button @click="stopHandler">停止监听</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
