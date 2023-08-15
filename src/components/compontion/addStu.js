import { ref } from 'vue'

function addStuFn (stuList) {
  const newName = ref('')
  const addStu = () => {
    // 添加学生
    stuList.list.push({
      id: stuList.list.length + 1,
      name: newName.value
    })
    newName.value = ''
  }
  return {
    newName, addStu
  }
}

export default addStuFn
