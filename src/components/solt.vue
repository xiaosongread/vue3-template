<script setup>
</script>

<template>
  <div>
    <!-- 默认插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <slot name="monkey"></slot>
    <div>slot--按钮</div>
  </div>
</template>
