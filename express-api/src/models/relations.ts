import UserModel from "./userModel";
import Company from "./companyModel";

export default function associate() {
  // UserModel belongs to Company
  UserModel.belongsTo(Company, { foreignKey: "companyId", as: "company" });

  // Company has many users
  Company.hasMany(UserModel, { foreignKey: "companyId", as: "users" });
}

