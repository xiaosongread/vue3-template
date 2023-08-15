<template>
  <div class="about">
    <div>{{ msg }} - {{ msg1 }}</div>
    <button @click="clickHander">vue2点击</button>
    <button @click="clickV3Hander">vue3点击</button>

    <div>{{ name }}</div>
    <button @click="clickObjHander">修改 name 值</button>
    <div class="box"></div>
    <ul v-if="list.length">
      <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
    </ul>
    <button @click="delList">删除列表最后一项</button>
  </div>
</template>
<script setup>
// import { ref, toRefs } from 'vue'
import { computed } from 'vue';
import { useStore, mapGetters } from 'vuex';

console.log('运行环境', import.meta.env)

let list = ref([])

const store = useStore()
async function getList () {
  await store.dispatch("app/getListDataAction")
  console.log("store:", store.getters.listData)
  list.value = store.getters.listData
}
getList()
const delList = function () {
  list.value.pop()
}

let msg = ref('hello vue2')
let msg1 = ref('hello vue2')
let obj = ref({
  name: '张三',
  age: 18
})
let {name} = toRefs(obj.value)

// vue2
function clickHander() {
  msg.value = 'hello vue3'
}

// vue3
function clickV3Hander() {
  msg1.value = 'hello vue3'
}

// 对象
function clickObjHander() {
  obj.value.name = '李四'
}

</script>

<style lang="scss" scoped>
.about {
  .box {
    width: 100px;
    height: 100px;
    background-color: $bgColor;
  }
}
</style>