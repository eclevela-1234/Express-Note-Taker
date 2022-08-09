const fs = require("fs");
const path = require("path")
const express = require('express');
const app = express();
const data = require('./db/db.json');

app.get('/api/notes', (req, res) => {
    res.json(data);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });