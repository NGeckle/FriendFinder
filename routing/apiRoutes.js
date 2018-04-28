var path = require("path");

var friends = require("../app/data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        if (friends.data < 5) {
            friends.push(req.body);
            res.json(true);
        } 
    });
};