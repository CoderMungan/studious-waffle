import aws from "aws-sdk";
import dotenv from "dotenv";
import { Config } from "../typing/interfaces";
import { Dialect } from "sequelize";
dotenv.config();

// AWS S3 yapılandırması
aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // .env dosyasındaki secret key
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // .env dosyasındaki access key
  region: process.env.AWS_REGION, // S3 bucket'ın bölgesi
});

const config: Config = {
  database: {
    development: {
      username: "root",
      password: "root",
      database: "database_development",
      host: "127.0.0.1",
      dialect: "sqlite",
    },
    test: {
      username: "root",
      password: "root",
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mysql",
    },
    production: {
      username: "root",
      password: "root",
      database: "database_production",
      host: "127.0.0.1",
      dialect: "mysql",
    },
  },
  s3: new aws.S3(),
  express: {
    baseUri: process.env.BASE_URI || "http://localhost:3000",
    port: Number(process.env.PORT) || 3000,
    apiPrefix: process.env.API_PREFIX || "/api/v1/",
  },
  cors: {
    disable: process.env.CORS_DISABLE === "true",
    origin: process.env.CORS_ORIGIN || "",
    credentials: process.env.CORS_CREDENTIALS === "true",
  },
  bucketName: process.env.AWS_STORAGE_BUCKET_NAME || "",
  isDev: process.env.NODE_ENV === "dev",
  isProd: process.env.NODE_ENV === "production",
};

export default config;
