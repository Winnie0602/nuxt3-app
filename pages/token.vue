<script setup lang="ts">
const { data } = await useFetch('/api/token', {
  headers: useRequestHeaders(['authorization']),
})
</script>

<template>
  <pre>{{ data || 'u havent sign in' }}</pre>
</template>
