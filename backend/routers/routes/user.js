const router = require("express").Router()
const {
    requster,
    getMyAndFriendPosts,
} = require("../controllers/user")
const authentacion = require('../middlewares/authentacion')

router.post("/requster", requster)
router.get("/getMyAndFriendPosts", authentacion, getMyAndFriendPosts)

module.exports = router

