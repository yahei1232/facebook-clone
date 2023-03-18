const express = require("express");
const { createNewMessage, getMessage } = require("../controllers/message")

const messageRouter = express.Router();

messageRouter.post("/", createNewMessage);  // http://localhost:5000/
messageRouter.get("/:conversationId", getMessage);  // http://localhost:5000/:conversationId

module.exports = messageRouter;