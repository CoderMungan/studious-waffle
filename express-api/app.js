const express = require("express");
const multer = require("multer"); // Form-data icin
const app = express();
const router = require("./router/mainRouter");
const port = 3001;

const upload = multer(); // Middleware multer icin

// Gelen Datayi Anlamasi Icin
app.use(express.json()); // Gelen raw icerisindeki json formatini tanir
app.use(express.urlencoded({ extended: true })); // form-data ve x-www-form-urlencoded verilerini işler

const data = [
  { id: 1, name: "Halil", lastname: "MUNGAN" },
  { id: 2, name: "Fatmanur", lastname: "MUNGAN" },
  { id: 3, name: "Aydincan", lastname: "CEBI" },
];

app.use(router);

app.listen(port, () => {
  console.log(`Server http://localhost:${port}/ calisiyor!`);
});
