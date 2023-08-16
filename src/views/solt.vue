<template>
  <div>
    <h1>slot 插槽</h1>
    -----------具名插槽-----------
    <Child>
      <template v-slot:monkey>
        <div>
          哈哈嘿嘿
        </div>
      </template>
      <button>哈雷波特</button>
    </Child>
    -----------作用域插槽-----------
    <!-- v-slot="{scope}" 获取子组件传上来的数据 -->
    <!-- :list="list" 把list传给子组件 -->
    <Child1 v-slot="{scope}" :list="list">
      <div>
        <div>名字：{{ scope.name }}</div>
        <div>职业：{{ scope.occupation }}</div>
        <hr>
      </div>
    </Child1>
  </div>
</template>
<script setup>
import Child from '../components/solt.vue'
import Child1 from '../components/slot1.vue'

const list = ref([
  { name: '雷猴', occupation: '打雷'},
  { name: '鲨鱼辣椒', occupation: '游泳'},
  { name: '蟑螂恶霸', occupation: '扫地'},
])
</script>
<style scoped>

</style>