const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("A new user just connected");

    //emit: Vai executar assim que conectar
    socket.emit('newMessage', {
        from: "Admin",
        text: "Welcome to SocketChat",
        createdAt: new Date().getTime()
    })

    //Broadcast: Todo mundo recebe a mensagem, menos o proprio usuario
    socket.broadcast.emit('newMessage', {
        from: "Admin",
        text: "New user joined!",
        createdAt: new Date().getTime()
    })

    socket.on('createMessage', (message) => {
        console.log("Create message", message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    })

    socket.on('disconnect', () => {
        console.log("User was disconnected");
    });
});



server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
