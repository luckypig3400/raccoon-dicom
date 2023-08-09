const mongodb = require("./models/mongodb/index");
const express = require("express");
const { createServer } = require("http");
const app = express();
app.use(express.static('public'));
module.exports.app = app;
module.exports.server = createServer(app);
