import { ref } from "vue"

class Bus {
  constructor() {
    // 收集订阅信息，调度中心
    this.evenList = {}, // 事件列表，这项是必须的
    // 下面都是自定义值
    this.msg = ref('这是一条总线的信息')
  }

  // 订阅
  $on(name, fn) {
    this.evenList[name] = this.evenList[name] || []
    this.evenList[name].push(fn)
    console.log(this.evenList)
  }

  // 发布
  $emit(name, data) {
    if (this.evenList[name]) {
      this.evenList[name].forEach(fn => {
        fn(data)
      });
    }
  }

  // 取消调用
  $off(name) {
    if (this.evenList[name]) {
      delete this.evenList[name]
    }
  }
}

export default new Bus()