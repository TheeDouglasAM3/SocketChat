let socket = io();

function scrollToBottom() {
    let messages = document.querySelector('#messages').lastElementChild
    messages.scrollIntoView()
}

function getParamsURLInAObject() {
    const searchQuery = window.location.search.substring(1)
    const paramsFormatted = decodeURI(searchQuery)
        .replace(/&/g, '","')
        .replace(/\+/g, ' ')
        .replace(/=/g,'":"')
    return JSON.parse(`{"${paramsFormatted}"}`)
}

socket.on('connect', () => {
    const params = getParamsURLInAObject()
    
    socket.emit('join', params, error => {
        if(error) {
            alert(error)
            window.location.href = '/'
        }else{
            console.log('Sem erros')
        }
    })
})

socket.on('disconnect', () => {
    console.log("disconnected from server.");
})

socket.on('updateUsersList', users => {
    let ol = document.createElement('ol')

    users.forEach(user => {
        let li = document.createElement('li')
        li.innerHTML = user
        ol.appendChild(li)
    })

    let usersList = document.querySelector('#users')
    usersList.innerHTML = ''
    usersList.appendChild(ol)
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
    document.querySelector('#messages').appendChild(div)
    
    scrollToBottom()
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
    document.querySelector('#messages').appendChild(div)

    scrollToBottom()
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
        text: message
    }, () => {

    })

    document.querySelector('input[name="message"]').value = ''
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