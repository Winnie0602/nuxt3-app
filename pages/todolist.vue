<template>
  <List list-type="todo" :list-data="todoList" />

  <List list-type="completed" :list-data="completedList" />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()

const { completedList } = storeToRefs(store)

const { todoList } = store

// const headers = useRequestHeaders(['cookie']) as HeadersInit
// const data: any = await useFetch('/api/me', { headers })
// const { data } = await useAuth()
</script>
