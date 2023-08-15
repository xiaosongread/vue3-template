import { reactive } from 'vue'

function stuListFn () {
  const stuList = reactive({
    list: [
      { id: 1, name: '张三' },
      { id: 2, name: '李四' },
      { id: 3, name: '王五' }
    ]
  })
  return {
    stuList
  }
}

export default stuListFn
