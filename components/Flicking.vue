<script setup lang="ts">
import Flicking from '@egjs/vue3-flicking'
import { type FlickingOptions } from '@egjs/flicking'
import '@egjs/vue3-flicking/dist/flicking.css'
import { Arrow } from '@egjs/flicking-plugins'
import '@egjs/flicking-plugins/dist/arrow.css'

const options: Partial<FlickingOptions> = {
  align: 'prev', // 對齊最左邊第一個
  circular: false, // loop
  bound: true, // 第一個＆最後一個滑動時淺後不要有空白
  // panelsPerView: 3, // 畫面顯示幾個
  defaultIndex: 0,
  // resizeOnContentsReady: true,
}

const plugins = [new Arrow({ moveByViewportSize: true })]
</script>

<template>
  <!-- 照片 -->

  <Flicking :options="options" :plugins="plugins" class="flicking-viewport">
    <div class="panel" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
      <div class="h-[300px] w-[500px] border border-white bg-purple-300">
        {{ item }}
      </div>
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev is-circle">123</span>
      <span class="flicking-arrow-next is-circle"></span>
    </template>
  </Flicking>
  <!-- 文字按鈕 -->
  <div class="mt-10 w-[500px] border">
    <Flicking :options="options">
      <button class="btn btn-neutral btn-active mx-1">Neutral</button>
      <button class="btn btn-primary btn-active mx-1">Primary</button>
      <button class="btn btn-secondary btn-active mx-1">Secondary</button>
      <button class="btn btn-accent btn-active mx-1">Accent</button>
      <button class="btn btn-ghost btn-active mx-1">Ghost</button>
      <button class="btn btn-neutral btn-active mx-1">Neutral</button>
      <button class="btn btn-primary btn-active mx-1">Primary</button>
      <button class="btn btn-secondary btn-active mx-1">Secondary</button>
      <button class="btn btn-accent btn-active mx-1">Accent</button>
      <button class="btn btn-ghost btn-active mx-1">Ghost</button>
    </Flicking>
  </div>
</template>
