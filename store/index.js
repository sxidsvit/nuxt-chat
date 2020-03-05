export const state = () => {

}

export const actions = {
  SOCKET_newMessage(ctx, data) {
    console.log('store/index.js - Messege from server received: ', data);
  }
}
