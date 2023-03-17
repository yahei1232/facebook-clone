const express = require("express");

const { createNewComment } = require("../controllers/comment")
const authentacion = require('../middlewares/authentacion')

const commentRouter = express.Router();

commentRouter.post("/:id", authentacion, createNewComment);  // http://localhost:5000/id

module.exports = commentRouter;
