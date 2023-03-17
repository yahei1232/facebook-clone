const express = require("express");
const cors = require('cors');

const usertRouter = require("./routers/routes/user");
const loginRouter = require("./routers/routes/login");
const postRouter = require("./routers/routes/post")
const commentRouter = require("./routers/routes/comment");

require("./db/db")

const app = express();
app.use(cors())
app.use(express.json());

const port = 5000;

app.use(loginRouter);
app.use("/user", usertRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
