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
        const user = await userModle.findById(req.params.id)
            .populate({
                path: 'posts',
                populate: {
                    path: 'commentId',
                    populate: {
                        path: 'userId',
                        model: 'User'
                    }
                }
            })
            .populate('friends');
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSuggrest = async (req, res) => {
    let userId = req.token.userId;
    try {
        const users = await userModle.find({ _id: { $ne: userId } }).limit(8);
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateUser = async (req, res) => {
    let userId = req.token.userId;
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateUser = await userModle.findByIdAndUpdate(userId, {
                $set: req.body,
            }, { new: true })
            res.status(200).json(updateUser)
        } catch (error) {
            res.status(500).json(err);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const addFriend = async (req, res) => {
    let userId = req.token.userId;
    let personId = req.params.id;

    const { watingaccept } = await userModle.findById(userId);
    const { panding } = await userModle.findById(personId);

    if (
        userId !== personId &&
        watingaccept.includes(personId) === false &&
        panding.includes(userId) === false
    ) {
        try {
            const updateWation = await userModle.findByIdAndUpdate(
                userId,
                { watingaccept: personId },
                { new: true }
            );

            const updatePending = await userModle.findByIdAndUpdate(
                personId,
                { panding: userId },
                { new: true }
            );
            res.status(200).json("done");
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        return res.status(404).json({
            success: false,
            message: `you cant follow yourself`,
        });
    }
};

const removeFriend = async (req, res) => {
    let userId = req.token.userId;
    let personId = req.params.id;

    const { watingaccept } = await userModle.findById(userId);
    const { panding } = await userModle.findById(personId);

    if (
        userId !== personId &&
        watingaccept.includes(personId) === true &&
        panding.includes(userId) === true
    ) {
        try {
            await userModle.updateOne(
                { userId },
                { $pull: { watingaccept: personId } }
            );

            await userModle.updateOne(
                { panding },
                { $pull: { panding: userId } }
            );
            res.status(200).json("done");
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        return res.status(404).json({
            success: false,
            message: `you cant unfollow yourself`,
        });
    }
};

const acceptFriend = async (req, res) => {
    let userId = req.token.userId;
    let personId = req.params.id;

    const { panding } = await userModle.findById(userId);
    const { watingaccept } = await userModle.findById(personId);

    if (
        userId !== personId &&
        watingaccept.includes(userId) === true &&
        panding.includes(personId) === true
    ) {
        try {
            await userModle.findByIdAndUpdate(
                userId,
                { $pull: { panding: personId } }
            );

            await userModle.findByIdAndUpdate(
                panding,
                { $pull: { watingaccept: userId } }
            );

            const nnn = await userModle.findByIdAndUpdate(
                userId,
                { friends: personId },
                { new: true }
            );

            await userModle.findByIdAndUpdate(
                personId,
                { friends: userId },
                { new: true }
            );


            res.status(200).json(nnn);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        return res.status(404).json({
            success: false,
            message: `you cant unfollow yourself`,
        });
    }
};

module.exports = {
    requster,
    getMyAndFriendPosts,
    getUser,
    getSuggrest,
    updateUser,
    addFriend,
    removeFriend,
    acceptFriend,
};