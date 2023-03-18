const conversationModle = require("../../db/model/conversation")

const createNewConversation = async (req, res) => {
    const newConversation = new conversationModle({
        members: [req.body.senderId, req.body.receiverId],
    });

    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { createNewConversation }