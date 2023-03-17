const router = require("express").Router()
const {
    requster,
    getMyAndFriendPosts,
    getUser,
    getSuggrest,
    updateUser,
} = require("../controllers/user")
const authentacion = require('../middlewares/authentacion')

router.post("/requster", requster)
router.get("/getMyAndFriendPosts", authentacion, getMyAndFriendPosts)
router.get("/getUser/:id", getUser)
router.get("/getSuggrest", authentacion, getSuggrest)
router.put("/updateUser", authentacion, updateUser)

module.exports = router

