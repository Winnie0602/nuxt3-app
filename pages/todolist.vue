<template>
  <div class="mx-8 w-full md:mx-0 md:max-w-[675px]">
    <div class="flex w-full justify-center">
      <input
        v-model="inputTodo"
        type="text"
        placeholder="請輸入代辦事項"
        data-test="input"
        class="max-w-s input input-bordered w-full"
      />
      <button
        class="btn btn-neutral btn-active mx-3"
        data-test="add-btn"
        @click="add"
      >
        新增
      </button>
    </div>

    <!-- 未完成清單 -->
    <p class="mt-20 text-5xl font-bold">ADD</p>
    <GlobalErrorBoundary>
      <List list-type="todo" :list-data="todoList" />
    </GlobalErrorBoundary>

    <!-- 完成清單 -->
    <p class="mt-20 text-5xl font-bold">LIST</p>
    <GlobalErrorBoundary>
      <List list-type="completed" :list-data="completedList" />
    </GlobalErrorBoundary>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()

const { completedList } = storeToRefs(store)

const { todoList } = storeToRefs(store)

const inputTodo = ref<string>('')

const { addHandler } = store

const add = () => {
  addHandler(inputTodo.value)
  inputTodo.value = ''
}
// const headers = useRequestHeaders(['cookie']) as HeadersInit
// const data: any = await useFetch('/api/me', { headers })
// const { data } = await useAuth()
</script>
