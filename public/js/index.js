let socket = io();

socket.on('connect', () => {
    console.log("connected to server.");
})

socket.on('disconnect', () => {
    console.log("disconnected from server.");
})

socket.on('newMessage', message => {
    console.log("newMessage", message)
})

socket.emit('createMessage', {
    from: 'John',
    text: 'Hey'
}, (message) => {
    console.log(`Got it! ${message}`)
});