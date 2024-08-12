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

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}/`);
});
