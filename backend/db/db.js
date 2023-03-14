const mongoose = require("mongoose");
require("dotenv").config();
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// connecting mongoose
mongoose.connect(process.env.MONGODB_PASSWORD, options).then(
    () => {
        console.log("DB Ready To Use");
    },
    (err) => {
        console.log(err);
    }
);
