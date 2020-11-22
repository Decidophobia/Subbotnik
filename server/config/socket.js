module.exports = function socket(io, app) {
  io.sockets.on("connection", (socket) => {
    console.log("Connection socket");

    socket.on("CONNECT_ROOM", ({ room }) => {
      socket.join(room);
      console.log(`Подключен к ${room}`);
    });

    socket.on("NEW_MESSAGE", (message, { room }) => {
      socket.to(room).broadcast.emit("NEW_MESSAGE:CLIENT", message);
    });
    //Disconnect
    socket.on("disconnect", (socket) => {
      console.log("disconnect socket");
    });
  });
};
