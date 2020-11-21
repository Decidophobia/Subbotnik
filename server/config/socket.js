module.exports = function socket(io, app) {
  io.sockets.on("connection", (socket) => {
    console.log("Connection socket");
      socket.on("disconnect", (socket) => {
        console.log("disconnect socket");
      });
  });
};
