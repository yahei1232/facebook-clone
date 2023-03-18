const Message = require("../../db/model/message");

const createNewMessage = async (req, res) => {

    const newMessage = new Message(req.body);

    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
};


module.exports = { createNewMessage }
