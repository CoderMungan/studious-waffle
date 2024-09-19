import express, { Router } from "express";
import fileController from "../controller/fileController";
const fileRouter: Router = express.Router();

fileRouter.post("/upload", fileController.fileController);

export default fileRouter;
