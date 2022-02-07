const express = require("express");
const path = require("path");

const config = require("./config");

const app = express();
const port = config.app.port;

// Statically serve frontend files
app.use(express.static("app"));

app.listen(port, () => {
  console.log(`Simia listening on port ${port}`);
});
