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
        class="embla__slide h-[300px] w-[500px] flex-[0_0_100%] border border-white bg-purple-300 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
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
  display: flex;
}
.embla__slide {
  /* flex: 0 0 100%; */
  min-width: 0;
}
</style>
