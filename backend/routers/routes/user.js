const router = require("express").Router()
const {
    requster,
    getMyAndFriendPosts,
    getUser,
    getSuggrest,
    updateUser,
    addFriend,
} = require("../controllers/user")
const authentacion = require('../middlewares/authentacion')

router.post("/requster", requster)
router.get("/getMyAndFriendPosts", authentacion, getMyAndFriendPosts)
router.get("/getUser/:id", getUser)
router.get("/getSuggrest", authentacion, getSuggrest)
router.put("/updateUser", authentacion, updateUser)
router.put("/addFriend/:id", authentacion, addFriend)  //http://localhost:5000/user/addFriend/:id

module.exports = router

