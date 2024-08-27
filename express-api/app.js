const express = require("express");
const multer = require("multer"); // Form-data icin
const app = express();
const router = express.Router();
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

router.get("/users-list", (req, res) => {
  res.status(200).json(data);
});

router.post("/users-create", upload.none(), (req, res) => {
  const body = req.body;
  console.log(body);
  data.push(body);
  res.status(201).json({ data: body, message: "Basariyla Olustu!" });
});

router.delete("/users-delete/:userID", (req, res) => {
  const userID = req.params.userID;
  data.filter((user) => {
    return user.id !== userID;
  });
  res.status(200).json(data);
});

router.put("users-update/:userID", (req, res) => {
  const body = req.body;
  console.log(body);
});

app.use(router);

app.listen(port, () => {
  console.log(`Server http://localhost:${port}/ calisiyor!`);
});
