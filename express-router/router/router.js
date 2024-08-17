const router = require("express").Router();
const controller = require("../controller/controller");
// TODO: Burada html dosyasini render ettigimizden dolayi dosya yolunda hata alabiliriz. Cunku html dosyamiz __dirname'de bulunmamaktadir.

router.get("/", controller.forMain);
router.post("/", controller.forPost);
router.put("/", controller.forPut);
router.delete("/", controller.forDelete);
router.get("/:first/gelen/:second", controller.paramsQuery);

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
