const router = require("express").Router()
const {
    createPost,
    likePost,
} = require("../controllers/post")
const authentacion = require('../middlewares/authentacion')

router.post("/createPosts", authentacion, createPost)
router.put("/likePost/:id", authentacion, likePost)

module.exports = router