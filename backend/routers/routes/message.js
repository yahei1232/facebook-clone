const express = require("express");
const { createNewMessage } = require("../controllers/message")

const messageRouter = express.Router();

messageRouter.post("/", createNewMessage);  // http://localhost:5000/

module.exports = messageRouter;