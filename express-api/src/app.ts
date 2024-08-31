// src/app.ts
import { Application } from "express";
import express from "express";
import multer from "multer";
import mainRouter from "./router/mainRouter";
import dotenv from "dotenv";
import sequelize from "./database/db";

// dotenv calismasi icin
dotenv.config();

const app: Application = express();
const port = process.env.PORT;

// Multer middleware'i form-data için
const upload = multer();

// Gelen datayı anlaması için
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router'ı kullanıma alıyoruz
app.use(mainRouter);

// Sunucuyu başlatıyoruz

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log("Database'e baglanildi!");
    app.listen(port, () => {
      console.log(`Server http://localhost:${port}/ calisiyor!`);
    });
  } catch (error) {
    console.error("Database'e baglanilamadi!");
  }
};

startServer();
