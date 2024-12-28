const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.json("Hello from the server side...");
});
app.use(express.json());

module.exports = app;