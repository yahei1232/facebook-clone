const mongoose = require("mongoose");

const comment = new mongoose.Schema(
    {
        comment: { type: String },
        likes: { type: Array },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", comment);