<script setup lang="ts">
const reset = (error: any) => {
  error.value = null
}
</script>

<template>
  <NuxtErrorBoundary>
    <template #error="{ error }">
      <p>An error occurred: {{ error.value }}</p>
      <button class="btn btn-success mt-10" @click="reset(error)">Reset</button>
    </template>

    <slot />
  </NuxtErrorBoundary>
</template>
