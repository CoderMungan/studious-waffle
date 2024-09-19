import aws from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

// AWS S3 yapılandırması
aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // .env dosyasındaki secret key
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // .env dosyasındaki access key
  region: process.env.AWS_REGION, // S3 bucket'ın bölgesi
});

// S3 nesnesini dışa aktar
const s3 = new aws.S3();

// Port
const port: number = Number(process.env.port || 3000);

const baseUri: string = "http://localhost:3000";

export { s3, port, baseUri };
