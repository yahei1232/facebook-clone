const commentModle = require("../../db/model/comment")
const postModel = require("../../db/model/post");

const createNewComment = async (req, res) => {
    let userId = req.token.userId;
    const { comment } = req.body;
    const id = req.params.id;
    const newComment = await new commentModle({
        comment,
        userId,
    });

    await newComment
        .save()
        .then((result) => {
            postModel
                .findByIdAndUpdate(id, { $push: { commentId: result._id } })
                .then((done) => {
                    res.status(201).json({
                        success: true,
                        message: `The new comment added`,
                        comment: result,
                    });
                })
                .catch((err) => {
                    throw Error;
                });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: `Server Error`,
            });
        });
};

module.exports = {
    createNewComment
};