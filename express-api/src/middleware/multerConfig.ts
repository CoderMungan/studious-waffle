import multer, { FileFilterCallback } from "multer";
import path from "path";
import { Request } from "express";

// Depolama yapılandırması
const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void,
  ): void => {
    cb(null, "uploads/"); // Dosyaların yükleneceği klasör
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void,
  ): void => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

// Dosya türü doğrulama (opsiyonel)
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
): void => {
  const allowedTypes = /jpeg|jpg|png|pdf/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase(),
  );

  if (extname) {
    cb(null, true);
  } else {
    cb(new Error("Hatalı dosya formatı!"));
  }
};

// Tekil dosya yükleme middleware
export const uploadSingle = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
}).single("file");

// Çoklu dosya yükleme middleware
export const uploadMultiple = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
}).array("files", 10); // En fazla 10 dosya
