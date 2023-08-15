import { getListData } from "@/api/login";
export default {
  namespaced: true,
  state: {
    sidebar: '123',
    listData: []
  },
 
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar = '2222'
    },
    SET_LIST_DATA: (state, listData) => {
      console.log('listdata-state:', listData)
      state.listData = listData
    }
  },
 
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    async getListDataAction({ commit, state }, params) {
      await getListData()
        .then((res) => {
          // 处理返回结果，例如转换成对应的符合业务需求的数据结构
          console.log("接口数据:", res)
          commit("SET_LIST_DATA", res);
        })
        .catch((err) => {
          // 处理异常，即异常状态下数据应该是什么样子
        })
    }
  }
}
