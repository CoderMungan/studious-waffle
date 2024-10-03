import { Sequelize } from "sequelize";
import sequelize from "../database/db";
import UserModel from "./userModel";
import Company from "./companyModel";
import associate from "./relations";

// Modellerin dizisini döndür
const models = {
  UserModel,
  Company,
};

// İlişkileri ayarla
associate();

// Sequelize'yi ve modelleri dışa aktar
export { sequelize };
export default models;
