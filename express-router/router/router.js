import express from "express";
import controller from "../controller/controller.js";
import userController from "../controller/userController.js";
const router = express.Router();
// TODO: Burada html dosyasini render ettigimizden dolayi dosya yolunda hata alabiliriz. Cunku html dosyamiz __dirname'de bulunmamaktadir.

router.get("/main", controller.forMain);
router.get("/params", controller.forParams);
router.post("/", controller.forPost);
router.put("/", controller.forPut);
router.delete("/", controller.forDelete);
router.get("/:first/gelen/:second", controller.paramsQuery);
router.get("/users", userController.forUser);
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

export default router;
