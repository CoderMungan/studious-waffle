const express = require("express");
const app = express();
const router = express.Router();
const port = 54321;

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.post("/", (req, res) => {
  res.json({ message: "basarili bir sekilde olusturuldu" }).status(201);
});

router.put("/", (req, res) => {
  res.json({ message: "basarili bir sekilde guncellendi" }).status(200);
});

router.delete("/", (req, res) => {
  res.json({ message: "basarili bir sekilde silindi" });
});

// Eger router ile uygulama calistirilacaksa bunu use ile kullanmaliyiz!
app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port} calismaktadir!`);
});
