var express = require("express");

var app = express();

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});