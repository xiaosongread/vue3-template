<template>
  <div>
    <!-- 用 :scope="item" 返回每一项 -->
    <slot v-for="item in list" :scope="item" />
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>