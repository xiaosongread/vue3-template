const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  listData: state => state.app.listData
}
 
export default getters