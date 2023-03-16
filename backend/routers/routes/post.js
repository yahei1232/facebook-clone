const router = require("express").Router()
const { createPost } = require("../controllers/post")
const authentacion = require('../middlewares/authentacion')

router.post("/createPosts", authentacion, createPost)  //http://localhost:5000/post/createPosts

module.exports = router