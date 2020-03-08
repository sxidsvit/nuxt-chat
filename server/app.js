var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const m = (name, text, id) => ({ name, text, id })

io.on('connection', socket => {

  socket.on('userJoined', (data, cb) => {
    if (!data.name || !data.room) {
      return cb('Данные некорректны')
    }
    socket.join(data.room)
    cb({ userID: socket.id })
    socket.emit('newMessage', m('admin', `Добро пожаловать ${data.name}`))
    socket.emit('newMessage', m('tester', `Добро пожаловать `))
    socket.broadcast
      .to(data.room)
      .emit('newMessage', m('admin', `Пользователь ${data.name} зашел`))
  })

  socket.on('createMessage', data => {
    setTimeout(() => {
      socket.emit('newMessage', { text: data.text + " SERVER", name: data.id })
    }, 500);
  })

  socket.emit('newMessage', {
    text: 'WHAT - server said'
  })

})


module.exports = {
  app, server
}
