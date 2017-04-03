const express = require('express')
const app = express()

const server = app.listen(5000, () => console.log('app listen at 5000'))
const io = require('socket.io')(server)

io.on('connection', socket => {
  socket.emit('say', 'hello')
  socket.on('back', msg => {
    console.log(msg)
  })
})
