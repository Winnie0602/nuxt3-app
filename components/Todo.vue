<template>
  <div class="flex items-center">
    <input
      v-if="type === 'incompleted'"
      type="checkbox"
      class="checkbox"
      @change="complete"
    />
    <div
      class="collapse mx-3 my-3 flex items-center justify-between bg-base-200"
    >
      <div class="collapse-title text-xl font-medium">{{ todo }}</div>
      <span
        class="material-symbols-outlined p-3"
        @click="deleteHandler(type, todo)"
      >
        delete
      </span>
    </div>
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
    default: 'incompleted' || 'completed',
  },
})

const complete = () => {
  completedHandler(todo)
}
</script>
