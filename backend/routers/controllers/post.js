const postModle = require("../../db/model/post")
const userModle = require("../../db/model/user")

let createPost = async (req, res) => {
    let userId = req.token.userId
    await userModle.findById(userId);

    const newPost = new postModle({ ...req.body, userId })

    await userModle.findByIdAndUpdate(userId, { $push: { posts: newPost.id } })
    await newPost.save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).json(err)
        })
}

module.exports = { createPost }