var path = require("path");

var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        var difference = 40;
        var matchName = "";
        var matchPhoto = "";
        friends.forEach(function(friend) {
            var matchedScores = [];
            var totalDifference = 40;
            function add(a, b) {
                return a + b;
            }
            for (var i = 0; i < friend.scores.length; i++) {
                matchedScores.push(Math.abs(parseInt(req.body.scores[i])) - parseInt(friend.scores[i]));
            }
            totalDifference = matchedScores.reduce(add, 0);
            if (totalDifference < difference) {
                difference = totalDifference;
                matchName = friend.name;
                matchPhoto = friend.photo;
            }
        });
        res.json({
            name: matchName,
            photo: matchPhoto
        });
        friends.push(req.body);
    });
};