import { Model, DataTypes } from "sequelize";
import sequelize from "../database/db";
import Company from "./companyModel";
import { User } from "../interfaces";

const UserModel = sequelize.define<Model<User>>("UserModel", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: "companies",
      key: "id",
    },
    unique: true,
  },
});

UserModel.belongsTo(Company, { foreignKey: "companyId", as: "company" });

export default UserModel;
