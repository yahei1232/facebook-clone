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
        const user = await userModle.findById(userId).populate({
            path: "posts",
            populate: [
                {
                    path: "userId",
                    model: "User",
                },
                {
                    path: "commentId",
                    populate: {
                        path: "userId",
                        model: "User",
                    },
                },
            ],
        });

        const followers = await userModle
            .findById(userId)
            .populate({
                path: "followers",
                populate: {
                    path: "posts",
                    populate: [
                        {
                            path: "userId",
                            model: "User",
                        },
                        {
                            path: "commentId",
                            populate: {
                                path: "userId",
                                model: "User",
                            },
                        },
                    ],
                },
            });

        const result = {
            user,
            followers,
        };

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};
const getUser = async (req, res) => {
    try {
        await userModle
            .findById(req.params.id)
            .sort({ createdAt: -1 })
            .populate('friends')
            .populate({ path: "posts" })
            .exec(async (err, result1) => {
                await userModle.populate(
                    result1,
                    "posts.commentId posts.userId",
                    async (err, result2) => {
                        await userModle.populate(
                            result2,
                            "posts.commentId.userId",
                            (err, result3) => {
                                res.status(200).json(result3);
                            }
                        );
                    }
                );
            });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    requster,
    getMyAndFriendPosts,
    getUser
};