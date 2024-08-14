const express = require("express");
const app = express();
const port = 5432;

app.use("/halil", express.static(__dirname + "/assets"));

console.log(__dirname + "assets");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Burada response olarak html file donduruyoruz!
app.get("/send-file", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Redirect ediyoruz.
app.get("/test", (req, res) => {
  res.redirect("/");
});

// Json yontemi ile donduruyoruz
app.get("/send-json", (req, res) => {
  const sendJson = [
    { id: 1, name: "halil" },
    { id: 2, name: "melih" },
    { id: 3, name: "omer" },
  ];

  res.status(201).json(sendJson);
});

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}/`);
});
