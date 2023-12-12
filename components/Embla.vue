<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaNode, emblaApi] = emblaCarouselVue({
  dragFree: true,
  align: 'end',
  // active: false,
})

const next = ref()
const prev = ref()

// 上一頁
const scrollPrev = () => {
  emblaApi.value?.scrollPrev()

  if (!emblaApi.value?.canScrollPrev()) {
    prev.value.style.display = 'none'
  } else {
    next.value.style.display = 'block'
  }
}

// 下一頁
const scrollNext = () => {
  emblaApi.value?.scrollNext()
  console.log(emblaApi.value?.scrollProgress())
  if (!emblaApi.value?.canScrollNext()) {
    next.value.style.display = 'none'
  } else {
    prev.value.style.display = 'block'
  }
}
</script>

<template>
  <div
    class="embla relative flex w-full items-center md:w-[700px] xl:w-[1280px]"
  >
    <button
      ref="prev"
      class="embla__prev btn btn-info btn-outline absolute -left-[30px] z-50 hidden"
      @click="scrollPrev"
    >
      Prev
    </button>
    <div
      class="embla__viewport w-full max-w-[95vw] md:w-[700px] xl:w-[1280px]"
      ref="emblaNode"
    >
      <div class="embla__container">
        <div
          v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]"
          :key="item"
          class="embla__slide mr-6 h-[180px] flex-[0_0_150px] bg-purple-300 lg:mr-8 xl:flex-[0_0_155px]"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <button
      ref="next"
      class="embla__next btn btn-info btn-outline absolute -right-[30px] hidden sm:block"
      @click="scrollNext"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
.embla__viewport {
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
