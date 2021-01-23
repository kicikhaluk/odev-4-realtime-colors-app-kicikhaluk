const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get('/', (req, res, next) => {
  res.end("<h1>Hello World</h1>");
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on("new-bg", (bg) => {
    socket.broadcast.emit("receive-bg", bg);
  });
  socket.on("disconnect", () => console.log("a user disconnected"));
});



http.listen(4000, () => {
  console.log('listening on *:3000');
});