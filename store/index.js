export const state = () => ({
  user: {},
  messages: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
    state.messages = []
  },
  clearData(state) {
    state.user = {}
    state.messages = []
  },
  SOCKET_newMessage(state, message) {
    state.messages.push(message)
  }
}

// export const actions = {
//   SOCKET_newMessage(ctx, data) {
//     console.log('store/index.js - Messege from server received: ', data);
//   }
// }
