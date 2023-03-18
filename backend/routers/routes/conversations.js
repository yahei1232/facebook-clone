const express = require("express");
const { createNewConversation, getConversationOfUser } = require("../controllers/conversations")

const conversationRouter = express.Router();

conversationRouter.post("/", createNewConversation);
conversationRouter.get("/:userId", getConversationOfUser);

module.exports = conversationRouter;