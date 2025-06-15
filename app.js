// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, CI/CD!");
});

app.get('/hello', (req, res) => {
    res.send('hello')
})

app.get("/users", (req, res) => {
  res.json({ name: "Gurnav", role: "Developer" });
});

app.post("/users", (req, res) => {
  res.status(201).json({ message: "User created" });
});

module.exports = app;
