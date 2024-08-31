// src/router/mainRouter.ts
import express, {Router} from "express";
import mainController from "../controller/mainController";

const mainRouter:Router = express.Router();

mainRouter.get("/users-list", mainController.userList);
mainRouter.post("/users-create", mainController.userCreate);
mainRouter.delete("/users-delete/:userID", mainController.userDelete);
mainRouter.put("/users-update/:userID", mainController.userUpdate);

export default mainRouter;
