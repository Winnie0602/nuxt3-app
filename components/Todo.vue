<template>
  <div class="my-2 flex w-full items-center rounded-lg bg-base-200 px-10">
    <input
      v-if="type === 'incompleted'"
      type="checkbox"
      class="checkbox"
      @change="complete"
    />

    <div class="collapse-title text-xl font-medium" test-data="text">
      {{ todo }}
    </div>
    <span
      v-if="type !== 'todo'"
      class="material-symbols-outlined p-3"
      test-data="delete-icon"
      @click="deleteHandler(type, todo)"
    >
      delete
    </span>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()

const { completedHandler, deleteHandler } = store

const { todo } = defineProps({
  todo: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'todo' || 'completed',
  },
})

const complete = () => {
  completedHandler(todo)
}
</script>
