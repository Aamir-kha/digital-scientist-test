const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
app.use(bodyParser.json());
app.use(cors());

const seats = [
  {
    id: 1,
    status: "Available"
  },
  {
    id: 2,
    status: "Available"
  },
  {
    id: 3,
    status: "Selected"
  },
  {
    id: 4,
    status: "Available"
  },
  {
    id: 5,
    status: "Selected"
  },
  {
    id: 6,
    status: "Available"
  },
  {
    id: 7,
    status: "Selected"
  },
  {
    id: 8,
    status: "Selected"
  },
  {
    id: 9,
    status: "Available"
  },
  {
    id: 10,
    status: "Available"
  },
  {
    id: 11,
    status: "Available"
  },
  {
    id: 12,
    status: "Available"
  },
  {
    id: 13,
    status: "Available"
  },
  {
    id: 14,
    status: "Selected"
  },
  {
    id: 15,
    status: "Available"
  },
  {
    id: 16,
    status: "Available"
  },
  {
    id: 17,
    status: "Selected"
  },
  {
    id: 18,
    status: "Available"
  },
  {
    id: 19,
    status: "Selected"
  },
  {
    id: 20,
    status: "Selected"
  },
  {
    id: 21,
    status: "Available"
  },
  {
    id: 22,
    status: "Available"
  },
  {
    id: 23,
    status: "Selected"
  },
  {
    id: 24,
    status: "Available"
  }
];

//get All Seats
app.get("/seats", (req, res) => {
  res.json({
    seats
  });
});

io.on("connection", socket => {
  console.log("Websocket Server Listening");
  socket.emit("connect", {
    message: "Welcome"
  });
  socket.on("seat-selected", data => {
    let index = seats.findIndex(seat => seat.id == data.seatId);
    seats[index].status = "Selected";
    io.sockets.emit("seats-updated", { seatId: seats[index].id });
  });
});
server.listen(4000);
