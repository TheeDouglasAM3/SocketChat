const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require("./utils/message");
const {isRealString} = require('./utils/isRealString');
const {Users} = require('./utils/users')

const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
let users = new Users()

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("A new user just connected");

    socket.on('join', (params, callback) => {
        if(!isRealString(params.name) || !isRealString(params.room))
            return callback('Name and room are required!')

        socket.join(params.room)
        users.remove(socket.id)
        users.store(socket.id, params.name, params.room)

        //Atualiza os usuarios de uma sala especifica
        io.to(params.room).emit('updateUsersList', users.getUsernamesFromARoom(params.room))

        //emit: Vai executar assim que conectar
        socket.emit('newMessage', generateMessage('Admin', 'Welcome to SocketChat'))

        //Broadcast: Todo mundo recebe a mensagem, menos o proprio usuario
        socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined!'))

        callback()
    })

    socket.on('createMessage', (message, callback) => {
        const user = users.getUser(socket.id)

        if(user && isRealString(message.text)){
            //Envia mensagem para uma sala em especifica
            io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
        }

        callback('This is the server!');
    })

    socket.on('createLocationMessage', coords => {
        const user = users.getUser(socket.id)

        if(user){
            io.to(user.room).emit(
                'newLocationMessage', 
                generateLocationMessage(user.name, coords.lat, coords.lng)
            )
        }
    })

    socket.on('disconnect', () => {
        const user = users.remove(socket.id)

        if(user){
            io.to(user.room).emit('updateUsersList', users.getUsernamesFromARoom(user.room))
            io.to(user.room).emit('newMessage', generateMessage('Admin', `${user.name} has left ${user.room} chat room.`))
        }
    });
});



server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
