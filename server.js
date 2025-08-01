require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Models
const User = require("./src/models/User");
const Post = require("./src/models/Post");
const FriendRequest = require("./src/models/FriendRequest");
const Room = require("./src/models/Room");
const Message = require("./src/models/Message");
const Course = require("./src/models/course");

// Routes
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/posts", require("./src/routes/posts"));
app.use("/api/users", require("./src/routes/users"));
app.use("/api/friends", require("./src/routes/friends"));
app.use("/api/rooms", require("./src/routes/rooms"));
app.use("/api/courses", require("./src/routes/courses"));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));