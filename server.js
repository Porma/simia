const express = require("express");
const bodyParser = require('body-parser');

const fs = require('fs');
const path = require("path");

const config = require("./config");

let db = require('./database')

const app = express();
const port = config.app.port;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Statically serve frontend files
app.use(express.static("app"));

// Tasks API
// app.get('/api/tasks', (req, res) => {
//   res.send('task responding');
// });

// app.post('/api/tasks', (req, res) => {
//   console.log(req.body);

  

//   res.send("Task added");
// });

app.use('/api/tasks', require('./routes/tasks'));

app.listen(port, () => {
  console.log(`Simia listening on port ${port}`);
});
