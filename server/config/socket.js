module.exports = function socket(io, app) {
  io.sockets.on("connection", (socket) => {
    console.log("Connection socket");

    socket.on('NEW_MESSAGE', (message)=>{
      socket.broadcast.emit('NEW_MESSAGE:CLIENT', message)
    })
    //Disconnect
    socket.on("disconnect", (socket) => {
      console.log("disconnect socket");
    });
  });
};
