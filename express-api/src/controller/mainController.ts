import { Request, Response } from "express";
import { User } from "../interfaces";
import UserModel from "../models/userModel";
import Company from "../models/companyModel";
/*

class UserController {
  public async userList(req: Request, res: Response) {
    // Tüm kullanıcıları listele
  }

  public async userCreate(req: Request, res: Response) {
    // Yeni kullanıcı oluştur
  }

  public async userDelete(req: Request, res: Response) {
    // Kullanıcıyı sil
  }

  public async userUpdate(req: Request, res: Response) {
    // Kullanıcıyı güncelle
  }
}

export default new UserController();

*/

const userList = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await UserModel.findAll({
      include: [{ model: Company, as: "company" }], // to_representation olarak dusun
    });

    const plainUser: User[] = users.map((user) =>
      user.get({
        plain: true,
      }),
    );
    // Eger ki daha kisa yazmak istiyorsan,
    // const plainUser = users.map((user) => user.toJSON());

    return res.status(200).json(plainUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const userCreate = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, email, password, companyId, isAdmin } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const userCreate = await UserModel.create({
      username,
      email,
      password,
      companyId: companyId || null,
      isAdmin: isAdmin || false,
    });
    const plainUser: User = userCreate.get({ plain: true });
    return res
      .status(201)
      .json({ message: "User Successfully Created!", data: plainUser });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const userDelete = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userID = Number(req.params.userID);
    const user = await UserModel.findByPk(userID);
    if (user) {
      await user.destroy();
      return res
        .status(200)
        .json({ message: "User Successfully Deleted!", data: user });
    } else {
      return res.status(404).json({ message: "User not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const userUpdate = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userID: number = Number(req.params.userID);
    const { username, email, password, companyId, isAdmin } = req.body;
    if (userID) {
      const user = await UserModel.findByPk(userID);
      if (user) {
        const updatedUser = await user.update({
          username: username || user.getDataValue("username"),
          email: email || user.getDataValue("email"),
          password: password || user.getDataValue("password"),
          companyId: companyId || null,
          isAdmin: isAdmin || false,
        });
        return res
          .status(200)
          .json({ message: "User Successfully Updated!", data: updatedUser });
      } else {
        return res.status(404).json({ message: "User not found!" });
      }
    }
    return res.status(400).json({ message: "User ID is required!" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default {
  userList,
  userCreate,
  userDelete,
  userUpdate,
};
