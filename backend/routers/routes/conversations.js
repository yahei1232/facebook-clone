const express = require("express");
const { createNewConversation } = require("../controllers/conversations")

const conversationRouter = express.Router();

conversationRouter.post("/", createNewConversation);

module.exports = conversationRouter;