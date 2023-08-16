<template>
  <div>
    <h1>vue3 组件之间的通信</h1>
    {{ text }}
    <Emit :postList="list" @setPostList = "setPostList" ref="com" />
    ------------------------------父组件调用子组件的属性和方法-----------------------------------------------
    <!-- 父组件调用子组件属性方法 -->
    <div>
      {{ messageParent }}
    </div>
    <div><button @click="callChildFn">获取子组件的方法</button></div>
    -----------------------------v-model------------------------------------------------
    <!-- v-model -->
    <childModelMore v-model:msg1="msg1" v-model:msg2="msg2" />
    <h6>修饰符</h6>
    <childModelMore v-model.uppercase="msg3" />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import Emit from '../components/emit.vue'
import childModelMore from '../components/modelMore.vue'
let list = ref([
  { id: 1, title: '和我一起学JAVA', desc: '和我一起学JAVA' },
  { id: 2, title: '和我一起学Js', desc: '和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js和我一起学Js' },
  { id: 3, title: '和我一起学vue', desc: '和我一起学vue' }
])
let text = ref("父组件里面的数据！")

const setPostList = function (data) {
  text.value = data
}

// ref 获取子组件的属性、方法
const com = ref(null)
const messageParent = ref('')
onMounted(function () {
  messageParent.value = com.value.message
})
// 调用子组件的方法
const callChildFn = () => {
  com.value.changeChildMessage('父组件传给子组件的值')
  messageParent.value = com.value.message
}

// model
const modelText = ref('旧数据！')
const msg1 = ref('msg1')
const msg2 = ref('msg2')
// 修饰符
const msg3 = ref('hello')

</script>
<style scoped>

</style>