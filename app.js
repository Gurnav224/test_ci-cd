// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, CI/CD!");
});

app.get('/hello', (req, res) => {
    res.send('hello')
})

module.exports = app;
