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

const likePost = async (req, res) => {
    try {
        const post = await postModle.findById(req.params.id);
        if (!post.likes.includes(req.token.userId)) {
            let result = await post.updateOne({ $push: { likes: req.token.userId } });
            res.status(200).json(result);
        } else {
            await post.updateOne({ $pull: { likes: req.token.userId } });
            res.status(200).json("The post has been disliked");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    createPost,
    likePost,
}