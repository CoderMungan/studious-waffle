import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import path from "path";
import { Request } from "express";
import { s3 } from "../config/config";

export const uploadSingleS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: "your-s3-bucket-name",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (
      req: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, filename: string) => void,
    ): void => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const fileName =
        file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname);
      cb(null, fileName);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 10 }, // 10MB dosya boyutu limiti
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback,
  ) => {
    // Dosya uzantısını al
    const fileTypes = /jpeg|jpg|png|pdf/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase(), // extname ile uzantını kontrol et
    );

    // Dosyanın mime türünü kontrol et! Mimetype: image/jpeg & application/pdf tipini belirtir.
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
      cb(null, true); // Dosya türü uygun, devam et
    } else {
      cb(
        new Error(
          "Yalnızca jpeg, jpg, png ve pdf formatında dosyalar yüklenebilir!",
        ),
      ); // Uygun olmayan dosya tipi
    }
  },
}).single("file"); // Tekil dosya yükleme için

// Coklu Dosya Yuklemek Icin

export const uploadMultipleS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: "your-s3-bucket-name",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (
      req: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, filename: string) => void,
    ): void => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const fileName =
        file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname);
      cb(null, fileName);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB dosya boyutu limiti
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback,
  ) => {
    const fileTypes = /jpeg|jpg|png|pdf/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype && extname) {
      cb(null, true); // Uygun dosya
    } else {
      cb(
        new Error(
          "Yalnızca jpeg, jpg, png ve pdf formatında dosyalar yüklenebilir!",
        ),
      ); // Uygun olmayan dosya
    }
  },
}).array("files", 10); // Çoklu dosya yükleme için
