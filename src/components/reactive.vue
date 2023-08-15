<template>
  <div>
    <ul>
      <li v-for="(item, i) in stuList.list" :key="i">
        {{item.id}}:名字是{{item.name}}
      </li>
    </ul>
    <input type="text" v-model="newName" placeholder="请输入学生名称">
    <button @click="addStu">添加学生</button>
  </div>
</template>

<script setup>
import { ref, reactive, onUpdated } from 'vue'
import stuListFn from './compontion/stuList'
import addStuFn from './compontion/addStu'

const {stuList} = stuListFn()
const {newName, addStu} = addStuFn(stuList)
</script>

<style scoped>

</style>
