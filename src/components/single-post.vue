<script setup>
import { computed } from 'vue'
let listItemProps = defineProps({
  listItem: Object
})
let desc = computed(() => {
  return listItemProps.listItem.desc.substring(0, 15) + '...'
})
</script>

<template>
  <div>
    <h3>{{ listItem.title }}</h3>
    <p>{{ desc }}</p>
  </div>
</template>
<style scoped>
*{
  text-align: left;
}
</style>