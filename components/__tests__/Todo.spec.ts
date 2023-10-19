import { describe, expect, test, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import Todo from '../Todo.vue'
import { useTodoStore } from '@/stores/todo'

describe('Todo', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })
  // 把TodoCard.vue 實例化, 給予假資料
  // const wrapper = mount(Todo)
  const wrapper = mount(Todo, {
    props: {
      todo: 'test',
      type: 'completed',
    },
  })

  const store = useTodoStore()

  test('點delete icon會刪除該完成清單', () => {
    // 尋找按鈕
    const button = wrapper.find('[data-test="delete-icon"]')

    // 尋找卡片的文字
    const text = wrapper.find('[data-test="text"]')

    // 預期目標元素有一個
    expect(text.exists()).toBe(true)

    // // 點目標元素刪除按鈕
    button.trigger('click')

    // 預期store的刪除function被call一次
    expect(store.deleteHandler).toHaveBeenCalledTimes(1)

    // // 目標元素為0個
    // expect(store.completedList.length).toBe(0)
  })
})
