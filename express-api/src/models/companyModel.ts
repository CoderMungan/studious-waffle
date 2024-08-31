import { Model, DataTypes } from "sequelize";
import sequlize from "../database/db";
import UserModel from "./userModel";
import { Company } from "../interfaces";

const Company = sequlize.define<Model<Company>>(
  "Company",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { tableName: "companies" },
);

Company.hasMany(UserModel, { foreignKey: "companyId", as: "users" });

export default Company;
