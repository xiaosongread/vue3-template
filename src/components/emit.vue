<script setup>
import SinglePost from './single-post.vue'
const props = defineProps({
  postList: Array
})

const emit = defineEmits(['setPostList'])

const delPop = function () {
  console.log('打印：', props.postList)
  // 删除父组件的数据
  props.postList.pop()
}

const addPop = function () {
  // 添加父组件的数据
  props.postList.push({
    id: 100,
    title: '我是子组件添加的数据',
    desc: '和我一起学添加数据'
  })
}
const editParent = function () {
  // 修改父组件的数据
  emit('setPostList', '已经是修改后的数据了！')
}
</script>

<template>
  <div>
    <ul>
      <li v-for="item in postList" :key="item.id">
        <SinglePost :listItem = "item"/>
      </li>
    </ul>
    <button @click="delPop">子组件删除父组件的数据</button>
    <button @click="addPop">子组件添加父组件的数据</button>
    <button @click="editParent">修改父组件的数据</button>
  </div>
</template>
