// src/controller/mainController.ts
import { Request, Response } from "express";
import { User } from "../interfaces";
import UserModel from "../models/userModel";
import Company from "../models/companyModel";

const userList = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await UserModel.findAll({
      include: [{ model: Company, as: "company" }], // to_representation olarak dusun Company modelini aciyor.
    });

    const plainUser = users.map((user) =>
      user.get({
        plain: true, // okunabilir bir Javascript objesine cevirir.
      }),
    );

    return res.status(200).json(plainUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const userCreate = (req: Request, res: Response): void => {
  const body = req.body;
  console.log(body);
  res.status(201).json({ data: body, message: "User Successfully Created!" });
};

const userDelete = (req: Request, res: Response): void => {
  const userID: number = Number(req.params.userID);
  console.log(userID);
  res.status(200).json({ message: `User with ID ${userID} deleted.` });
};

const userUpdate = (req: Request, res: Response): void => {
  const userID: number = Number(req.params.userID);
  console.log(userID);
  res.status(200).json({ message: `User with ID ${userID} updated.` });
};

export default { userList, userCreate, userDelete, userUpdate };
