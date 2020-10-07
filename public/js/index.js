let socket = io();

socket.on('connect', () => {
    console.log("connected to server.");
})

socket.on('disconnect', () => {
    console.log("disconnected from server.");
})

socket.on('newMessage', message => {
    console.log("newMessage", message)
    let li = document.createElement('li')
    li.innerText = `${message.from}: ${message.text}`

    document.querySelector('body').appendChild(li)
})

// socket.emit('createMessage', {
//     from: 'John',
//     text: 'Hey'
// }, (message) => {
//     console.log(`Got it! ${message}`)
// });

document.querySelector('#submit-btn').addEventListener('click', event => {
    event.preventDefault()
    const message = document.querySelector('input[name="message"]').value 

    socket.emit('createMessage', {
        from: 'User',
        text: message
    }, () => {

    })
})