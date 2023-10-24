import { describe, expect, test, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import Todo from '../Todo.vue'
import { useTodoStore } from '@/stores/todo'

describe('Todo', () => {
  // 設定pinia
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('點delete icon會刪除該完成清單', () => {
    const store = useTodoStore()

    // 把TodoCard.vue 實例化, 給予假資料
    const wrapper = mount(Todo, {
      props: {
        todo: 'test task',
        type: 'completed',
      },

    })

    // 尋找畫面上的按鈕
    const button = wrapper.find('[data-test="delete-icon"]')

    // 往 store 塞假資料
    store.completedHandler('test task')

    // 預期目標元素有一個
    expect(store.completedList.length).toBe(1)

    // 點目標元素刪除按鈕
    button.trigger('click')

    // 目標元素為0個
    expect(store.completedList.length).toBe(0)

    expect(button.exists()).toBe(true)
  })
})
