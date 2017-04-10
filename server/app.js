const express = require('express')
const app = express()

const server = app.listen(5000, () => console.log('app listen at 5000'))
const io = require('socket.io')(server)

const users = []

io.on('connection', socket => {
  let addUser = false
  console.log(socket.id)
  socket.emit('say', 'hello')
  socket.on('back', msg => {
    console.log(msg)
  })
  socket.on('add user', name => {
    if (addUser) {
      return
    }
    users.push({
      id: socket.id,
      name: name
    })
    addUser = true
    console.log(users)
    socket.broadcast.emit('sync users', users)
    socket.emit('sync users', users)
  })
  socket.on('disconnect', () => {
    const index = users.findIndex(user => user.id === socket.id)
    if (index === -1) {
      return
    }
    console.log(users[index].name, 'left')
    users.splice(index, 1)
    socket.broadcast.emit('sync users', users)
    socket.emit('sync users', users)
  })
})
