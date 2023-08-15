<script setup>
import { ref, onUpdated } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

function add() {
  count.value++
  console.log(this)
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="add">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
