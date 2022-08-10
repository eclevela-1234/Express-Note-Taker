const fs = require("fs");
const path = require("path")
const express = require('express');
const app = express();
const data = require('./db/db.json');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/notes', (req, res) => {
    res.json(data);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});

app.post("/api/notes", (req, res) => {
    data.push(req.body);
    for (i=0; i<data.length; i++) {
        data[i].id = i;
    }
    fs.writeFileSync(
        path.join(__dirname, '/db/db.json'),
        JSON.stringify(data, null, 2)
      );
    res.json(data);

})



app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });