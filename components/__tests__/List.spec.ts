import { describe, expect, test, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { mountSuspended } from 'nuxt-vitest/utils'
import { setActivePinia, createPinia } from 'pinia'
import List from '../List.vue'
import Todo from '../Todo.vue'
import { useTodoStore } from '@/stores/todo'

describe('List', () => {
  // 設定pinia
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('點新增按鈕會新增todo到store的todoList', async () => {
    const store = useTodoStore()

    // List.vue 實例化, 給予假資料
    const wrapper = mount(List, {
      props: {
        listType: 'todo',
        listData: []
      }
    })

    // 抓到輸入框
    const input = wrapper.find('[data-test="input"]')

    // 給予輸入框預設值
    await input.setValue('test task')

    // 尋找畫面上的新增按鈕
    const button = wrapper.find('[data-test="add-btn"]')

    // 點新增按鈕
    button.trigger('click')

    // 預期store.todoList有一個
    expect(store.todoList.length).toBe(1)
  })

  test('勾選todoList, 會將todo移到完成清單', async () => {
    const store = useTodoStore()

    // List.vue 實例化, 給予假資料
    const wrapper = await mountSuspended(List, {
      props: {
        listType: 'todo',
        listData: ['123']
      },
      global: {
        components: {
          Todo
        }
      }
    })

    // 先檢查Todo組件是否存在
    expect(wrapper.findComponent(Todo).exists()).toBe(true)

    // console.log(wrapper)


    // const completeInput = wrapper.find('[data-test="complete-input"]')





    // await completeInput.setValue(true)

    // console.log(store.completedList)


  })
})
