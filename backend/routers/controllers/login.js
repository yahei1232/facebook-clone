const userModle = require("../../db/model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
    const password = req.body.password;
    const email = req.body.email.toLowerCase();
    userModle
        .findOne({ email })
        .then(async (result) => {
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: `The email doesn't exist`,
                });
            }
            try {
                const valid = await bcrypt.compare(password, result.password);
                if (!valid) {
                    return res.status(403).json({
                        success: false,
                        message: `The password you’ve entered is incorrect`,
                    });
                }
                const dataUser = {
                    userId: result._id,
                };

                const infoUser = {
                    userId: result,
                };

                const options = {
                    expiresIn: "3600m",
                };

                const token = await jwt.sign(dataUser, process.env.SIGNPASS, options);
                res.status(200).json({
                    success: true,
                    message: `Email and Password are correct`,
                    usserInfo: dataUser,
                    userInfo: infoUser,
                    token: token,
                });
            } catch (error) {
                throw new Error(error.message);
            }
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: `Server Error`,
                err: err,
            });
        });
};

module.exports = { login }