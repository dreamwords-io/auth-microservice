const express = require("express");
require("dotenv").config();

const { PORT } = process.env;

const app = express();

app.get("/auth", (req, res) => {
    res.json({
        token: "test"
    });
});

app.listen(PORT);