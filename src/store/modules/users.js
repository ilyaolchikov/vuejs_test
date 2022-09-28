export default {
  namespaced: true,
  state: {
    list: Array.from(Array(10).keys()).map(i => {
      return {
        'id': i, 
        'nickname': 'user_' + i
      }
    })
  },
  actions: {
  },
  mutations: {
    delete(state, userId) {
      state.list = state.list.filter(user => {
        return user.id !== userId
      })
    },
  },
  getters: {
    list: state => state.list,
  },
}
