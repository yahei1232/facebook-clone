const mongoose = require("mongoose");

const post = new mongoose.Schema(
    {
        descriptn: { type: String },
        photo: { type: String },
        likes: { type: Array },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        commentId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", post);
