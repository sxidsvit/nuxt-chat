var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('IO connected');
  socket.on('createMessage', data => {
    setTimeout(() => {
      socket.emit('newMessage', { text: data.text + " SERVER" })
    }, 500);
  })
  socket.emit('newMessage', {
    text: 'WHAT - server said'
  })
})


module.exports = {
  app, server
}
