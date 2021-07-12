const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about.html", function (req, res) {
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact.html", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Successfully Running on server 3000 !");
});
