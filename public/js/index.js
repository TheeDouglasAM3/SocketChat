let socket = io();

socket.on('connect', () => {
    console.log("connected to server.");

    // socket.emit("createMessage", {
    //     from: "Raimundo",
    //     text: "What's up?"
    // })
})

socket.on('disconnect', () => {
    console.log("disconnected from server.");
})

socket.on('newMessage', message => {
    console.log("newMessage", message)
})