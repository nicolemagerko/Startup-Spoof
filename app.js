//BACKEND

var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("You made it to the main page");
});

app.listen(3000, function () {
    console.log("Serving HTTP on port 3000");
});
