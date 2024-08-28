const express = require("express");
const mainController = require("../controller/mainController");
const router = express.Router();

router.get("/users-list", mainController.userList);
router.post("/users-create", mainController.userCreate);
router.delete("/users-delete/:userID", mainController.userDelete);
router.put("/users-update/:userID", mainController.userUpdate);

module.exports = router;
