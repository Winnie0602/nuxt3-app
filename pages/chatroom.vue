<script setup lang="ts">
// 設定進入此頁面需要先登入
definePageMeta({ middleware: 'auth' })
</script>

<template>
  <div>
    <p class="my-5 text-5xl font-bold">聊天室</p>
  </div>
</template>
