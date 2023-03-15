const mongoose = require("mongoose");

const user = new mongoose.Schema(
    {
        name: { type: String },
        surname: { type: String },
        password: { type: String },
        email: { type: String },
        gander: { type: String },
        city: { type: String },
        birthday: { type: Date },

        posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
        comments: { type: Array },

        photo: { type: String, default: "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" },
        cover: { type: String },

        friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        panding: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        watingaccept: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },

);

module.exports = mongoose.model("User", user);
