<script setup lang="ts">
const viewArr = ref(['flicking', 'embla'])
const view = ref('embla')
</script>

<template>
  <div class="mt-5">
    <button
      class="btn btn-primary btn-active"
      @click="view = viewArr.filter((e) => e !== view)[0]"
    >
      切換 {{ viewArr.filter((e) => e !== view)[0] }}
    </button>
    <div class="mt-5">
      <Flicking v-if="view === 'flicking'" />
      <Embla v-else />
    </div>
  </div>
</template>
