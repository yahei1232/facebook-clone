const router = require("express").Router()
const {
    requster,
    getMyAndFriendPosts,
    getUser,
    getSuggrest,
    updateUser,
    addFriend,
    removeFriend,
    acceptFriend,
    cansleFriend,
    addFollowers,
    removeFollowers,
} = require("../controllers/user")
const authentacion = require('../middlewares/authentacion')

router.post("/requster", requster)
router.get("/getMyAndFriendPosts", authentacion, getMyAndFriendPosts)
router.get("/getUser/:id", getUser)
router.get("/getSuggrest", authentacion, getSuggrest)
router.put("/updateUser", authentacion, updateUser)
router.put("/addFriend/:id", authentacion, addFriend)
router.put("/removeFriend/:id", authentacion, removeFriend)
router.put("/acceptFriend/:id", authentacion, acceptFriend)
router.put("/cansleFriend/:id", authentacion, cansleFriend)
router.put("/addFollowers/:id", authentacion, addFollowers)
router.put("/removeFollowers/:id", authentacion, removeFollowers)

module.exports = router

