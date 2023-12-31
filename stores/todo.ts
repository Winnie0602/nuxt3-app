import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todoList = ref<string[]>([])
  const completedList = ref<string[]>([])
  // const completedList = ref(['123'])

  const addHandler = (todo: string) => {
    todoList.value.push(todo)
  }

  const completedHandler = (todo: string) => {
    todoList.value.splice(todoList.value.indexOf(todo), 1)
    completedList.value.push(todo)
  }

  const deleteHandler = (type: string, todo: string) => {
    let targetArr = null

    targetArr = type === 'todo' ? todoList.value : completedList.value

    targetArr.splice(targetArr.indexOf(todo), 1)
  }

  return {
    todoList,
    completedList,
    addHandler,
    completedHandler,
    deleteHandler,
  }
})
