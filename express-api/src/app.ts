// src/app.ts
import { Application } from "express";
import express from "express";
import multer from "multer";
import mainRouter from "./router/mainRouter";
import dotenv from "dotenv";
import sequelize from "./database/db";
import associate from "./models/relations";
//Swagger icin
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerOptions from "./swaggerDef";

// dotenv calismasi icin
dotenv.config();

const app: Application = express();
const port = process.env.PORT;

// Multer middleware'i form-data için
const upload = multer();

// Swagger JSDoc Entegrasyonu
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger UI Entegrasyonu
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Gelen datayı anlaması için
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router'ı kullanıma alıyoruz
app.use("api/v1/", mainRouter);

// Sunucuyu başlatıyoruz

const startServer = async () => {
  try {
    await sequelize.sync();
    associate();
    console.log("Database'e baglanildi!");
    app.listen(port, () => {
      console.log(`Server http://localhost:${port}/ calisiyor!`);
      console.log(`Swagger http://localhost:${port}/api-docs calisiyor!`);
    });
  } catch (error) {
    console.error("Database'e baglanilamadi!");
  }
};

startServer();
