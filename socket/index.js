const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
    }
})

let users = [];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};

io.on("connection", (socket) => {
    //when ceonnect
    console.log("a user connected.");

    //take userId and socketId from user
    socket.on("addUser", (userId) => {
        console.log(userId);
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    //when disconnect
    socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});