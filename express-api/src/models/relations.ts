import UserModel from "./userModel";
import Company from "./companyModel";

export default function associate() {
  UserModel.belongsTo(Company, { foreignKey: "companyId", as: "company" });
  Company.hasMany(UserModel, { foreignKey: "companyId", as: "users" });
}