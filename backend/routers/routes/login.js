const express = require("express");
const { login } = require("../controllers/login");

const authenticationRouter = express.Router();

authenticationRouter.post("/login", login);

module.exports = authenticationRouter;