export default function createSocket(socket) {
  return store => {
    socket.on('say', msg => {
      store.commit('RECIEVE_MSG', msg)
      socket.emit('back', 'tester')
    })
    socket.on('sync users', users => {
      store.commit('SYNC_USERS', users)
      console.log('sync')
    })
  }
}
