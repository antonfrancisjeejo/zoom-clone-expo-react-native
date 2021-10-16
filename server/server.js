const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let users = [];

app.get("/", (req, res) => {
  res.send("Its working");
});

const addUser = (userName, roomId) => {
  users.push({
    userName,
    roomId,
  });
};

const getRoomUsers = (roomId) => {
  return users.filter((user) => user.roomId === roomId);
};

const userLeave = (userName) => {
  users = users.filter((user) => user.userName !== userName);
};

io.on("connection", (socket) => {
  console.log("I am connected");
  socket.on("join-room", ({ roomId, userName }) => {
    console.log("User joined room");
    console.log(roomId);
    console.log(userName);
    addUser(userName, roomId);
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userName);

    io.to(roomId).emit("all-users", getRoomUsers(roomId));

    socket.on("disconnect", () => {
      console.log("User disconnected");
      socket.leave(roomId);
      userLeave(userName);
      io.to(roomId).emit("all-users", getRoomUsers(roomId));
    });
  });
});

server.listen(5000, () => {
  console.log("Server is up and running");
});
