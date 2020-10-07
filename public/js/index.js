let socket = io();

socket.on('connect', () => {
    console.log("connected to server.");
})

socket.on('disconnect', () => {
    console.log("disconnected from server.");
})

socket.on('newMessage', message => {
    console.log("newMessage", message)
    const formattedTime = moment(message.createdAt).format('LT')
    let li = document.createElement('li')
    li.innerText = `${message.from} ${formattedTime}: ${message.text}`

    document.querySelector('body').appendChild(li)
})

socket.on('newLocationMessage', message => {
    console.log("newLocationMessage", message)
    const formattedTime = moment(message.createdAt).format('LT')
    let li = document.createElement('li')
    let a = document.createElement('a')
    li.innerText = `${message.from} ${formattedTime}: `
    a.setAttribute('target', '_blank')
    a.setAttribute('href', message.url)
    a.innerHTML = 'My current location'
    li.appendChild(a)

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

document.querySelector('#send-location').addEventListener('click', event => {
    if(!navigator.geolocation)
        return alert('Geolocation is not support by your browser.')

    navigator.geolocation.getCurrentPosition(position => {
        socket.emit('createLocationMessage', {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })
    }, () => {
        alert('Unable to fetch location.')
    })
})