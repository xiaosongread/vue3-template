<script setup>
import SinglePost from './single-post.vue'
defineProps({
  postList: Array
})
</script>

<template>
  <div>
    <ul>
      <li v-for="item in postList" :key="item.id">
        <SinglePost :listItem = "item"/>
      </li>
    </ul>
  </div>
</template>
