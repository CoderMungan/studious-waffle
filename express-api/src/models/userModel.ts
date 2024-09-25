import { Model, DataTypes } from "sequelize";
import sequelize from "../database/db";
import { User } from "../typing/interfaces";

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
    allowNull: true,
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: "companies",
      key: "id",
    },
    allowNull: true,
    unique: true,
  },
});

export default UserModel;
