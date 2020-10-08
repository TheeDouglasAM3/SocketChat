let socket = io();

socket.on('connect', () => {
    console.log("connected to server.");
})

socket.on('disconnect', () => {
    console.log("disconnected from server.");
})

socket.on('newMessage', message => {
    const formattedTime = moment(message.createdAt).format('LT')
    const template = document.querySelector('#message-template').innerHTML;
    const html = Mustache.render(template, {
        from: message.from,
        text: message.text,
        createdAt: formattedTime
    })
    let div = document.createElement('div')
    div.innerHTML = html
    document.querySelector('.display-messages-area').appendChild(div)
})

socket.on('newLocationMessage', message => {
    const formattedTime = moment(message.createdAt).format('LT')
    const template = document.querySelector('#location-message-template').innerHTML;
    const html = Mustache.render(template, {
        from: message.from,
        url: message.url,
        createdAt: formattedTime
    })
    let div = document.createElement('div')
    div.innerHTML = html
    document.querySelector('.display-messages-area').appendChild(div)
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