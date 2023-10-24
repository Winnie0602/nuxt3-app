<template>
  <!-- 代辦/完成 清單 共用組件 -->
  <div>
    <hr class="my-5" />
    <div v-if="listType === 'todo'" class="flex w-full justify-center">
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

    <p class="mt-20 text-5xl font-bold">{{ listType }}</p>
    <hr class="my-5" />
    <div class="flex w-full flex-col justify-center">
      <p v-if="listData.length === 0" class="mt-10 text-xl font-bold">
        目前沒有內容~
      </p>
      <div v-else>
        <Todo
          v-for="todo in listData"
          :key="todo"
          :todo="todo"
          :type="listType"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()

const { addHandler } = store

defineProps<{
  listType: string
  listData: string[]
}>()

const inputTodo = ref<string>('')
const add = () => {
  addHandler(inputTodo.value)
  inputTodo.value = ''
}

// const headers = useRequestHeaders(['cookie']) as HeadersInit
// const data: any = await useFetch('/api/me', { headers })
// const { data } = await useAuth()
</script>
