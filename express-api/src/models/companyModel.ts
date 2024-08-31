import { Model, DataTypes } from "sequelize";
import sequelize from "../database/db";
import { CompanyInterface } from "../interfaces";

const Company = sequelize.define<Model<CompanyInterface>>(
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

export default Company;
