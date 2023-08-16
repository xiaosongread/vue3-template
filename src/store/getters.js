const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  listData: state => state.app.listData,
  asyncMenuList: state => state.user.asyncMenuList,
}
 
export default getters