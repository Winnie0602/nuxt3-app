<template>
  <div>
    <!-- 新增todo -->
    <p class="my-5 text-5xl font-bold">Add</p>
    <hr class="my-5" />
    <input
      v-model="inputTodo"
      type="text"
      placeholder="請輸入代辦事項"
      class="input input-bordered w-full max-w-xs"
    />
    <button class="btn btn-neutral btn-active mx-3" @click="add">新增</button>

    <!-- 代辦清單 -->
    <p class="mt-20 text-5xl font-bold">To Do</p>
    <hr class="my-5" />
    <p v-if="todoList.length === 0" class="mt-10 text-xl font-bold">
      目前沒有內容~
    </p>
    <Todo
      v-for="todo in todoList"
      v-else
      :key="todo"
      :todo="todo"
      type="incompleted"
    />

    <!-- 完成清單 -->
    <p class="mt-20 text-5xl font-bold">Completed</p>
    <hr class="my-5" />
    <p v-if="completedList.length === 0" class="mt-10 text-xl font-bold">
      目前沒有內容~
    </p>
    <Todo
      v-for="todo in completedList"
      v-else
      :key="todo"
      :todo="todo"
      type="completed"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()

const { completedList } = storeToRefs(store)

const { todoList, addHandler } = store

const inputTodo = ref<string>('')
const add = () => {
  addHandler(inputTodo.value)
  inputTodo.value = ''
}

console.log(todoList)
</script>
