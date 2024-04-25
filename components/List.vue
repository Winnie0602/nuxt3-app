<template>
  <!-- 代辦/完成 清單 共用組件 -->
  <div class="">
    <hr class="my-5" />
    <div class="flex w-full flex-col justify-center">
      <p v-if="listData.length === 0" class="text-xl font-bold">
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

      <button
        class="btn btn-error btn-outline mt-10 w-[200px]"
        @click="createErr"
      >
        make an error
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Todo from '@/components/Todo.vue'

defineProps<{
  listType: string
  listData: string[]
}>()

const createErr = () => {
  throw createError('發生錯誤！')
}

// const headers = useRequestHeaders(['cookie']) as HeadersInit
// const data: any = await useFetch('/api/me', { headers })
// const { data } = await useAuth()
</script>
