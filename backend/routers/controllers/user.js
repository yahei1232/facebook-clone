const userModle = require("../../db/model/user");
const bcrypt = require("bcryptjs");

const requster = async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new userModle({ ...req.body, password: hashedPassword });

    await newUser
        .save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

const getMyAndFriendPosts = async (req, res) => {
    let userId = req.token.userId;
    try {
        await userModle
            .findById(userId)
            .sort({ createdAt: -1 })
            .populate({ path: "posts followers" })
            .exec(async (err, result1) => {
                await userModle.populate(
                    result1,
                    "posts.commentId posts.userId followers.posts",
                    async (err, result2) => {
                        await userModle.populate(
                            result2,
                            "posts.commentId.userId followers.posts.userId followers.posts.commentId",
                            async (err, result3) => {
                                await userModle.populate(
                                    result3,
                                    "followers.posts.commentId.userId",
                                    (err, result4) => {
                                        res.status(200).json(result4);
                                    }
                                )
                            }
                        );
                    }
                );
            });
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    requster,
    getMyAndFriendPosts
};