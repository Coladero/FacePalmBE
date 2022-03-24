const app = require("./app");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;

const myServer = app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});


const { Server } = require("socket.io")
const socketioJwt = require("socketio-jwt")
const Message = require("./models/Message.model")

//CORS
//*Make new server for listen the chat and give the Cors, listen myServer and newServer
const serverIo = new Server(myServer, {
  cors:{
    origin: process.env.ORIGIN
  }
})

//*Auth Token for the new server socket
serverIo.use(socketioJwt.authorize({
  secret:process.env.SECRET_TOKEN,
  handshake: true
}))

//* Now start to listen the server io.
serverIo.on("connection",(socket)=>{
  const user = socket.decoded_token
  // console.log("connecting user" + " " + user.name)

  socket.on("join_chat", (chatId)=>{
    socket.join(chatId)
    // console.log(`user: ${user.name} enter room ${chatId}`)
  })

  socket.on("send_message", async (messageObj) =>{
    const fullMessage = {...messageObj, sender: user}
    await Message.create(fullMessage)

    socket.to(fullMessage.chatId).emit("receive_message", fullMessage)

    socket.emit("receive_message", fullMessage)
  })
})