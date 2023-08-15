import getters from './getters'
import { createStore } from 'vuex'
 
const modulesFiles = import.meta.glob('./modules/*.js',{ eager: true }); // 异步方式
 
let modules = {}
for (const [key, value] of Object.entries(modulesFiles)) {
  var moduleName = key.replace(/^\.\/(.*)\.\w+$/, '$1');
  const name = moduleName.split('/')[1]
  modules[name] = value.default
}
 
const store = createStore({
  modules,
  getters
})
 
export default store