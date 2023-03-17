const router = require("express").Router()
const {
    requster,
    getMyAndFriendPosts,
    getUser,
} = require("../controllers/user")
const authentacion = require('../middlewares/authentacion')

router.post("/requster", requster)
router.get("/getMyAndFriendPosts", authentacion, getMyAndFriendPosts)
router.get("/getUser/:id", getUser)

module.exports = router

