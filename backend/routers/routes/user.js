const router = require("express").Router()
const {
    requster
} = require("../controllers/user")


router.post("/requster", requster)

module.exports = router

