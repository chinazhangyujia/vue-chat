const io = require('socket.io-client')
const socket = io.connect('http://localhost:5000')

socket.on('say', msg => {
  console.log(msg)
})

socket.emit('back', 'tester')
