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

module.exports = {
    requster
};
