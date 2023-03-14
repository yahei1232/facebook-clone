const express = require("express");
const cors = require('cors');

require("./db/db")

const app = express();
app.use(cors())
app.use(express.json());

const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
