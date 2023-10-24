import { describe, expect, test, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import List from '@/components/List.vue'
import Todo from '@/components/Todo.vue'
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
    const wrapper = mount(List, {
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

    // 尋找完成todo的checkbox
    const completeInput = wrapper.find('[data-test="complete-input"]')

    // 將todo checkbox打勾
    await completeInput.setValue(true)

    // 預期todo移到store完成清單
    expect(store.completedList).toStrictEqual(['123'])

  })

  test('按todo清單垃圾桶icon會從store移除該任務', async () => {
    const store = useTodoStore()

    // List.vue 實例化, 給予假資料
    const wrapper = mount(List, {
      props: {
        listType: 'todo',
        listData: ['12345']
      },
      global: {
        components: {
          Todo
        }
      }
    })

    // 先檢查Todo組件是否存在
    expect(wrapper.findComponent(Todo).exists()).toBe(true)

    // 新增一筆資料到store的todolist
    store.addHandler('12345')

    // 確認store的todolist有剛剛新增的資料
    expect(store.todoList).toStrictEqual(['12345'])

    // 找到垃圾桶button按鈕
    const deleteBtn = wrapper.find('[data-test="delete-icon"]')

    // 預期deleteBtn存在
    expect(deleteBtn.exists()).toBe(true)

    // 點刪除按鈕
    deleteBtn.trigger('click')

    // 預期store的todolist沒有資料
    expect(store.todoList.length).toBe(0)
  })

  test('按completed清單垃圾桶icon會從store移除該任務', async () => {
    const store = useTodoStore()

    // List.vue 實例化, 給予假資料
    const wrapper = mount(List, {
      props: {
        listType: 'completed',
        listData: ['12345']
      },
      global: {
        components: {
          Todo
        }
      }
    })

    // 先檢查Todo組件是否存在
    expect(wrapper.findComponent(Todo).exists()).toBe(true)

    // 新增一筆資料到store的completedList
    store.completedHandler('12345')

    // 確認store的completedList有剛剛新增的資料
    expect(store.completedList).toStrictEqual(['12345'])

    // 找到垃圾桶button按鈕
    const deleteBtn = wrapper.find('[data-test="delete-icon"]')

    // 預期deleteBtn存在
    expect(deleteBtn.exists()).toBe(true)

    // 點刪除按鈕
    deleteBtn.trigger('click')

    // 預期store的completedList沒有資料
    expect(store.completedList.length).toBe(0)
  })
})
