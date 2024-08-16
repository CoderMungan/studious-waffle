const router = require("express").Router();

// TODO: Burada html dosyasini render ettigimizden dolayi dosya yolunda hata alabiliriz. Cunku html dosyamiz __dirname'de bulunmamaktadir.

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

router.get("/:first/gelen/:second", (req, res) => {
  const firstParam = req.params.first;
  const secondParam = req.params.second;
  const query = req.query;

  console.log(query);

  res.json({
    first: firstParam,
    second: secondParam,
    gelenFirstquery: query.max,
    gelenSecondquery: query.min,
    message: "basarili",
  });
});

// 404 icin

router.use((req, res) => {
  const currentDate = new Date().toLocaleString("tr-TR");

  res.status(404).json({
    message: "siktir lo",
    request: req.url,
    date: currentDate,
    status: "404",
  });
});

// Eger router ile uygulama calistirilacaksa bunu use ile kullanmaliyiz!

module.exports = router;
