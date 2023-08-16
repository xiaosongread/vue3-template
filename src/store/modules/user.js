import { getMenuListData } from "@/api/user";
export default {
  state: {
    token: '123',
    asyncMenuList: []
  },
 
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_MENU_LIST: (state, asyncMenuList) => {
      console.log("mutations:", asyncMenuList)
      state.asyncMenuList = asyncMenuList
    }
  },
 
  actions: {
    async getMenuList({ commit, state }, params) {
      await getMenuListData()
        .then((res) => {
          // 处理返回结果，例如转换成对应的符合业务需求的数据结构
          console.log("动态路由接口返回:", res)
          commit("SET_MENU_LIST", res);
        })
        .catch((err) => {
          // 处理异常，即异常状态下数据应该是什么样子
        })
    }
  }
}