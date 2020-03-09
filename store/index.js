export const state = () => ({
  user: {},
  messages: [],
  users: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
    state.messages = []
  },
  clearData(state) {
    state.user = {}
    state.messages = []
    state.users = []
  },
  SOCKET_newMessage(state, message) {
    state.messages.push(message)
  },
  SOCKET_updateUsers(state, users) {
    console.log('users: ', users);
    state.users = users
  }
}
