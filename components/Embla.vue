<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaNode] = emblaCarouselVue({ dragFree: true, align: 'end' })
</script>

<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container">
      <div
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
        :key="item"
        class="embla__slide h-[300px] w-[500px] border border-white bg-purple-300"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 500px; /* Each slide covers 80% of the viewport */
}
.embla__slide {
  /* flex: 0 0 100%;
  min-width: 0; */
}
</style>
