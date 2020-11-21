module.exports = function socket(io, app) {
  io.sockets.on("connection", (socket) => {
    console.log("Connection socket");
  });
};
